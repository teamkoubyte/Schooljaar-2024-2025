# 🚀 Je 1e JavaScript Code 🚀

## 📋 Aan de slag met JavaScript

> 💡 **Doel:** Leer hoe je JavaScript toevoegt aan je webpagina en je eerste interactieve elementen maakt.

In deze samenvatting leer je hoe je JavaScript kunt toevoegen aan je HTML-pagina en enkele basistechnieken om dynamische content te maken.

## 🛠️ Stap 1: JavaScript-bestand aanmaken

Maak een nieuw bestand aan met de naam `script.js` in dezelfde map als je HTML-bestand.

```javascript
// Dit is je eerste JavaScript-bestand
console.log("Mijn eerste JavaScript!");
```

## 🔗 Stap 2: Link naar je JavaScript-bestand

Voeg de volgende code toe aan je HTML-bestand om je JavaScript te koppelen:

```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="images/favicon.png" />
        <title>JavaScript basics</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <!-- html code ... -->
        
        <!-- de script-tag moet onderaan body staan -->
        <script src="script.js"></script> 
    </body>
</html>
```

| ⚠️ Belangrijk | 
|-------------|
| Plaats de `<script>` tag altijd onderaan de `<body>` tag, vlak voor de sluit-tag `</body>` |

## ✏️ Stap 3: JavaScript code schrijven

Hier zijn enkele basisvoorbeelden van wat je met JavaScript kunt doen:

### 3.1 Alert tonen

Een alert is een pop-up venster dat een bericht toont aan de gebruiker.

```javascript
document.addEventListener("DOMContentLoaded", function() {
    alert('Dit is een ALERT!');
});
```

![JavaScript Alert](https://i.imgur.com/JfuXJZ5.png)

### 3.2 Console.log gebruiken

Console.log is een handige functie om berichten naar de browser-console te sturen. Dit is nuttig voor het debuggen van je code.

```javascript
document.addEventListener("DOMContentLoaded", function() {
    console.log('Script werkt!');
});
```

Je kunt de console bekijken door in je browser:
1. Rechtsklik op de pagina
2. Kies "Inspecteren" of "Element inspecteren"
3. Ga naar het tabblad "Console"

![Console Log](https://i.imgur.com/O8MNCBL.png)

### 3.3 HTML-code toevoegen

Met JavaScript kun je dynamisch HTML-elementen toevoegen of wijzigen:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    document.body.innerHTML = "<h1>Hallo, JavaScript!</h1><p>Zo maak je HTML code via JavaScript.</p>";
});
```

### 3.4 Multiline strings gebruiken

Voor grotere stukken HTML is het handiger om template literals (backticks) te gebruiken:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    document.body.innerHTML = `
        <h1>Hallo, JavaScript!</h1>
        <p>Zo maak je HTML code via JavaScript.</p>
    `;
});
```

### 3.5 Random woord toevoegen

Een praktisch voorbeeld om te laten zien hoe je elementen kunt selecteren en wijzigen:

HTML-bestand:
```html
<h1>Random word</h1>
<p>Maneer Maes is <mark id="randomText"></mark>.</p>

<!-- de script tag moet onderaan de pagina staan -->
<script src="script.js"></script>
```

JavaScript-bestand:
```javascript
document.addEventListener("DOMContentLoaded", function() {
    // Lijst met willekeurige woorden
    let randomWords = ["awesome", "cool", "de beste", "fantastisch", "uitzonderlijk", "indrukwekkend"];

    // Kies een willekeurig woord
    let chosenWord = Math.floor(Math.random() * randomWords.length);

    // Voeg het gekozen woord toe aan de HTML-tag met id="randomText" 
    document.getElementById("randomText").innerHTML = randomWords[chosenWord];
});
```

Dit zal een willekeurig woord uit de lijst invoegen op de plek van het `<mark id="randomText"></mark>` element.

## ⚙️ Stap 4: JavaScript basisprincipes

### 4.1 Puntkomma's (`;`)

JavaScript gebruikt het puntkomma (`;`) als statementterminator:

```javascript
let name = "Jan";
console.log("Hallo, " + name);
alert("Welkom!");
```

| 📌 Opmerking | 
|-------------|
| Het gebruik van puntkomma's in JavaScript is niet strikt noodzakelijk vanwege automatische puntkomma-invoeging. JavaScript zal proberen te raden waar puntkomma's horen, maar dit kan onverwachte resultaten opleveren. Het is daarom een goede gewoonte om altijd puntkomma's toe te voegen aan het einde van statements. |

### 4.2 Script-tag onderaan de pagina

```html
<body>
    <!-- Alle HTML-inhoud hier -->
    
    <script src="script.js"></script>
</body>
```

| ⚙️ Voordelen | 
|-------------|
| 1. De browser zal eerst de HTML-content renderen voordat JavaScript wordt geladen |
| 2. De pagina zal sneller zichtbaar zijn voor de gebruiker |
| 3. Alle HTML-elementen bestaan al wanneer JavaScript ze probeert te manipuleren |

### 4.3 `document.addEventListener("DOMContentLoaded")`

```javascript
document.addEventListener("DOMContentLoaded", function() {
    // Code hier wordt pas uitgevoerd nadat de HTML-pagina volledig is geladen
    console.log("De pagina is volledig geladen!");
});
```

| 🔍 Waarom dit gebruiken? | 
|------------------------|
| Deze event listener zorgt ervoor dat je JavaScript-code pas wordt uitgevoerd nadat de HTML-structuur volledig is geladen. Zo voorkom je fouten waarbij JavaScript probeert elementen te manipuleren die nog niet bestaan. |

### 4.4 Comments in JavaScript

JavaScript biedt twee manieren om opmerkingen (comments) toe te voegen aan je code:

#### Enkelvoudige regelcomments

```javascript
// Dit is een enkelvoudige regelcomment
let x = 5; // Je kunt ook comments op dezelfde regel als code plaatsen
```

#### Meerregelige comments

```javascript
/*
Dit is een meerregelige comment.
Je kunt hier meerdere regels tekst toevoegen.
Deze comments beginnen met /* en eindigen met */.
*/
let y = 10;
```

## 🔄 Hoe JavaScript en HTML samenwerken

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│ HTML-pagina │ ──── │ JavaScript  │ ──── │ DOM Update  │
│  laadt     │      │  voert uit  │      │ (wijziging) │
└─────────────┘      └─────────────┘      └─────────────┘
```

1. **HTML-pagina laadt**: De browser leest de HTML-code en bouwt de DOM (Document Object Model) op.
2. **JavaScript laadt**: De browser leest en voert de JavaScript-code uit.
3. **DOM-manipulatie**: JavaScript wijzigt de DOM, waardoor de pagina dynamisch wordt.

## 🧪 Oefeningen om te proberen

1. **Verander een tekstkleur**:
   ```javascript
   document.addEventListener("DOMContentLoaded", function() {
       document.getElementById("myText").style.color = "blue";
   });
   ```

2. **Toon de huidige datum**:
   ```javascript
   document.addEventListener("DOMContentLoaded", function() {
       let now = new Date();
       document.getElementById("currentDate").innerHTML = now.toLocaleDateString();
   });
   ```

3. **Reageer op een knop**:
   ```javascript
   document.addEventListener("DOMContentLoaded", function() {
       document.getElementById("myButton").addEventListener("click", function() {
           alert("Je hebt op de knop geklikt!");
       });
   });
   ```

## ⚠️ Veelvoorkomende fouten en oplossingen

| Probleem | Oorzaak | Oplossing |
|---------|---------|----------|
| `Uncaught ReferenceError: ... is not defined` | Je probeert een variabele of functie te gebruiken die niet bestaat | Controleer spelling en of de variabele eerder is gedefinieerd |
| `Uncaught TypeError: Cannot read property ... of null` | Je probeert een eigenschap te lezen van een element dat niet bestaat | Controleer of het element bestaat voordat je het probeert te gebruiken |
| `Script niet geladen` | Pad naar het JavaScript-bestand is onjuist | Controleer of het pad in de `src` van de `script`-tag correct is |

## 🎯 Tips voor beginners

1. **🔍 Gebruik de console**: De console in de browser-ontwikkeltools is je beste vriend bij het debuggen.
   
2. **✍️ Start klein**: Begin met eenvoudige scripts en bouw geleidelijk complexiteit op.
   
3. **📚 Practice makes perfect**: Experimenteer door bestaande code aan te passen en te zien wat er gebeurt.
   
4. **🧩 Werk met voorbeelden**: Bekijk en pas bestaande JavaScript-voorbeelden aan om te leren hoe dingen werken.
   
5. **📋 Commentaar toevoegen**: Voeg commentaar toe om je code te documenteren, vooral als het complex is.

> 🌟 **Pro tip:** De DevTools console in je browser (toegankelijk via F12 of rechtermuisknop > Inspecteren) is onmisbaar bij het leren van JavaScript. Je kunt er direct code uitproberen en foutmeldingen bekijken.

---

Met deze basiskennis van JavaScript kun je beginnen met het toevoegen van interactieve elementen aan je webpagina's. JavaScript is een krachtige taal die je de mogelijkheid geeft om dynamische en gebruikersvriendelijke websites te maken!
