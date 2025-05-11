/**
 * Koubyte - Freelance IT Services
 * Hoofd JavaScript Bestand
 */

// Wacht tot het document volledig is geladen
document.addEventListener('DOMContentLoaded', function() {
    // Initialiseer alle functionaliteiten
    initMobieleNavigatie();
    initScrollAnimaties();
    initTabWisselaar();
    initNaarBoven();
    initFaqAccordeon();
    initTelefoonInput();
    initAnimaties();
    markerHuidigePagina();
    initStatistiekenTeller();
    initFormulieren();
    
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
    const mainNav = document.querySelector('.main-nav');
    const navList = document.getElementById('navLinks');
    const body = document.body;
    let overlay = document.querySelector('.nav-overlay');

    // Create overlay if it doesn't exist
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    // Verandert navigatie bij scrollen
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Function to close the menu
    function closeMenu() {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        body.classList.remove('menu-open');
        overlay.classList.remove('active');
        
        // Set focus back to the menu toggle for accessibility
        menuToggle.focus();
    }

    // Toggle menu voor mobiel
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default button behavior
            
            const isActive = this.classList.contains('active');
            
            // Toggle classes
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            body.classList.toggle('menu-open');
            overlay.classList.toggle('active');
            
            // Set aria-expanded for accessibility
            this.setAttribute('aria-expanded', !isActive);
        });
    }

    // Sluit menu bij klikken op overlay
    overlay.addEventListener('click', function() {
        closeMenu();
    });

    // Handle escape key to close menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuToggle.classList.contains('active')) {
            closeMenu();
        }
    });

    // Sluit menu bij klikken op links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) { // Only on mobile
                closeMenu();
                
                // Small delay to allow the click to register before menu closes
                // Only for internal links, not for links going to other pages
                const href = this.getAttribute('href');
                if (href && href.indexOf('#') === 0 && e.currentTarget.hostname === window.location.hostname) {
                    // Continue with existing smooth scroll code...
                }
            }
        });
    });

    // Close menu on window resize if it goes to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            closeMenu();
        }
    });

    // Add index to menu items for staggered animation
    document.querySelectorAll('.nav-list li').forEach((item, index) => {
        item.style.setProperty('--item-index', index);
    });
    
    // Add touchstart event for better mobile interactions
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('touchstart', function() {
            this.style.color = 'var(--primary)';
        });
        
        link.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.color = '';
            }, 300);
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
 * 
 * OPMERKING: Deze functie is vervangen door initFormulieren() met verbeterde functionaliteit
 * en wordt niet meer gebruikt in de applicatie. Behouden voor referentie.
 */

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
    // Generieke FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
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
        }
    });
    
    // Cyber FAQ items (uit diensten.js)
    const cyberFaqItems = document.querySelectorAll('.cyber-faq-item');
    
    cyberFaqItems.forEach(item => {
        const question = item.querySelector('.cyber-faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Sluit alle open items
                cyberFaqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                    const toggle = faqItem.querySelector('.cyber-faq-toggle i');
                    if (toggle) {
                        toggle.className = 'fas fa-plus';
                    }
                });
                
                // Als het item niet actief was, open het
                if (!isActive) {
                    item.classList.add('active');
                    const toggle = item.querySelector('.cyber-faq-toggle i');
                    if (toggle) {
                        toggle.className = 'fas fa-minus';
                    }
                }
            });
        }
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
 * @deprecated
 */

/**
 * Internationale telefooninput initialisatie
 * Ondersteunt alle moderne browsers inclusief Firefox, Chrome, Safari en Edge
 */
function initTelefoonInput() {
    // Debug configuratie
    const DEBUG = false; // Zet op false voor productie
    const DEBUG_PREFIX = '[TelefoonInput]';
    
    // Hulpfuncties voor logging en debugging
    function debug(message) {
        if (DEBUG) console.log(`${DEBUG_PREFIX} ${message}`);
    }
    
    function error(message) {
        console.error(`${DEBUG_PREFIX} ERROR: ${message}`);
    }
    
    function warn(message) {
        console.warn(`${DEBUG_PREFIX} WAARSCHUWING: ${message}`);
    }
    
    // Log dat de script is gestart
    debug('Script wordt geïnitialiseerd');
    
    // Detecteer browser type voor specifieke aanpassingen
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if (isFirefox) {
        debug('Firefox browser gedetecteerd, specifieke optimalisaties worden toegepast');
    }
    
    // Telefoonnummer limieten per land (landcode: [min, max])
    // Gebruikt internationale formaat zonder '+' of '00' vooraf
    const telefoonnummerLimieten = {
        // Europa
        'be': [9, 10],    // België: 9-10 cijfers (mobiel/vast)
        'nl': [9, 10],    // Nederland: 9-10 cijfers
        'de': [10, 11],   // Duitsland: 10-11 cijfers
        'fr': [9, 10],    // Frankrijk: 9-10 cijfers
        'lu': [8, 9],     // Luxemburg: 8-9 cijfers
        'gb': [10, 11],   // Verenigd Koninkrijk: 10-11 cijfers
        'es': [9, 9],     // Spanje: 9 cijfers
        'it': [9, 10],    // Italië: 9-10 cijfers
        'pt': [9, 9],     // Portugal: 9 cijfers
        'gr': [10, 10],   // Griekenland: 10 cijfers
        'ch': [9, 10],    // Zwitserland: 9-10 cijfers
        'at': [9, 11],    // Oostenrijk: 9-11 cijfers
        'dk': [8, 8],     // Denemarken: 8 cijfers
        'se': [9, 10],    // Zweden: 9-10 cijfers
        'no': [8, 8],     // Noorwegen: 8 cijfers
        'fi': [8, 10],    // Finland: 8-10 cijfers
        'ie': [9, 9],     // Ierland: 9 cijfers
        'pl': [9, 9],     // Polen: 9 cijfers
        'cz': [9, 9],     // Tsjechië: 9 cijfers
        'sk': [9, 9],     // Slowakije: 9 cijfers
        'hu': [9, 9],     // Hongarije: 9 cijfers
        'ro': [9, 10],    // Roemenië: 9-10 cijfers
        'bg': [9, 9],     // Bulgarije: 9 cijfers
        'mc': [8, 9],     // Monaco: 8-9 cijfers
        'va': [6, 10],    // Vaticaanstad: 6-10 cijfers
        'sm': [6, 10],    // San Marino: 6-10 cijfers
        'ad': [6, 9],     // Andorra: 6-9 cijfers
        'li': [7, 9],     // Liechtenstein: 7-9 cijfers
        'al': [9, 9],     // Albanië: 9 cijfers
        'ba': [8, 9],     // Bosnië en Herzegovina: 8-9 cijfers
        'hr': [8, 9],     // Kroatië: 8-9 cijfers
        'cy': [8, 8],     // Cyprus: 8 cijfers
        'ee': [7, 8],     // Estland: 7-8 cijfers
        'is': [7, 9],     // IJsland: 7-9 cijfers
        'lv': [8, 8],     // Letland: 8 cijfers
        'lt': [8, 9],     // Litouwen: 8-9 cijfers
        'mt': [8, 8],     // Malta: 8 cijfers
        'md': [8, 8],     // Moldavië: 8 cijfers
        'me': [8, 8],     // Montenegro: 8 cijfers
        'mk': [8, 8],     // Noord-Macedonië: 8 cijfers
        'rs': [8, 9],     // Servië: 8-9 cijfers
        'si': [8, 9],     // Slovenië: 8-9 cijfers
        'ua': [9, 10],    // Oekraïne: 9-10 cijfers
        'by': [9, 9],     // Belarus: 9 cijfers
        'ru': [10, 10],   // Rusland: 10 cijfers
        'tr': [10, 11],   // Turkije: 10-11 cijfers
        
        // Noord-Amerika
        'us': [10, 10],   // Verenigde Staten: 10 cijfers
        'ca': [10, 10],   // Canada: 10 cijfers
        'mx': [10, 10],   // Mexico: 10 cijfers
        'gt': [8, 8],     // Guatemala: 8 cijfers
        'bz': [7, 7],     // Belize: 7 cijfers
        'sv': [8, 8],     // El Salvador: 8 cijfers
        'hn': [8, 8],     // Honduras: 8 cijfers
        'ni': [8, 8],     // Nicaragua: 8 cijfers
        'cr': [8, 8],     // Costa Rica: 8 cijfers
        'pa': [7, 8],     // Panama: 7-8 cijfers
        
        // Caribisch gebied
        'cu': [8, 8],     // Cuba: 8 cijfers
        'jm': [10, 10],   // Jamaica: 10 cijfers
        'ht': [8, 8],     // Haïti: 8 cijfers
        'do': [10, 10],   // Dominicaanse Republiek: 10 cijfers
        'pr': [10, 10],   // Puerto Rico: 10 cijfers
        'bs': [7, 7],     // Bahamas: 7 cijfers
        'bb': [10, 10],   // Barbados: 10 cijfers
        'tt': [7, 7],     // Trinidad en Tobago: 7 cijfers
        
        // Zuid-Amerika
        'br': [10, 11],   // Brazilië: 10-11 cijfers
        'ar': [10, 11],   // Argentinië: 10-11 cijfers
        'cl': [9, 9],     // Chili: 9 cijfers
        'uy': [8, 9],     // Uruguay: 8-9 cijfers
        'py': [9, 9],     // Paraguay: 9 cijfers
        'bo': [8, 8],     // Bolivia: 8 cijfers
        'pe': [9, 9],     // Peru: 9 cijfers
        'ec': [9, 9],     // Ecuador: 9 cijfers
        'co': [10, 10],   // Colombia: 10 cijfers
        've': [10, 10],   // Venezuela: 10 cijfers
        'gy': [7, 7],     // Guyana: 7 cijfers
        'sr': [7, 7],     // Suriname: 7 cijfers
        
        // Azië
        'cn': [11, 11],   // China: 11 cijfers
        'jp': [10, 10],   // Japan: 10 cijfers
        'kr': [9, 10],    // Zuid-Korea: 9-10 cijfers
        'kp': [10, 10],   // Noord-Korea: 10 cijfers
        'in': [10, 10],   // India: 10 cijfers
        'id': [9, 12],    // Indonesië: 9-12 cijfers
        'my': [9, 10],    // Maleisië: 9-10 cijfers
        'sg': [8, 8],     // Singapore: 8 cijfers
        'th': [9, 10],    // Thailand: 9-10 cijfers
        'vn': [9, 10],    // Vietnam: 9-10 cijfers
        'ph': [10, 10],   // Filipijnen: 10 cijfers
        'sa': [9, 9],     // Saudi-Arabië: 9 cijfers
        'ae': [9, 9],     // Verenigde Arabische Emiraten: 9 cijfers
        'qa': [8, 8],     // Qatar: 8 cijfers
        'kw': [8, 8],     // Koeweit: 8 cijfers
        'bh': [8, 8],     // Bahrein: 8 cijfers
        'om': [8, 8],     // Oman: 8 cijfers
        'il': [9, 9],     // Israël: 9 cijfers
        'iq': [10, 10],   // Irak: 10 cijfers
        'ir': [10, 10],   // Iran: 10 cijfers
        'sy': [9, 9],     // Syrië: 9 cijfers
        'lb': [7, 8],     // Libanon: 7-8 cijfers
        'jo': [9, 9],     // Jordanië: 9 cijfers
        'pk': [10, 10],   // Pakistan: 10 cijfers
        'af': [9, 9],     // Afghanistan: 9 cijfers
        'bd': [10, 10],   // Bangladesh: 10 cijfers
        'np': [10, 10],   // Nepal: 10 cijfers
        'lk': [9, 9],     // Sri Lanka: 9 cijfers
        'mm': [8, 11],    // Myanmar: 8-11 cijfers
        'kh': [8, 9],     // Cambodja: 8-9 cijfers
        'la': [8, 9],     // Laos: 8-9 cijfers
        'kz': [10, 10],   // Kazachstan: 10 cijfers
        'uz': [9, 9],     // Oezbekistan: 9 cijfers
        'tm': [8, 8],     // Turkmenistan: 8 cijfers
        'tj': [9, 9],     // Tadzjikistan: 9 cijfers
        'kg': [9, 9],     // Kirgizië: 9 cijfers
        'mn': [8, 8],     // Mongolië: 8 cijfers
        'az': [9, 9],     // Azerbeidzjan: 9 cijfers
        'am': [8, 8],     // Armenië: 8 cijfers
        'ge': [9, 9],     // Georgië: 9 cijfers
        'ye': [9, 9],     // Jemen: 9 cijfers
        
        // Afrika
        'za': [9, 9],     // Zuid-Afrika: 9 cijfers
        'ng': [10, 11],   // Nigeria: 10-11 cijfers
        'eg': [10, 11],   // Egypte: 10-11 cijfers
        'ma': [9, 9],     // Marokko: 9 cijfers
        'dz': [9, 9],     // Algerije: 9 cijfers
        'tn': [8, 8],     // Tunesië: 8 cijfers
        'ly': [9, 10],    // Libië: 9-10 cijfers
        'sd': [9, 9],     // Soedan: 9 cijfers
        'et': [9, 9],     // Ethiopië: 9 cijfers
        'ke': [9, 9],     // Kenia: 9 cijfers
        'tz': [9, 9],     // Tanzania: 9 cijfers
        'ug': [9, 9],     // Oeganda: 9 cijfers
        'rw': [9, 9],     // Rwanda: 9 cijfers
        'bi': [8, 8],     // Burundi: 8 cijfers
        'ao': [9, 9],     // Angola: 9 cijfers
        'na': [9, 9],     // Namibië: 9 cijfers
        'zw': [9, 10],    // Zimbabwe: 9-10 cijfers
        'mz': [9, 9],     // Mozambique: 9 cijfers
        'zm': [9, 9],     // Zambia: 9 cijfers
        'bw': [8, 8],     // Botswana: 8 cijfers
        'gh': [9, 10],    // Ghana: 9-10 cijfers
        'cm': [9, 9],     // Kameroen: 9 cijfers
        'ci': [8, 8],     // Ivoorkust: 8 cijfers
        'sn': [9, 9],     // Senegal: 9 cijfers
        'ml': [8, 8],     // Mali: 8 cijfers
        'mr': [8, 8],     // Mauritanië: 8 cijfers
        'ne': [8, 8],     // Niger: 8 cijfers
        'td': [8, 8],     // Tsjaad: 8 cijfers
        'mg': [9, 9],     // Madagaskar: 9 cijfers
        'mu': [8, 8],     // Mauritius: 8 cijfers
        'ss': [9, 9],     // Zuid-Soedan: 9 cijfers
        
        // Oceanië
        'au': [9, 10],    // Australië: 9-10 cijfers
        'nz': [8, 10],    // Nieuw-Zeeland: 8-10 cijfers
        'pg': [7, 8],     // Papoea-Nieuw-Guinea: 7-8 cijfers
        'fj': [7, 7],     // Fiji: 7 cijfers
        'sb': [7, 7],     // Salomonseilanden: 7 cijfers
        'vu': [7, 7],     // Vanuatu: 7 cijfers
        'ws': [5, 7],     // Samoa: 5-7 cijfers
        'to': [5, 7],     // Tonga: 5-7 cijfers
        'nr': [7, 7],     // Nauru: 7 cijfers
        'pw': [7, 7],     // Palau: 7 cijfers
        'fm': [7, 7],     // Micronesië: 7 cijfers
        'mh': [7, 7],     // Marshalleilanden: 7 cijfers
        'tv': [5, 6],     // Tuvalu: 5-6 cijfers
        'ki': [5, 8],     // Kiribati: 5-8 cijfers
        
        // Extra eilanden en gebieden
        'ax': [6, 9],     // Ålandeilanden: 6-9 cijfers (volgt Finse standaard)
        'as': [10, 10],   // Amerikaans-Samoa: 10 cijfers (volgt VS)
        'ai': [7, 7],     // Anguilla: 7 cijfers
        'ag': [7, 7],     // Antigua en Barbuda: 7 cijfers
        'io': [7, 7],     // Brits Indische Oceaanterritorium: 7 cijfers (VK)
        'vg': [7, 7],     // Britse Maagdeneilanden: 7 cijfers
        'cv': [7, 7],     // Kaapverdië: 7 cijfers
        'bq': [7, 7],     // Caribisch Nederland: 7 cijfers (NL)
        'ky': [7, 7],     // Kaaimaneilanden: 7 cijfers
        'cf': [8, 8],     // Centraal-Afrikaanse Republiek: 8 cijfers
        'cx': [8, 8],     // Christmaseiland: 8 cijfers (Australië)
        'cc': [6, 8],     // Cocoseilanden: 6-8 cijfers (Australië)
        'ck': [5, 6],     // Cookeilanden: 5-6 cijfers
        'gq': [9, 9],     // Equatoriaal-Guinea: 9 cijfers
        'fk': [5, 6],     // Falklandeilanden: 5-6 cijfers
        'fo': [6, 6],     // Faeröer: 6 cijfers
        'gf': [9, 9],     // Frans-Guyana: 9 cijfers (Frankrijk)
        'pf': [6, 8],     // Frans-Polynesië: 6-8 cijfers
        'im': [6, 10],    // Isle of Man: 6-10 cijfers (VK)
        'nc': [6, 6],     // Nieuw-Caledonië: 6 cijfers
        'nf': [6, 6],     // Norfolk: 6 cijfers
        'mp': [7, 10],    // Noordelijke Marianen: 7-10 cijfers
        're': [9, 10],    // Réunion: 9-10 cijfers (Frankrijk)
        'bl': [9, 9],     // Saint-Barthélemy: 9 cijfers
        'sh': [4, 4],     // Sint-Helena: 4 cijfers
        'kn': [7, 7],     // Saint Kitts en Nevis: 7 cijfers
        'lc': [7, 7],     // Saint Lucia: 7 cijfers
        'mf': [9, 9],     // Sint-Maarten (Frans deel): 9 cijfers
        'pm': [6, 6],     // Saint-Pierre en Miquelon: 6 cijfers
        'vc': [7, 7],     // Saint Vincent en de Grenadines: 7 cijfers
        'st': [7, 7],     // Sao Tomé en Principe: 7 cijfers
        'sj': [8, 8],     // Spitsbergen en Jan Mayen: 8 cijfers (Noorwegen)
        'tc': [7, 7],     // Turks- en Caicoseilanden: 7 cijfers
        'vi': [10, 10],   // Amerikaanse Maagdeneilanden: 10 cijfers (VS)
        'wf': [6, 6],     // Wallis en Futuna: 6 cijfers
        'eh': [9, 9],     // Westelijke Sahara: 9 cijfers
        
        // Standaard voor eventuele ontbrekende landen
        'default': [7, 15]  // Minimaal 7, maximaal 15 cijfers voor niet-specifiek opgegeven landen
    };
    
    // Functie om limiet voor een landcode te krijgen
    function getTelefoonnummerLimiet(landcode) {
        landcode = landcode.toLowerCase();
        return telefoonnummerLimieten[landcode] || telefoonnummerLimieten['default'];
    }
    
    // Voorbeeldnummers per land (zonder internationaal voorvoegsel)
    const voorbeeldTelefoonnummers = {
        // Europa
        'be': '470 12 34 56',      // België
        'nl': '6 12345678',        // Nederland
        'de': '170 1234567',       // Duitsland
        'fr': '6 12 34 56 78',     // Frankrijk
        'lu': '661 123 456',       // Luxemburg
        'gb': '7700 900123',       // Verenigd Koninkrijk
        'es': '612 345 678',       // Spanje
        'it': '312 345 6789',      // Italië
        'pt': '912 345 678',       // Portugal
        'gr': '690 123 4567',      // Griekenland
        'ch': '78 123 45 67',      // Zwitserland
        'at': '664 123 4567',      // Oostenrijk
        'dk': '20 12 34 56',       // Denemarken
        'se': '70 123 45 67',      // Zweden
        'no': '41 23 45 67',       // Noorwegen
        'fi': '40 123 4567',       // Finland
        'ie': '85 123 4567',       // Ierland
        'pl': '512 345 678',       // Polen
        'cz': '601 123 456',       // Tsjechië
        'sk': '912 345 678',       // Slowakije
        'hu': '30 123 4567',       // Hongarije
        'ro': '712 345 678',       // Roemenië
        'bg': '48 123 4567',       // Bulgarije
        'mc': '6 12 34 56 78',     // Monaco
        'va': '06 698 12345',      // Vaticaanstad
        'sm': '66 12 34 56',       // San Marino
        'ad': '312 345',           // Andorra
        'li': '660 234 567',       // Liechtenstein
        'al': '69 123 4567',       // Albanië
        'ba': '61 234 567',        // Bosnië en Herzegovina
        'hr': '91 234 5678',       // Kroatië
        'cy': '96 123456',         // Cyprus
        'ee': '5123 456',          // Estland
        'is': '616 1234',          // IJsland
        'lv': '21 234567',         // Letland
        'lt': '612 34567',         // Litouwen
        'mt': '7912 3456',         // Malta
        'md': '621 12345',         // Moldavië
        'me': '67 123456',         // Montenegro
        'mk': '72 123456',         // Noord-Macedonië
        'rs': '63 1234567',        // Servië
        'si': '31 234567',         // Slovenië
        'ua': '50 123 4567',       // Oekraïne
        'by': '29 123 4567',       // Belarus
        'ru': '912 345 6789',      // Rusland
        'tr': '532 123 4567',      // Turkije
        
        // Noord-Amerika
        'us': '202 555 0123',      // Verenigde Staten
        'ca': '613 555 0123',      // Canada
        'mx': '222 123 4567',      // Mexico
        'gt': '5123 4567',         // Guatemala
        'bz': '622 3456',          // Belize
        'sv': '7123 4567',         // El Salvador
        'hn': '9123 4567',         // Honduras
        'ni': '8123 4567',         // Nicaragua
        'cr': '8312 3456',         // Costa Rica
        'pa': '6123 456',          // Panama
        
        // Caribisch gebied
        'cu': '5123 4567',         // Cuba
        'jm': '876 123 4567',      // Jamaica
        'ht': '3456 7890',         // Haïti
        'do': '809 123 4567',      // Dominicaanse Republiek
        'pr': '787 123 4567',      // Puerto Rico
        'bs': '242 1234',          // Bahamas
        'bb': '246 123 4567',      // Barbados
        'tt': '868 1234',          // Trinidad en Tobago
        
        // Zuid-Amerika
        'br': '11 91234 5678',     // Brazilië
        'ar': '11 1234 5678',      // Argentinië
        'cl': '9 1234 5678',       // Chili
        'uy': '94 123 456',        // Uruguay
        'py': '981 123456',        // Paraguay
        'bo': '712 34567',         // Bolivia
        'pe': '912 345 678',       // Peru
        'ec': '99 123 4567',       // Ecuador
        'co': '320 123 4567',      // Colombia
        've': '412 123 4567',      // Venezuela
        'gy': '609 1234',          // Guyana
        'sr': '771 2345',          // Suriname
        
        // Azië
        'cn': '138 1234 5678',     // China
        'jp': '90 1234 5678',      // Japan
        'kr': '10 1234 5678',      // Zuid-Korea
        'kp': '192 1234567',       // Noord-Korea
        'in': '98765 12345',       // India
        'id': '812 345 678',       // Indonesië
        'my': '12 345 6789',       // Maleisië
        'sg': '8123 4567',         // Singapore
        'th': '81 234 5678',       // Thailand
        'vn': '91 234 56 78',      // Vietnam
        'ph': '917 123 4567',      // Filipijnen
        'sa': '50 123 4567',       // Saudi-Arabië
        'ae': '50 123 4567',       // Verenigde Arabische Emiraten
        'qa': '3312 3456',         // Qatar
        'kw': '500 12345',         // Koeweit
        'bh': '3312 3456',         // Bahrein
        'om': '9123 4567',         // Oman
        'il': '50 123 4567',       // Israël
        'iq': '790 123 4567',      // Irak
        'ir': '912 345 6789',      // Iran
        'sy': '944 567 890',       // Syrië
        'lb': '71 123456',         // Libanon
        'jo': '7 9123 4567',       // Jordanië
        'pk': '301 2345678',       // Pakistan
        'af': '70 123 4567',       // Afghanistan
        'bd': '1712 345678',       // Bangladesh
        'np': '984 1234567',       // Nepal
        'lk': '71 2345678',        // Sri Lanka
        'mm': '9 123 456',         // Myanmar
        'kh': '85 123 456',        // Cambodja
        'la': '20 2345 6789',      // Laos
        'kz': '7123 45678',        // Kazachstan
        'uz': '91 234 56 78',      // Oezbekistan
        'tm': '6512 3456',         // Turkmenistan
        'tj': '917 123 456',       // Tadzjikistan
        'kg': '700 123 456',       // Kirgizië
        'mn': '8812 3456',         // Mongolië
        'az': '50 123 4567',       // Azerbeidzjan
        'am': '77 123456',         // Armenië
        'ge': '555 12 34 56',      // Georgië
        'ye': '712 345 678',       // Jemen
        
        // Afrika
        'za': '71 123 4567',       // Zuid-Afrika
        'ng': '802 123 4567',      // Nigeria
        'eg': '10 1234 5678',      // Egypte
        'ma': '6123 45678',        // Marokko
        'dz': '551 23 45 67',      // Algerije
        'tn': '20 123 456',        // Tunesië
        'ly': '91 234 5678',       // Libië
        'sd': '91 123 4567',       // Soedan
        'et': '91 123 4567',       // Ethiopië
        'ke': '712 345678',        // Kenia
        'tz': '621 234567',        // Tanzania
        'ug': '712 345678',        // Oeganda
        'rw': '72 1234567',        // Rwanda
        'bi': '61 234567',         // Burundi
        'ao': '923 456 789',       // Angola
        'na': '81 1234567',        // Namibië
        'zw': '71 2345678',        // Zimbabwe
        'mz': '82 1234567',        // Mozambique
        'zm': '95 1234567',        // Zambia
        'bw': '71 123456',         // Botswana
        'gh': '24 1234567',        // Ghana
        'cm': '67 123 4567',       // Kameroen
        'ci': '01 23 45 67',       // Ivoorkust
        'sn': '77 123 45 67',      // Senegal
        'ml': '65 01 23 45',       // Mali
        'mr': '22 12 34 56',       // Mauritanië
        'ne': '90 12 34 56',       // Niger
        'td': '63 01 23 45',       // Tsjaad
        'mg': '32 12 345 67',      // Madagaskar
        'mu': '5712 3456',         // Mauritius
        'ss': '977 123 456',       // Zuid-Soedan

        // Oceanië
        'au': '412 345 678',       // Australië
        'nz': '21 123 4567',       // Nieuw-Zeeland
        'pg': '7012 3456',         // Papoea-Nieuw-Guinea
        'fj': '701 2345',          // Fiji
        'sb': '74 12345',          // Salomonseilanden
        'vu': '595 1234',          // Vanuatu
        'ws': '72 12345',          // Samoa
        'to': '771 2345',          // Tonga
        'nr': '555 1234',          // Nauru
        'pw': '620 1234',          // Palau
        'fm': '350 1234',          // Micronesië
        'mh': '235 1234',          // Marshalleilanden
        'tv': '21 234',            // Tuvalu
        'ki': '72 12345',          // Kiribati
        
        // Extra eilanden en gebieden
        'ax': '41 2345678',        // Ålandeilanden
        'as': '733 1234',          // Amerikaans-Samoa
        'ai': '235 1234',          // Anguilla
        'ag': '724 1234',          // Antigua en Barbuda
        'io': '380 1234',          // Brits Indische Oceaanterritorium
        'vg': '340 1234',          // Britse Maagdeneilanden
        'cv': '991 2345',          // Kaapverdië
        'bq': '318 1234',          // Caribisch Nederland
        'ky': '345 1234',          // Kaaimaneilanden
        'cf': '70 01 23 45',       // Centraal-Afrikaanse Republiek
        'cx': '412 345 678',       // Christmaseiland
        'cc': '412 345 678',       // Cocoseilanden
        'ck': '55 123',            // Cookeilanden
        'gq': '222 123 456',       // Equatoriaal-Guinea
        'fk': '51 234',            // Falklandeilanden
        'fo': '212 345',           // Faeröer
        'gf': '694 12 34 56',      // Frans-Guyana
        'pf': '87 12 34 56',       // Frans-Polynesië
        'im': '7624 123456',       // Isle of Man
        'nc': '75 12 34',          // Nieuw-Caledonië
        'nf': '3 81234',           // Norfolk
        'mp': '670 1234567',       // Noordelijke Marianen
        're': '692 12 34 56',      // Réunion
        'bl': '690 12 34 56',      // Saint-Barthélemy
        'sh': '2158',              // Sint-Helena
        'kn': '765 1234',          // Saint Kitts en Nevis
        'lc': '284 1234',          // Saint Lucia
        'mf': '690 12 34 56',      // Sint-Maarten (Frans deel)
        'pm': '41 12 34',          // Saint-Pierre en Miquelon
        'vc': '784 1234',          // Saint Vincent en de Grenadines
        'st': '990 1234',          // Sao Tomé en Principe
        'sj': '79 12 34 56',       // Spitsbergen en Jan Mayen
        'tc': '231 1234',          // Turks- en Caicoseilanden
        'vi': '340 1234567',       // Amerikaanse Maagdeneilanden
        'wf': '50 12 34',          // Wallis en Futuna
        'eh': '650 123456',        // Westelijke Sahara
        
        // Standaard voorbeeld
        'default': '123 456 7890'  // Standaard voorbeeld
    };
    
    // Functie om voorbeeld telefoonnummer voor een landcode te krijgen
    function getVoorbeeldTelefoonnummer(landcode) {
        landcode = landcode.toLowerCase();
        return voorbeeldTelefoonnummers[landcode] || voorbeeldTelefoonnummers['default'];
    }
    
    // Zoek het telefooninputveld
    const telefoonInput = document.querySelector("#phone");
    
    // Controleer of het element bestaat
    if (!telefoonInput) {
        debug('Telefoonnummerveld met id "phone" niet gevonden in de DOM - Dit is normaal als we op een andere pagina zijn');
        return;
    }
    
    debug('Telefoonnummerveld gevonden');
    
    // Controleer of het veld zichtbaar is (nuttig voor debugging)
    const isVisible = function(element) {
        if (!element) return false;
        const style = window.getComputedStyle(element);
        return style.display !== 'none' && style.visibility !== 'hidden' && element.offsetParent !== null;
    };
    
    if (!isVisible(telefoonInput)) {
        warn('Telefoonnummerveld bestaat maar is niet zichtbaar op de pagina');
    }
    
    // Controleer of de intlTelInput bibliotheek beschikbaar is
    if (typeof window.intlTelInput !== 'function') {
        error('intlTelInput bibliotheek is niet geladen. Zorg ervoor dat de bibliotheek correct is geïmporteerd');
        return;
    }
    
    debug('intlTelInput bibliotheek gevonden');
    
    try {
        // Verwijder eerst eventuele bestaande instances om dubbele initialisatie te voorkomen
        const bestaandeInstances = telefoonInput.closest('.iti');
        if (bestaandeInstances) {
            debug('Bestaande intlTelInput instance gevonden, wordt verwijderd');
            const parent = bestaandeInstances.parentNode;
            if (parent) {
                parent.insertBefore(telefoonInput, bestaandeInstances);
                parent.removeChild(bestaandeInstances);
            }
        }
        
        // Initialiseer de internationale telefooninput
        debug('intlTelInput wordt geïnitialiseerd');
        
        // Configuratie-opties
        const telInputOptions = {
            initialCountry: "be",
            preferredCountries: ["be", "nl", "fr", "de", "lu", "gb"],
            separateDialCode: true,
            autoPlaceholder: "polite",
            allowDropdown: true,
            formatOnDisplay: true,
            nationalMode: false,
            dropdownContainer: document.body,
            localizedCountries: {
                // Europa
                'be': 'België',
                'nl': 'Nederland',
                'fr': 'Frankrijk',
                'de': 'Duitsland',
                'lu': 'Luxemburg',
                'gb': 'Verenigd Koninkrijk',
                'es': 'Spanje',
                'it': 'Italië',
                'pt': 'Portugal',
                'gr': 'Griekenland',
                'dk': 'Denemarken',
                'no': 'Noorwegen',
                'se': 'Zweden',
                'fi': 'Finland',
                'ru': 'Rusland',
                'pl': 'Polen',
                'cz': 'Tsjechië',
                'sk': 'Slowakije',
                'hu': 'Hongarije',
                'ro': 'Roemenië',
                'bg': 'Bulgarije',
                'ch': 'Zwitserland',
                'at': 'Oostenrijk',
                'ie': 'Ierland',
                'mc': 'Monaco',
                'va': 'Vaticaanstad',
                'sm': 'San Marino',
                'ad': 'Andorra',
                'li': 'Liechtenstein',
                'al': 'Albanië',
                'ba': 'Bosnië en Herzegovina',
                'hr': 'Kroatië',
                'cy': 'Cyprus',
                'ee': 'Estland',
                'is': 'IJsland',
                'lv': 'Letland',
                'lt': 'Litouwen',
                'mt': 'Malta',
                'md': 'Moldavië',
                'me': 'Montenegro',
                'mk': 'Noord-Macedonië',
                'rs': 'Servië',
                'si': 'Slovenië',
                'ua': 'Oekraïne',
                'by': 'Belarus',
                
                // Azië
                'cn': 'China',
                'jp': 'Japan',
                'kr': 'Zuid-Korea',
                'kp': 'Noord-Korea',
                'in': 'India',
                'id': 'Indonesië',
                'my': 'Maleisië',
                'sg': 'Singapore',
                'th': 'Thailand',
                'vn': 'Vietnam',
                'ph': 'Filipijnen',
                'sa': 'Saudi-Arabië',
                'ae': 'Verenigde Arabische Emiraten',
                'qa': 'Qatar',
                'kw': 'Koeweit',
                'bh': 'Bahrein',
                'om': 'Oman',
                'il': 'Israël',
                'tr': 'Turkije',
                'iq': 'Irak',
                'ir': 'Iran',
                'sy': 'Syrië',
                'lb': 'Libanon',
                'jo': 'Jordanië',
                'pk': 'Pakistan',
                'af': 'Afghanistan',
                'bd': 'Bangladesh',
                'np': 'Nepal',
                'lk': 'Sri Lanka',
                'mm': 'Myanmar',
                'kh': 'Cambodja',
                'la': 'Laos',
                'kz': 'Kazachstan',
                'uz': 'Oezbekistan',
                'tm': 'Turkmenistan',
                'tj': 'Tadzjikistan',
                'kg': 'Kirgizië',
                'mn': 'Mongolië',
                'az': 'Azerbeidzjan',
                'am': 'Armenië',
                'ge': 'Georgië',
                'ye': 'Jemen',
                
                // Afrika
                'za': 'Zuid-Afrika',
                'ng': 'Nigeria',
                'eg': 'Egypte',
                'ma': 'Marokko',
                'dz': 'Algerije',
                'tn': 'Tunesië',
                'ly': 'Libië',
                'sd': 'Soedan',
                'et': 'Ethiopië',
                'ke': 'Kenia',
                'tz': 'Tanzania',
                'ug': 'Oeganda',
                'rw': 'Rwanda',
                'bi': 'Burundi',
                'ao': 'Angola',
                'na': 'Namibië',
                'zw': 'Zimbabwe',
                'mz': 'Mozambique',
                'zm': 'Zambia',
                'bw': 'Botswana',
                'gh': 'Ghana',
                'cm': 'Kameroen',
                'ci': 'Ivoorkust',
                'sn': 'Senegal',
                'ml': 'Mali',
                'mr': 'Mauritanië',
                'ne': 'Niger',
                'td': 'Tsjaad',
                'mg': 'Madagaskar',
                'mu': 'Mauritius',
                
                // Noord-Amerika
                'us': 'Verenigde Staten',
                'ca': 'Canada',
                'mx': 'Mexico',
                'gt': 'Guatemala',
                'bz': 'Belize',
                'sv': 'El Salvador',
                'hn': 'Honduras',
                'ni': 'Nicaragua',
                'cr': 'Costa Rica',
                'pa': 'Panama',
                
                // Caribisch gebied
                'cu': 'Cuba',
                'jm': 'Jamaica',
                'ht': 'Haïti',
                'do': 'Dominicaanse Republiek',
                'pr': 'Puerto Rico',
                'bs': 'Bahamas',
                'bb': 'Barbados',
                'tt': 'Trinidad en Tobago',
                
                // Zuid-Amerika
                'br': 'Brazilië',
                'ar': 'Argentinië',
                'cl': 'Chili',
                'uy': 'Uruguay',
                'py': 'Paraguay',
                'bo': 'Bolivia',
                'pe': 'Peru',
                'ec': 'Ecuador',
                'co': 'Colombia',
                've': 'Venezuela',
                'gy': 'Guyana',
                'sr': 'Suriname',
                
                // Oceanië
                'au': 'Australië',
                'nz': 'Nieuw-Zeeland',
                'pg': 'Papoea-Nieuw-Guinea',
                'fj': 'Fiji',
                'sb': 'Salomonseilanden',
                'vu': 'Vanuatu',
                'ws': 'Samoa',
                'to': 'Tonga',
                'nr': 'Nauru',
                'pw': 'Palau',
                'fm': 'Micronesië',
                'mh': 'Marshalleilanden',
                'tv': 'Tuvalu',
                'ki': 'Kiribati',
                
                // Extra eilanden en gebieden
                'ax': 'Ålandeilanden',
                'as': 'Amerikaans-Samoa',
                'ai': 'Anguilla',
                'ag': 'Antigua en Barbuda',
                'io': 'Brits Indische Oceaanterritorium',
                'vg': 'Britse Maagdeneilanden',
                'cv': 'Kaapverdië',
                'bq': 'Caribisch Nederland',
                'ky': 'Kaaimaneilanden',
                'cf': 'Centraal-Afrikaanse Republiek',
                'cx': 'Christmaseiland',
                'cc': 'Cocoseilanden',
                'ck': 'Cookeilanden',
                'gq': 'Equatoriaal-Guinea',
                'fk': 'Falklandeilanden',
                'fo': 'Faeröer',
                'gf': 'Frans-Guyana',
                'pf': 'Frans-Polynesië',
                'im': 'Isle of Man',
                'nc': 'Nieuw-Caledonië',
                'nf': 'Norfolk',
                'mp': 'Noordelijke Marianen',
                're': 'Réunion',
                'bl': 'Saint-Barthélemy',
                'sh': 'Sint-Helena',
                'kn': 'Saint Kitts en Nevis',
                'lc': 'Saint Lucia',
                'mf': 'Sint-Maarten (Frans deel)',
                'pm': 'Saint-Pierre en Miquelon',
                'vc': 'Saint Vincent en de Grenadines',
                'st': 'Sao Tomé en Principe',
                'ss': 'Zuid-Soedan',
                'sj': 'Spitsbergen en Jan Mayen',
                'tc': 'Turks- en Caicoseilanden',
                'vi': 'Amerikaanse Maagdeneilanden',
                'wf': 'Wallis en Futuna',
                'eh': 'Westelijke Sahara'
            },
            customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
                // Haal het voorbeeld telefoonnummer op voor het geselecteerde land
                const landcode = selectedCountryData.iso2;
                const voorbeeld = getVoorbeeldTelefoonnummer(landcode);
                return voorbeeld;
            },
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
        };
        
        // Firefox-specifieke aanpassingen
        if (isFirefox) {
            debug('Firefox-specifieke optimalisaties worden toegepast');
            telefoonInput.classList.add('firefox-input');
        }
        
        // Initialiseer telefooninput
        const intlTelInputInstance = window.intlTelInput(telefoonInput, telInputOptions);
        
        // Extra functie om alle landnamen op te schonen en extra tekst te verwijderen
        setTimeout(function() {
            // Zoek alle landnamen en verwijder eventuele tekst tussen haakjes
            debug('Landnamen worden opgeschoond...');
            
            const landItems = document.querySelectorAll('.iti__country-name');
            if (landItems.length > 0) {
                debug(`${landItems.length} landnamen gevonden, ze worden nu opgeschoond`);
                
                landItems.forEach(function(landItem) {
                    // Verwijder tekst tussen haakjes, bijv. "Azerbeidzjan (Azərbaycan)"
                    let landnaam = landItem.textContent;
                    let opgeschoondeNaam = landnaam.replace(/\s*\(.*?\)\s*/g, '');
                    
                    // Sla de originele naam op als data-attribuut voor CSS
                    landItem.setAttribute('data-name', opgeschoondeNaam);
                    
                    debug(`Landnaam opgeschoond: "${landnaam}" -> "${opgeschoondeNaam}"`);
                });
            } else {
                debug('Geen landnamen gevonden om op te schonen (dropdown nog niet geopend?)');
            }
        }, 1000); // Korte vertraging om ervoor te zorgen dat de telefooninput volledig is geïnitialiseerd
        
        // Event listener om landnamen op te schonen wanneer de dropdown wordt geopend
        telefoonInput.addEventListener('open:countrydropdown', function() {
            debug('Dropdown geopend, landnamen worden opgeschoond...');
            
            const landItems = document.querySelectorAll('.iti__country-name');
            landItems.forEach(function(landItem) {
                let landnaam = landItem.textContent;
                let opgeschoondeNaam = landnaam.replace(/\s*\(.*?\)\s*/g, '');
                landItem.setAttribute('data-name', opgeschoondeNaam);
            });
        });
        
        debug('intlTelInput succesvol geïnitialiseerd');
        
        // Voeg validatie toe voor het formulier
        const formulier = telefoonInput.closest('form');
        if (formulier) {
            debug('Formulier gevonden, validatie wordt toegevoegd');
            
            // Functie om telefoonnummer te valideren op basis van landcode
            function valideerTelefoonnummer(nummer, landcode) {
                // Verwijder alle niet-cijfers om de lengte te controleren
                const alleenCijfers = nummer.replace(/\D/g, '');
                
                // Haal juiste limieten op
                const [min, max] = getTelefoonnummerLimiet(landcode);
                
                // Als telefoonnummer leeg is, accepteer dit (niet verplicht)
                if (alleenCijfers.length === 0) return true;
                
                debug(`Telefoonnummer validatie: "${nummer}" heeft ${alleenCijfers.length} cijfers, limiet voor ${landcode} is ${min}-${max} cijfers`);
                
                // Controleer of de lengte binnen de limieten valt
                return alleenCijfers.length >= min && alleenCijfers.length <= max;
            }
            
            // Functie om validatiefout te tonen
            function toonTelefoonnummerFout(input, bericht) {
                input.classList.add('error');
                // Verwijder bestaande foutmeldingen
                const bestaandeFout = formulier.querySelector('.phone-error');
                if (bestaandeFout) {
                    bestaandeFout.remove();
                }
                
                // Toon nieuwe foutmelding
                const errorMsg = document.createElement('div');
                errorMsg.className = 'phone-error';
                errorMsg.textContent = bericht;
                errorMsg.style.color = 'red';
                errorMsg.style.fontSize = '0.85rem';
                errorMsg.style.marginTop = '5px';
                
                input.parentNode.appendChild(errorMsg);
                
                debug('Telefoonnummervalidatie mislukt: ' + bericht);
                return false;
            }
            
            // Live validatie tijdens invoer
            telefoonInput.addEventListener('input', function() {
                // Reset eerdere validatiefouten
                telefoonInput.classList.remove('error');
                const errorElement = formulier.querySelector('.phone-error');
                if (errorElement) {
                    errorElement.remove();
                }
                
                // Haal huidige landcode op
                const landcode = intlTelInputInstance.getSelectedCountryData().iso2;
                const nummer = telefoonInput.value;
                
                // Toon lengtevereisten als hint
                const [min, max] = getTelefoonnummerLimiet(landcode);
                const infoElement = formulier.querySelector('.phone-info');
                
                if (!infoElement) {
                    const infoMsg = document.createElement('div');
                    infoMsg.className = 'phone-info';
                    infoMsg.style.fontSize = '0.8rem';
                    infoMsg.style.color = '#666';
                    infoMsg.style.marginTop = '3px';
                    
                    telefoonInput.parentNode.appendChild(infoMsg);
                }
                
                const infoMsg = formulier.querySelector('.phone-info');
                if (min === max) {
                    infoMsg.textContent = `Telefoonnummer moet ${min} cijfers bevatten`;
                } else {
                    infoMsg.textContent = `Telefoonnummer moet tussen ${min} en ${max} cijfers bevatten`;
                }
                
                // Alleen valideren als er waarde is ingevuld
                if (nummer && !valideerTelefoonnummer(nummer, landcode)) {
                    const [min, max] = getTelefoonnummerLimiet(landcode);
                    if (min === max) {
                        toonTelefoonnummerFout(telefoonInput, `Telefoonnummer moet ${min} cijfers bevatten`);
                    } else {
                        toonTelefoonnummerFout(telefoonInput, `Telefoonnummer moet tussen ${min} en ${max} cijfers bevatten`);
                    }
                }
            });
            
            // Bij veranderen van landcode, update de validatie
            telefoonInput.addEventListener('countrychange', function() {
                // Reset eerdere validatiefouten
                telefoonInput.classList.remove('error');
                const errorElement = formulier.querySelector('.phone-error');
                if (errorElement) {
                    errorElement.remove();
                }
                
                // Update informatie over lengtevereisten
                const landcode = intlTelInputInstance.getSelectedCountryData().iso2;
                const [min, max] = getTelefoonnummerLimiet(landcode);
                const infoElement = formulier.querySelector('.phone-info');
                
                if (infoElement) {
                    if (min === max) {
                        infoElement.textContent = `Telefoonnummer moet ${min} cijfers bevatten`;
                    } else {
                        infoElement.textContent = `Telefoonnummer moet tussen ${min} en ${max} cijfers bevatten`;
                    }
                }
                
                // Update placeholder met voorbeeldnummer voor het nieuwe land
                const voorbeeld = getVoorbeeldTelefoonnummer(landcode);
                telefoonInput.setAttribute('placeholder', voorbeeld);
                
                // Valideer nieuwe nummer indien ingevuld
                const nummer = telefoonInput.value;
                if (nummer && !valideerTelefoonnummer(nummer, landcode)) {
                    if (min === max) {
                        toonTelefoonnummerFout(telefoonInput, `Telefoonnummer moet ${min} cijfers bevatten`);
                    } else {
                        toonTelefoonnummerFout(telefoonInput, `Telefoonnummer moet tussen ${min} en ${max} cijfers bevatten`);
                    }
                }
            });
            
            formulier.addEventListener('submit', function(event) {
                // Reset eerdere validatiefouten
                telefoonInput.classList.remove('error');
                const errorElement = formulier.querySelector('.phone-error');
                if (errorElement) {
                    errorElement.remove();
                }
                
                // Haal huidige landcode en nummer op
                const landcode = intlTelInputInstance.getSelectedCountryData().iso2;
                const nummer = telefoonInput.value;
                
                // Validatie uitvoeren op basis van landcode
                if (nummer && !valideerTelefoonnummer(nummer, landcode)) {
                    event.preventDefault();
                    
                    const [min, max] = getTelefoonnummerLimiet(landcode);
                    if (min === max) {
                        toonTelefoonnummerFout(telefoonInput, `Telefoonnummer moet ${min} cijfers bevatten`);
                    } else {
                        toonTelefoonnummerFout(telefoonInput, `Telefoonnummer moet tussen ${min} en ${max} cijfers bevatten`);
                    }
                    return false;
                }
                
                // Controleer ook of het een geldig telefoonnummer is volgens de library
                if (!intlTelInputInstance.isValidNumber()) {
                    event.preventDefault();
                    toonTelefoonnummerFout(telefoonInput, 'Vul een geldig telefoonnummer in');
                    return false;
                }
                
                // Zet het volledige internationale telefoonnummer in het veld
                telefoonInput.value = intlTelInputInstance.getNumber();
                debug('Formulier wordt verzonden met telefoonnummer: ' + telefoonInput.value);
            });
        } else {
            warn('Geen parent formulier gevonden voor telefooninput');
        }
        
    } catch (err) {
        error('Fout bij initialiseren intlTelInput: ' + err.message);
        console.error(err);
    }
}

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

/**
 * Initialiseert de statistiekenteller animatie wanneer het element in beeld komt
 */
function initStatistiekenTeller() {
    const statElements = document.querySelectorAll('.cyber-stat-value');
    
    statElements.forEach(element => {
        const targetValue = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconden
        const increment = targetValue / (duration / 16);
        let currentValue = 0;
        
        const updateTeller = () => {
            if (currentValue < targetValue) {
                currentValue += increment;
                element.textContent = Math.ceil(Math.min(currentValue, targetValue));
                requestAnimationFrame(updateTeller);
            } else {
                element.textContent = targetValue;
            }
        };
        
        // Start animatie als element in beeld komt
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateTeller();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

/**
 * Markeer huidige pagina in het menu
 */
function markerHuidigePagina() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * Formulieren Module
 * Beheert alle formulieren, validatie en verzending
 */
function initFormulieren() {
  // Initialiseer contact formulier
  initContactFormulier();
  
  // Initialiseer offerte formulier
  initOfferteFormulier();
  
  // Initialiseer feedback formulier
  initFeedbackFormulier();
  
  // Algemene form validatie voor alle formulieren
  initFormulierValidatie();
}

/**
 * Initialiseer contact formulier
 */
function initContactFormulier() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (valideerFormulier(contactForm)) {
        // Toon loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verzenden...';
        submitBtn.disabled = true;
        
        // Verzamel formulier data
        const formData = new FormData(contactForm);
        
        // AJAX verzending (kan worden vervangen door echte API call)
        setTimeout(() => {
          // Success simulatie (vervang door echte API call)
          const formStatus = document.getElementById('contactFormStatus');
          formStatus.innerHTML = '<div class="alert alert-success">Bericht succesvol verzonden! We nemen zo snel mogelijk contact met je op.</div>';
          
          // Reset form
          contactForm.reset();
          
          // Reset button
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          
          // Scroll naar het bericht
          formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Verberg success bericht na 5 seconden
          setTimeout(() => {
            formStatus.innerHTML = '';
          }, 5000);
        }, 1500);
      }
    });
  }
}

/**
 * Initialiseer offerte formulier
 */
function initOfferteFormulier() {
  const quoteForm = document.getElementById('quoteForm');
  
  if (quoteForm) {
    // Multi-step form navigatie
    const nextButtons = quoteForm.querySelectorAll('.next-step');
    const prevButtons = quoteForm.querySelectorAll('.prev-step');
    const formSteps = quoteForm.querySelectorAll('.form-step');
    const progressSteps = quoteForm.querySelectorAll('.step-progress-item');
    
    let currentStep = 0;
    
    // Next button click handlers
    nextButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Valideer huidige stap
        const currentFormStep = formSteps[currentStep];
        const inputs = currentFormStep.querySelectorAll('input, select, textarea');
        
        let isValid = true;
        inputs.forEach(input => {
          if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
          } else {
            input.classList.remove('is-invalid');
          }
        });
        
        if (!isValid) return;
        
        // Ga naar volgende stap
        if (currentStep < formSteps.length - 1) {
          formSteps[currentStep].classList.remove('active');
          formSteps[currentStep + 1].classList.add('active');
          
          progressSteps[currentStep].classList.add('completed');
          progressSteps[currentStep + 1].classList.add('active');
          
          currentStep++;
          
          // Scroll naar boven van form
          quoteForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
    
    // Previous button click handlers
    prevButtons.forEach(button => {
      button.addEventListener('click', function() {
        if (currentStep > 0) {
          formSteps[currentStep].classList.remove('active');
          formSteps[currentStep - 1].classList.add('active');
          
          progressSteps[currentStep].classList.remove('active');
          progressSteps[currentStep - 1].classList.remove('completed');
          progressSteps[currentStep - 1].classList.add('active');
          
          currentStep--;
          
          // Scroll naar boven van form
          quoteForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
    
    // Submit handler
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (valideerFormulier(quoteForm)) {
        // Toon loading state
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verzenden...';
        submitBtn.disabled = true;
        
        // Success simulatie (vervang door echte API call)
        setTimeout(() => {
          // Toon laatste stap (success)
          formSteps.forEach(step => step.classList.remove('active'));
          
          const successStep = document.querySelector('.form-step-success');
          if (successStep) {
            successStep.classList.add('active');
          }
          
          // Reset button
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          
          // Scroll naar het success bericht
          quoteForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1500);
      }
    });
  }
}

/**
 * Initialiseer feedback formulier
 */
function initFeedbackFormulier() {
  const feedbackForm = document.getElementById('feedbackForm');
  
  if (feedbackForm) {
    // Rating select
    const ratingInputs = feedbackForm.querySelectorAll('.rating-input');
    const ratingLabels = feedbackForm.querySelectorAll('.rating-label');
    
    ratingInputs.forEach((input, index) => {
      input.addEventListener('change', function() {
        // Reset all active classes
        ratingLabels.forEach(label => label.classList.remove('active'));
        
        // Add active class to selected and all previous
        for (let i = 0; i <= index; i++) {
          ratingLabels[i].classList.add('active');
        }
      });
    });
    
    // Form submission
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (valideerFormulier(feedbackForm)) {
        // Implementeer hier je verzendlogica
        const formStatus = feedbackForm.querySelector('.form-status-message');
        formStatus.innerHTML = '<div class="alert alert-success">Bedankt voor je feedback!</div>';
        feedbackForm.reset();
        
        // Verberg success bericht na 5 seconden
        setTimeout(() => {
          formStatus.innerHTML = '';
        }, 5000);
      }
    });
  }
}

/**
 * Algemene form validatie functie
 */
function initFormulierValidatie() {
  // Live validatie op input change
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        valideerInput(input);
      });
      
      input.addEventListener('input', function() {
        if (input.classList.contains('is-invalid')) {
          valideerInput(input);
        }
      });
    });
  });
}

/**
 * Valideer een specifiek input veld
 * @param {HTMLElement} input - Het input element om te valideren
 * @returns {boolean} - Is het veld geldig?
 */
function valideerInput(input) {
  const feedback = input.nextElementSibling?.classList.contains('form-feedback') 
    ? input.nextElementSibling 
    : document.createElement('div');
  
  // Required check
  if (input.hasAttribute('required') && !input.value.trim()) {
    input.classList.add('is-invalid');
    feedback.textContent = 'Dit veld is verplicht';
    feedback.className = 'form-feedback invalid-feedback';
    return false;
  }
  
  // Email validatie
  if (input.type === 'email' && input.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
      input.classList.add('is-invalid');
      feedback.textContent = 'Vul een geldig e-mailadres in';
      feedback.className = 'form-feedback invalid-feedback';
      return false;
    }
  }
  
  // Telefoonnummer validatie
  if (input.type === 'tel' && input.value.trim()) {
    // Basic validatie, kan worden aangepast op basis van wensen
    const telRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!telRegex.test(input.value.trim())) {
      input.classList.add('is-invalid');
      feedback.textContent = 'Vul een geldig telefoonnummer in';
      feedback.className = 'form-feedback invalid-feedback';
      return false;
    }
  }
  
  // Standaard: verwijder error styling
  input.classList.remove('is-invalid');
  
  // Voeg success styling toe als gewenst
  if (input.value.trim()) {
    input.classList.add('is-valid');
  }
  
  return true;
}

/**
 * Valideer een compleet formulier
 * @param {HTMLFormElement} form - Het formulier element
 * @returns {boolean} - Is het formulier geldig?
 */
function valideerFormulier(form) {
  const inputs = form.querySelectorAll('input, select, textarea');
  let isValid = true;
  
  // Valideer alle inputs
  inputs.forEach(input => {
    if (input.hasAttribute('required')) {
      const inputValid = valideerInput(input);
      if (!inputValid) {
        isValid = false;
      }
    }
  });
  
  return isValid;
}
