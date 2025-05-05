# 📊 **Gegevens Manipuleren met SQL**

## 🚀 **Overzicht**

Deze samenvatting behandelt hoe je gegevens kunt manipuleren in SQL met behulp van de belangrijkste commando's: `UPDATE`, `INSERT`, en `DELETE`. De voorbeelden en oefeningen zijn gericht op het beheren van een wijnvoorraad.

---

## 🛠️ **SQL-Commando's**

### 🔄 **UPDATE**
```sql
UPDATE tabelnaam
SET kolomnaam1 = expressie, kolomnaam2 = expressie...
WHERE kolomnaam = expressie;
```
**Voorbeeld:** Verhoog de prijs van de wijnen van soort 3 met 1 euro.
```sql
UPDATE tblWijnen
SET prijs = prijs + 1
WHERE soort = 3;
```

### ➕ **INSERT**
```sql
INSERT INTO tabelnaam (kolomnaam1, kolomnaam2,...)
VALUES (expressie1, expressie2,...);
```
**Voorbeeld:** Voeg een nieuwe leverancier toe.
```sql
INSERT INTO tblLeveranciers (leveranciersnummer, naam, straat, postcode)
VALUES (7, 'Verschaeren', 'Oude Markt 45', '3100');
```

### ❌ **DELETE**
```sql
DELETE FROM tabelnaam
WHERE clausule;
```
**Voorbeeld:** Wis alle records met soort '3'.
```sql
DELETE FROM tblWijnen
WHERE soort = '3';
```

---

## 🧠 **Oefeningen**
- Verhoog de prijs van wijnen van soort 1 met 1 euro.
- Wis de wijnen die niet meer in stock zijn.
- Pas het leveranciersnummer aan als leverancier 2 overgenomen is door leverancier 5.
- Voeg postcode 9000 (Gent) toe aan de juiste tabel.

---

## ✅ **Oplossingen**
```sql
UPDATE tblWijnen
SET prijs = prijs + 1
WHERE soort = 1;

DELETE FROM tblWijnen
WHERE stock = 0;

INSERT INTO tblPostcodes (postcode, plaats)
VALUES ('9000', 'Gent');

UPDATE tblLeveranciers
SET straat = 'Gentsebaan 13', postcode = '9000'
WHERE leveranciersnummer = 1;
```

---
