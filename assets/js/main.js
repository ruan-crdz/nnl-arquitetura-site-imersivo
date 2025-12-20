document.addEventListener("DOMContentLoaded", () => {
  initFAQ();
  initSpotlight();
  initCounters();
  initTiltCards();
  initScrollReveal();
  initQuiz();

  document.getElementById("year").textContent = new Date().getFullYear();
});
