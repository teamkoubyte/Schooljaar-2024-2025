/**
 * Forms Module
 * Beheert alle formulieren, validatie en verzending
 */

function initForms() {
  // Initialiseer contact formulier
  initContactForm();
  
  // Initialiseer offerte formulier
  initQuoteForm();
  
  // Initialiseer feedback formulier
  initFeedbackForm();
  
  // Algemene form validatie voor alle formulieren
  initFormValidation();
}

/**
 * Initialiseer contact formulier
 */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateForm(contactForm)) {
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
function initQuoteForm() {
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
      
      if (validateForm(quoteForm)) {
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
function initFeedbackForm() {
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
      
      if (validateForm(feedbackForm)) {
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
function initFormValidation() {
  // Live validatie op input change
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateInput(input);
      });
      
      input.addEventListener('input', function() {
        if (input.classList.contains('is-invalid')) {
          validateInput(input);
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
function validateInput(input) {
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
  
  // Email check
  if (input.type === 'email' && input.value.trim()) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(input.value)) {
      input.classList.add('is-invalid');
      feedback.textContent = 'Voer een geldig e-mailadres in';
      feedback.className = 'form-feedback invalid-feedback';
      return false;
    }
  }
  
  // Telefoon check
  if (input.type === 'tel' && input.value.trim()) {
    const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phonePattern.test(input.value)) {
      input.classList.add('is-invalid');
      feedback.textContent = 'Voer een geldig telefoonnummer in';
      feedback.className = 'form-feedback invalid-feedback';
      return false;
    }
  }
  
  // Alles goed, input is geldig
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
  feedback.textContent = '';
  return true;
}

/**
 * Valideer een volledig formulier
 * @param {HTMLFormElement} form - Het formulier om te valideren
 * @returns {boolean} - Is het formulier geldig?
 */
function validateForm(form) {
  const inputs = form.querySelectorAll('input, select, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!validateInput(input)) {
      isValid = false;
    }
  });
  
  return isValid;
}