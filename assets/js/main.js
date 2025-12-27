document.addEventListener("DOMContentLoaded", () => {
  initFAQ();
  initSpotlight();
  initCounters();
  initTiltCards();
  initScrollReveal();
  initQuiz();

  document.getElementById("year").textContent = new Date().getFullYear();
});

// Função para mostrar a seta só após o scroll da primeira section
const logoFixed = document.querySelector(".logo-fixed");
const heroSection = document.getElementById("hero");
function checkLogoScrolled() {
  const heroBottom = heroSection.getBoundingClientRect().bottom;
  if (heroBottom <= 0) {
    logoFixed.classList.add("scrolled");
  } else {
    logoFixed.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", checkLogoScrolled);
// Clique: scroll suave para o topo só se .scrolled
logoFixed.addEventListener("click", function (e) {
  if (logoFixed.classList.contains("scrolled")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    e.preventDefault();
    e.stopPropagation();
  }
});
// Inicializa estado correto ao carregar
checkLogoScrolled();
