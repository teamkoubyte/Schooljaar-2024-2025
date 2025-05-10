<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulieren gebruiken</title>
</head>
<body>
    <h3>Formulieren gebruiken</h3>

    <?php
/*
Bij de eerste IF kijk ik na of de geposte variabele "knop" gekend is met de functie ISSET.
Als dat niet het geval is betekent dat, dat het formulier getoond moet worden (in de ELSE kant van de IF).
Als dat wel het geval is betekent dat dat ik de naam en voornaam kan afdrukken.
Voor het aanspreken van variabelen die met de methode POST (zie in formulier) doorgestuurd worden
moet ik   $_POST["variabelenaam"] gebruiken.
Indien hij die naam niet zou kennen, geeft hij warnings of foutmeldingen, daarom is het belangrijk dat die
IF gebruikt wordt.
*/
        
        if (isset($_POST["knop"])) {
            print "Je gaf <b>".$_POST["voornaam"]."</b> op als voornaam en je achternaam is <b>".$_POST["achternaam"]."</b>.<br>Geslacht: <b>".$_POST["gender"]."</b></b>Vervoer:";
            if (isset($_POST["vervoer1"])) {
                print "<br>".$_POST["vervoer2"];
            }
            if (isset($_POST["vervoer2"])) {
                print "<br>".$_POST["vervoer2"];
            }
            if (isset($_POST["vervoer3"])) {
                print "<br>".$_POST["vervoer3"];
            }
        } else {
/*
Je begint een formulier door te zeggen dat je als methode "post" gebruikt en naar waar de resulaten moeten doorgestuurd worden.
Ik laat de resultaten doorsturen naar hetzelfde bestandje (index.php).
Je geeft elk veld een naam zodat je die na het posten kan gebruiken.
*/
			echo '
            <table>
                <form method="post" action="index.php">
                    <tr><td>Voornaam</td><td><input type="text" name="voornaam"></td></tr>
                    <tr><td>Achternaam</td><td><input type="text" name="achternaam"></td></tr>
                    <tr> <td>Gender</td>
                         <td>
                          <input type="radio" name="gender" value="m">man
                          <input type="radio" name="gender" value="v">vrouw
                          <input type="radio" name="gender" value="x">ander
                         </td></tr>
                    <tr><td>Vervoer</td>
                        <td>                          
                            <input type="checkbox" name="vervoer1" value="te voet">Ik kom te voet.<br>
                            <input type="checkbox" name="vervoer2" value="fiets">Ik kom met de fiets.<br>
                            <input type="checkbox" name="vervoer3" value="auto">Ik kom met de bus.
                        </td>           
                    </tr>     
                    <td><td><input type="submit" name = "knop" value="Doorsturen!"></td></tr>
                </form>                
            </table>';
        }
    ?>
</body>
</html>