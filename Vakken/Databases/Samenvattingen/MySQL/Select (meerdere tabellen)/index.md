# **Samenvatting: Selecties uit meerdere tabellen in SQL**  

## **1. Tabellen met elkaar verbinden**  
Wanneer je gegevens uit meerdere tabellen wilt combineren, moet je aangeven hoe de tabellen aan elkaar gekoppeld zijn. Dit kan met:  
- **WHERE-clausule**  
- **INNER JOIN**  

**Voorbeeld:** Alle wijnen met de naam van de leverancier:  
```sql
SELECT artom, naam 
FROM tblWijnen, tblLeveranciers
WHERE tblWijnen.leverancier = tblLeveranciers.leveranciersnummer;
```
of met **INNER JOIN**:  
```sql
SELECT artom, naam  
FROM tblWijnen  
INNER JOIN tblLeveranciers  
ON tblWijnen.leverancier = tblLeveranciers.leveranciersnummer;
```

## **2. Tabellen koppelen via een derde tabel**  
Soms zijn er tussenliggende tabellen nodig, zoals bij leveranciers en postcodes.  

**Voorbeeld:** Alle wijnen met de volledige adresgegevens van de leverancier:  
```sql
SELECT artom, naam, straat, tblLeveranciers.postcode, plaats  
FROM tblPostcodes, tblLeveranciers, tblWijnen  
WHERE tblLeveranciers.postcode = tblPostcodes.postcode  
AND tblWijnen.leverancier = tblLeveranciers.leveranciersnummer;
```

## **3. Records filteren met voorwaarden**  
Je kunt extra voorwaarden toevoegen met **AND** en **WHERE**.  

**Voorbeeld:** Wijnen die te weinig in stock zijn:  
```sql
SELECT artom, naam, straat, tblLeveranciers.postcode, plaats  
FROM tblPostcodes, tblLeveranciers, tblWijnen  
WHERE tblLeveranciers.postcode = tblPostcodes.postcode  
AND tblWijnen.leverancier = tblLeveranciers.leveranciersnummer  
AND tblWijnen.stock < tblWijnen.minimalestock;
```

## **4. Outer Joins: Gegevens behouden zonder match**  
- **RIGHT OUTER JOIN**: toont alle records van de rechtertabel, ook als er geen match is.  
- **LEFT OUTER JOIN**: toont alle records van de linkertabel, ook als er geen match is.  

**Voorbeeld:** Alle leveranciers, ook als ze geen wijnen leveren:  
```sql
SELECT artom, naam  
FROM tblWijnen  
RIGHT OUTER JOIN tblLeveranciers  
ON tblWijnen.leverancier = tblLeveranciers.leveranciersnummer;
```

**Voorbeeld:** Alle wijnen, ook als er geen leverancier bij hoort:  
```sql
SELECT artom, naam  
FROM tblWijnen  
LEFT OUTER JOIN tblLeveranciers  
ON tblWijnen.leverancier = tblLeveranciers.leveranciersnummer;
```

## **5. Groeperen en tellen**  
Met **GROUP BY** en **COUNT()** kun je data groeperen en aantallen berekenen.  

**Voorbeeld:** Aantal wijnen per leverancier:  
```sql
SELECT naam, COUNT(artom)  
FROM tblWijnen, tblLeveranciers  
WHERE tblWijnen.leverancier = tblLeveranciers.leveranciersnummer  
GROUP BY naam;
```

**Voorbeeld:** Leveranciers die meer dan 10 wijnen verkopen:  
```sql
SELECT naam, COUNT(artom)  
FROM tblWijnen, tblLeveranciers  
WHERE tblWijnen.leverancier = tblLeveranciers.leveranciersnummer  
GROUP BY naam  
HAVING COUNT(artom) > 10;
```

## **Belangrijke concepten om te onthouden:**  
- **INNER JOIN** → Matchende records uit beide tabellen  
- **LEFT JOIN** → Alle records van de linkertabel, ook zonder match  
- **RIGHT JOIN** → Alle records van de rechtertabel, ook zonder match  
- **GROUP BY** → Groepeert gegevens op basis van een kolom  
- **HAVING** → Gebruik je na GROUP BY om gefilterde groepen te tonen  

Deze samenvatting helpt je om de belangrijkste concepten voor je toets te begrijpen en toe te passen! 🚀
