<?php
include "connectie.php";

$sql = "select * from leerlingen" ;
$resultaat = $mysqli->query($sql);
echo "<table>";
while ($row = $resultaat->fetch_assoc()) {
    echo "<tr><td>". $row['id'] ."</td>
    <td>". $row['telefoonnummer'] ."</td>
    <td>". $row['voornaam'] . "</td>
    <td>". $row['naam'] . "</td>
    <td>". $row['straat'] . "</td>
    <td>". $row['postcode'] . "</td>
    <td>". $row['plaats'] . "</td>
    <td>". $row['geboortedatum'] . "</td>
    <td><a href=wis.php?tewissen=" . $row['id'].">Wissen</a></td><td>
    <a href=wijzig.php?teveranderen". $row['id'].">Wijzigen</a></td></tr>";
}
echo "</table>";
print "<a href=toevoegen.php>Voeg een record toe</a>";
?>