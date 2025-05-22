# ⚡ Wat Is JavaScript ⚡

## 📋 Definitie & Doel

> 💡 **Definitie:** JavaScript is een programmeertaal die interactiviteit toevoegt aan je website.

JavaScript is de meest gebruikte programmeertaal ter wereld en ook de snelst groeiende open-source programmeertaal. Het staat bekend om zijn gebruiksgemak en beginnersvriendelijkheid.

![JavaScript Animation](https://media3.giphy.com/media/LaVp0AyqR5bGsC5Cbm/giphy.gif?cid=7941fdc6t2mqdjmqnx3fndsuc13fncj0yjqie53jf0xpwsvl&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## 🛠️ Toepassingen

### 1️⃣ Webontwikkeling

JavaScript wordt traditioneel gebruikt om interactiviteit aan websites toe te voegen:

| Toepassing | Voorbeelden |
|------------|------------|
| 🎮 **Web games** | Eenvoudige spelletjes die in de browser draaien |
| 🖱️ **Gebruikersinteractie** | Formuliervalidatie, knoppen, menu's |
| 🔄 **Dynamische inhoud** | Content laden zonder pagina te verversen |
| 📱 **Responsief design** | Aanpassen van elementen gebaseerd op schermgrootte |
| 🎭 **Animaties** | Vloeiende overgangen en visuele effecten |

```javascript
// Voorbeeld: Dynamisch element wijzigen
document.getElementById("demo").innerHTML = "Hello JavaScript!";

// Voorbeeld: Event listener voor interactie
document.getElementById("knop").addEventListener("click", function() {
    alert("Je hebt op de knop geklikt!");
});
```

### 2️⃣ Veelzijdige Toepassingen Buiten Webdesign

JavaScript is veel meer dan alleen voor webdesign:

#### 🖥️ Server-side ontwikkeling
Met platformen zoals Node.js kan JavaScript worden uitgevoerd aan de serverzijde:

```javascript
// Voorbeeld: Eenvoudige Node.js server
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hallo van Node.js!</h1>');
});

server.listen(3000, 'localhost', () => {
    console.log('Server draait op http://localhost:3000/');
});
```

#### 💻 Desktopapplicaties
Met frameworks zoals Electron kun je JavaScript gebruiken voor desktop-apps:

```javascript
// Voorbeeld: Basis Electron app
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);
```

#### 📱 Mobiele app-ontwikkeling
Met frameworks zoals React Native kun je mobiele apps bouwen:

```javascript
// Voorbeeld: React Native component
import React from 'react';
import { Text, View } from 'react-native';

const MobielApp = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hallo React Native!</Text>
        </View>
    );
}

export default MobielApp;
```

#### 🤖 Andere JavaScript toepassingen:

- **⚙️ Automatisering en scripting:** Taken automatiseren met Node.js
- **🔌 Internet of Things (IoT):** IoT-apparaten aansturen met frameworks zoals Johnny-Five
- **🧩 Browserextensies:** Extra functionaliteit toevoegen aan webbrowsers

## 🔄 JavaScript vs. Java

### Gecompileerd vs. Geïnterpreteerd

| | Java | JavaScript |
|--|------|------------|
| **Type** | Gecompileerde taal | Geïnterpreteerde taal |
| **Proces** | Code wordt volledig vooraf omgezet naar machinecode | Code wordt rechtstreeks uitgevoerd wanneer het programma draait |
| **Uitvoering** | Uitvoerbaar bestand (.class of .jar) | Broncode wordt direct gelezen |
| **Snelheid** | Efficiënter tijdens uitvoering | Flexibeler met directe veranderingen |
| **Omgeving** | Java Virtual Machine (JVM) | Browser of Node.js runtime |

```
Gecompileerd (Java):
Broncode → Compiler → Bytecode → Java Virtual Machine → Uitvoering

Geïnterpreteerd (JavaScript):
Broncode → JavaScript Engine → Uitvoering
```

### Programmeertaal vs. Scripttaal

| | Java | JavaScript |
|--|------|------------|
| **Categorie** | Programmeertaal | Scripttaal |
| **Zelfstandigheid** | Compileert naar zelfstandig programma | Heeft een ander programma nodig om uitgevoerd te worden |
| **Uitvoeringsomgeving** | Draait op elk apparaat met JVM | Draait in een browser (of Node.js voor serverside) |
| **Ontwikkeld door** | Sun Microsystems (nu Oracle) | Netscape (oorspronkelijk) |

#### ⚠️ Scripttalen hebben meestal een host-omgeving nodig:

- **JavaScript** → Webbrowser of Node.js
- **Lua** → Game engines zoals Roblox
- **Python** → Python interpreter
- **PHP** → Webserver met PHP-ondersteuning

## 🧠 De naam "JavaScript"

De naam "JavaScript" kan enigszins verwarrend zijn omdat het de indruk wekt dat het nauw verbonden is met de programmeertaal Java, terwijl ze eigenlijk heel verschillend zijn:

- **Oorspronkelijke naam:** Mocha, later LiveScript
- **Marketing strategie:** De naam werd veranderd naar "JavaScript" om te profiteren van de populariteit van Java in de jaren '90
- **Geen technische relatie:** Ondanks de naamovereenkomst zijn de talen fundamenteel anders

> ⭐ **Wist je dat?** JavaScript werd in slechts 10 dagen ontwikkeld door Brendan Eich bij Netscape Communications in 1995.

## 🚀 Hoe JavaScript Werkt

### In de browser:

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Voorbeeld</title>
    <!-- Interne JavaScript in de head -->
    <script>
        function helloWorld() {
            alert("Hallo, wereld!");
        }
    </script>
    <!-- Externe JavaScript file -->
    <script src="script.js"></script>
</head>
<body>
    <h1>JavaScript Demo</h1>
    <button onclick="helloWorld()">Klik op mij</button>
    
    <!-- Inline JavaScript direct in HTML -->
    <button onclick="alert('Inline JavaScript!')">Inline Voorbeeld</button>
    
    <!-- JavaScript aan het einde van de body (beste praktijk) -->
    <script>
        console.log("Pagina volledig geladen!");
    </script>
</body>
</html>
```

### Buiten de browser (met Node.js):

```
node script.js
```

## 📊 Unieke kenmerken van JavaScript

- **Dynamische typering:** Variabelen hoeven niet vooraf gedefinieerd te worden
- **Prototype-gebaseerd:** Object-georiënteerd, maar anders dan klassieke OO-talen
- **Asynchrone programmering:** Event-gedreven met callbacks, promises en async/await
- **First-class functions:** Functies kunnen als variabelen worden gebruikt
- **JSON:** JavaScript Object Notation is een standaard data-uitwisselingsformaat

```javascript
// Voorbeeld van dynamische typing
let x = 5;           // x is een nummer
x = "Hello";         // x is nu een string

// Voorbeeld van first-class functions
const groet = function(naam) {
    return `Hallo ${naam}!`;
};

const zegHallo = groet;
console.log(zegHallo("Student"));  // Output: Hallo Student!

// Voorbeeld van JSON
const persoon = {
    "naam": "Jan",
    "leeftijd": 18,
    "hobbies": ["coderen", "gamen", "lezen"]
};
```

## ⚙️ JavaScript-frameworks en -bibliotheken

Modern webdevelopment gebruikt vaak frameworks en bibliotheken:

| Naam | Type | Gebruik |
|------|------|---------|
| **React** | Library | User interfaces bouwen |
| **Angular** | Framework | Volledige webapp-architectuur |
| **Vue.js** | Framework | Progressive web apps |
| **jQuery** | Library | DOM-manipulatie vereenvoudigen |
| **Express** | Framework | Webservers bouwen (Node.js) |
| **Three.js** | Library | 3D-graphics in browsers |

## 🎯 Aan de slag met JavaScript

### Eerste stappen:

1. **Editor kiezen:** VS Code, Sublime Text, of Atom
2. **Basiskennis:** HTML en CSS leren (als basis)
3. **Oefenen:** Kleine interactieve elementen maken
4. **Debuggen:** Console gebruiken (F12 in browser)
5. **Uitbreiden:** JavaScript-frameworks verkennen

> 🌟 **Tip:** Begin met eenvoudige projecten zoals rekenmachines, to-do lijsten of kleine spelletjes om JavaScript onder de knie te krijgen.

---

Met JavaScript kun je je websites transformeren van statische pagina's naar dynamische, interactieve ervaringen die reageren op gebruikersacties!
