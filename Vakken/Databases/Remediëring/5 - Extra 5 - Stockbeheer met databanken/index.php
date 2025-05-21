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
$query = "SELECT * FROM tblProducten";
$result = $mysqli->query($query);
?>
  <h2>Productenlijst</h2>
<table border="1" cellpadding="5">
    <tr>
        <th>ID</th>
        <th>Productnaam</th>
        <th>Stock</th>
    </tr>
    <?php while ($rij = $result->fetch_assoc()): ?>
    <tr>
        <td><?php echo $rij['id']; ?></td>
        <td><?php echo $rij['productnaam']; ?></td>
        <td><?php echo $rij['stock']; ?></td>
    </tr>
    <?php endwhile; ?>
</table>
</body>
</html>