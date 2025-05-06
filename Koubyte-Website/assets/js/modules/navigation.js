/**
 * Navigation Module
 * Beheert menu, hamburger en navigatie gedrag
 */

function initNavigation() {
  // Hamburger menu functies
  initMobileMenu();
  
  // Header scroll effecten
  initHeaderScroll();
  
  // Smooth scroll voor anker links
  initSmoothScroll();
  
  // Active link markeren
  highlightCurrentPage();
}

/**
 * Initialiseer mobiel menu
 */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      // Toggle active class op hamburger
      this.classList.toggle('active');
      
      // Toggle active class op navLinks
      navLinks.classList.toggle('active');
      
      // Voorkom scrollen op body wanneer menu open is
      document.body.classList.toggle('menu-open');
    });
    
    // Sluit menu als er buiten wordt geklikt
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navLinks.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
    
    // Sluit menu als een link wordt geklikt
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
}

/**
 * Verander header bij scrollen
 */
function initHeaderScroll() {
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }
}

/**
 * Smooth scroll voor anker links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Alleen verwerken als het een interne link is
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: targetPosition - navbarHeight - 20, // Extra padding
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Markeer huidige pagina in het menu
 */
function highlightCurrentPage() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}