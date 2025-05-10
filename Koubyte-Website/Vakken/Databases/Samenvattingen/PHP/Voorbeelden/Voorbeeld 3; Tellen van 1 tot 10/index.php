<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tellen van 1 tot 10</title>
</head>
<body>
    <h1>Tellen van 1 tot 10</h1>
    <?php
        print "We zitten nu in het gedeelte waar je PHP-code kan schrijven.<br>";
        for ($teller = 0; $teller <= 10 ; $teller++) {
            echo "Het nummer is nu: $teller <br>";
           }
   ?>
   <p>Hier kan je nu verder gaan met andere code in HTML.</p> 
</body>
</html>