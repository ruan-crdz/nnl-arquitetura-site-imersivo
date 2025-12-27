// Navegação por seções: sempre "encaixa" na seção mais próxima ao rolar
// Adiciona scroll snap e navegação por seta para cima

// Suaviza a transição entre seções usando scroll mais lento e snap
function enableSectionSnap() {
  const sections = document.querySelectorAll('.section');
  const html = document.documentElement;
  html.style.scrollSnapType = 'y mandatory';
  html.style.scrollBehavior = 'smooth';
  sections.forEach(section => {
    section.style.scrollSnapAlign = 'start';
    section.style.scrollSnapStop = 'always';
  });

  // Snap só ao soltar o scroll, não bloqueia o scroll padrão
  let isScrolling;
  let isUserInteracting = false;

  // Detecta início e fim de interação do usuário
  function setInteractingTrue() { isUserInteracting = true; }
  function setInteractingFalse() { isUserInteracting = false; }
  window.addEventListener('mousedown', setInteractingTrue);
  window.addEventListener('mouseup', setInteractingFalse);
  window.addEventListener('touchstart', setInteractingTrue);
  window.addEventListener('touchend', setInteractingFalse);

  window.addEventListener('scroll', function () {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      // Só faz snap se o usuário NÃO estiver interagindo e se o scroll parou por pelo menos 500ms
      if (!isUserInteracting) {
        const sectionsArr = Array.from(sections);
        const scrollY = window.scrollY;
        let closest = sectionsArr[0];
        let minDist = Math.abs(closest.offsetTop - scrollY);
        sectionsArr.forEach(section => {
          const dist = Math.abs(section.offsetTop - scrollY);
          if (dist < minDist) {
            closest = section;
            minDist = dist;
          }
        });
        // Só faz snap se não estiver já "encaixado"
        if (minDist > 10) {
          closest.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 500); // delay maior para evitar snap automático ao rolar devagar
  }, { passive: true });
}
document.addEventListener('DOMContentLoaded', enableSectionSnap);
