# 🔗 Lokale Bestanden & Externe Links 🔗

## 🌐 Externe Links

Externe links verwijzen naar media (afbeeldingen, video's, etc.) die elders op internet zijn opgeslagen.

```html
<img src="https://example.com/foto.jpg">
```

### ⚖️ Voor- en Nadelen

| Voordelen | Nadelen |
|-----------|---------|
| ✅ Bespaart opslagruimte in het project | ❌ Mogelijk tragere laadtijden |
| | ❌ Risico op onbruikbare links bij verwijdering van de bron |

## 💾 Lokale Bestanden

Lokale media zijn bestanden die direct in de projectmap zijn opgeslagen.

```html
<img src="images/foto.jpg">
```

### ⚖️ Voor- en Nadelen

| Voordelen | Nadelen |
|-----------|---------|
| ✅ Snellere laadtijden | ❌ Grotere projectomvang |
| ✅ Onafhankelijkheid van externe servers | ❌ Meer opslagruimte vereist op hosting |
| ✅ Offline beschikbaarheid | |

> 💡 **Info**: Het is aangeraden om met lokale bestanden te werken.

## 📁 Organisatie van Lokale Bestanden

Bij het uploaden of delen van een website is het belangrijk om lokale mediabestanden correct mee te sturen, anders zullen deze niet meer werken op je website.

### 📍 Correcte Locatie Notatie

#### De afbeelding in dezelfde map als het .html bestand:

```html
<img src="image.jpg">
```

#### De afbeelding in een submap:

```html
<img src="media/image.jpg">
```

## 🛣️ Het Belang van Relatieve Paden

Bij het verwijzen naar mediabestanden in je HTML-code is het cruciaal om **relatieve paden** te gebruiken in plaats van **absolute paden**.

### 🔄 Vergelijking

| Type Pad | Voorbeeld |
|----------|-----------|
| ✅ Relatief pad | `<img src="media/foto.jpg">` |
| ❌ Absoluut pad | `<img src="C:/Users/Maes/Website/media/foto.jpg">` |

### 🌟 Voordelen van Relatieve Paden

1. **📦 Portabiliteit**: Je project kan eenvoudig worden verplaatst naar een andere locatie of server zonder dat paden hoeven te worden aangepast.

2. **🖥️ Compatibiliteit**: Relatieve paden werken op verschillende besturingssystemen (Windows, macOS, Linux) zonder aanpassingen.

3. **🌐 Hosting**: Bij het uploaden naar een webserver blijven relatieve paden correct functioneren, terwijl absolute paden vaak niet meer werken.

> 💡 **Info**: Het is aangeraden om altijd met relatieve paden te werken.

## 📝 Samenvatting

| Type | Aanbevolen? | Reden |
|------|------------|-------|
| 🌐 Externe links | ❌ Meestal niet | Afhankelijkheid van derden, tragere laadtijden |
| 💾 Lokale bestanden | ✅ Ja | Sneller, betrouwbaarder, offline beschikbaar |
| 🛣️ Absolute paden | ❌ Nee | Niet portabel, breekt bij verplaatsing |
| 🛣️ Relatieve paden | ✅ Ja | Portabel, compatibel tussen systemen |
