<?php
include "connect.php";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Leerlingen Overzicht</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Leerlingen Overzicht</h1>

<?php
$sql = "SELECT leerlingen.id, leerlingen.telefoonnummer, leerlingen.voornaam, leerlingen.naam, 
       leerlingen.straat, leerlingen.postcode, postcodes.plaats, leerlingen.geboortedatum 
       FROM leerlingen
       JOIN postcodes ON leerlingen.postcode = postcodes.postcode
       ORDER BY leerlingen.id";

$resultaat = $mysqli->query($sql);

if (!$resultaat) {
    echo "Error: " . $mysqli->error;
} else {
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Telefoonnummer</th><th>Voornaam</th><th>Naam</th><th>Straat</th><th>Postcode</th><th>Plaats</th><th>Geboortedatum</th><th colspan='2'>Acties</th></tr>";
    
    while ($row = $resultaat->fetch_assoc()) {
        echo "<tr><td>". $row['id'] ."</td>
        <td>". $row['telefoonnummer'] ."</td>
        <td>". $row['voornaam'] . "</td>
        <td>". $row['naam'] . "</td>
        <td>". $row['straat'] . "</td>
        <td>". $row['postcode'] . "</td>
        <td>". $row['plaats'] . "</td>
        <td>". $row['geboortedatum'] . "</td>
        <td><a href='wis.php?teVerwijderen=" . $row['id']."'>Wissen</a></td>
        <td><a href='wijzig.php?teWijzigen=" . $row['id']."'>Wijzigen</a></td></tr>";
    }
      echo "</table>";
    echo "<p><a href='toevoegen.php'>Voeg een record toe</a></p>";
}
?>

</body>
</html>