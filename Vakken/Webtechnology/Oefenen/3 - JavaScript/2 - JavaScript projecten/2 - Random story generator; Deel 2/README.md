# 🎮 Random Story Generator: Deel 2 🎮

## 📋 Inleiding

> 💡 **Doel:** Voeg interactiviteit toe aan je verhaal-generator door gebruikersinvoer te verwerken.

Na deel 1, waarin je een dynamisch verhaal maakte met willekeurige elementen, gaan we nu een stap verder door gebruikers zelf invloed te laten hebben op het verhaal. We voegen formulieren toe en maken het verhaal pas zichtbaar na een klik op een knop.

![Interactive Story](https://i.imgur.com/dJfYsRh.png)

## 🔘 Stap 1: Knop die het verhaal toont

Eerst maken we een knop die het verhaal toont en het formulier verbergt wanneer erop wordt geklikt.

### CSS toevoegen

Voeg deze CSS-class toe aan je stylesheet om elementen te verbergen:

```css
.verborgen {
  display: none;
}

/* Styling voor de knop */
.knop {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.knop:hover {
  background-color: #45a049;
}

/* Frame voor formulieren */
.frame {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  color: #333;
}
```

### HTML-structuur aanpassen

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Interactive Story Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Your Adventure Awaits</h1>
    
    <!-- Formulier (zichtbaar bij laden) -->
    <div id="formulier" class="frame">
        <h2>Create Your Story</h2>
        <p>Fill in the details below to generate your unique adventure!</p>
        <a href="#" id="toonVerhaal" class="knop">Start Adventure</a>
    </div>
    
    <!-- Verhaal (verborgen bij laden) -->
    <div id="verhaal" class="verborgen frame">
        <div class="story-image">
            <img id="randomImage" src="" alt="Story image">
        </div>
        
        <div id="storyContent">
            <!-- Hier komt het verhaal via JavaScript -->
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript uitbreiden

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // Event listener voor de knop
  document
    .getElementById("toonVerhaal")
    .addEventListener("click", function (event) {
      // Voorkom dat de link naar de top van de pagina springt
      event.preventDefault();
      
      // Test of de knop werkt
      console.log("Toon verhaal");

      // Verberg het formulier en toon het verhaal
      document.getElementById("formulier").classList.add("verborgen");
      document.getElementById("verhaal").classList.remove("verborgen");
      
      // Hier komt de code voor het genereren van het verhaal
      generateStory();
    });
    
    // Functie om het verhaal te genereren (bevat code uit deel 1)
    function generateStory() {
        // Hier komt de verhaal-generator code
        // (Zelfde code als in deel 1, maar nu wordt deze aangeroepen na klikken op de knop)
        
        // Voorbeeld:
        let weersCondities = ["sunny", "rainy", "misty", "hot", "cold", "dark"];
        let randomWeer = Math.floor(Math.random() * weersCondities.length);
        let gekozenWeer = weersCondities[randomWeer];
        
        // Random afbeelding
        let images = ["forest1.jpg", "forest2.jpg", "forest3.jpg", "forest4.jpg"];
        let randomImage = Math.floor(Math.random() * images.length);
        document.getElementById("randomImage").src = "images/" + images[randomImage];
        
        // Verhaal genereren
        document.getElementById("storyContent").innerHTML = `
            <p>On a ${gekozenWeer} day, the adventure began...</p>
        `;
    }
});
```

| 🔍 Wat gebeurt hier? | 
|---------------------|
| 1. We voegen een event listener toe aan de knop |
| 2. Als er op de knop wordt geklikt, verbergen we het formulier (door de class "verborgen" toe te voegen) |
| 3. En tonen we het verhaal (door de class "verborgen" te verwijderen) |
| 4. Daarna roepen we de functie aan om het verhaal te genereren |

## 📝 Stap 2: Een tekstveld uitlezen

Nu voegen we een tekstveld toe waarmee de gebruiker zijn/haar naam kan invoeren.

### HTML-form toevoegen

Pas de formulier-sectie in je HTML aan:

```html
<div id="formulier" class="frame">
    <h2>Create Your Story</h2>
    <p>Fill in the details below to generate your unique adventure!</p>
    
    <form id="storyForm">
      <div class="form-group">
        <label class="formTitle">Your name:</label><br />
        <input type="text" id="naamTextfield" placeholder="Enter your name" />
      </div>
      
      <!-- Meer formulier-elementen komen hier later -->
      
      <a href="#" id="toonVerhaal" class="knop">Start Adventure</a>
    </form>
</div>
```

### CSS voor formulier-elementen

```css
.form-group {
  margin-bottom: 15px;
}

.formTitle {
  font-weight: bold;
  font-size: 1.1em;
  color: #333;
  margin-bottom: 5px;
  display: block;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.highlight {
  font-weight: bold;
  color: #FF5722;
  text-decoration: underline;
}
```

### JavaScript uitbreiden om de naam uit te lezen

Pas de `generateStory`-functie aan:

```javascript
function generateStory() {
    // Haal de naam uit het tekstveld
    let naam = document.getElementById("naamTextfield").value;
    
    // Als geen naam is ingevoerd, gebruik dan een standaardnaam
    if (naam.trim() === "") {
        naam = "Avontuurlijke reiziger";
    }
    
    console.log("Naam:", naam); // Test of het uitlezen gelukt is
    
    // Bestaande verhaal-generator code
    let weersCondities = ["sunny", "rainy", "misty", "hot", "cold", "dark"];
    let randomWeer = Math.floor(Math.random() * weersCondities.length);
    let gekozenWeer = weersCondities[randomWeer];
    
    // Random afbeelding
    let images = ["forest1.jpg", "forest2.jpg", "forest3.jpg", "forest4.jpg"];
    let randomImage = Math.floor(Math.random() * images.length);
    document.getElementById("randomImage").src = "images/" + images[randomImage];
    
    // Verhaal genereren met de naam
    document.getElementById("storyContent").innerHTML = `
        <p>On a ${gekozenWeer} day, <span class="highlight">${naam}</span> began an incredible journey.</p>
        <p>The trees whispered as <span class="highlight">${naam}</span> walked deeper into the forest.</p>
    `;
}
```

| 💡 Belangrijk | 
|-------------|
| 1. We lezen de waarde uit het tekstveld met `.value` |
| 2. We controleren of er een naam is ingevoerd met `trim()` en geven een standaardnaam als dat niet het geval is |
| 3. We voegen de naam toe aan het verhaal en geven deze de CSS-class "highlight" voor opvallende styling |

## 📻 Stap 3: Radio buttons uitlezen

Nu voegen we radio buttons toe waarmee gebruikers een vijand kunnen kiezen.

### HTML voor radio buttons

Voeg dit toe binnen je formulier:

```html
<div class="form-group">
  <label class="formTitle">Choose your enemy:</label><br />

  <input type="radio" name="enemy" id="enemy1" value="Dark Sorcerer" checked />
  <label for="enemy1">Dark Sorcerer</label><br />

  <input type="radio" name="enemy" id="enemy2" value="Shadow Dragon" />
  <label for="enemy2">Shadow Dragon</label><br />

  <input type="radio" name="enemy" id="enemy3" value="Ancient Golem" />
  <label for="enemy3">Ancient Golem</label><br />
</div>
```

### CSS voor radio buttons

```css
input[type="radio"] {
  margin-right: 5px;
}

input[type="radio"] + label {
  margin-right: 15px;
  cursor: pointer;
}

.enemy {
  color: #E91E63;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}
```

### JavaScript uitbreiden voor radio buttons

Pas de `generateStory`-functie verder aan:

```javascript
function generateStory() {
    // Haal de naam uit het tekstveld
    let naam = document.getElementById("naamTextfield").value;
    
    // Als geen naam is ingevoerd, gebruik dan een standaardnaam
    if (naam.trim() === "") {
        naam = "Avontuurlijke reiziger";
    }
    
    // Welke radio button optie is er gekozen?
    let enemyName = document.querySelector('input[name="enemy"]:checked').value;
    console.log("Enemy:", enemyName);
    
    // Bestaande code...
    let weersCondities = ["sunny", "rainy", "misty", "hot", "cold", "dark"];
    let randomWeer = Math.floor(Math.random() * weersCondities.length);
    let gekozenWeer = weersCondities[randomWeer];
    
    // Random afbeelding
    let images = ["forest1.jpg", "forest2.jpg", "forest3.jpg", "forest4.jpg"];
    let randomImage = Math.floor(Math.random() * images.length);
    document.getElementById("randomImage").src = "images/" + images[randomImage];
    
    // Verhaal genereren met de naam en vijand
    document.getElementById("storyContent").innerHTML = `
        <p>On a ${gekozenWeer} day, <span class="highlight">${naam}</span> began an incredible journey.</p>
        <p>The trees whispered as <span class="highlight">${naam}</span> walked deeper into the forest.</p>
        <p>Suddenly, the feared <span class="enemy">${enemyName}</span> appeared, blocking the path!</p>
        <p><span class="highlight">${naam}</span> needed to act quickly to defeat the <span class="enemy">${enemyName}</span>.</p>
    `;
}
```

| 📌 Uitleg | 
|----------|
| We gebruiken `document.querySelector('input[name="enemy"]:checked')` om de geselecteerde radio button te vinden |
| De `:checked` selector is een CSS pseudo-class die het geselecteerde element vindt |
| `.value` geeft ons de waarde van dat geselecteerde element |
| We voegen de vijand toe aan het verhaal met de CSS-class "enemy" voor opvallende styling |

## ✅ Stap 4: Checkbox buttons uitlezen

Als laatste voegen we checkboxes toe waarmee gebruikers wapens kunnen kiezen.

### HTML voor checkboxes

Voeg dit toe binnen je formulier:

```html
<div class="form-group">
  <label class="formTitle">Choose your weapons:</label><br />

  <input type="checkbox" id="weapon1" value="Enchanted Sword" checked />
  <label for="weapon1">Enchanted Sword</label><br />

  <input type="checkbox" id="weapon2" value="Magic Staff" />
  <label for="weapon2">Magic Staff</label><br />

  <input type="checkbox" id="weapon3" value="Dragonfire Bow" />
  <label for="weapon3">Dragonfire Bow</label><br />
  
  <input type="checkbox" id="weapon4" value="Ancient Shield" />
  <label for="weapon4">Ancient Shield</label><br />
</div>
```

### CSS voor checkboxes

```css
input[type="checkbox"] {
  margin-right: 5px;
}

input[type="checkbox"] + label {
  margin-right: 15px;
  cursor: pointer;
}

.weapon {
  color: #2196F3;
  font-weight: bold;
  font-style: italic;
}
```

### JavaScript uitbreiden voor checkboxes

Pas de `generateStory`-functie verder aan:

```javascript
function generateStory() {
    // Haal de naam uit het tekstveld
    let naam = document.getElementById("naamTextfield").value;
    
    // Als geen naam is ingevoerd, gebruik dan een standaardnaam
    if (naam.trim() === "") {
        naam = "Avontuurlijke reiziger";
    }
    
    // Welke radio button optie is er gekozen?
    let enemyName = document.querySelector('input[name="enemy"]:checked').value;
    
    // Methode 1: Handmatig checkboxen uitlezen
    // let sword = document.getElementById("weapon1").checked ? document.getElementById("weapon1").value : "";
    // let staff = document.getElementById("weapon2").checked ? document.getElementById("weapon2").value : "";
    
    // Methode 2: Automatisch alle geselecteerde checkboxen uitlezen
    let checkboxes = document.querySelectorAll('input[type="checkbox"]'); // zet alle checkboxes in een array
    let selectedWeapons = [];
    
    checkboxes.forEach(function (checkbox) {
      // loop door alle checkboxes
      if (checkbox.checked) {
        // checked?
        selectedWeapons.push(checkbox.value); // voeg toe aan array
      }
    });
    
    // Maak een string van de geselecteerde wapens
    let weaponString = "";
    
    if (selectedWeapons.length === 0) {
      weaponString = "bare hands"; // Geen wapens geselecteerd
    } 
    else if (selectedWeapons.length === 1) {
      weaponString = selectedWeapons[0]; // Één wapen geselecteerd
    }
    else {
      // Meerdere wapens geselecteerd - maak een lijst met "and" voor het laatste wapen
      let lastWeapon = selectedWeapons.pop();
      weaponString = selectedWeapons.join(", ") + " and " + lastWeapon;
    }
    
    console.log("Selected weapons: " + weaponString);
    
    // Bestaande code...
    let weersCondities = ["sunny", "rainy", "misty", "hot", "cold", "dark"];
    let randomWeer = Math.floor(Math.random() * weersCondities.length);
    let gekozenWeer = weersCondities[randomWeer];
    
    // Random afbeelding
    let images = ["forest1.jpg", "forest2.jpg", "forest3.jpg", "forest4.jpg"];
    let randomImage = Math.floor(Math.random() * images.length);
    document.getElementById("randomImage").src = "images/" + images[randomImage];
    
    // Genereer verschillende verhaaleindes op basis van gekozen wapens
    let ending = "";
    if (weaponString === "bare hands") {
      ending = `Without any weapons, <span class="highlight">${naam}</span> had to retreat and live to fight another day.`;
    } else {
      ending = `Equipped with the <span class="weapon">${weaponString}</span>, <span class="highlight">${naam}</span> was ready for battle against the <span class="enemy">${enemyName}</span>.`;
    }
    
    // Verhaal genereren met alle elementen
    document.getElementById("storyContent").innerHTML = `
        <p>On a ${gekozenWeer} day, <span class="highlight">${naam}</span> began an incredible journey.</p>
        <p>The trees whispered as <span class="highlight">${naam}</span> walked deeper into the forest.</p>
        <p>Suddenly, the feared <span class="enemy">${enemyName}</span> appeared, blocking the path!</p>
        <p>${ending}</p>
    `;
}
```

| 🔍 Wat gebeurt hier? | 
|---------------------|
| 1. We doorlopen alle checkboxes met `querySelectorAll` en `forEach` |
| 2. We slaan de waarden van geselecteerde checkboxes op in een array |
| 3. We maken een leesbare string van de geselecteerde wapens met komma's en "and" voor het laatste item |
| 4. We passen het verhaal aan op basis van de gekozen wapens |
| 5. Als er geen wapens zijn geselecteerd, krijgt het verhaal een andere afloop |

## 📊 Volledig Voorbeeld

### Uiteindelijke HTML (index.html)

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Interactive Story Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Your Adventure Awaits</h1>
    
    <!-- Formulier (zichtbaar bij laden) -->
    <div id="formulier" class="frame">
        <h2>Create Your Story</h2>
        <p>Fill in the details below to generate your unique adventure!</p>
        
        <form id="storyForm">
          <div class="form-group">
            <label class="formTitle">Your name:</label><br />
            <input type="text" id="naamTextfield" placeholder="Enter your name" />
          </div>
          
          <div class="form-group">
            <label class="formTitle">Choose your enemy:</label><br />
          
            <input type="radio" name="enemy" id="enemy1" value="Dark Sorcerer" checked />
            <label for="enemy1">Dark Sorcerer</label><br />
          
            <input type="radio" name="enemy" id="enemy2" value="Shadow Dragon" />
            <label for="enemy2">Shadow Dragon</label><br />
          
            <input type="radio" name="enemy" id="enemy3" value="Ancient Golem" />
            <label for="enemy3">Ancient Golem</label><br />
          </div>
          
          <div class="form-group">
            <label class="formTitle">Choose your weapons:</label><br />
          
            <input type="checkbox" id="weapon1" value="Enchanted Sword" checked />
            <label for="weapon1">Enchanted Sword</label><br />
          
            <input type="checkbox" id="weapon2" value="Magic Staff" />
            <label for="weapon2">Magic Staff</label><br />
          
            <input type="checkbox" id="weapon3" value="Dragonfire Bow" />
            <label for="weapon3">Dragonfire Bow</label><br />
            
            <input type="checkbox" id="weapon4" value="Ancient Shield" />
            <label for="weapon4">Ancient Shield</label><br />
          </div>
          
          <a href="#" id="toonVerhaal" class="knop">Start Adventure</a>
        </form>
    </div>
    
    <!-- Verhaal (verborgen bij laden) -->
    <div id="verhaal" class="verborgen frame">
        <div class="story-image">
            <img id="randomImage" src="" alt="Story image">
        </div>
        
        <div id="storyContent">
            <!-- Hier komt het verhaal via JavaScript -->
        </div>
        
        <a href="index.html" class="knop">Start Over</a>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### Uiteindelijke CSS (styles.css)

```css
@font-face {
    font-family: 'AdventureFont';
    src: url('fonts/adventure-font.ttf') format('truetype');
}

body {
    background-image: url('images/forest-bg.jpg');
    background-size: cover;
    color: #fff;
    font-family: 'AdventureFont', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

h1, h2 {
    text-align: center;
    margin-bottom: 20px;
}

/* Frame styling */
.frame {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    color: #333;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Verhaal verbergen */
.verborgen {
    display: none;
}

/* Knop styling */
.knop {
    display: inline-block;
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    text-decoration: none;
    text-align: center;
    margin: 20px auto;
    display: block;
    width: fit-content;
}

.knop:hover {
    background-color: #45a049;
}

/* Formulier styling */
.form-group {
    margin-bottom: 15px;
}

.formTitle {
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
    margin-bottom: 5px;
    display: block;
}

input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
}

input[type="radio"],
input[type="checkbox"] {
    margin-right: 5px;
}

input[type="radio"] + label,
input[type="checkbox"] + label {
    margin-right: 15px;
    cursor: pointer;
}

/* Story styling */
.story-image {
    text-align: center;
    margin: 20px 0;
}

.story-image img {
    max-width: 100%;
    border: 5px solid #fff;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
}

#storyContent {
    line-height: 1.6;
    font-size: 1.2em;
}

.highlight {
    font-weight: bold;
    color: #FF5722;
    text-decoration: underline;
}

.enemy {
    color: #E91E63;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.weapon {
    color: #2196F3;
    font-weight: bold;
    font-style: italic;
}
```

### Uiteindelijke JavaScript (script.js)

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // Event listener voor de knop
  document
    .getElementById("toonVerhaal")
    .addEventListener("click", function (event) {
      // Voorkom dat de link naar de top van de pagina springt
      event.preventDefault();
      
      // Test of de knop werkt
      console.log("Toon verhaal");

      // Verberg het formulier en toon het verhaal
      document.getElementById("formulier").classList.add("verborgen");
      document.getElementById("verhaal").classList.remove("verborgen");
      
      // Genereer het verhaal
      generateStory();
    });
    
    // Functie om het verhaal te genereren
    function generateStory() {
        // Haal de naam uit het tekstveld
        let naam = document.getElementById("naamTextfield").value;
        
        // Als geen naam is ingevoerd, gebruik dan een standaardnaam
        if (naam.trim() === "") {
            naam = "Avontuurlijke reiziger";
        }
        
        // Welke radio button optie is er gekozen?
        let enemyName = document.querySelector('input[name="enemy"]:checked').value;
        
        // Automatisch alle geselecteerde checkboxen uitlezen
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let selectedWeapons = [];
        
        checkboxes.forEach(function (checkbox) {
          if (checkbox.checked) {
            selectedWeapons.push(checkbox.value);
          }
        });
        
        // Maak een string van de geselecteerde wapens
        let weaponString = "";
        
        if (selectedWeapons.length === 0) {
          weaponString = "bare hands";
        } 
        else if (selectedWeapons.length === 1) {
          weaponString = selectedWeapons[0];
        }
        else {
          let lastWeapon = selectedWeapons.pop();
          weaponString = selectedWeapons.join(", ") + " and " + lastWeapon;
        }
        
        console.log("Selected weapons: " + weaponString);
        
        // Random weer kiezen
        let weersCondities = ["sunny", "rainy", "misty", "hot", "cold", "dark"];
        let randomWeer = Math.floor(Math.random() * weersCondities.length);
        let gekozenWeer = weersCondities[randomWeer];
        
        // Random locatie kiezen
        let locations = ["Enchanted Forest", "Misty Mountains", "Dark Cavern", "Ancient Ruins", "Crystal Lake"];
        let randomLocation = Math.floor(Math.random() * locations.length);
        let location = locations[randomLocation];
        
        // Random afbeelding
        let images = ["forest1.jpg", "forest2.jpg", "forest3.jpg", "forest4.jpg"];
        let randomImage = Math.floor(Math.random() * images.length);
        document.getElementById("randomImage").src = "images/" + images[randomImage];
        
        // Random getal genereren voor verhaalelement
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        
        // Genereer verschillende verhaaleindes op basis van gekozen wapens
        let ending = "";
        if (weaponString === "bare hands") {
          ending = `Without any weapons, <span class="highlight">${naam}</span> had to retreat and live to fight another day.`;
        } else {
          ending = `Equipped with the <span class="weapon">${weaponString}</span>, <span class="highlight">${naam}</span> was ready for battle against the <span class="enemy">${enemyName}</span>.`;
        }
        
        // Verhaal genereren met alle elementen
        document.getElementById("storyContent").innerHTML = `
            <p>On a ${gekozenWeer} day, <span class="highlight">${naam}</span> began an incredible journey through the ${location}.</p>
            <p>After walking for ${randomNumber} minutes, the trees whispered warnings as <span class="highlight">${naam}</span> ventured deeper into the unknown.</p>
            <p>Suddenly, the feared <span class="enemy">${enemyName}</span> appeared, blocking the path!</p>
            <p>${ending}</p>
            <p>And so, the story of <span class="highlight">${naam}</span> and the <span class="enemy">${enemyName}</span> became legend...</p>
        `;
    }
});
```

## 🚀 Uitbreidingsmogelijkheden

Je kunt je Random Story Generator verder uitbreiden met deze ideeën:

1. **📜 Meerdere verhaallijnen** - Voeg dropdown menu's toe om verschillende verhaaltypen te kiezen

2. **🎭 Karakter attributen** - Voeg sliders toe voor eigenschappen zoals kracht, intelligentie en snelheid

3. **🏆 Eindes met voorwaarden** - Laat het einde afhangen van de gekozen wapens én de vijand

4. **🖼️ Dynamische afbeeldingen** - Kies afbeeldingen die passen bij de gekozen vijand of wapens

5. **💾 Opslaan van verhalen** - Voeg een functie toe om het gegenereerde verhaal als tekst of PDF te downloaden

6. **🔊 Geluidseffecten** - Voeg passende achtergrondgeluiden toe afhankelijk van de scène

## 🎮 Praktische Tips

- **🧪 Test vaak** - Zorg dat je na elke wijziging test of alles nog werkt
- **🎨 Consistent ontwerp** - Houd een consistente stijl en kleurthema aan voor een professionele uitstraling
- **📱 Responsiviteit** - Zorg dat je formulier en verhaal er ook goed uitzien op mobiele apparaten
- **🔍 Browser console** - Gebruik `console.log()` om waardes te controleren tijdens het ontwikkelen
- **⌨️ Form validatie** - Overweeg om validatie toe te voegen voor gebruikersinvoer

> 🌟 **Challenge:** Probeer een functie toe te voegen waarmee gebruikers hun eigen verhaal kunnen downloaden of delen via sociale media!

---

Met deze technieken kun je interactieve verhalen maken die reageren op gebruikersinvoer. Je hebt nu de basisvaardigheden om formulieren uit te lezen en deze informatie te verwerken in dynamische content!
