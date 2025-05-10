/**
 * Diensten Pagina JavaScript
 * 
 * Dit bestand bevat functionaliteit specifiek voor de dienstenpagina's:
 * - Statistiekenteller animatie
 * - FAQ accordeon functionaliteit
 */

document.addEventListener('DOMContentLoaded', function() {
    // Statistieken animatie
    initStatistiekenTeller();
    
    // FAQ accordeon
    initFaqAccordeon();
});

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
 * Initialiseert de FAQ accordeon functionaliteit
 */
function initFaqAccordeon() {
    const faqItems = document.querySelectorAll('.cyber-faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.cyber-faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Sluit alle open items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                const toggle = faqItem.querySelector('.cyber-faq-toggle i');
                toggle.className = 'fas fa-plus';
            });
            
            // Als het item niet actief was, open het
            if (!isActive) {
                item.classList.add('active');
                const toggle = item.querySelector('.cyber-faq-toggle i');
                toggle.className = 'fas fa-minus';
            }
        });
    });
} 