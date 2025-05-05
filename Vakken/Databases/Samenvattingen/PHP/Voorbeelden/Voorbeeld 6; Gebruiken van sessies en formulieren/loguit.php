<?php
// Start de sessie.  Begin hier telkens mee op elke pagina!
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        session_destroy();
        print "<br>Je bent uitgelogd";
        print "<br><a href='index.php'>Ga naar index.php.</a>";
    ?>
</body>
</html>