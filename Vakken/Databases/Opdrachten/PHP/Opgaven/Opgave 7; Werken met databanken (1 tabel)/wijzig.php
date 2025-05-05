<?php
echo "<h1>Tabel anpassen</h1>";
include "connectie.php";
if (isset($_POST['veranderen'])) {
    $volgnummer = $_POST['id'];
    $telefoonnummer = $_POST['telefoonnummer'];
    $voornaam = $_POST['voornaam'];
    $naam = $_POST['naam'];
    $straat = $_POST['straat'];
    $postcode = $_POST['postcode'];
    $plaats = $_POST['plaats'];
    $geboortedatum = $_POST['geboortedatum'];

    $sql = "UPDATE leerlingen SET 
     volgnummer = '".$volgnummer."',
     voornaam = '".$voornaam ="',
     naam = '".$naam."',
     straat = '".$straat."',
     postcode = '".$postcode."',
     plaats = '".$plaats."',
     geboortedatum = '".$geboortedatum."'
     WHERE id=".$volgnummer;
    if ($mysqli->query($sql)) {
        echo "Record succesvol bijgewerkt";
    } else {
        echo "Error record wijzigen: " . $mysqli->error;
    }
        print "<br><a href= 'index.php'>Ga terug naar de lijst</a>";
} else {
    $sql ="select * from leerlingen where Volgnummer = ".$_GET['teveranderen'];
    $resultaat = $mysqli->query($sql);
    $row = $resultaat->fetch_assoc();
    echo '<table>
            <form action="wijzig.php" method="post">
                <tr><td>Volgnummer </td> <td> '.$row["volgnummer"].' <input type="hidden" name="volgnummer" value="'.$row["volgnummer"].'">

                <tr><td>Voornaam </td> <td> <input type="text" name="voornaam" value="'.$row["voornaam"].'">    </td></tr>
                <tr><td>Naam </td> <td> <input type="text" name="naam" value="'.$row["naam"].'">    </td></tr>
                <tr><td>Straat </td> <td> <input type="text" name="straat" value="'.$row["straat"].'">    </td></tr>
                <tr><td>Postcode </td> <td> <input type="text" name="postcode" value="'.$row["postcode"].'">    </td></tr>
                <tr><td>Plaats </td> <td> <input type="text" name="plaats" value="'.$row["plaats"].'">    </td></tr>
                <tr><td>Geboortedatum </td> <td> <input type="text" name="geboortedatum" value="'.$row["geboortedatum"].'">    </td></tr>
            </form>;
        </table>';
}
?>