<?php
    include "connect.php";
    echo "<h1>Record Toevoegen</h1>";
    echo '<table>
            <form action = "toevoegen.php" method="post">
            <tr><td>Voornaam</td> <td><input type="text" name="Voornaam"></td></tr>
            <tr><td>Naam</td> <td><input type="text" name="Naam"></td></tr>
            <tr><td>Straat</td> <td><input type="text" name="Straat"></td></tr>
            <tr><td>Postcode</td> <td><input type="text" name="Postcode"></td></tr>
            <tr><td>Plaats</td> <td><input type="text" name="Plaats"></td></tr>
            <tr><td>Geboortedatum</td> <td><input type="text" name="Geboortedatum"></td></tr>

            <tr><td colspan="2"><input type="submit" name="toevoegen" value="Record toevoegen"></td></tr>
            </form>
            </table>';

        if(isset($_POST['toevoegen'])){
            $Voornaam = $_POST['Voornaam'];
            $Naam = $_POST['Naam'];
            $Straat = $_POST['Straat'];
            $Postcode = $_POST['Postcode'];
            $Plaats = $_POST['Plaats'];
            $Geboortedatum = $_POST['Geboortedatum'];
            $sql = "INSERT INTO klasgenoot (Voornaam, Naam, Straat, Postcode, Plaats, Geboortedatum)
            VALUES 
            ('$Voornaam', '$Naam', '$Straat', '$Postcode', '$Plaats', '$Geboortedatum')";

            if($mysqli->query($sql)){
                echo "Record is toegevoegd";
            } else {
                echo "ERROR: " . $mysqli->error;
            }
            $mysqli->close();
        }
            print "<br><a href='index.php'>Terug naar overzicht</a>";
        
?>