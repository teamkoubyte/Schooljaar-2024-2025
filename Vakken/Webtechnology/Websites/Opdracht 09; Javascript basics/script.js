document.addEventListener("DOMContentLoaded", function() {
   
    // Array Lijst met willekeurige woorden
    let randomWoorden = ["geweldig", "cool", "de beste", "fantastisch", "uitzonderlijk", "indrukwekkend"];

    // Kies een willekeurig woord
    let gekozenWoord = Math.floor(Math.random() * randomWoorden.length);
    
    // Voeg het gekozen woord toe aan de HTML-tag met id = "randomTekst"
    document.getElementById("randomTekst").innerHTML = randomWoorden[gekozenWoord];
        
});