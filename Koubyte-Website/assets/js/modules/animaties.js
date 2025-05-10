/**
 * Animaties Module
 * Beheert alle animaties en visuele effecten
 */

function initAnimaties() {
  // Animeer elementen bij scrollen
  initOnthulAnimaties();
  
  // Animeer counter/statistieken
  initTellerAnimaties();
  
  // Type writer effect (indien gebruikt)
  initTypeMachine();
}

/**
 * Animeer elementen wanneer ze in beeld komen
 */
function initOnthulAnimaties() {
  const revealElements = document.querySelectorAll(
    '.reveal-slide-up, .reveal-slide-down, .reveal-slide-left, ' +
    '.reveal-slide-right, .reveal-fade-in, .reveal-scale'
  );
  
  if (revealElements.length === 0) return;
  
  const onthulBijScrollen = function() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      }
    }
  };
  
  // Voer één keer uit bij laden
  onthulBijScrollen();
  
  // Voer uit bij scrollen
  window.addEventListener('scroll', onthulBijScrollen);
}

/**
 * Animeer statistieken counters
 */
function initTellerAnimaties() {
  const stats = document.querySelectorAll('.stat-number');
  
  if (stats.length === 0) return;
  
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    const duration = 2000; // ms
    const step = target / (duration / 16); // Aanname: 60fps
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let current = 0;
          
          const updateTeller = () => {
            current += step;
            
            if (current < target) {
              stat.textContent = Math.floor(current);
              requestAnimationFrame(updateTeller);
            } else {
              stat.textContent = target;
            }
          };
          
          updateTeller();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(stat);
  });
}

/**
 * Type writer effect (indien gebruikt)
 */
function initTypeMachine() {
  const typeElements = document.querySelectorAll('.typewriter');
  
  if (typeElements.length === 0) return;
  
  typeElements.forEach(element => {
    const text = element.getAttribute('data-text');
    const speed = parseInt(element.getAttribute('data-speed') || '50');
    
    let charIndex = 0;
    element.textContent = '';
    
    function typeText() {
      if (charIndex < text.length) {
        element.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, speed);
      }
    }
    
    // Start het effect wanneer element in beeld komt
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            typeText();
          }, 500);
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(element);
  });
}