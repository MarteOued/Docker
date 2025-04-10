
// Animation de l'apparition des sections au scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.hero-section, .about-section');
    
    const onScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    };
    
    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check
});

// Animation de transition au scroll
document.querySelectorAll('.hero-section, .about-section').forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 1s ease-out';
    section.classList.add('hidden');
});

document.addEventListener('scroll', () => {
    document.querySelectorAll('.hero-section, .about-section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.remove('hidden');
            section.style.opacity = 1;
        }
    });
});


// Js Compétences
   // Fonction pour détecter si un élément est visible dans la fenêtre
   function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Fonction pour animer les barres de progression
  function animateSkills() {
    const bars = document.querySelectorAll(".progress-bar div");

    bars.forEach(bar => {
      const targetWidth = bar.getAttribute("data-width");
      if (isInViewport(bar) && !bar.classList.contains("animated")) {
        bar.style.width = targetWidth;
        bar.classList.add("animated");
      }
    });
  }

  // Événement scroll + au chargement
  window.addEventListener("scroll", animateSkills);
  window.addEventListener("load", animateSkills);


  function scrollCarousel(direction) {
    const container = document.getElementById('projects-carousel');
    const scrollAmount = container.offsetWidth * 0.9; // 90% de la largeur visible
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  // Fonction pour gérer l'affichage du bouton
  const scrollTopBtn = window.document.querySelector(".scrollTopBtn");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
          scrollTopBtn.style.display = "flex";
      } else {
          scrollTopBtn.style.display = "none";
      }
  });

  scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
