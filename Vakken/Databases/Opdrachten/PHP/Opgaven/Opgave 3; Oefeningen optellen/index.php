<?php
// Nieuwe som genereren
$getal1 = rand(0, 10);
$getal2 = rand(0, 10);
$correctAntwoord = $getal1 + $getal2;
$bericht = "";

// Als het formulier is verstuurd
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $gegevenAntwoord = isset($_POST['antwoord']) ? (int)$_POST['antwoord'] : null;
    $getal1 = (int)$_POST['getal1'];
    $getal2 = (int)$_POST['getal2'];
    $correctAntwoord = $getal1 + $getal2;

    if ($gegevenAntwoord === $correctAntwoord) {
        $bericht = "<p>Het is juist!</p>";
    } else {
        $bericht = "<p>Fout!</p>";
        $bericht .= "<p>$getal1 + $getal2 = $correctAntwoord <br>Jouw antwoord was: $gegevenAntwoord</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Optellen</title>
</head>
<body>
    <h1>Optellen</h1>
    <?php echo $bericht; ?>

    <form method="post">
        <p><?php echo "$getal1 + $getal2 = "; ?></p>
        <input type="hidden" name="getal1" value="<?php echo $getal1; ?>">
        <input type="hidden" name="getal2" value="<?php echo $getal2; ?>">
        <input type="text" name="antwoord" required>
        <button type="submit">Controleer</button>
    </form>

    <br>
    <a href=""><button>Volgende oefening</button></a>

</body>
</html>