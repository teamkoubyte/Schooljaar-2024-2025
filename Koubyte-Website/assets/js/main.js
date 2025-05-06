/**
 * Koubyte - Freelance IT Services
 * Main JavaScript File
 */

// Wacht tot het document volledig is geladen
document.addEventListener('DOMContentLoaded', function() {
    // Initialiseer alle functionaliteiten
    initNavigation();
    initScrollAnimations();
    initContactForms();
    initAppointmentScheduler();
    initMaps();
    initPackageSelection();
    initThemeToggle();
    initCounters();
    initSmoothScroll();
    initMobileDetection();
    initTooltips();
    initBackToTop();
});

/**
 * Navigatie Functies
 * Beheert navigatiebalk en mobiel menu
 */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Verandert navigatie bij scrollen
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Hamburger menu toggle voor mobiel
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Sluit menu bij klikken op links
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        // Sluit menu bij klikken buiten menu
        document.addEventListener('click', function(event) {
            const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
            if (!isClickInside && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }

    // Markeer actieve navigatielink
    highlightActiveNavLink();
}

/**
 * Markeer huidige pagina in navigatie
 */
function highlightActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check of het een externe link is of een sectie op de huidige pagina
        if (href.startsWith('#')) {
            // Het is een sectie link, voeg scroll event toe
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    
                    window.scrollTo({
                        top: targetPosition - navbarHeight - 20,
                        behavior: 'smooth'
                    });
                }
            });
        } else if (href === currentPath || (currentPath.endsWith('/') && href === 'index.html') || (currentPath.endsWith('index.html') && href === '/')) {
            // Het is de huidige pagina
            link.classList.add('active');
        }
    });
}

/**
 * Scroll Animaties
 * Animeert elementen wanneer ze in beeld komen
 */
function initScrollAnimations() {
    // Selecteer alle elementen met animatie classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-down, .slide-left, .slide-right');
    
    // Observer opties
    const options = {
        root: null, // viewport is root
        rootMargin: '0px',
        threshold: 0.1 // 10% van element moet zichtbaar zijn
    };
    
    // Intersection Observer aanmaken
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Stop met observeren nadat animatie is uitgevoerd
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Observer toepassen op alle animatie elementen
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Contact Formulieren
 * Valideert en verzendt contact en offerte formulieren
 */
function initContactForms() {
    const contactForm = document.getElementById('contactForm');
    const quoteForm = document.getElementById('quoteForm');
    
    // Contact formulier
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(contactForm)) {
                // Toon laad status
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verzenden...';
                
                // Verzamel formulier data
                const formData = new FormData(contactForm);
                const formDataObj = {};
                formData.forEach((value, key) => {
                    formDataObj[key] = value;
                });
                
                // Email verzenden via API of formsubmit.co
                sendEmail(formDataObj, 'contact')
                    .then(response => {
                        showFormSuccess(contactForm, 'Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.');
                        contactForm.reset();
                    })
                    .catch(error => {
                        showFormError(contactForm, 'Er is iets misgegaan bij het verzenden. Probeer het later opnieuw of neem telefonisch contact op.');
                    })
                    .finally(() => {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalBtnText;
                    });
            }
        });
    }
    
    // Offerte formulier
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(quoteForm)) {
                // Toon laad status
                const submitBtn = quoteForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verzenden...';
                
                // Verzamel formulier data
                const formData = new FormData(quoteForm);
                const formDataObj = {};
                formData.forEach((value, key) => {
                    formDataObj[key] = value;
                });
                
                // Email verzenden via API of formsubmit.co
                sendEmail(formDataObj, 'quote')
                    .then(response => {
                        showFormSuccess(quoteForm, 'Bedankt voor je offerteaanvraag! Ik zal zo snel mogelijk een offerte op maat voor je opstellen.');
                        quoteForm.reset();
                    })
                    .catch(error => {
                        showFormError(quoteForm, 'Er is iets misgegaan bij het verzenden. Probeer het later opnieuw of neem telefonisch contact op.');
                    })
                    .finally(() => {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalBtnText;
                    });
            }
        });
    }
    
    // Voeg input validatie toe aan alle formulieren
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            // Valideer bij verlaten van veld
            input.addEventListener('blur', function() {
                validateInput(input);
            });
            
            // Clear error bij typen
            input.addEventListener('input', function() {
                if (input.classList.contains('is-invalid')) {
                    validateInput(input);
                }
            });
        });
    });
}

/**
 * Valideer een formulier input
 * @param {HTMLElement} input - Het input element om te valideren
 */
function validateInput(input) {
    // Haal feedback element op of maak het aan
    let feedback = input.nextElementSibling;
    if (!feedback || !feedback.classList.contains('invalid-feedback')) {
        feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        input.parentNode.insertBefore(feedback, input.nextSibling);
    }
    
    // Reset validatie status
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');
    feedback.textContent = '';
    
    // Skip validatie als veld leeg is en niet verplicht
    if (!input.hasAttribute('required') && !input.value.trim()) {
        return true;
    }
    
    // Valideer op basis van type
    if (input.hasAttribute('required') && !input.value.trim()) {
        // Verplicht veld
        input.classList.add('is-invalid');
        feedback.textContent = 'Dit veld is verplicht';
        return false;
    } else if (input.type === 'email' && input.value.trim()) {
        // Email validatie
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value)) {
            input.classList.add('is-invalid');
            feedback.textContent = 'Voer een geldig e-mailadres in';
            return false;
        }
    } else if (input.type === 'tel' && input.value.trim()) {
        // Telefoonnummer validatie (basis)
        const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if (!phonePattern.test(input.value)) {
            input.classList.add('is-invalid');
            feedback.textContent = 'Voer een geldig telefoonnummer in';
            return false;
        }
    }
    
    // Als we hier komen, is het veld geldig
    input.classList.add('is-valid');
    return true;
}

/**
 * Valideer een compleet formulier
 * @param {HTMLFormElement} form - Het formulier om te valideren
 */
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateInput(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

/**
 * Toon succes bericht voor formulier
 * @param {HTMLFormElement} form - Het formulier
 * @param {string} message - Het bericht om te tonen
 */
function showFormSuccess(form, message) {
    // Zoek status bericht container of maak het aan
    let statusElement = form.querySelector('.form-status');
    if (!statusElement) {
        statusElement = document.createElement('div');
        statusElement.className = 'form-status mt-3';
        form.prepend(statusElement);
    }
    
    statusElement.innerHTML = `<div class="alert alert-success">${message}</div>`;
    
    // Scroll naar status bericht
    statusElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Verberg na 5 seconden
    setTimeout(() => {
        statusElement.innerHTML = '';
    }, 5000);
}

/**
 * Toon error bericht voor formulier
 * @param {HTMLFormElement} form - Het formulier
 * @param {string} message - Het bericht om te tonen
 */
function showFormError(form, message) {
    // Zoek status bericht container of maak het aan
    let statusElement = form.querySelector('.form-status');
    if (!statusElement) {
        statusElement = document.createElement('div');
        statusElement.className = 'form-status mt-3';
        form.prepend(statusElement);
    }
    
    statusElement.innerHTML = `<div class="alert alert-danger">${message}</div>`;
    
    // Scroll naar status bericht
    statusElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Verberg na 5 seconden
    setTimeout(() => {
        statusElement.innerHTML = '';
    }, 5000);
}

/**
 * Email versturen via API of externe service
 * @param {Object} data - De formulier data om te verzenden
 * @param {string} type - Het type formulier (contact, quote, enz.)
 */
function sendEmail(data, type) {
    // Je kunt hier een echte API call implementeren of gebruik maken van een service als formsubmit.co
    // Voor deze demo gebruiken we een promise die altijd succes simuleert
    
    return new Promise((resolve, reject) => {
        // Simuleer API call met timeout
        setTimeout(() => {
            // Log de data (in productie zou je dit niet doen)
            console.log('Form data verzonden:', data, 'Type:', type);
            
            // Voor echte implementatie, uncomment en pas aan:
            /*
            fetch('https://formsubmit.co/ajax/info@koubyte.be', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    _subject: type === 'contact' ? 'Nieuw contactverzoek' : 'Nieuwe offerteaanvraag',
                })
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
            */
            
            // Voor demo: altijd succesvol
            resolve({ success: true });
        }, 1500);
    });
}

/**
 * Afspraak Scheduler
 * Beheert de afspraakplanner functionaliteit
 */
function initAppointmentScheduler() {
    const appointmentForm = document.getElementById('appointmentForm');
    const datePickerInput = document.getElementById('appointmentDate');
    const timeSlotContainer = document.getElementById('timeSlots');
    
    if (!appointmentForm || !datePickerInput || !timeSlotContainer) return;
    
    // Configureer datepicker (als je een library zoals flatpickr gebruikt)
    // Als je geen library gebruikt, implementeer eigen datepicker logic
    if (typeof flatpickr !== 'undefined') {
        const today = new Date();
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 2); // 2 maanden vooruit boeken
        
        flatpickr(datePickerInput, {
            minDate: today,
            maxDate: maxDate,
            disable: [
                function(date) {
                    // Disable weekends
                    return (date.getDay() === 0 || date.getDay() === 6);
                }
            ],
            locale: {
                firstDayOfWeek: 1, // Maandag als eerste dag
                weekdays: {
                    shorthand: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
                    longhand: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
                },
                months: {
                    shorthand: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                    longhand: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
                }
            },
            onChange: function(selectedDates, dateStr) {
                // Wanneer datum verandert, update tijdslots
                updateTimeSlots(dateStr);
            }
        });
    } else {
        // Fallback voor als flatpickr niet beschikbaar is
        datePickerInput.type = 'date';
        
        // Set min date to today
        const today = new Date().toISOString().split('T')[0];
        datePickerInput.min = today;
        
        // Set max date to 2 months from now
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 2);
        datePickerInput.max = maxDate.toISOString().split('T')[0];
        
        datePickerInput.addEventListener('change', function() {
            updateTimeSlots(this.value);
        });
    }
    
    // Formulier verzending
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Controleer of er een tijdslot is geselecteerd
        const selectedTimeSlot = document.querySelector('input[name="timeSlot"]:checked');
        if (!selectedTimeSlot) {
            alert('Selecteer een beschikbaar tijdslot.');
            return;
        }
        
        if (validateForm(appointmentForm)) {
            // Toon laad status
            const submitBtn = appointmentForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verzenden...';
            
            // Verzamel formulier data
            const formData = new FormData(appointmentForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Voeg geselecteerde datum en tijd toe aan de data
            formDataObj.appointmentDateTime = `${datePickerInput.value} ${selectedTimeSlot.value}`;
            
            // Email verzenden via API
            sendEmail(formDataObj, 'appointment')
                .then(response => {
                    showFormSuccess(appointmentForm, 'Afspraak succesvol ingepland! Je ontvangt een bevestiging per e-mail.');
                    appointmentForm.reset();
                    timeSlotContainer.innerHTML = '';
                })
                .catch(error => {
                    showFormError(appointmentForm, 'Er is iets misgegaan bij het inplannen. Probeer het later opnieuw of neem telefonisch contact op.');
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                });
        }
    });
    
    /**
     * Update beschikbare tijdslots op basis van gekozen datum
     * @param {string} dateStr - De geselecteerde datum
     */
    function updateTimeSlots(dateStr) {
        if (!dateStr) return;
        
        // In een echte applicatie zou je hier beschikbare tijdslots ophalen van een server
        // Voor deze demo gebruiken we vaste tijdslots
        
        // Leeg de container
        timeSlotContainer.innerHTML = '';
        
        // Voeg tijdslots header toe
        const header = document.createElement('h4');
        header.textContent = 'Beschikbare tijdslots:';
        timeSlotContainer.appendChild(header);
        
        // Voorbeeld tijdslots (normaal zou je dit van je server ophalen)
        const timeSlots = [
            { time: '09:00', available: true },
            { time: '10:00', available: true },
            { time: '11:00', available: true },
            { time: '13:00', available: true },
            { time: '14:00', available: true },
            { time: '15:00', available: false },
            { time: '16:00', available: true }
        ];
        
        // Maak een div voor alle slots
        const slotsContainer = document.createElement('div');
        slotsContainer.className = 'time-slots-grid';
        
        // Voeg tijdslots toe
        timeSlots.forEach(slot => {
            const slotElement = document.createElement('div');
            slotElement.className = 'time-slot';
            
            if (slot.available) {
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = 'timeSlot';
                input.id = `slot-${slot.time}`;
                input.value = slot.time;
                
                const label = document.createElement('label');
                label.htmlFor = `slot-${slot.time}`;
                label.textContent = slot.time;
                
                slotElement.appendChild(input);
                slotElement.appendChild(label);
            } else {
                slotElement.classList.add('unavailable');
                slotElement.textContent = `${slot.time} (Bezet)`;
            }
            
            slotsContainer.appendChild(slotElement);
        });
        
        timeSlotContainer.appendChild(slotsContainer);
        
        // Maak container zichtbaar
        timeSlotContainer.style.display = 'block';
    }
}

/**
 * Google Maps Integratie
 * Toont locatie zonder exact adres
 */
function initMaps() {
    const mapContainer = document.getElementById('locationMap');
    
    if (!mapContainer) return;
    
    // Check of Google Maps API geladen is
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        // Laad Google Maps API
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initGoogleMap`;
        script.defer = true;
        script.async = true;
        document.head.appendChild(script);
        
        // Globale callback functie
        window.initGoogleMap = function() {
            createMap();
        };
    } else {
        // Als API al geladen is
        createMap();
    }
    
    function createMap() {
        // Locatie Mechelen centrum (niet het exacte adres)
        const mechelen = { lat: 51.0259, lng: 4.4776 };
        
        // Maak de map aan
        const map = new google.maps.Map(mapContainer, {
            center: mechelen,
            zoom: 14,
            styles: [
                {
                    "featureType": "poi",
                    "stylers": [{ "visibility": "off" }]
                }
            ],
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
        });
        
        // Voeg marker toe voor Mechelen centrum
        const marker = new google.maps.Marker({
            position: mechelen,
            map: map,
            title: 'Koubyte - Mechelen',
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: '#1751E8',
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 2
            }
        });
        
        // Voeg circle toe om aan te geven dat dit een algemeen gebied is
        const circle = new google.maps.Circle({
            strokeColor: '#1751E8',
            strokeOpacity: 0.3,
            strokeWeight: 2,
            fillColor: '#1751E8',
            fillOpacity: 0.1,
            map: map,
            center: mechelen,
            radius: 800 // 800 meter radius
        });
        
        // Voeg info window toe
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="map-info-window">
                    <h4>Koubyte</h4>
                    <p>IT & Web Solutions</p>
                    <p>Mechelen, België</p>
                </div>
            `
        });
        
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
        
        // Open info window bij laden
        infoWindow.open(map, marker);
    }
}

/**
 * Pakket Selectie Functionaliteit
 * Voor het kiezen en aanpassen van service pakketten
 */
function initPackageSelection() {
    const packageSelectors = document.querySelectorAll('.package-selector');
    const serviceCustomizers = document.querySelectorAll('.service-customizer');
    
    // Package type selectie
    packageSelectors.forEach(selector => {
        if (!selector) return;
        
        const options = selector.querySelectorAll('.package-option');
        const selectedPackageInput = document.getElementById('selectedPackage');
        
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Verwijder active class van alle opties
                options.forEach(opt => opt.classList.remove('active'));
                
                // Voeg active class toe aan geselecteerde optie
                this.classList.add('active');
                
                // Update hidden input met geselecteerd pakket
                if (selectedPackageInput) {
                    selectedPackageInput.value = this.getAttribute('data-package');
                }
                
                // Update prijs indicatie
                updateTotalPrice();
                
                // Toon passende service customizer
                const packageType = this.getAttribute('data-package');
                showServiceCustomizer(packageType);
            });
        });
    });
    
    // Service customizers
    function showServiceCustomizer(packageType) {
        // Verberg alle customizers
        serviceCustomizers.forEach(customizer => {
            customizer.style.display = 'none';
        });
        
        // Toon de relevante customizer
        const relevantCustomizer = document.querySelector(`.service-customizer[data-package="${packageType}"]`);
        if (relevantCustomizer) {
            relevantCustomizer.style.display = 'block';
            
            // Activeer de eerste optie per customizer sectie als standaard
            const sections = relevantCustomizer.querySelectorAll('.customizer-section');
            sections.forEach(section => {
                const options = section.querySelectorAll('.customizer-option');
                if (options.length > 0 && !section.querySelector('.customizer-option.active')) {
                    options[0].click();
                }
            });
        }
    }
    
    // Service opties in customizers
    document.querySelectorAll('.customizer-option').forEach(option => {
        option.addEventListener('click', function() {
            const section = this.closest('.customizer-section');
            
            // Bij radio-style opties (één keuze per sectie)
            if (section.getAttribute('data-select-type') === 'single') {
                // Deactiveer andere opties in dezelfde sectie
                section.querySelectorAll('.customizer-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                
                // Activeer huidige optie
                this.classList.add('active');
            } 
            // Bij checkbox-style opties (meerdere keuzes mogelijk)
            else {
                this.classList.toggle('active');
            }
            
            // Update prijs
            updateTotalPrice();
        });
    });
    
    // Update totaalprijs op basis van selecties
    function updateTotalPrice() {
        const totalPriceElement = document.getElementById('totalPrice');
        if (!totalPriceElement) return;
        
        // Start met basis pakketprijs
        let totalPrice = 0;
        
        // Haal geselecteerd pakket op
        const selectedPacket = document.querySelector('.package-option.active');
        if (selectedPacket) {
            totalPrice += parseFloat(selectedPacket.getAttribute('data-price') || 0);
        }
        
        // Voeg prijs voor alle actieve opties toe
        document.querySelectorAll('.customizer-option.active').forEach(option => {
            totalPrice += parseFloat(option.getAttribute('data-price') || 0);
        });
        
        // Update het totaalprijs element
        totalPriceElement.textContent = `€${totalPrice.toFixed(2)}`;
        
        // Update hidden input voor form submission
        const totalPriceInput = document.getElementById('totalPriceInput');
        if (totalPriceInput) {
            totalPriceInput.value = totalPrice.toFixed(2);
        }
    }
}

/**
 * Dark/Light Theme Toggle
 * Beheert de thema voorkeur van de gebruiker
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    // Check voor opgeslagen voorkeur
    const storedTheme = localStorage.getItem('theme') || 'light';
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Stel initieel thema in
    if (storedTheme === 'dark' || (storedTheme === null && prefersDarkScheme)) {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
    
    // Luister naar thema toggle
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            
            // Update meta theme color
            const metaThemeColor = document.querySelector('meta[name="theme-color"]');
            if (metaThemeColor) {
                metaThemeColor.setAttribute('content', '#121212');
            }
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            
            // Update meta theme color
            const metaThemeColor = document.querySelector('meta[name="theme-color"]');
            if (metaThemeColor) {
                metaThemeColor.setAttribute('content', '#1751E8');
            }
        }
    });
}

/**
 * Counter Animation
 * Animeert statistische getallen bij in beeld komen
 */
function initCounters() {
    const counters = document.querySelectorAll('.counter-value');
    
    if (counters.length === 0) return;
    
    const options = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // ms
                const increment = Math.ceil(target / (duration / 16)); // Voor 60fps
                
                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = current;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, options);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

/**
 * Smooth Scroll
 * Zorgt voor vloeiend scrollen naar anker links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - navbarHeight - 20,
                    behavior: 'smooth'
                });
                
                // Update URL zonder page refresh
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Mobiele Detectie
 * Past UI elementen aan voor mobiele apparaten
 */
function initMobileDetection() {
    function updateForMobile() {
        const isMobile = window.innerWidth < 768;
        document.body.classList.toggle('is-mobile', isMobile);
        
        // Pas specifieke elementen aan voor mobiel
        if (isMobile) {
            // Bijvoorbeeld afspraak scheduler aanpassen
            const timeSlots = document.getElementById('timeSlots');
            if (timeSlots) {
                timeSlots.classList.add('mobile-time-slots');
            }
            
            // Bijvoorbeeld service cards aanpassen
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => {
                card.classList.add('service-card-mobile');
            });
        } else {
            // Desktop-specifieke aanpassingen
            const timeSlots = document.getElementById('timeSlots');
            if (timeSlots) {
                timeSlots.classList.remove('mobile-time-slots');
            }
            
            // Reset service cards
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => {
                card.classList.remove('service-card-mobile');
            });
        }
    }
    
    // Voer uit bij laden
    updateForMobile();
    
    // Voer uit bij resizen
    window.addEventListener('resize', updateForMobile);
}

/**
 * Tooltips
 * Initialiseert tooltip functionaliteit
 */
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip');
        
        // Maak tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = tooltipText;
        
        // Voeg tooltip toe aan body
        document.body.appendChild(tooltip);
        
        // Toon tooltip bij hover
        element.addEventListener('mouseenter', () => {
            const rect = element.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + window.scrollY + 'px';
            tooltip.classList.add('visible');
        });
        
        // Verberg tooltip bij mouse leave
        element.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });
    });
}

/**
 * Back to Top knop
 * Initialiseert 'terug naar boven' knop
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    // Toon/verberg knop op basis van scroll positie
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll naar boven bij klikken
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Helper functies
 */

/**
 * Genereert een unieke ID
 * @returns {string} Een unieke ID string
 */
function generateUniqueId() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Formatteert een datum in Dutch format
 * @param {Date|string} date - Datum om te formatteren
 * @returns {string} Geformatteerde datum (DD-MM-YYYY)
 */
function formatDateDutch(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    
    return `${day}-${month}-${year}`;
}

/**
 * Detecteert of een element in de viewport is
 * @param {HTMLElement} element - Element om te checken
 * @returns {boolean} Is het element zichtbaar?
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

