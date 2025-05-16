// Character Creator JavaScript - Beginnersvriendelijk

// Wacht tot de pagina volledig is geladen
document.addEventListener("DOMContentLoaded", function() {
    // Bij het laden van de pagina, voeg event listeners toe aan de sliders
    document.getElementById("strength").addEventListener("input", updateStrengthValue);
    document.getElementById("speed").addEventListener("input", updateSpeedValue);
    document.getElementById("intelligence").addEventListener("input", updateIntelligenceValue);
    
    // Voeg ook event listener toe aan de "Create Character" knop
    document.getElementById("create-button").addEventListener("click", createCharacter);
    
    // Zorg dat de naam direct wordt bijgewerkt tijdens het typen
    document.getElementById("name").addEventListener("input", updateNameDisplay);
    
    // Zorg dat de type van het character direct wordt bijgewerkt
    document.getElementById("character-type").addEventListener("change", updateCharacterType);
});

// Functie om de waardes van kracht bij te werken en te tonen
function updateStrengthValue() {
    const value = document.getElementById("strength").value;
    document.getElementById("strength-value").textContent = value;
}

// Functie om de waardes van snelheid bij te werken en te tonen
function updateSpeedValue() {
    const value = document.getElementById("speed").value;
    document.getElementById("speed-value").textContent = value;
}

// Functie om de waardes van intelligentie bij te werken en te tonen
function updateIntelligenceValue() {
    const value = document.getElementById("intelligence").value;
    document.getElementById("intelligence-value").textContent = value;
}

// Functie om de naam direct bij te werken tijdens het typen
function updateNameDisplay() {
    const name = document.getElementById("name").value;
    // Als er geen naam is ingevuld, toon dan "Naam"
    document.getElementById("character-name").textContent = name || "Naam";
}

// Functie om het type van het character bij te werken
function updateCharacterType() {
    const type = document.getElementById("character-type").value;
    
    // Pas de avatar aan op basis van het geselecteerde type
    const avatarElement = document.getElementById("avatar");
    
    switch (type) {
        case "warrior":
            avatarElement.style.backgroundColor = "#ff9999"; // Roodachtig voor krijger
            break;
        case "mage":
            avatarElement.style.backgroundColor = "#9999ff"; // Blauwachtig voor tovenaar
            break;
        case "archer":
            avatarElement.style.backgroundColor = "#99ff99"; // Groenachtig voor boogschutter
            break;
    }
}

// Functie om het character te creëren wanneer op de knop wordt geklikt
function createCharacter() {
    // Haal alle waarden op van het formulier
    const name = document.getElementById("name").value || "Naamloos";
    const type = document.getElementById("character-type").value;
    const level = document.getElementById("level").value;
    const strength = document.getElementById("strength").value;
    const speed = document.getElementById("speed").value;
    const intelligence = document.getElementById("intelligence").value;
    
    // Zet de type text om in een leesbare vorm
    let typeText;
    switch (type) {
        case "warrior":
            typeText = "Krijger";
            break;
        case "mage":
            typeText = "Tovenaar";
            break;
        case "archer":
            typeText = "Boogschutter";
            break;
        default:
            typeText = "Onbekend";
    }
    
    // Update de resultaat kaart met alle informatie
    document.getElementById("result-name").textContent = name;
    document.getElementById("result-type").textContent = typeText;
    document.getElementById("result-level").textContent = level;
    document.getElementById("result-strength").textContent = strength;
    document.getElementById("result-speed").textContent = speed;
    document.getElementById("result-intelligence").textContent = intelligence;
    
    // Update de stat bars
    document.getElementById("strength-bar").style.width = (strength * 10) + "%";
    document.getElementById("speed-bar").style.width = (speed * 10) + "%";
    document.getElementById("intelligence-bar").style.width = (intelligence * 10) + "%";
    
    // Toon de resultaat kaart
    document.getElementById("result").classList.remove("hidden");
}
