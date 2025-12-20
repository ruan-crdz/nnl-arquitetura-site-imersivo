function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = +el.dataset.counter;
        let current = 0;

        const step = () => {
          current += Math.ceil(target / 60);
          if (current >= target) {
            el.textContent = target;
          } else {
            el.textContent = current;
            requestAnimationFrame(step);
          }
        };

        step();
        observer.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((c) => observer.observe(c));
}
