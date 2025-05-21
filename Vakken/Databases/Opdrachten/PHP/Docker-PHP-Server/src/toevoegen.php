<?php
include "connect.php";
?>

<!DOCTYPE html>
<html>
<head>
    <title>Record Toevoegen</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Record Toevoegen</h1>
    
<?php
if(isset($_POST['controleer_postcode'])) {
    $postcode = $_POST['postcode'];
    
    $check_sql = "SELECT * FROM postcodes WHERE postcode = '$postcode'";
    $check_result = $mysqli->query($check_sql);
    
    if ($check_result->num_rows > 0) {
        $rij = $check_result->fetch_assoc();
        $plaats = $rij['plaats'];
        
        echo '<table>
            <form action="toevoegen.php" method="post">
            <tr><td>Telefoonnummer</td> <td><input type="text" name="telefoonnummer"></td></tr>
            <tr><td>Voornaam</td> <td><input type="text" name="voornaam"></td></tr>
            <tr><td>Naam</td> <td><input type="text" name="naam"></td></tr>
            <tr><td>Straat</td> <td><input type="text" name="straat"></td></tr>
            <tr><td>Postcode</td> <td><input type="text" name="postcode" value="' . $postcode . '" readonly></td></tr>
            <tr><td>Plaats</td> <td><input type="text" name="plaats" value="' . $plaats . '" readonly></td></tr>
            <tr><td>Geboortedatum</td><td><input type="date" name="geboortedatum"></td></tr>
            <tr><td colspan="2"><input type="submit" name="toevoegen" value="Record toevoegen"></td></tr>
            </form>
            </table>';
    } else {
        echo '<p><strong>Deze postcode bestaat nog niet in het systeem. Vul a.u.b. de plaatsnaam in:</strong></p>';
        echo '<table>
            <form action="toevoegen.php" method="post">
            <tr><td>Telefoonnummer</td> <td><input type="text" name="telefoonnummer" value="' . (isset($_POST['telefoonnummer']) ? $_POST['telefoonnummer'] : '') . '"></td></tr>
            <tr><td>Voornaam</td> <td><input type="text" name="voornaam" value="' . (isset($_POST['voornaam']) ? $_POST['voornaam'] : '') . '"></td></tr>
            <tr><td>Naam</td> <td><input type="text" name="naam" value="' . (isset($_POST['naam']) ? $_POST['naam'] : '') . '"></td></tr>
            <tr><td>Straat</td> <td><input type="text" name="straat" value="' . (isset($_POST['straat']) ? $_POST['straat'] : '') . '"></td></tr>
            <tr><td>Postcode</td> <td><input type="text" name="postcode" value="' . $postcode . '" readonly></td></tr>
            <tr><td>Plaats</td> <td><input type="text" name="plaats" required></td></tr>
            <tr><td>Geboortedatum</td><td><input type="date" name="geboortedatum" value="' . (isset($_POST['geboortedatum']) ? $_POST['geboortedatum'] : '') . '"></td></tr>
            <tr><td colspan="2"><input type="submit" name="toevoegen" value="Record toevoegen"></td></tr>
            </form>
            </table>';
    }
}

else if(isset($_POST['toevoegen'])){
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
        echo "<p><a href='index.php'>Terug naar overzicht</a></p>";
    } else {
        echo "Fout bij toevoegen leerling: " . $mysqli->error;
        echo "<p><a href='toevoegen.php'>Probeer opnieuw</a></p>";
    }
}

else {
    echo '<table>
        <form action="toevoegen.php" method="post">
        <tr><td>Telefoonnummer</td> <td><input type="text" name="telefoonnummer"></td></tr>
        <tr><td>Voornaam</td> <td><input type="text" name="voornaam"></td></tr>
        <tr><td>Naam</td> <td><input type="text" name="naam"></td></tr>
        <tr><td>Straat</td> <td><input type="text" name="straat"></td></tr>
        <tr><td>Postcode</td> <td><input type="text" name="postcode"></td></tr>
        <tr><td>Geboortedatum</td><td><input type="date" name="geboortedatum"></td></tr>
        <tr><td colspan="2"><input type="submit" name="controleer_postcode" value="Voeg toe"></td></tr>
        </form>
        </table>';
}    

echo "<p><a href='index.php'>Terug naar overzicht</a></p>";
?>

</body>
</html>
