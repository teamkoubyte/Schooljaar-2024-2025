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
    // Er is een controle of de sessie bestaat.  Indien niet dan wordt de bezoeker doorverwezen naar login.php
    if (isset($_SESSION["inlog"])) {
        if ($_SESSION["inlog"]=="gebruiker") {
            print "Je bent ingelogd als gebruiker.  Op deze plaats zouden nu opties voor een gebruiker kunnen staan.";
        }
        if ($_SESSION["inlog"]=="admin") {
                print "Je bent ingelogd als administrator.  Op deze plaats zouden nu opties voor een administrator kunnen staan.";
        }
        print "<br><a href='loguit.php'>Log uit.  Je zal terug moeten inloggen om deze pagina te bekijken.</a>";
    }   else {
        header('Location: login.php');
    }
    ?>
</body>
</html>