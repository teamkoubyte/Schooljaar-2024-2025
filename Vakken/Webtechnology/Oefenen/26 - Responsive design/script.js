// Hamburger menu functionaliteit
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
});
