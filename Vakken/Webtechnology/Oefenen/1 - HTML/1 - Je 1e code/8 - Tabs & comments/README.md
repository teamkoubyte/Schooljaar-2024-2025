# 🏷️ Tabs & Comments in HTML 🏷️

## 📏 Tabs in Code

> 💡 **Met tabs kan je je code duidelijker en overzichtelijker maken.**

### 📊 Vergelijking: Met en Zonder Tabs

#### Zonder Tabs:
```html
<!DOCTYPE html>
<html>
<head>
<title>Mijn Website</title>
</head>
<body>
<h1>Welkom op mijn website</h1>
<div>
<p>Dit is een paragraaf.</p>
<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
</div>
</body>
</html>
```

#### Met Tabs:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mijn Website</title>
    </head>
    <body>
        <h1>Welkom op mijn website</h1>
        <div>
            <p>Dit is een paragraaf.</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    </body>
</html>
```

### ✅ Voordelen van Tabs

| Voordeel | Beschrijving |
|----------|--------------|
| 🔍 **Verbeterde Leesbaarheid** | Code is gemakkelijker te scannen en te begrijpen |
| 🧩 **Duidelijke Structuur** | Hiërarchie van elementen is direct zichtbaar |
| 🔄 **Eenvoudiger Debuggen** | Fouten in de structuur zijn sneller te vinden |
| 👥 **Betere Samenwerking** | Anderen kunnen je code gemakkelijker begrijpen |

## 💬 Comments in Code

> 📝 **Comments zijn stukjes tekst die je in je code kunt plaatsen om uitleg of notities toe te voegen. Deze opmerkingen worden genegeerd door de computer.**

### 🔠 HTML Comment Syntax:

```html
<!-- Dit is een HTML comment -->
```

### 📊 Vergelijking: Met en Zonder Comments

#### Zonder Comments:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mijn Portfolio</title>
    </head>
    <body>
        <header>
            <h1>Jan Janssen</h1>
            <p>Web Developer</p>
        </header>
        <main>
            <section>
                <h2>Over mij</h2>
                <p>Ik ben een enthousiaste web developer...</p>
            </section>
            <section>
                <h2>Projecten</h2>
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                </ul>
            </section>
        </main>
    </body>
</html>
```

#### Met Comments:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mijn Portfolio</title>
        <!-- Meta tags voor SEO kunnen hier worden toegevoegd -->
    </head>
    <body>
        <!-- Header sectie met naam en titel -->
        <header>
            <h1>Jan Janssen</h1>
            <p>Web Developer</p>
        </header>
        
        <!-- Hoofdinhoud van de pagina -->
        <main>
            <!-- Informatie over mijzelf -->
            <section>
                <h2>Over mij</h2>
                <p>Ik ben een enthousiaste web developer...</p>
            </section>
            
            <!-- Lijst met mijn projecten -->
            <section>
                <h2>Projecten</h2>
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <!-- TODO: Voeg meer projecten toe wanneer beschikbaar -->
                </ul>
            </section>
        </main>
        <!-- Footer kan later worden toegevoegd -->
    </body>
</html>
```

### 🎯 Gebruiksdoelen van Comments

1. **📝 Code Documentatie**
   - Uitleg van complexe code
   - Beschrijving van functionaliteit

2. **✂️ Tijdelijk Code Uitschakelen**
   - Test verschillende oplossingen
   - Behoud code die je nog niet wilt verwijderen

3. **📌 TODO Markeringen**
   - Herinneringen voor toekomstige verbeteringen
   - Markeer onvolledige secties

4. **🗂️ Code Organisatie**
   - Sectie scheidingen
   - Navigatiepunten in grote bestanden

## 📝 Opdracht: Tabs en Comments Toepassen

### Stappen:

1. 📸 **Maak een screenshot** van je vorige website code
2. ✏️ **Verbeter de code** van je website door:
   - Tabs toe te voegen voor juiste indentatie
   - Comments toe te voegen voor uitleg en structuur
3. 📸 **Maak een nieuwe screenshot** van je verbeterde code

### 💻 Voorbeeld Verbetering:

**Voor:**
```html
<html>
<head>
<title>Mijn Pagina</title>
</head>
<body>
<h1>Welkom</h1>
<p>Dit is mijn eerste website.</p>
<ul>
<li>Item een</li>
<li>Item twee</li>
</ul>
</body>
</html>
```

**Na:**
```html
<!-- Mijn eerste HTML webpagina -->
<html>
    <head>
        <title>Mijn Pagina</title>
        <!-- CSS kan hier later worden toegevoegd -->
    </head>
    <body>
        <!-- Hoofdtitel van de pagina -->
        <h1>Welkom</h1>
        
        <!-- Introductie paragraaf -->
        <p>Dit is mijn eerste website.</p>
        
        <!-- Lijst met items -->
        <ul>
            <li>Item een</li>
            <li>Item twee</li>
            <!-- Meer items kunnen hier worden toegevoegd -->
        </ul>
    </body>
</html>
```

## 🌟 Sleutelconcept

> **Tabs en comments maken je code niet functioneel anders, maar zorgen ervoor dat je code:**
> - 📚 **Beter leesbaar** is
> - 🧠 **Gemakkelijker te begrijpen** is
> - 🔧 **Eenvoudiger te onderhouden** is
> - 👥 **Beter geschikt voor samenwerking** is
