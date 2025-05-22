# 🌐 Je 1e Echte Website 🌐

## 🚀 Opdracht: Persoonlijke Website

> 💡 **Doel:** Maak een website over een **persoon naar keuze**

Dit is je kans om je eerste volledige webpagina te maken en alle HTML-elementen die je tot nu toe hebt geleerd, in praktijk te brengen!

## 📋 Vereiste Elementen

| Element | Punten | Beschrijving |
|---------|--------|-------------|
| 📝 **P & BR Tags** | 3 | Correcte toepassing van paragraaf- en regeleindetags |
| 🔹 **Unordered List** | 1 | Lijst met opsommingstekens (`<ul>`, `<li>`) |
| 🔢 **Ordered List** | 1 | Genummerde lijst (`<ol>`, `<li>`) |
| 🖼️ **Afbeelding** | 1 | Een afbeelding toevoegen via `<img>` tag |
| 📹 **Gedownloade Video** | 1 | Video lokaal opgeslagen en afgespeeld via `<video>` |
| 📺 **YouTube Video** | 1 | Een ingesloten YouTube video via `<iframe>` |
| 🏷️ **Comments & Tabs** | 3 | Code organiseren met comments en indentatie |
| ✅ **Correcte Code** | 3 | HTML-code zonder fouten |
| 🌟 **Extra Elementen** | 6 | Creativiteit, uitgebreidheid en gebruik van extra tags |
| **Totaal** | **20** | |

## 🛠️ Praktische Implementatie

### 📌 Basisstructuur

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Persoon Naar Keuze</title>
    </head>
    <body>
        <!-- Hier komt de inhoud van je website -->
    </body>
</html>
```

### 🔍 Voorbeelden van Vereiste Elementen

#### 1️⃣ P & BR Tags

```html
<p>Dit is een paragraaf over de persoon die ik heb gekozen.</p>
<p>Dit is de tweede paragraaf.<br>Deze tekst komt op een nieuwe regel dankzij de br tag.</p>
```

#### 2️⃣ Unordered List

```html
<h2>Hobby's</h2>
<ul>
    <li>Eerste hobby</li>
    <li>Tweede hobby</li>
    <li>Derde hobby</li>
</ul>
```

#### 3️⃣ Ordered List

```html
<h2>Top 3 Prestaties</h2>
<ol>
    <li>Belangrijkste prestatie</li>
    <li>Tweede belangrijkste prestatie</li>
    <li>Derde belangrijkste prestatie</li>
</ol>
```

#### 4️⃣ Afbeelding

```html
<h2>Foto</h2>
<img src="afbeeldingen/persoon.jpg" alt="Beschrijving van de persoon">
```

#### 5️⃣ Gedownloade Video

```html
<h2>Video</h2>
<video width="320" height="240" controls>
    <source src="videos/interview.mp4" type="video/mp4">
    Je browser ondersteunt geen video element.
</video>
```

#### 6️⃣ YouTube Video

```html
<h2>YouTube Video</h2>
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

### 🔄 Extra HTML-elementen om je website uit te breiden

| HTML Element | Beschrijving | Voorbeeld |
|-------------|--------------|-----------|
| `<h1>` t/m `<h6>` | Headers van verschillende groottes | `<h1>Naam Persoon</h1>` |
| `<strong>` | Tekst vetgedrukt maken | `<strong>Belangrijke info</strong>` |
| `<em>` | Tekst cursief maken | `<em>Benadrukte tekst</em>` |
| `<a>` | Hyperlinks maken | `<a href="https://website.com">Link</a>` |
| `<table>` | Tabellen maken | `<table>...</table>` |
| `<blockquote>` | Citaten weergeven | `<blockquote>Citaat</blockquote>` |
| `<hr>` | Horizontale lijn | `<hr>` |
| `<abbr>` | Afkortingen met uitleg | `<abbr title="HyperText Markup Language">HTML</abbr>` |

## 📂 Mappenstructuur

Voor een goed georganiseerd project:

```
mijn-website/
│
├── index.html           # Je hoofdpagina
├── afbeeldingen/        # Map voor alle afbeeldingen
│   ├── persoon.jpg
│   └── achtergrond.jpg
│
└── videos/              # Map voor lokale video's
    └── interview.mp4
```

## 🎯 Tips voor een Goede Score

1. **📝 Organisatie:** Houd je code netjes met goede indentatie en comments
   ```html
   <!-- Header sectie -->
   <header>
       <h1>Naam van de Persoon</h1>
   </header>
   ```

2. **🧠 Creativiteit:** Kies een interessante persoon en voeg unieke elementen toe

3. **✅ Validatie:** Controleer je HTML-code op fouten met validators zoals [W3C Validator](https://validator.w3.org/)

4. **🔍 Details:** Voeg alt-tekst toe aan afbeeldingen voor toegankelijkheid
   ```html
   <img src="afbeeldingen/persoon.jpg" alt="Beschrijving van de persoon in de context">
   ```

5. **📱 Organisatie:** Deel je pagina op in logische secties 
   ```html
   <section id="biografie">
       <!-- Biografische informatie -->
   </section>
   <section id="prestaties">
       <!-- Prestaties inhoud -->
   </section>
   ```

## 🎓 Voorbeeld van een Goede Websitestructuur

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Albert Einstein - Natuurkundige</title>
    </head>
    <body>
        <!-- Header sectie met naam en intro -->
        <header>
            <h1>Albert Einstein</h1>
            <p>Een van 's werelds beroemdste natuurkundigen</p>
        </header>
        
        <!-- Biografie sectie -->
        <section id="biografie">
            <h2>Biografie</h2>
            <img src="afbeeldingen/einstein.jpg" alt="Portret van Albert Einstein">
            <p>Albert Einstein werd geboren op 14 maart 1879 in Ulm, Duitsland.</p>
            <p>Hij is vooral bekend om zijn relativiteitstheorie, uitgedrukt in de formule:<br>E = mc²</p>
        </section>
        
        <!-- Prestaties sectie met ordered list -->
        <section id="prestaties">
            <h2>Belangrijkste Bijdragen aan de Wetenschap</h2>
            <ol>
                <li>De speciale relativiteitstheorie (1905)</li>
                <li>De algemene relativiteitstheorie (1915)</li>
                <li>Verklaring van het foto-elektrisch effect</li>
            </ol>
        </section>
        
        <!-- Persoonlijk leven met unordered list -->
        <section id="persoonlijk">
            <h2>Persoonlijk Leven</h2>
            <h3>Hobby's</h3>
            <ul>
                <li>Viool spelen</li>
                <li>Zeilen</li>
                <li>Filosofie</li>
            </ul>
        </section>
        
        <!-- Video sectie -->
        <section id="videos">
            <h2>Videos over Einstein</h2>
            
            <!-- Lokale video -->
            <h3>Interview Fragment</h3>
            <video width="320" height="240" controls>
                <source src="videos/einstein-interview.mp4" type="video/mp4">
                Je browser ondersteunt geen video element.
            </video>
            
            <!-- YouTube video -->
            <h3>Documentaire</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
        </section>
        
        <!-- Footer met bronvermelding -->
        <footer>
            <hr>
            <p>Deze website is gemaakt voor een HTML-oefening.</p>
            <p>Bronnen: Wikipedia, Biography.com</p>
        </footer>
    </body>
</html>
```

> 🌟 **Succes met het maken van je eerste echte website!** 🌟
