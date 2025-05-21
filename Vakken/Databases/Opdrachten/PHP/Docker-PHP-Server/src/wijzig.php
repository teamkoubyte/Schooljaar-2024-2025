<?php
include "connect.php";
?>

<!DOCTYPE html>
<html>
<head>
    <title>Record Wijzigen</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Record Wijzigen</h1>

<?php
if(isset($_POST['veranderen'])){
    
    $id = $_POST['id'];
    $telefoonnummer = $_POST['telefoonnummer'];
    $voornaam = $_POST['voornaam'];    
    $naam = $_POST['naam'];
    $straat = $_POST['straat'];
    $postcode = $_POST['postcode'];
    $plaats = $_POST['plaats'];
    $geboortedatum = $_POST['geboortedatum'];
    
    $checkSql = "SELECT * FROM postcodes WHERE postcode = '$postcode'";
    $checkResulaat = $mysqli->query($checkSql);
      if ($checkResulaat->num_rows == 0) {
        $invoerPostcode = "INSERT INTO postcodes (postcode, plaats) VALUES ('$postcode', '$plaats')";
        if (!$mysqli->query($invoerPostcode)){
            echo "ERROR bij toevoegen postcode: " . $mysqli->error;
        }
        
    } else {
        $postcodeRij = $checkResulaat->fetch_assoc();
        if ($postcodeRij['plaats'] != $plaats) {
            $updatePlaats = "UPDATE postcodes SET plaats = '$plaats' WHERE postcode = '$postcode'";
            if (!$mysqli->query($updatePlaats)){
                echo "ERROR bij bijwerken plaats: " . $mysqli->error;
            }
        }
    }
    
    $sql = "UPDATE leerlingen SET 
            telefoonnummer = '$telefoonnummer',
            voornaam = '$voornaam',
            naam = '$naam',
            straat = '$straat',
            postcode = '$postcode',
            geboortedatum = '$geboortedatum'
            WHERE id = $id";
    
    if($mysqli->query($sql)){
        echo "Record is gewijzigd";
    } else {
        echo "ERROR: " . $mysqli->error;
    }
    print "<br><a href='index.php'>Terug naar overzicht</a>";
}   else {    $sql = "SELECT leerlingen.*, postcodes.plaats FROM leerlingen 
            JOIN postcodes ON leerlingen.postcode = postcodes.postcode
            WHERE leerlingen.id = " . $_GET['teWijzigen'];
    $resultaat = $mysqli->query($sql);
    $rij = $resultaat->fetch_assoc();
    echo '<table>
    <form action = "wijzig.php" method="post">
        <tr>
            <td>ID</td>  <td> '. $rij['id'] . ' <input type="hidden" name="id" value="' . $rij['id'] . '">

            <tr><td>Telefoonnummer  </td> <td>  <input type="text" name="telefoonnummer" value="' . $rij['telefoonnummer'] . '">    </td></tr>
            <tr><td>Voornaam        </td> <td>  <input type="text" name="voornaam" value="' . $rij['voornaam'] . '">    </td></tr>
            <tr><td>Naam            </td> <td>  <input type="text" name="naam" value="' . $rij['naam'] . '">            </td></tr>
            <tr><td>Straat          </td> <td>  <input type="text" name="straat" value="' . $rij['straat'] . '">        </td></tr>
            <tr><td>Postcode        </td> <td>  <input type="text" name="postcode" value="' . $rij['postcode'] . '">    </td></tr>
            <tr><td>Plaats          </td> <td>  <input type="text" name="plaats" value="' . $rij['plaats'] . '">        </td></tr>
            <tr><td>Geboortedatum   </td> <td>  <input type="text" name="geboortedatum" value="' . $rij['geboortedatum'] . '">  </td></tr>            <tr><td colspan="2">               <input type="submit" name="veranderen" value="Record wijzigen"></td></tr>

            </form>
            </table>';
      print "<br><a href='index.php'>Terug naar overzicht</a>";
}
$mysqli->close();
?>

</body>
</html>