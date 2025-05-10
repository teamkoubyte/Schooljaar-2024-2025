/**
 * Koubyte - Freelance IT Services
 * Hoofd JavaScript Bestand
 */

// Wacht tot het document volledig is geladen
document.addEventListener('DOMContentLoaded', function() {
    // Initialiseer alle functionaliteiten
    initMobieleNavigatie();
    initScrollAnimaties();
    initContactFormulieren();
    initTabWisselaar();
    initNaarBoven();
    initFaqAccordeon();
    
    // Initialiseer AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});

/**
 * Navigatie Functies
 * Beheert navigatiebalk en mobiel menu
 */
function initMobieleNavigatie() {
    const header = document.querySelector('.header');
    const menuToggle = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const body = document.body;

    // Verandert navigatie bij scrollen
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Toggle menu voor mobiel
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // Maak overlay voor menu
            if (!document.querySelector('.nav-overlay')) {
                const overlay = document.createElement('div');
                overlay.className = 'nav-overlay';
                document.body.appendChild(overlay);
            }
            
            const overlay = document.querySelector('.nav-overlay');
            if (this.classList.contains('active')) {
                overlay.classList.add('active');
            } else {
                overlay.classList.remove('active');
            }
            
            // Sluit menu bij klikken op overlay
            overlay.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                this.classList.remove('active');
            });
        });
    }

    // Sluit menu bij klikken op links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            
            const overlay = document.querySelector('.nav-overlay');
            if (overlay) {
                overlay.classList.remove('active');
            }
        });
    });
}

/**
 * Scroll Animatie Functies
 * Voegt vloeiende scroll toe en animaties bij scrollen
 */
function initScrollAnimaties() {
    // Vloeiend scrollen voor interne links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Alleen verwerken als het een ankerkoppeling is
            if (href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    // Offset voor navbar hoogte
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/**
 * Contact Formulier Functies
 * Beheert formulier validatie en verzending
 */
function initContactFormulieren() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Eenvoudige validatie
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Verwijder error class bij invullen
                    field.addEventListener('input', function() {
                        if (this.value.trim()) {
                            this.classList.remove('error');
                        }
                    });
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validatie voor email velden
            const emailFields = form.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (field.value && !emailRegex.test(field.value)) {
                    isValid = false;
                    field.classList.add('error');
                }
            });
            
            if (isValid) {
                // Hier zou het echte versturen gebeuren
                console.log('Formulier is geldig en verzonden');
                form.reset();
                
                // Toon bevestigingsbericht
                const formContainer = form.closest('.appointment-form, .newsletter-form');
                if (formContainer) {
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = 'Bedankt! Je bericht is verzonden.';
                    
                    formContainer.innerHTML = '';
                    formContainer.appendChild(successMessage);
                }
            } else {
                console.log('Formulier bevat fouten');
            }
        });
    });
}

/**
 * Tab Wisselaar Functie
 * Beheert tab wisseling voor pakket secties
 */
function initTabWisselaar() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Voeg klikgebeurtenissen toe aan alle tabknoppen
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Verwijder actieve klasse van alle knoppen
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Voeg actieve klasse toe aan huidige knop
                this.classList.add('active');
            
            // Verberg alle inhoud eerst
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.opacity = 0;
            });
            
            // Toon bijbehorende inhoud
            const tabId = this.getAttribute('data-tab');
            const activeTab = document.getElementById(tabId);
            
            if (activeTab) {
                activeTab.classList.add('active');
                
                // Vertraag het tonen van de nieuwe inhoud voor een vloeiend effect
                setTimeout(() => {
                    activeTab.style.opacity = 1;
                }, 50);
            }
        });
    });
}

/**
 * FAQ Accordeon Functie
 * Beheert het openen en sluiten van FAQ items
 */
function initFaqAccordeon() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Sluit andere items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle huidige item
            item.classList.toggle('active');
        });
    });
}

/**
 * Naar boven knop functie
 * Toont of verbergt de naar-boven knop bij scrollen
 */
function initNaarBoven() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
        } else {
                backToTopButton.classList.remove('active');
        }
    });
    
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
}

/**
 * Mouse Trailer Effect
 * Voegt een volgeffect toe aan de muiscursor
 */
function initMouseTrailer() {
    // Deze functie is uitgeschakeld omdat de mouse-trailer is verwijderd
}
