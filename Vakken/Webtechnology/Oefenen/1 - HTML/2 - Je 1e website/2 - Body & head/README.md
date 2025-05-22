# 📄 Body & Head in HTML 📄

## 🧩 Correcte HTML-structuur

Tot nu toe hebben we onvolledige websites gemaakt. Een volledige HTML-documentstructuur ziet er zo uit:

```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="images/favicon.ico" />
        <title>Website title</title>
    </head>
    <body>
        Hello world!
    </body>
</html>
```

> ⚠️ HTML-code werkt ook zonder deze volledige structuur, maar zal minder goed functioneren in browsers en zoekmachines.

## 🧱 Basisstructuur HTML-document

### `<!doctype html>`

| Eigenschap | Beschrijving |
|------------|-------------|
| 🏷️ **Type** | Singular HTML-tag (geen sluitingstag) |
| 🎯 **Functie** | Geeft aan met welke HTML-versie de pagina is gemaakt |
| ℹ️ **Betekenis** | Geeft aan dat we werken met HTML5, de nieuwste versie |
| 💪 **Voordelen** | HTML5 biedt meer multimedia- en mobiele functies |

### `<html></html>`

| Eigenschap | Beschrijving |
|------------|-------------|
| 🏷️ **Type** | Container-element |
| 🎯 **Functie** | Markeert begin en einde van HTML-document |
| ℹ️ **Betekenis** | Het root-element van een HTML-pagina |

## 📋 De twee hoofdsecties

### 1️⃣ `<head></head>`

| Eigenschap | Beschrijving |
|------------|-------------|
| 🏷️ **Type** | Container-element |
| 🎯 **Functie** | Bevat metadata en informatie over de pagina |
| 👁️ **Zichtbaarheid** | De inhoud is **niet zichtbaar** op de webpagina |
| 🔍 **Belang** | Cruciaal voor browsers en zoekmachines zoals Google |

### 2️⃣ `<body></body>`

| Eigenschap | Beschrijving |
|------------|-------------|
| 🏷️ **Type** | Container-element |
| 🎯 **Functie** | Bevat alle zichtbare inhoud van de webpagina |
| 👁️ **Zichtbaarheid** | De inhoud is **zichtbaar** voor gebruikers |
| 🔍 **Belang** | Bevat tekst, afbeeldingen, links en alle andere elementen die bezoekers zien |

## 🔍 Belangrijke `<head>` elementen

### `<meta charset="UTF-8" />`

| Eigenschap | Beschrijving |
|------------|-------------|
| 🎯 **Functie** | Definieert het tekenset (alfabet) van de website |
| 🌐 **Waarde** | UTF-8 ondersteunt een brede reeks tekens: |
|  | • Westerse karakters |
|  | • Karakters uit vele andere talen |
|  | • Speciale symbolen |
| 💪 **Voordeel** | Zorgt voor correcte weergave van tekst in verschillende talen |

### `<meta name="viewport" content="width=device-width" />`

| Eigenschap | Beschrijving |
|------------|-------------|
| 🎯 **Functie** | Maakt een website **responsive** (aanpasbaar aan verschillende schermgroottes) |
| 📱 **Voordeel** | Webpagina's passen zich aan aan: |
|  | • Desktops |
|  | • Tablets |
|  | • Smartphones |
| 👥 **Gebruikerservaring** | Verbetert de bruikbaarheid op mobiele apparaten |

### `<title>Website title</title>`

| Eigenschap | Beschrijving |
|------------|-------------|
| 🎯 **Functie** | Geeft de website een titel |
| 👁️ **Zichtbaarheid** | Verschijnt in: |
|  | • Browsertabblad |
|  | • Favorieten/bladwijzers |
|  | • Zoekresultaten in Google |
| 🔍 **SEO** | Belangrijk voor zoekmachineoptimalisatie |

### `<link rel="icon" href="images/favicon.ico" />`

| Eigenschap | Beschrijving |
|------------|-------------|
| 🎯 **Functie** | Voegt een favicon (kleine pictogram) toe aan je website |
| 👁️ **Zichtbaarheid** | Verschijnt in: |
|  | • Browsertabblad |
|  | • Favorieten/bladwijzers |
|  | • Zoekresultaten in sommige zoekmachines |
| 🗂️ **Pad** | `"images/favicon.ico"` betekent dat de afbeelding in de "images" map staat |

> 💡 **Tip**: Bij websites is het gebruikelijk alle afbeeldingen in een map genaamd "images" te zetten. Dit maakt je folderstructuur duidelijker bij veel pagina's met veel afbeeldingen.

## 🖼️ Over het .ICO formaat

Het .ico-formaat wordt specifiek gebruikt voor favicon-afbeeldingen vanwege de volgende eigenschappen:

| Eigenschap | Beschrijving |
|------------|-------------|
| 📏 **Resoluties** | Kan meerdere resoluties in één bestand opslaan |
| 🔍 **Transparantie** | Ondersteunt transparante achtergronden |
| 📦 **Bestandsgrootte** | Heeft een kleine bestandsgrootte |
| 🔄 **Compatibiliteit** | Wordt automatisch herkend door browsers |

> 🔔 **Info**: Een favicon moet altijd in het .ICO formaat zijn voor optimale compatibiliteit.

## 📊 Vergelijking van onvolledige vs. volledige HTML-structuur

| Aspect | Onvolledig | Volledig |
|--------|------------|----------|
| 🌐 **Browser-compatibiliteit** | Beperkt | Optimaal |
| 📱 **Responsiveness** | Niet gegarandeerd | Ingesteld met viewport meta tag |
| 🔍 **SEO** | Minder effectief | Beter met juiste meta-tags |
| 🖼️ **Favicon** | Ontbreekt | Aanwezig |
| 🔤 **Taalondersteuning** | Beperkt | Volledig met UTF-8 |
| 🧪 **Validatie** | Mogelijk fouten | Valideert correct |

## 🚀 Code voorbeeld: Minimale volledige HTML-structuur

```html
<!doctype html>
<html>
    <head>
        <!-- Essentiële meta tags -->
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        
        <!-- Titel en favicon -->
        <title>Mijn Website</title>
        <link rel="icon" href="images/favicon.ico" />
    </head>
    <body>
        <h1>Welkom op mijn website!</h1>
        <p>Dit is een voorbeeld van een correct gestructureerde HTML-pagina.</p>
    </body>
</html>
```

## 📝 Samenvatting

Een correct opgebouwd HTML-document bevat:

1. **DOCTYPE-declaratie**: Definieert de HTML-versie
2. **HTML-element**: Omsluit de volledige inhoud
3. **HEAD-sectie**: Bevat metadata en informatie voor browsers/zoekmachines
   - Meta charset: Definieert tekencodering
   - Viewport meta tag: Maakt de pagina responsive
   - Title: Definieert de paginatitel
   - Favicon: Voegt een pictogram toe aan de browsertab
4. **BODY-sectie**: Bevat alle zichtbare inhoud

> 🌟 **Best practice**: Gebruik altijd de volledige HTML-structuur voor optimale compatibiliteit, betere SEO en professionele webpagina's.
