<?php
include "connect.php";
echo "<h1>Record Verwijderen</h1>";

if (isset($_GET['teVerwijderen'])) {
    $id = intval($_GET['teVerwijderen']);
    
    $sql = "DELETE FROM leerlingen WHERE id = $id";
    if ($mysqli->query($sql)) {
        echo "<p>Record is verwijderd</p>";
    } else {
        echo "<p>ERROR: " . $mysqli->error . "</p>";
    }
}

$mysqli->close();
print "<p><a href='index.php'>Terug naar overzicht</a></p>"
?>