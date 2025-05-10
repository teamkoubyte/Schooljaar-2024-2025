<?php
echo "<h1>Record Wijzigen</h1>";
include "connect.php";
if(isset($_POST['veranderen'])){
    
    $Nummer = $_POST['Nummer'];
    $Voornaam = $_POST['Voornaam'];    
    $Naam = $_POST['Naam'];
    $Straat = $_POST['Straat'];
    $Postcode = $_POST['Postcode'];
    $Plaats = $_POST['Plaats'];
    $Geboortedatum = $_POST['Geboortedatum'];
    $sql = "UPDATE klasgenoot SET Voornaam = '$Voornaam', Naam = '$Naam', Straat = '$Straat', Postcode = '$Postcode', Plaats = '$Plaats', Geboortedatum = '$Geboortedatum' WHERE Nummer = $Nummer";
    if($mysqli->query($sql)){
        echo "Record is gewijzigd";
    } else {
        echo "ERROR: " . $mysqli->error;
    }
    print "<br><a href='index.php'>Terug naar overzicht</a>";
}else 
{
    $sql = "SELECT * FROM klasgenoot WHERE Nummer = " . $_GET['teWijzigen'];
    $resultaat = $mysqli->query($sql);
    $row = $resultaat->fetch_assoc();
    echo '<table>
    <form action = "wijzigen.php" method="post">
        <tr>
            <td>Nummer</td>  <td> '. $row['Nummer'] . ' <input type="hidden" name="Nummer" value="' . $row['Nummer'] . '">

            <tr><td>VoorNaam        </td> <td>  <input type="text" name="Voornaam" value="' . $row['Voornaam'] . '">    </td></tr>
            <tr><td>Naam            </td> <td>  <input type="text" name="Naam" value="' . $row['Naam'] . '">            </td></tr>
            <tr><td>Straat          </td> <td>  <input type="text" name="Straat" value="' . $row['Straat'] . '">        </td></tr>
            <tr><td>Postcode        </td> <td>  <input type="text" name="Postcode" value="' . $row['Postcode'] . '">    </td></tr>
            <tr><td>Plaats          </td> <td>  <input type="text" name="Plaats" value="' . $row['Plaats'] . '">        </td></tr>
            <tr><td>Geboortedatum   </td> <td>  <input type="text" name="Geboortedatum" value="' . $row['Geboortedatum'] . '">  </td></tr>
            <tr><td colspan="2">               <input type="submit" name="veranderen" value="Record wijzigen"></td></tr>

            </form>
            </table>';
}
$mysqli->close();
?>