function initFAQ() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    // Garante que o max-height inicial é 0
    answer.style.maxHeight = "0px";

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      items.forEach((i) => {
        i.classList.remove("active");
        const ans = i.querySelector(".faq-answer");
        ans.style.maxHeight = "0px";
      });

      if (!isOpen) {
        item.classList.add("active");
        // Usa scrollHeight para animar até a altura real
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}
