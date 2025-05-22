# 🎲 Random Story Generator: Deel 1 🎲

## 📋 Inleiding

> 💡 **Doel:** Leer hoe je JavaScript kunt gebruiken om een dynamisch verhaal te maken met willekeurige elementen.

In dit project maak je een interactieve website die elke keer dat je de pagina laadt een ander verhaal genereert door verschillende elementen willekeurig te kiezen.

![Random Story Generator](https://i.imgur.com/yT6QYkw.png)

## 🏗️ Stap 1: Random verhaal elementen

Begin met een eenvoudige HTML-structuur en voeg JavaScript toe om willekeurige elementen te genereren:

### HTML-structuur
```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Random Story Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>On a <span id="weer">sunny</span> monday.</p>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript-code in script.js
```javascript
document.addEventListener("DOMContentLoaded", function () {
  // weer
  let randomWordsWeer = ["sunny", "rainy", "misty", "hot", "cold", "dark"]; // Lijst met willekeurige woorden
  let chosenWordWeer = Math.floor(Math.random() * randomWordsWeer.length); // Kies een willekeurig woord uit de lijst
  document.getElementById("weer").innerHTML = randomWordsWeer[chosenWordWeer]; // Voeg het gekozen woord toen aand de HTML-tag met de juiste ID
});
```

| 🔍 Wat gebeurt hier? | 
|---------------------|
| 1. We wachten tot de pagina is geladen (`DOMContentLoaded`) |
| 2. We maken een array (lijst) met verschillende weersomstandigheden |
| 3. We berekenen een willekeurige index binnen de lengte van de lijst |
| 4. We vervangen de inhoud van het element met id "weer" door het gekozen woord |

## 🎨 Stap 2: CSS-styling

Maak je verhaal visueel aantrekkelijker met CSS-styling:

### Downloaden van custom fonts
1. Bezoek [Fontesk](https://fontesk.com)
2. Download een lettertype dat bij je verhaal past
3. Maak een `fonts` map in je project en voeg het lettertype daar toe

### CSS-bestand aanmaken (styles.css)
```css
/* Lettertype importeren */
@font-face {
    font-family: 'StoryFont';
    src: url('fonts/jouw-font-bestand.ttf') format('truetype');
}

body {
    background-image: url('images/background.jpg');
    background-size: cover; /* Voor fullscreen achtergrond */
    /* OF */
    /* background-repeat: repeat; */ /* Voor herhalend patroon */
    color: #fff; /* Lichte tekstkleur voor leesbaarheid */
    font-family: 'StoryFont', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Schaduw voor betere leesbaarheid */
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    font-size: 3em;
    text-align: center;
    margin-bottom: 30px;
}

p {
    font-size: 1.5em;
    line-height: 1.6;
    background-color: rgba(0, 0, 0, 0.6); /* Semi-transparante achtergrond voor tekst */
    padding: 20px;
    border-radius: 10px;
}

/* Styling voor specifieke elementen in je verhaal */
span {
    font-weight: bold;
}
```

> 🌟 **Tip:** Zorg ervoor dat je tekst altijd leesbaar blijft op de achtergrond. Gebruik technieken zoals tekstschaduw, een semi-transparante tekstachtergrond of een contrasterende tekstkleur.

## 🖼️ Stap 3: Random afbeelding toevoegen

### HTML aanpassen
Voeg een afbeeldingselement toe aan je HTML:

```html
<div class="story-image">
    <img id="randomImage" src="" alt="Story image">
</div>
```

### JavaScript uitbreiden
Voeg code toe om willekeurig een afbeelding te kiezen:

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // weer
  let randomWordsWeer = ["sunny", "rainy", "misty", "hot", "cold", "dark"];
  let chosenWordWeer = Math.floor(Math.random() * randomWordsWeer.length);
  document.getElementById("weer").innerHTML = randomWordsWeer[chosenWordWeer];
  
  // random afbeelding
  let images = ["scene1.jpg", "scene2.jpg", "scene3.jpg", "scene4.jpg"];
  let randomImage = Math.floor(Math.random() * images.length);
  document.getElementById("randomImage").src = "images/" + images[randomImage];
});
```

### Tips voor afbeeldingen

| 🎨 Bronnen voor afbeeldingen | 
|---------------------------|
| • [DALL-E](https://labs.openai.com) • [Midjourney](https://www.midjourney.com) • [Stable Diffusion](https://stability.ai) |

![AI Generated Images](https://i.imgur.com/JnWnp2y.png)

> 💡 **TIP:** Gebruik AI image generators om afbeeldingen te maken die allemaal dezelfde stijl en thema hebben. Zo krijg je een consistente uitstraling.

## 🔄 Stap 4: Random CSS

Maak de styling van je pagina ook dynamisch met JavaScript:

### JavaScript uitbreiden

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // weer
  let randomWordsWeer = ["sunny", "rainy", "misty", "hot", "cold", "dark"];
  let chosenWordWeer = Math.floor(Math.random() * randomWordsWeer.length);
  let weerElement = document.getElementById("weer");
  weerElement.innerHTML = randomWordsWeer[chosenWordWeer];
  
  // CSS styling aanpassen op basis van het weer
  switch(randomWordsWeer[chosenWordWeer]) {
    case "sunny":
      weerElement.style.color = "#FFD700"; // Goudgeel
      break;
    case "rainy":
      weerElement.style.color = "#1E90FF"; // Blauw
      break;
    case "misty":
      weerElement.style.color = "#CCCCCC"; // Grijs
      break;
    case "hot":
      weerElement.style.color = "#FF4500"; // Rood-oranje
      break;
    case "cold":
      weerElement.style.color = "#00CED1"; // IJsblauw
      break;
    case "dark":
      weerElement.style.color = "#483D8B"; // Donker paars
      break;
  }
  
  // random afbeelding
  let images = ["scene1.jpg", "scene2.jpg", "scene3.jpg", "scene4.jpg"];
  let randomImage = Math.floor(Math.random() * images.length);
  document.getElementById("randomImage").src = "images/" + images[randomImage];
});
```

| 🎭 Voorbeelden van dynamische CSS | 
|--------------------------------|
| • Verander tekstkleur op basis van karakter |
| • Pas achtergrondkleur aan op basis van locatie |
| • Wijzig lettertypes op basis van tijdsperiode |
| • Verander randen en schaduwen afhankelijk van stemming |

## 🔢 Stap 5: Random getal

### Verschillende manieren om random getallen te genereren:

```javascript
// Random decimaal getal tussen 0 (inclusief) en 1 (exclusief)
let randomDecimal = Math.random();

// Random decimaal getal tussen 0 en 9.999...
let randomTenDecimal = Math.random() * 10;

// Random geheel getal tussen 0 en 9
let randomInteger = Math.floor(Math.random() * 10);

// Random geheel getal tussen 1 en 10
let randomIntegerOneToTen = Math.floor(Math.random() * 10) + 1;

// Random geheel getal tussen min en max (inclusief beide)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### Toevoegen aan je verhaal

HTML uitbreiden:
```html
<p>On a <span id="weer">sunny</span> monday, <span id="characterName">the hero</span> walked <span id="steps">0</span> steps through the forest.</p>
```

JavaScript uitbreiden:
```javascript
document.addEventListener("DOMContentLoaded", function () {
  // Bestaande code...
  
  // Random aantal stappen (tussen 10 en 100)
  let randomSteps = Math.floor(Math.random() * 91) + 10; // 91 mogelijke getallen (0-90) + 10 = 10-100
  document.getElementById("steps").innerHTML = randomSteps;
});
```

## 🧩 Stap 6: Variabelen gebruiken

### Types variabelen in JavaScript

| Type | Voorbeeld | Beschrijving |
|------|-----------|-------------|
| `var` | `var x = 5;` | Oudere manier, vermijd dit vanwege scope-problemen |
| `let` | `let y = 10;` | Moderne manier, waarde kan later aangepast worden |
| `const` | `const pi = 3.14;` | Constante waarde die niet kan worden gewijzigd |

### Variabelen in je verhaal gebruiken

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // Karakter gegevens in variabelen opslaan
  const characterName = "Elindra";
  let characterLevel = Math.floor(Math.random() * 50) + 1; // Random level tussen 1-50
  
  // Weer kiezen
  let randomWordsWeer = ["sunny", "rainy", "misty", "hot", "cold", "dark"];
  let chosenWordWeer = Math.floor(Math.random() * randomWordsWeer.length);
  let weerElement = document.getElementById("weer");
  weerElement.innerHTML = randomWordsWeer[chosenWordWeer];
  
  // CSS styling aanpassen
  // ... (bestaande code)
  
  // Random aantal stappen
  let randomSteps = Math.floor(Math.random() * 91) + 10;
  
  // Verhaal samenstellen met variabelen
  document.getElementById("storyContent").innerHTML = `
    <p>On a ${randomWordsWeer[chosenWordWeer]} monday, ${characterName} (level ${characterLevel}) 
    walked ${randomSteps} steps through the forest.</p>
    
    <p>While walking, ${characterName} encountered several challenges that tested 
    the skills acquired over ${characterLevel} levels of experience.</p>
    
    <p>After walking ${randomSteps} steps, ${characterName} finally reached the destination.</p>
  `;
});
```

### HTML-structuur updaten

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Random Story Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>The Adventure of the Day</h1>
    
    <div class="story-image">
        <img id="randomImage" src="" alt="Story image">
    </div>
    
    <div id="storyContent">
        <!-- Hier komt het verhaal via JavaScript -->
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

## 📊 Volledig Voorbeeld

### Uiteindelijke HTML (index.html)

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Random Story Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>The Adventure of the Day</h1>
    
    <div class="story-image">
        <img id="randomImage" src="" alt="Story image">
    </div>
    
    <div id="storyContent">
        <!-- Hier komt het verhaal via JavaScript -->
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

h1 {
    font-size: 3em;
    text-align: center;
    margin-bottom: 30px;
}

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
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
    line-height: 1.6;
    font-size: 1.2em;
}

.character-name {
    font-weight: bold;
}

.weather {
    font-style: italic;
}

.number {
    font-weight: bold;
    text-decoration: underline;
}
```

### Uiteindelijke JavaScript (script.js)

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // Karakter gegevens in variabelen opslaan
  const characterName = "Elindra";
  let characterLevel = Math.floor(Math.random() * 50) + 1; // Random level tussen 1-50
  
  // Weer kiezen
  let weersCondities = ["sunny", "rainy", "misty", "hot", "cold", "dark"];
  let randomWeer = Math.floor(Math.random() * weersCondities.length);
  let gekozenWeer = weersCondities[randomWeer];
  
  // Random aantal stappen
  let randomSteps = Math.floor(Math.random() * 91) + 10;
  
  // Random activiteit kiezen
  let activiteiten = ["searching for treasures", "hunting for magical herbs", "looking for ancient artifacts", "tracking mysterious creatures", "collecting enchanted gemstones"];
  let randomActiviteit = Math.floor(Math.random() * activiteiten.length);
  
  // Kleuren op basis van weer
  let weerKleuren = {
    "sunny": "#FFD700",
    "rainy": "#1E90FF",
    "misty": "#CCCCCC",
    "hot": "#FF4500",
    "cold": "#00CED1",
    "dark": "#483D8B"
  };
  
  // Random afbeelding
  let images = ["forest1.jpg", "forest2.jpg", "forest3.jpg", "forest4.jpg"];
  let randomImage = Math.floor(Math.random() * images.length);
  document.getElementById("randomImage").src = "images/" + images[randomImage];
  
  // Verhaal samenstellen met variabelen en HTML-elementen maken met classes voor styling
  document.getElementById("storyContent").innerHTML = `
    <p>On a <span class="weather" style="color: ${weerKleuren[gekozenWeer]}">${gekozenWeer}</span> monday, 
    <span class="character-name">${characterName}</span> (level <span class="number">${characterLevel}</span>) 
    walked <span class="number">${randomSteps}</span> steps through the forest.</p>
    
    <p>While walking, <span class="character-name">${characterName}</span> was ${activiteiten[randomActiviteit]} 
    that required the skills acquired over <span class="number">${characterLevel}</span> levels of experience.</p>
    
    <p>After walking <span class="number">${randomSteps}</span> steps, 
    <span class="character-name">${characterName}</span> finally reached the destination.</p>
  `;
});
```

## 🎯 Tips voor je Random Story Generator

1. **📚 Breid je verhaal uit** - Hoe meer willekeurige elementen, hoe interessanter je verhaal wordt
   
2. **🧩 Zorg voor samenhang** - Kies willekeurige elementen die bij elkaar passen
   
3. **🎭 Experimenteer met stijlen** - Probeer verschillende kleuren, lettertypes en afbeeldingen uit
   
4. **🔀 Maak je verhaal modulair** - Verdeel je verhaal in verschillende delen die willekeurig gecombineerd kunnen worden
   
5. **📏 Testen, testen, testen** - Vernieuw je pagina meerdere keren om te zien of alle combinaties werken

> 🌟 **Challenge:** Probeer je verhaal uit te breiden met meer karakters, meer gebeurtenissen en verschillende mogelijke eindes!

---

Dit is slechts het begin van je Random Story Generator. In deel 2 zullen we werken aan het uitbreiden van het verhaal met meer complexe elementen en interactieve keuzes!
