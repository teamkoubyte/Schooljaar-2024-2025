<?php
include "connect.php";
echo "<h1>Record Verwijderen</h1>";
    $sql = "DELETE FROM leerlingen WHERE id = " . $_GET['teVerwijderen'];
    if($mysqli->query($sql)){
        echo "Record is verwijderd";
    } else {
        echo "ERROR: " . $mysqli->error;
    }
        $mysqli->close();
        print "<br><a href='index.php'>Terug naar overzicht</a>"
?>