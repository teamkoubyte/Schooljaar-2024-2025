<?php
include "connect.php";
?>

<!DOCTYPE html>
<html>
<head>
    <title>Leerlingen</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Leerlingen:</h1>

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
    
    while ($rij = $resultaat->fetch_assoc()) {
        echo "<tr><td>". $rij['id'] ."</td>
        <td>". $rij['telefoonnummer'] ."</td>
        <td>". $rij['voornaam'] . "</td>
        <td>". $rij['naam'] . "</td>
        <td>". $rij['straat'] . "</td>
        <td>". $rij['postcode'] . "</td>
        <td>". $rij['plaats'] . "</td>
        <td>". $rij['geboortedatum'] . "</td>
        <td><a href='wis.php?teVerwijderen=" . $rij['id']."'>Wissen</a></td>
        <td><a href='wijzig.php?teWijzigen=" . $rij['id']."'>Wijzigen</a></td></tr>";
    }
      echo "</table>";
    echo "<p><a href='toevoegen.php'>Voeg een record toe</a></p>";
}
?>

</body>
</html>