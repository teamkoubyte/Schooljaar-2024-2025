<?php
include "connect.php";
echo "<h1>Record Toevoegen</h1>";

if(isset($_POST['toevoegen'])){
    $telefoonnummer = $_POST['telefoonnummer'];
    $voornaam = $_POST['voornaam'];
    $naam = $_POST['naam'];
    $straat = $_POST['straat'];
    $postcode = $_POST['postcode'];
    $plaats = $_POST['plaats'];
    $geboortedatum = $_POST['geboortedatum'];
    
    $check_sql = "SELECT * FROM postcodes WHERE postcode = '$postcode'";
    $check_result = $mysqli->query($check_sql);
    
    if ($check_result->num_rows == 0) {
        $postcode_sql = "INSERT INTO postcodes (postcode, plaats) VALUES ('$postcode', '$plaats')";
        if(!$mysqli->query($postcode_sql)){
            echo "Fout bij toevoegen postcode: " . $mysqli->error;
        }
    }
    
    $leerling_sql = "INSERT INTO leerlingen (telefoonnummer, voornaam, naam, straat, postcode, geboortedatum)
    VALUES ('$telefoonnummer', '$voornaam', '$naam', '$straat', '$postcode', '$geboortedatum')";

    if($mysqli->query($leerling_sql)){
        echo "Record is toegevoegd";
    } else {
        echo "Fout bij toevoegen leerling: " . $mysqli->error;
    }
}

echo '<table>
    <form action="toevoegen.php" method="post">
    <tr><td>Telefoonnummer</td> <td><input type="text" name="telefoonnummer"></td></tr>
    <tr><td>Voornaam</td> <td><input type="text" name="voornaam"></td></tr>
    <tr><td>Naam</td> <td><input type="text" name="naam"></td></tr>
    <tr><td>Straat</td> <td><input type="text" name="straat"></td></tr>
    <tr><td>Postcode</td> <td><input type="text" name="postcode"></td></tr>
    <tr><td>Plaats</td> <td><input type="text" name="plaats"></td></tr>
    <tr><td>Geboortedatum</td><td><input type="date" name="geboortedatum"></td></tr>
    <tr><td colspan="2"><input type="submit" name="toevoegen" value="Record toevoegen"></td></tr>
    </form>
    </table>';

echo "<p><a href='index.php'>Terug naar overzicht</a></p>";
?>
