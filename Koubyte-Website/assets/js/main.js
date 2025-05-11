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
        'ch': [9, 10],    // Zwitserland: 9-10 cijfers
        'at': [9, 11],    // Oostenrijk: 9-11 cijfers
        'dk': [8, 8],     // Denemarken: 8 cijfers
        'se': [9, 10],    // Zweden: 9-10 cijfers
        'no': [8, 8],     // Noorwegen: 8 cijfers
        'fi': [8, 10],    // Finland: 8-10 cijfers
        'ie': [9, 9],     // Ierland: 9 cijfers
        'pl': [9, 9],     // Polen: 9 cijfers
        
        // Noord-Amerika
        'us': [10, 10],   // Verenigde Staten: 10 cijfers
        'ca': [10, 10],   // Canada: 10 cijfers
        'mx': [10, 10],   // Mexico: 10 cijfers
        
        // Azië
        'cn': [11, 11],   // China: 11 cijfers
        'jp': [10, 10],   // Japan: 10 cijfers
        'kr': [9, 10],    // Zuid-Korea: 9-10 cijfers
        'in': [10, 10],   // India: 10 cijfers
        'sg': [8, 8],     // Singapore: 8 cijfers
        
        // Standaard voor andere landen
        'default': [7, 15]  // Minimaal 7, maximaal 15 cijfers voor anderen
    };
    
    // Functie om limiet voor een landcode te krijgen
    function getTelefoonnummerLimiet(landcode) {
        landcode = landcode.toLowerCase();
        return telefoonnummerLimieten[landcode] || telefoonnummerLimieten['default'];
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
                // Voeg code toe om de placeholder aan te passen
                return "Telefoonnummer";
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
