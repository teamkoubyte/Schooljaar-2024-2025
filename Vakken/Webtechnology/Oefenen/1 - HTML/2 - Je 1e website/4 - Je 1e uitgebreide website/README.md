# 🌐 Je 1e Uitgebreide Website 🌐

## 📋 Opdracht: Maak een Meerpagins Website

> 💡 **Doel:** Maak een nieuwe website over een onderwerp naar keuze met meerdere gelinkte pagina's

Dit project brengt al je HTML-kennis samen in een uitgebreide website met meerdere pagina's!

## 🗂️ Structuur van de Website

Je website moet:
- 📄 Een startpagina (index.html) bevatten
- 📑 Minstens 3 extra pagina's hebben
- 🔗 Navigatiemogelijkheden tussen alle pagina's bieden

### 📊 Visualisatie van de Structuur

```
website/
│
├── index.html                # Startpagina
├── pagina1.html              # Extra pagina 1
├── pagina2.html              # Extra pagina 2
├── pagina3.html              # Extra pagina 3
│
├── images/                   # Map voor afbeeldingen
│   ├── favicon.ico           # Standaard favicon
│   ├── favicon-pagina2.ico   # Alternatief favicon voor pagina 2
│   └── andere-afbeeldingen...
│
└── andere-mappen-indien-nodig/
```

## 📝 Vereiste Elementen

| Element | Punten | Beschrijving |
|---------|--------|-------------|
| 📑 **Minstens 3 extra pagina's** | 3 | Naast de startpagina nog 3 andere HTML-pagina's |
| 🏠 **Correcte startpagina naam** | 2 | De homepage moet `index.html` heten |
| 🧱 **Juiste HTML-structuur** | 3 | Elke pagina moet doctype, html, head en body tags bevatten |
| 🔗 **Link naar externe website** | 2 | Minstens één link naar een website buiten je eigen project |
| 📍 **Pagina-interne links** | 2 | Elke pagina moet minstens één link bevatten naar een sectie op dezelfde pagina |
| 🏷️ **Title & Favicon** | 2 | Elke pagina heeft een titel en favicon in de head-sectie |
| 🔄 **Verschillende Favicon** | 2 | Minstens één pagina heeft een ander favicon dan de rest |
| 📌 **Comments & Tabs** | 2 | Gebruik comments en indentatie om je code overzichtelijker te maken |
| 🌟 **Extra elementen** | 4 | Uitgebreidheid, creativiteit en gebruik van andere tags |
| **Totaal** | **22** | |

## ⚙️ Technische Vereisten

### 1️⃣ Correcte HTML-structuur voor Elke Pagina

```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="images/favicon.ico" />
        <title>Paginatitel hier</title>
    </head>
    <body>
        <!-- Inhoud van de pagina komt hier -->
    </body>
</html>
```

### 2️⃣ Navigatie tussen Pagina's

Zorg voor een consistente navigatiestructuur:

```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="pagina1.html">Pagina 1</a></li>
        <li><a href="pagina2.html">Pagina 2</a></li>
        <li><a href="pagina3.html">Pagina 3</a></li>
    </ul>
</nav>
```

### 3️⃣ Links binnen Dezelfde Pagina

Voeg ID's toe aan secties en link ernaar:

```html
<!-- Sectie met ID -->
<section id="sectie1">
    <h2>Sectie 1</h2>
    <p>Inhoud van sectie 1...</p>
</section>

<!-- Link naar de sectie -->
<a href="#sectie1">Ga naar Sectie 1</a>
```

### 4️⃣ Verschillende Favicons

Voor de standaardpagina's:

```html
<link rel="icon" href="images/favicon.ico" />
```

Voor de pagina met een ander favicon:

```html
<link rel="icon" href="images/andere-favicon.ico" />
```

## 🎨 Praktijkvoorbeeld: Opzet

### 📄 index.html (Startpagina)

```html
<!doctype html>
<html>
    <head>
        <!-- Meta-informatie -->
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="images/favicon.ico" />
        <title>Mijn Website - Home</title>
    </head>
    <body>
        <!-- Hoofdnavigatie -->
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="over-ons.html">Over Ons</a></li>
                <li><a href="producten.html">Producten</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        
        <!-- Hoofdinhoud -->
        <main>
            <h1>Welkom op Mijn Website</h1>
            
            <!-- Secties met ID's voor interne links -->
            <section id="introductie">
                <h2>Introductie</h2>
                <p>Dit is de startpagina van mijn eerste uitgebreide website...</p>
            </section>
            
            <section id="nieuws">
                <h2>Laatste Nieuws</h2>
                <p>Hier komt het laatste nieuws...</p>
            </section>
            
            <!-- Interne links -->
            <div>
                <a href="#introductie">Terug naar Introductie</a> |
                <a href="#nieuws">Ga naar Nieuws</a>
            </div>
            
            <!-- Externe link -->
            <p>Voor meer informatie, bezoek <a href="https://www.example.com">deze website</a>.</p>
        </main>
        
        <!-- Footer -->
        <footer>
            <p>&copy; 2025 Mijn Website</p>
        </footer>
    </body>
</html>
```

### 📄 Een Andere Pagina (met Ander Favicon)

```html
<!doctype html>
<html>
    <head>
        <!-- Meta-informatie -->
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <!-- Ander favicon voor deze pagina -->
        <link rel="icon" href="images/andere-favicon.ico" />
        <title>Mijn Website - Producten</title>
    </head>
    <body>
        <!-- Hoofdnavigatie (zelfde als op elke pagina) -->
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="over-ons.html">Over Ons</a></li>
                <li><a href="producten.html">Producten</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        
        <!-- Hoofdinhoud -->
        <main>
            <h1>Onze Producten</h1>
            
            <!-- Secties met ID's voor interne links -->
            <section id="product1">
                <h2>Product 1</h2>
                <p>Informatie over het eerste product...</p>
            </section>
            
            <section id="product2">
                <h2>Product 2</h2>
                <p>Informatie over het tweede product...</p>
            </section>
            
            <!-- Interne links -->
            <div>
                <a href="#product1">Bekijk Product 1</a> |
                <a href="#product2">Bekijk Product 2</a>
            </div>
            
            <!-- Link terug naar startpagina -->
            <p><a href="index.html">Terug naar startpagina</a></p>
        </main>
        
        <!-- Footer -->
        <footer>
            <p>&copy; 2025 Mijn Website</p>
        </footer>
    </body>
</html>
```

## 🎯 Tips voor een Succesvolle Website

1. **📱 Consistentie:** Houd de navigatie, stijl en layout consistent tussen pagina's
   
2. **🎨 Thema Kiezen:** Kies een onderwerp dat je interesseert zodat je gemotiveerd blijft
   
3. **📂 Organisatie:** Hou je bestanden georganiseerd in een duidelijke mappenstructuur
   
4. **🔍 Validatie:** Controleer je HTML met de [W3C Validator](https://validator.w3.org/)
   
5. **📝 Planning:**
   - Schets je pagina's vooraf
   - Bepaal welke inhoud op elke pagina komt
   - Plan hoe pagina's met elkaar verbonden zijn

## 🚀 Mogelijke Onderwerpen voor je Website

| Categorie | Voorbeeldonderwerpen |
|-----------|----------------------|
| 🎮 **Hobby's** | Gaming, Muziek, Sport, Koken |
| 🌍 **Onderwerpen** | Duurzaamheid, Technologie, Geschiedenis |
| 📚 **Informatie** | Leeronderwerp, Tutorials, Gids |
| 🏢 **Fictief Bedrijf** | Restaurant, Winkel, Dienstverlener |

> 🌟 **Succes met het maken van je eerste uitgebreide website!** Je kunt nu al je HTML-kennis toepassen in een project dat laat zien wat je hebt geleerd.
