<?php
include "connect.php";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Record Verwijderen</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Record Verwijderen</h1>

<?php
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
print "<p><a href='index.php'>Terug naar overzicht</a></p>";
?>

</body>
</html>