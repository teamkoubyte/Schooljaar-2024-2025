# 1 Wat is PHP?

- PHP is een programmeertaal.
- PHP is een open source scripting taal.
- PHP scripts worden uitgevoerd op een server. Hierbij kies je tussen XAMPP of WAMP.

## PHP-bestanden

- PHP bestanden kunnen tekst, HTML, CSS, Javascript en PHP code bevatten.
- Ze hebben steeds de extensie ".php"
- Ze worden uitgevoerd op de server en daar vertaald naar HTML.

## Wat kan PHP doen?

- PHP wordt vooral gebruikt voor het maken van dynamische webpagina's
- PHP kan bestanden op de server lezen, openen, schrijven,...
- PHP kan data van formulieren verzamelen en bewerken
- PHP kan met cookies werken
- PHP kan je data in je databank beheren (lezen, schijven, wijzigen,...)
- PHP kan gebruikt worden om toegang te beheren via sessies
- PHP kan data encrypteren
- ...

---

# 2 Hello World en overzichtvoorbeeldje.php

```php
<html> 
	<head> 
		<title>PHP Test</title>
	</head>
	<body>
		<?php 
			echo '<p>Hello World</p>'; 
		?> 
	</body>
</html>
```

## PHP-code staat tussen  <?php en ?> of tussen <? en ?>.

Met de instructies print en echo kan je gegevens afdrukken op je scherm.

Het is zeker niet de bedoeling van deze cursus een volledig overzicht te geven van alles wat mogelijk is in PHP.
Op www.php.net kan je een overzicht terugvinden van alle instucties met de versies van PHP waarin ze ondersteund worden.

---

# 3 Gebruik van variabelen

In PHP gebruik je voornamelijk de volgende typen variabelen. Deze zullen op deze pagina worden uitgelegd.
- Integers (Gehele getallen)
- Floats (Kommagetallen)
- Strings (Tekst, leestekens en symbolen)
- Booleans ("True" of "False")
- Arrays (Lijsten)

Variabelen beginnen in PHP steeds met een dollar-teken($).
In PHP moet men het type variabele niet vooraf declareren. Je kan zelf tussen typen wisselen voor eenzelfde variabelenaam dat doe je echter best niet. Hou steeds hetzelfde type variabele aan. Geef je variablen ook steeds een duidelijke naam.

```php
<?php
$getal1 = 6;
$getal2 = 50;
$kommagetal = 45.454;
$naam = "Peter De Grote";
$getrouwd = false;
?>
```

**Afdrukken van variabelen**
Als je een variabele afdrukt tussen aanhalingstekens wordt de waarde van de variabele afgedrukt. (zie voorbeeld 1 in onderstaande code)

Als je een variabele afdrukt tussen apostrofs ('  ') wordt de waarde van de variabele niet afgedrukt, maar gewoon de naam van de variabele.  (zie voorbeeld 2 in onderstaande code)

Je kan een variabele wel afdrukken als je met apostrofs werkt indien je deze onderbreekt. (zie voorbeeld 3 in onderstaande code).  Ik ben er sterk voorstander van dit laatste systeem te gebruiken.

```php
<?php
$getal1 = 6;
// Voorbeeld 1
echo "Het is getal is $getal1!";
// Er wordt nu afgedrukt:   Het is getal is 6!

// Voorbeeld 2
echo 'Het is getal is $getal1.';
// Er wordt nu afgedrukt:   Het is getal is $getal1!

// Voorbeeld 3
 echo 'Het is getal is ' . $getal1 . '!';
// Er wordt nu afgedrukt:   Het is getal is 6!
?>
```

---

# 4 Keuzes maken

We willen afdrukken dat a groter is dan b als variabele $a groter is dan variabele $b.

```php
<?php
if ($a > $b) {
	echo "a is groter dan b";
}
?>
```

We willen afdrukken dat a groter is dan b als variabele $a groter is dan variabele $b, als dat niet het geval is wordt dat ook afgedrukt.

```php
<?php
if ($a > $b) {
	echo "a is groter dan b";
} else{
	echo "a is niet groter dan b";
} 
?>
```

We willen de drie verschillende mogelijkheden afdrukken: a groter dan b, a gelijk aan b of a kleiner dan b.

```php
<?php
if ($a > $b) {
	echo "a is groter dan b";
} elseif ($a==$b){
	echo "a is gelijk aan b";
} else {
	echo "a is kleiner dan b";
}
?>
```

Merk op dat we "==" gebruiken om te kijken of $a en $b gelijk zijn.  Een enkel "=" wordt gebruikt om een waarde te geven.

Andere mogelijkheid om te vergelijken is met de instructie switch. Onderstaand voorbeeld geeft het gebruik van switch weer in php.  De default is optioneel.

```php
<?php
switch ($i) {
	  case 0:
	   echo "i is gelijk aan 0";
	   break;
	  case 1:
	   echo "i is gelijk aan 1";
	   break;
	  case 2:
	   echo "i is gelijk aan 2";
	   break;
			default:
				echo "i is niet gelijk aan 0,1 of 2";
}
?>
```
---

# 5 Herhalen
Er zijn verschillende manieren om herhalingen op te roepen. We overlopen er enkele van.

## 5.1 For

Een for-lus wordt gebruikt wanneer men het aantal herhalingen kent.

Onderstaand voorbeeld drukt de getallen van 1 tot en met 10 af.  Na elke loop wordt de variabele $i met 1 verhoogd.  ($i++)

```php
<?php
for ($i = 1; $i <= 10; $i++) {
	 echo $i;
}
?>
```

Onderstaand voorbeeld doet hetzelfde en maakt nu gebruik van "break" waardoor er uit de for-lus gegaan wordt.  In dit voorbeeldje wat zinloos (eerste oplossing is beter), maar dit kan nuttig zijn.

```php
<?php
for ($i = 1; ; $i++){ 
	if ($i > 10){
		break;
} 
	 echo $i;
}
?>
```

## 5.2 While

Met een While-iteratie controleer men op een bepaalde voorwaarde voor men aan de iteratie begint.  Een While-lus wordt dus alleen uitgevoerd als aan de voorwaarde voldaan is.

Het afdrukken van getallen van 1 tot 10 zou er dan bijvoorbeeld zo kunnen uitzien.

```php
<?php
$i=1;
while ($i <= 10) { 
	echo $i++; 
/* Merk op dat eerst $i afgedrukt wordt en dat er dan pas 1
		  bijgeteld wordt bij $i */
}
?>
```

Dit is een alternatief waarbij de echo en het optellen van 1 bij $i gesplitst wordt.

```php
<?php
$i=1;
while ($i <= 10) { 
	echo $i; 
  $i++;
}
?>
```

## 5.3 Do-while

Het grootste verschil tussen de WHILE en de DO-WHILE is dat bij de DO-WHILE de code die in de iteratie staat steeds uitgevoerd wordt omdat de controle op de voorwaarde na de eerste uitvoering gebeurt.

```php
<?php
$i=1;
do{
 echo $i;
 $i++;
} while ($i<=10);
?>
```
---

# 6 Formulieren

In HTML zag je de werking van formulieren reeds.  Al wat vergeten? Bekijk de basis terug hier:
https://www.w3schools.com/html/html_forms.asp

---
# 7 Sessies

Sessies worden gebruikt om variabelen over pagina's mee te geven. 

Als een gebruiker inlogt op een bepaalde website wil je dat hij dit slechts 1 keer moet doen en dat nadien elke pagina van je website toegankelijk is zonder dat je telkens de gebruiker zijn gegevens moet doorgeven: de eenvoudigste manier om dit te kunnen is door gebruik te maken van sessies.

In php moet je elke pagina waarin de sessie moet blijven bestaan of gebruikt wordt beginnen met session_start().

In onderstaand voorbeeld wordt er een sessievariabele "aantalkeerbezocht" aangemaakt indien deze nog niet bestaat.  Als de variabele wel bestaat wordt hij verhoogd met 1.

```php
<?php
session_start();
if (!isset($_SESSION['aantalkeerbezocht'])) {
  $_SESSION['aantalkeerbezocht'] = 1;
} else {
  $_SESSION['aantalkeerbezocht']++;
}
print "Je hebt deze pagina ".$_SESSION['aantalkeerbezocht']." keer bezocht.";
?>
```

---
# 8 Werken met databases

Het maken van een connectie met een databank en verschillende tabellen in een databank is hetvolgende onderdeel dat we bespreken.  We hebben voor de kerstvakantie SQL gezien, SQL gaan we nu in PHP gebruiken om databanken en tabellen aan te spreken.

Na het maken van een bepaalde databank met een tabel is het eerste dat in php dient te gebeuren het aanmaken van de connectie tussen je programma en de databank.  Meestal gebeurt dit in een apart bestand: connect.php gebruik ik telkens om de connectie met de databank te maken.  Op deze manier kan ik de gegevens snel terugvinden en kan ik deze connectie vanuit elk ander bestand vlot aanspreken.

Hieronder de code van connect.php.  Hier maak ik een verbinding met de databank met de naam "cursussql".

```php
<?php
$mysqli = new mysqli("localhost", "root", "", "cursussql");
/* 
   Met de voorgaande lijn maken we een verbinding met de databank met de naam cursussql.  
   Onze server is localhost, onze gebruikersnaam root en we hebben geen paswoord ingesteld.
   $mysqli = new mysqli("localhost", "user", "password", "database");
*/
$aanpassenUTF = $mysqli->query("SET NAMES utf8");
/* 
   Met de voorgaande lijn zorg ik dat de Franse karakters in mijn tabel correct afgedrukt worden.
*/
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
/* 
   Met de voorgaande lijn druk ik een foutcode af als de connectie niet geslaagd zou zijn
	 Gebruik consequent het afdrukken van foutcodes: het maak het makkelijker om problemen te vinden en zal je tijd besparen.
*/
?>
```

Nu we een connect.php geschreven hebben kunnen we deze aanroepen door gebruik te maken van "include".  Met deze code voeren we het bestand "connect.php" uit.  Onderstaande code zal de artikelnummer en de artikelomschrijving afdrukken uit de tabel wijnen van alle records die hierin te vinden zijn.

```php
<?php
include "connect.php";
// We zetten onze query die we willen uitvoeren in een variabele.  Zet steeds je query in een variabele, overzichtelijker en handig voor het opsporen van fouten.
$sql = "select * from tblwijnen";

// We voeren de query uit en alle resultaten worden in de variabele $resultaat gezet
$resultaat = $mysqli->query($sql);

// In de variabele $resultaat staan alle wijnen, we zullen ze lijn per lijn inlezen
// in de variabele $row.  We gebruiken daarvoor fetch_assoc(), deze instructie leest dus lijn per lijn je 

echo "<table>";
while ($row = $resultaat->fetch_assoc()) {
    echo "<tr><td>". $row['artnr'] ."</td><td>". $row['artom'] . "</td></tr>";;
}
echo "</table>";
?>
```

---

