<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reeks van Fibonacci</title>
</head>
<body>
    <h1>Reeks van Fibonacci</h1>
    <?php
    # Toon de startgetallen
    $getal1 = 0;
    $getal2 = 1;
    $getalNieuw = 1;
    echo "$getal1 $getal2";

    while ($getalNieuw < 1000) {

        # Bereken het nieuwe getal
        $getalNieuw = $getal1 + $getal2;

        # Toon het nieuwe getal enkel als het klein is dan 1000
        if ($getalNieuw < 1000) {
             echo " $getalNieuw";
        }

        # Update de varaibelen
        $getal1 = $getal2;
        $getal2 = $getalNieuw;
    }
    ?>
</body>
</html>