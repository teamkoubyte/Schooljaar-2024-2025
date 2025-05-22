<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>Hier kan je de stock zien van je producten</h1>
    <br>
    <h4>Log hier in om deze aan te passen<br><a href="login.php">Log in</a></h4><br>

<?php
include 'connect.php';
$sqlQuery = "SELECT * FROM tblProducten";
$resultaat = $mysqli->query($sqlQuery);
?>
  <h2>Productenlijst</h2>
<table border="1" cellpadding="5">
    <tr>
        <th>ID</th>
        <th>Productnaam</th>
        <th>Stock</th>
    </tr>    <?php while ($rij = $resultaat->fetch_assoc()): ?>
    <tr>
        <td><?php echo $rij['id']; ?></td>
        <td><?php echo htmlspecialchars($rij['naam']); ?></td>
        <td><?php echo $rij['voorraad']; ?></td>
    </tr>
    <?php endwhile; ?>
</table>
</body>
</html>