<?php
    echo "<h1>Record toevoegen</h1>";
    echo '<table>
            <form action="wijzig.php" method="post">
                <tr><td>Volgnummer </td> <td> '.$row["volgnummer"].' <input type="hidden" name="volgnummer" value="'.$row["volgnummer"].'">

                <tr><td>Voornaam </td> <td> <input type="text" name="voornaam" value="'.$row["voornaam"].'">    </td></tr>
                <tr><td>Naam </td> <td> <input type="text" name="naam" value="'.$row["naam"].'">    </td></tr>
                <tr><td>Straat </td> <td> <input type="text" name="straat" value="'.$row["straat"].'">    </td></tr>
                <tr><td>Postcode </td> <td> <input type="text" name="postcode" value="'.$row["postcode"].'">    </td></tr>
                <tr><td>Plaats </td> <td> <input type="text" name="plaats" value="'.$row["plaats"].'">    </td></tr>
                <tr><td>Geboortedatum </td> <td> <input type="text" name="geboortedatum" value="'.$row["geboortedatum"].'">    </td></tr>
                <tr><td colspan=2>  <input type="submit" value="Aanpassen" name="submit">    </td></tr>
            </form>;
        </table>';
    if (isset($_POST['submit'])) {
        $volgnummer = $_POST['id'];
        $telefoonnummer = $_POST['telefoonnummer'];
        $voornaam = $_POST['voornaam'];
        $naam = $_POST['naam'];
        $straat = $_POST['straat'];
        $postcode = $_POST['postcode'];
        $plaats = $_POST['plaats'];
        $geboortedatum = $_POST['geboortedatum'];

        include "connectie.php";
        $sql = "INSERT INTO leerlingen (telefoonnummer, voornaam, naam, straat, postcode, plaats, geboortedatum)";
    };    
?>