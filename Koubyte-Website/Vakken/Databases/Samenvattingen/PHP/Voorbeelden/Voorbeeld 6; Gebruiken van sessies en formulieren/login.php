<?php
// Start de sessie. Begin hier telkens mee op elke pagina!
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gebruiken van sessies en formulieren</title>
</head>
<body>
    <?php
    if (isset($_POST["knop"])){
        if (($_POST["gebruikersnaam"]=="gebruiker") and ($_POST["wachtwoord"]=="gebruiker")){
            $_SESSION["inlog"]="gebruiker";
            print "<br>Je bent ingelogd als gebruiker.<br>Klik <a href='index.php'>hier</a> om naar de indexpagina te gaan.";
        }
        if (($_POST["gebruikersnaam"]=="admin") and ($_POST["wachtwoord"]=="admin")){
            $_SESSION["inlog"]="admin";
            print "<br>Je bent ingelogd als admin.<br>Klik <a href='index.php'>hier</a> om naar de indexpagina te gaan.";
        }
        if (!isset($_SESSION["inlog"])) {
            print "<br>Login mislukt! <br>Klik <a href='index.php'> hier</a> om naar de indexpagina te gaan. Je zal daar niet binnen kunnen en verwezen worden naar de inlogpagina.";
        }
    }
    ?>
    <!DOCTYPE html>
    <html>
    <body>
    <?php
        session_destroy();
        print "<br>Je bent uitgelogd.";
        print "<br><a href='index.php'>Ga naar index.php.</a>";
    ?>
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gebruiken van sessies en formulieren</title>
    </head>
    <body>
        <?php
        session_destroy();
        print "<br>Je bent uitgelogd.";
        print "<br><a href='index.php'>Ga naar index.php.</a>";
        ?>
    </body>
    </html>
    else {
        echo '
            <table>
                <form method="post" action="login.php">
                    <tr><td>Gebruikersnaam</td><td><input type="text" name="gebruikersnaam"></td></tr>
                    <tr><td>Wachtwoord</td><td><input type="text" name="wachtwoord"></td></tr>
                    <td><td><input type="submit" name = "knop" value="Doorsturen!"></td></tr>
                </form>                
            </table>';
    }
</body>
</html>