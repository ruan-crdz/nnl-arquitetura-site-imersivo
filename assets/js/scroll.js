function initScrollReveal() {
  const sections = document.querySelectorAll(".section");
  const processTrack = document.querySelector(".process-track");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up", "visible");

          if (entry.target.contains(processTrack)) {
            processTrack.classList.add("active");
          }
        }
      });
    },
    { threshold: 0.25 }
  );

  sections.forEach((section) => observer.observe(section));
}
