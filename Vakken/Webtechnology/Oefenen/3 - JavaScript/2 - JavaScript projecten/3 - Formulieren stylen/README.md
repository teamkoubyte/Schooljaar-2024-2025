# 🎨 Formulieren Stylen 🎨

## 📋 Inleiding

> 💡 **Doel:** Leer hoe je HTML-formulieren kunt stylen om ze gebruiksvriendelijker en aantrekkelijker te maken.

Formulieren zijn essentiële onderdelen van websites die gebruikersinteractie mogelijk maken. Met CSS kun je deze formulieren transformeren van saaie standaardelementen naar professioneel ogende, gebruiksvriendelijke interfaces.

![Styled Form Example](https://i.imgur.com/BtBgS5A.png)

## 🏗️ Basisstructuur van een Formulier

Voordat we beginnen met stylen, hier is een voorbeeld van een standaard HTML-formulier:

```html
<form action="/submit-form" method="post">
  <div class="form-group">
    <label for="naam">Naam:</label>
    <input type="text" id="naam" name="naam" placeholder="Voer je naam in">
  </div>
  
  <div class="form-group">
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" placeholder="Voer je e-mail in">
  </div>
  
  <div class="form-group">
    <label for="bericht">Bericht:</label>
    <textarea id="bericht" name="bericht" placeholder="Voer je bericht in"></textarea>
  </div>
  
  <div class="form-group">
    <label for="land">Land:</label>
    <select id="land" name="land">
      <option value="belgie">België</option>
      <option value="nederland">Nederland</option>
      <option value="duitsland">Duitsland</option>
    </select>
  </div>
  
  <button type="submit">Versturen</button>
</form>
```

## 🎯 Belangrijke Elementen om te Stylen

### 1️⃣ Label Styling

Labels geven context aan je invoervelden en zijn belangrijk voor de gebruiksvriendelijkheid en toegankelijkheid.

```css
/* Basisopmaak voor labels */
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

/* Rechtse uitlijning van de labels */
.right-aligned label {
  display: inline-block;
  width: 90px;
  text-align: right;
  padding-right: 10px;
}
```

| 🔍 Wat doet dit? | 
|-----------------|
| `display: block;` | Plaatst elk label op een nieuwe regel |
| `display: inline-block;` | Laat labels op dezelfde regel staan maar met definieerbare breedte |
| `width: 90px;` | Zorgt voor een consistente breedte voor alle labels |
| `text-align: right;` | Lijnt de tekst rechts uit binnen het label |

### 2️⃣ Input Velden Styling

Input velden zijn waar gebruikers informatie invullen. Ze moeten duidelijk herkenbaar zijn.

```css
/* Basisopmaak voor inputvelden */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
select {
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

/* Focus state styling */
input:focus,
select:focus,
textarea:focus {
  border: 2px solid darkcyan;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 139, 139, 0.5);
}
```

### 3️⃣ Textarea Styling

Textareas zijn bedoeld voor langere tekst en verdienen speciale aandacht.

```css
textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Arial, sans-serif;
  
  /* Specifieke textarea eigenschappen */
  resize: vertical; /* Alleen verticaal resizen toestaan */
  min-height: 100px;
  vertical-align: top; /* Plaatst het label bovenaan */
}
```

| ⚙️ Sleutelwoord | Betekenis |
|----------------|----------|
| `resize: vertical;` | Gebruikers kunnen de hoogte aanpassen, maar niet de breedte |
| `resize: none;` | Gebruikers kunnen de textarea niet van grootte veranderen |
| `resize: both;` | Gebruikers kunnen zowel hoogte als breedte aanpassen (standaard) |
| `vertical-align: top;` | Zorgt ervoor dat het label bovenaan uitgelijnd is met het textarea-veld |

### 4️⃣ Button Styling

Buttons trekken de aandacht en nodigen uit tot actie.

```css
button, 
input[type="submit"], 
input[type="button"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover, 
input[type="submit"]:hover, 
input[type="button"]:hover {
  background-color: #45a049;
}
```

## 🎭 Geavanceerde Formulier Styling

### 1️⃣ Form Layout met Grid of Flexbox

```css
/* Met CSS Grid */
.form-grid {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  align-items: center;
}

.form-grid label {
  grid-column: 1;
  text-align: right;
}

.form-grid input,
.form-grid select,
.form-grid textarea {
  grid-column: 2;
}

/* Met Flexbox */
.form-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.form-flex label {
  flex: 0 0 120px;
  text-align: right;
}

.form-flex input,
.form-flex select,
.form-flex textarea {
  flex: 1;
  min-width: 200px;
}
```

### 2️⃣ Custom Checkboxes en Radio Buttons

Standaard checkboxes en radio buttons zijn vaak moeilijk te stylen. Door gebruik te maken van CSS kun je volledig aangepaste versies maken.

```css
/* Verberg het standaard invoerveld, maar houd het toegankelijk */
.custom-checkbox input,
.custom-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Container voor het label */
.custom-checkbox,
.custom-radio {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
}

/* Aangepaste checkbox/radio styling */
.custom-checkbox .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border: 1px solid #ccc;
}

.custom-radio .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
  border: 1px solid #ccc;
}

/* Styling voor wanneer de checkbox/radio is aangevinkt */
.custom-checkbox input:checked ~ .checkmark,
.custom-radio input:checked ~ .checkmark {
  background-color: #2196F3;
  border-color: #2196F3;
}

/* Indicator (het vinkje/bolletje) */
.custom-checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-radio .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  top: 5px;
  left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
}

.custom-checkbox input:checked ~ .checkmark:after,
.custom-radio input:checked ~ .checkmark:after {
  display: block;
}
```

```html
<!-- Gebruik in HTML -->
<label class="custom-checkbox">
  <span>Ik ga akkoord met de voorwaarden</span>
  <input type="checkbox" name="voorwaarden">
  <span class="checkmark"></span>
</label>

<label class="custom-radio">
  <span>Optie A</span>
  <input type="radio" name="opties" value="a">
  <span class="checkmark"></span>
</label>
```

### 3️⃣ Responsieve Formulieren

```css
/* Basis responsief formulier */
.responsive-form .form-group {
  margin-bottom: 15px;
}

.responsive-form label {
  display: block;
  margin-bottom: 5px;
}

.responsive-form input,
.responsive-form select,
.responsive-form textarea {
  width: 100%;
  padding: 8px;
}

/* Media query voor grotere schermen */
@media (min-width: 768px) {
  .responsive-form .form-group {
    display: flex;
    align-items: center;
  }
  
  .responsive-form label {
    flex: 0 0 120px;
    margin-bottom: 0;
    text-align: right;
    padding-right: 10px;
  }
  
  .responsive-form input,
  .responsive-form select,
  .responsive-form textarea {
    flex: 1;
  }
  
  .responsive-form .button-group {
    margin-left: 120px;
  }
}
```

## 🎯 Specifieke Styling Voorbeelden

### 1️⃣ Rechtse Uitlijning van Labels

Het uitlijnen van labels aan de rechterkant is een vaak gebruikte techniek om formulieren overzichtelijker te maken:

```css
label {
  /* rechtse uitlijning van de labels */
  display: inline-block;
  width: 90px;
  text-align: right;
}
```

![Right Aligned Labels](https://i.imgur.com/7VduNnH.png)

### 2️⃣ Verticale Uitlijning van Textarea Labels

```css
textarea {
  vertical-align: top; /* plaats het label bovenaan */
  height: 40px;
  width: 195px;
}
```

![Textarea Alignment](https://i.imgur.com/nwa9hR2.png)

### 3️⃣ Focus Styling voor Verbeterde Gebruikservaring

```css
input:focus,
textarea:focus {
  border: 2px solid darkcyan;
}
```

![Focus State](https://i.imgur.com/vqvDPNw.png)

## 🎨 CSS voor een Volledig Gestylde Form

```css
/* Reset en basisstijlen */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Formulier container */
.styled-form {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Formuliertitel */
.styled-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

/* Formulier groepen */
.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
}

/* Labels */
.styled-form label {
  display: inline-block;
  width: 100px;
  text-align: right;
  padding-right: 10px;
  font-weight: bold;
  color: #555;
}

/* Invoervelden */
.styled-form input[type="text"],
.styled-form input[type="email"],
.styled-form input[type="password"],
.styled-form select {
  width: calc(100% - 110px);
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

/* Textarea */
.styled-form textarea {
  width: calc(100% - 110px);
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  font-size: 16px;
  vertical-align: top;
}

/* Focus staat */
.styled-form input:focus,
.styled-form textarea:focus,
.styled-form select:focus {
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  outline: none;
}

/* Knoppen */
.styled-form button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 110px;
  transition: background-color 0.3s;
}

.styled-form button:hover {
  background-color: #45a049;
}

/* Responsieve aanpassingen */
@media (max-width: 480px) {
  .styled-form label {
    width: 100%;
    text-align: left;
    margin-bottom: 5px;
  }
  
  .styled-form input[type="text"],
  .styled-form input[type="email"],
  .styled-form input[type="password"],
  .styled-form select,
  .styled-form textarea {
    width: 100%;
  }
  
  .styled-form button {
    margin-left: 0;
    width: 100%;
  }
}
```

## 📐 Formulieren Validatie met CSS

Een belangrijk aspect van formulier UX is het tonen van feedback op validatie:

```css
/* Succesvolle validatie */
input:valid {
  border-color: #4CAF50;
  background: url('check-icon.svg') no-repeat 95% center;
  background-size: 20px;
}

/* Ongeldige invoer */
input:invalid:not(:placeholder-shown) {
  border-color: #f44336;
  background: url('error-icon.svg') no-repeat 95% center;
  background-size: 20px;
}

/* Foutmelding tonen */
input:invalid:not(:placeholder-shown) + .error-message {
  display: block;
}

.error-message {
  display: none;
  color: #f44336;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 110px;
}
```

```html
<div class="form-group">
  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" placeholder="Voer je e-mail in" required>
  <span class="error-message">Voer een geldig e-mailadres in</span>
</div>
```

## 🔍 Browser Compatibiliteit

Houd er rekening mee dat sommige formulier-elementen er anders uitzien in verschillende browsers:

| Browser | Speciale overwegingen |
|---------|----------------------|
| Chrome | Moderne rendering, goede ondersteuning voor CSS |
| Firefox | Eigen styling voor sommige elementen zoals `select` |
| Safari | Kan afwijkende rendering voor datum- en tijdvelden hebben |
| Edge | Moderne rendering, vergelijkbaar met Chrome |
| IE11 | Beperkte ondersteuning voor moderne CSS, overwegen om fallbacks te bieden |

## 🎓 Extra Resources

Voor meer diepgaande informatie over het stylen van formulieren, raadpleeg deze bronnen:

- 📚 [W3Schools Forms Tutorial](https://www.w3schools.com/css/css_form.asp)
- 📚 [MDN Web Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- 📚 [CSS-Tricks: Styling Form Controls](https://css-tricks.com/styling-form-controls-with-modern-css-features/)

## 🎯 Tips voor Toegankelijke Formulieren

1. **🏷️ Gebruik altijd labels** - Verbind elk invoerveld met een label
2. **🔍 Zorg voor voldoende contrast** - Tekst en invoervelden moeten goed te onderscheiden zijn
3. **👆 Maak klikbare gebieden groot genoeg** - Vooral belangrijk voor mobiele gebruikers
4. **⌨️ Test met toetsenbordnavigatie** - Zorg dat je formulier volledig bruikbaar is zonder muis
5. **📱 Test op verschillende apparaten** - Zorg ervoor dat je formulier goed werkt op mobiele apparaten

> 🌟 **Pro tip:** Voeg altijd een duidelijke visuele indicatie toe wanneer een invoerveld focus heeft. Dit helpt gebruikers die met het toetsenbord navigeren.

---

Met deze technieken kun je professioneel ogende formulieren maken die niet alleen mooi zijn, maar ook gebruiksvriendelijk en toegankelijk. Experimenteer met verschillende stijlen om een ontwerp te vinden dat past bij de rest van je website!
