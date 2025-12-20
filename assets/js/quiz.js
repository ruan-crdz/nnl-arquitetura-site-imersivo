function initQuiz() {
  const steps = document.querySelectorAll(".quiz-step");
  const buttons = document.querySelectorAll(".quiz-options button");
  const progress = document.querySelector(".quiz-bar");

  let currentStep = 0;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      steps[currentStep].classList.remove("active");
      currentStep++;
      steps[currentStep].classList.add("active");
      progress.style.width = `${(currentStep + 1) * 33}%`;
    });
  });
}
