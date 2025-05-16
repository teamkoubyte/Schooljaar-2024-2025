<?php
echo "<h1>Record Wijzigen</h1>";
include "connect.php";
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
    $checkResult = $mysqli->query($checkSql);
    
    if ($checkResult->num_rows == 0) {
        $insertPostcode = "INSERT INTO postcodes (postcode, plaats) VALUES ('$postcode', '$plaats')";
        if (!$mysqli->query($insertPostcode)){
            echo "ERROR bij toevoegen postcode: " . $mysqli->error;
            exit;
        }
    } else {
        $postcodeRij = $checkResult->fetch_assoc();
        if ($postcodeRij['plaats'] != $plaats) {
            $updatePlaats = "UPDATE postcodes SET plaats = '$plaats' WHERE postcode = '$postcode'";
            if (!$mysqli->query($updatePlaats)){
                echo "ERROR bij bijwerken plaats: " . $mysqli->error;
                exit;
            }
        }
    }
    
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
    $row = $resultaat->fetch_assoc();
    echo '<table>
    <form action = "wijzig.php" method="post">
        <tr>
            <td>ID</td>  <td> '. $row['id'] . ' <input type="hidden" name="id" value="' . $row['id'] . '">

            <tr><td>Telefoonnummer  </td> <td>  <input type="text" name="telefoonnummer" value="' . $row['telefoonnummer'] . '">    </td></tr>
            <tr><td>Voornaam        </td> <td>  <input type="text" name="voornaam" value="' . $row['voornaam'] . '">    </td></tr>
            <tr><td>Naam            </td> <td>  <input type="text" name="naam" value="' . $row['naam'] . '">            </td></tr>
            <tr><td>Straat          </td> <td>  <input type="text" name="straat" value="' . $row['straat'] . '">        </td></tr>
            <tr><td>Postcode        </td> <td>  <input type="text" name="postcode" value="' . $row['postcode'] . '">    </td></tr>
            <tr><td>Plaats          </td> <td>  <input type="text" name="plaats" value="' . $row['plaats'] . '">        </td></tr>
            <tr><td>Geboortedatum   </td> <td>  <input type="text" name="geboortedatum" value="' . $row['geboortedatum'] . '">  </td></tr>            <tr><td colspan="2">               <input type="submit" name="veranderen" value="Record wijzigen"></td></tr>

            </form>
            </table>';
    
    print "<br><a href='index.php'>Terug naar overzicht</a>";
}
$mysqli->close();
?>