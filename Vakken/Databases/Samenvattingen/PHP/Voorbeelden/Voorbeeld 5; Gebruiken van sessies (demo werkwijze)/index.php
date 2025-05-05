<?php
    // Start de sessie. Begin hier telkens mee op pagina!
    session_start();           
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gebruiken van sessies (demowerkwijze)</title>
</head>
<body>
    <h1>Gebruiken van sessies (demowerkwijze)</h1>

    <?php
    // Geef waarden aan de sessie-variabelen die je wil gebruiken
    $_SESSION["favkleur"] = "blauw";
    $_SESSION["favdier"] = "kat";
    print "<a href='sessie2.php'>Klik hier om naar een andere pagina te gaan en te gaan en te zien dat je sessievariabelen daar ook nog opgevraagd kunnen worden</a>";
    ?>
    
</body>
</html>