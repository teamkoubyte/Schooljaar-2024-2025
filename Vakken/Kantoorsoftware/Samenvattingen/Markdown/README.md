# Markdown Tutorial: Uitgebreide Handleiding

![Markdown Logo](https://markdown-here.com/img/icon256.png)

## 📋 Inhoudsopgave
- [Introductie tot Markdown](#introductie-tot-markdown)
- [Basisprincipes](#basisprincipes)
- [Kopteksten](#kopteksten)
- [Tekstopmaak](#tekstopmaak)
- [Lijsten](#lijsten)
- [Links](#links)
- [Afbeeldingen](#afbeeldingen)
- [Codeblokken](#codeblokken)
- [Tabellen](#tabellen)
- [Citaten](#citaten)
- [Horizontale Lijnen](#horizontale-lijnen)
- [HTML in Markdown](#html-in-markdown)
- [Geavanceerde Functies](#geavanceerde-functies)
- [Handige Bronnen](#handige-bronnen)

## 🚀 Introductie tot Markdown

Markdown is een lichtgewicht opmaaktaal met een eenvoudige syntaxis die ontworpen is om gemakkelijk te schrijven en te lezen. Het wordt automatisch omgezet naar HTML en wordt gebruikt voor:

- Documentatie
- README bestanden
- Forums en commentaarsecties
- Blogs en artikelen
- Notities maken
- Technische documenten

### Waarom Markdown Gebruiken?
- **Eenvoudig**: Gemakkelijk te leren en te gebruiken
- **Leesbaar**: De broncode is leesbaar zonder conversie
- **Overdraagbaar**: Kan gebruikt worden op verschillende platforms
- **Flexibel**: Ondersteunt HTML voor geavanceerde opmaak
- **Populair**: Breed geadopteerd (GitHub, Stack Overflow, Discord, etc.)

## 📄 Basisprincipes

Markdown is ontworpen om eenvoudig te zijn. Hier volgen de basisprincipes:

1. **Platte tekst**: Markdown-bestanden zijn gewoon tekstbestanden (vaak met .md of .markdown extensie)
2. **Geen opmaak nodig**: Schrijf gewoon tekst, voeg opmaak toe met eenvoudige symbolen
3. **Witregel = nieuwe paragraaf**: Laat een lege regel tussen tekst om een nieuwe paragraaf te maken

## 📚 Kopteksten

Markdown biedt zes niveaus van kopteksten, vergelijkbaar met HTML's `<h1>` tot `<h6>`:

```markdown
# Koptekst niveau 1
## Koptekst niveau 2
### Koptekst niveau 3
#### Koptekst niveau 4
##### Koptekst niveau 5
###### Koptekst niveau 6
```

Alternatieve syntax voor niveau 1 en 2:

```markdown
Koptekst niveau 1
===============

Koptekst niveau 2
---------------
```

## 🖊️ Tekstopmaak

### Nadruk (Emphasis)

```markdown
*Cursieve tekst* of _Cursieve tekst_

**Vetgedrukte tekst** of __Vetgedrukte tekst__

***Vet en cursief*** of ___Vet en cursief___

~~Doorgestreepte tekst~~
```

Resultaat:
*Cursieve tekst* of _Cursieve tekst_

**Vetgedrukte tekst** of __Vetgedrukte tekst__

***Vet en cursief*** of ___Vet en cursief___

~~Doorgestreepte tekst~~

## 📝 Lijsten

### Ongeordende (bullet) lijst

```markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

* Alternatieve stijl 1
* Alternatieve stijl 2

+ Nog een alternatief
+ Voor ongeordende lijsten
```

### Geordende (genummerde) lijst

```markdown
1. Eerste item
2. Tweede item
3. Derde item
   1. Subitem 3.1
   2. Subitem 3.2
```

### Takenlijst

```markdown
- [x] Voltooide taak
- [ ] Onvoltooide taak
- [ ] Nog een taak
```

## 🔗 Links

### Inline links

```markdown
[Link tekst](https://www.example.com)

[Link met titel](https://www.example.com "Titel tekst")
```

### Referentie links

```markdown
[Link tekst][referentie-id]

[referentie-id]: https://www.example.com
```

### Automatische links

```markdown
<https://www.example.com>
<email@example.com>
```

## 🖼️ Afbeeldingen

```markdown
![Alternatieve tekst](url-naar-afbeelding.jpg)

![Alternatieve tekst](url-naar-afbeelding.jpg "Titel tekst")
```

Afbeelding met link:

```markdown
[![Alternatieve tekst](afbeelding-url.jpg)](link-url)
```

## 💻 Codeblokken

### Inline code

```markdown
Gebruik de `print()` functie in Python.
```

### Code blokken met indentatie

```markdown
    # Dit is een codeblok
    def hello_world():
        print("Hello, World!")
```

### Code blokken met backticks

````markdown
```
# Codeblok zonder syntaxiskleuring
def hello_world():
    print("Hello, World!")
```