<?php
include "connectie.php";
echo "<h1>Record verwijderen</h1>";
    $sql = "DELETE FROM leerlingen WHERE id =".$_GET['tewissen'];
    if ($mysqli->query($sql)) {
        echo "Record succesvol gewist.";
    } else {
        echo "Error record wissen: " . $mysqli->error;
    }
    $mysqli->close();
    print "<br><a href='index.php'>Ga terug naar de lijst</a>";
?>