<?php
    include "connect.php";
    echo "<h1>Record Toevoegen</h1>";
    echo '<table>
            <form action = "toevoegen.php" method="post">
            <tr><td>Telefoonnummer</td> <td><input type="text" name="telefoonnummer"></td></tr>
            <tr><td>Voornaam</td> <td><input type="text" name="voornaam"></td></tr>
            <tr><td>Naam</td> <td><input type="text" name="naam"></td></tr>
            <tr><td>Straat</td> <td><input type="text" name="straat"></td></tr>
            <tr><td>Postcode</td> <td><input type="text" name="postcode"></td></tr>
            <tr><td>Plaats</td> <td><input type="text" name="plaats"></td></tr>
            <tr><td>Geboortedatum</td> <td><input type="text" name="geboortedatum"></td></tr>

            <tr><td colspan="2"><input type="submit" name="toevoegen" value="Record toevoegen"></td></tr>
            </form>
            </table>';
            
    if(isset($_POST['toevoegen'])){
            $telefoonnummer = $_POST['telefoonnummer'];
            $voornaam = $_POST['voornaam'];
            $naam = $_POST['naam'];
            $straat = $_POST['straat'];
            $postcode = $_POST['postcode'];
            $plaats = $_POST['plaats'];
            $geboortedatum = $_POST['geboortedatum'];
            $sql = "INSERT INTO leerlingen (telefoonnummer, voornaam, naam, straat, postcode, plaats, geboortedatum)
            VALUES 
            ('$telefoonnummer', '$voornaam', '$naam', '$straat', '$postcode', '$plaats', '$geboortedatum')";

            if($mysqli->query($sql)){
                echo "Record is toegevoegd";
            } else {
                echo "ERROR: " . $mysqli->error;
            }
            $mysqli->close();
        }
            print "<br><a href='index.php'>Terug naar overzicht</a>";
        
?>