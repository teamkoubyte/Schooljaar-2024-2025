<?php
function kwadratisch($a, $b, $c) {
    $d = $b * $b - 4 * $a * $c;
    $r = "Opgave: " . $a . "x<sup>2</sup> + " . $b . "x + " . $c . " = 0<br><br>";
    $r .= "D = " . $d . "<br>";

    if ($d > 0) {
        $x1 = (-$b + sqrt($d)) / (2 * $a);
        $x2 = (-$b - sqrt($d)) / (2 * $a);
        $r .= "x<sup>1</sup> = " . $x1 . "<br>x<sup>2</sup> = " . $x2 . "<br>";
    } elseif ($d == 0) {
        $x = -$b / (2 * $a);
        $r .= "x = " . $x . "<br>";
    } else {
        $r .= "Geen reële oplossingen.<br>";
    }
    return $r;
}

$a = isset($_POST['a']) ? floatval($_POST['a']) : null;
$b = isset($_POST['b']) ? floatval($_POST['b']) : null;
$c = isset($_POST['c']) ? floatval($_POST['c']) : null;

if ($a !== null && $b !== null && $c !== null) {
    $a_bericht = empty($_POST['a']) ? "a-waarde niet ingevuld: a = 1.<br>" : "";
    $b_bericht = empty($_POST['b']) ? "b-waarde niet ingevuld: b = 1.<br>" : "";
    $c_bericht = empty($_POST['c']) ? "c-waarde niet ingevuld: c = 0.<br><br>" : "";

    $a = empty($_POST['a']) ? 1 : $a;
    $b = empty($_POST['b']) ? -3 : $b;
    $c = empty($_POST['c']) ? 1 : $c;

    echo $a_bericht . $b_bericht . $c_bericht;
    echo kwadratisch($a, $b, $c);
    echo '<br><a href="index.php"><button>Andere oefening ingeven</button></a>'; 
} else {
    ?>
    <!DOCTYPE html>
    <html>
    <head><title>Vierkantsvergelijkingen oplossen</title>
    </head>
    <body>
        <h1>Vierkantsvergelijkingen oplossen</h1>
        <form method="post" action="index.php">
            <input type="text" name="a"> x<sup>2</sup> +
            <input type="text" name="b"> x +
            <input type="text" name="c"> = 0<br><br>
            <input type="submit" value="Bereken">
            <input type="reset" value="Reset">
        </form>
    </body>
    </html>
    <?php
}
?>