<?php
session_start();
include 'connect.php';

// Controleer of gebruiker is ingelogd
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}

// Controleer of er een product ID is meegegeven
if (!isset($_POST['id'])) {
    header("Location: admin.php");
    exit;
}

$productId = $_POST['id'];

// Haal product informatie op
$sqlQuery = "SELECT * FROM tblProducten WHERE id = $productId";
$resultaat = $mysqli->query($sqlQuery);
$product = $resultaat->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Stock aanpassen</title>
</head>
<body>    <h1>Stock aanpassen voor <?php echo $product['naam']; ?></h1>
    <p>Huidige voorraad: <?php echo $product['voorraad']; ?></p>    <form method="post" action="admin.php">
        <input type="hidden" name="product_id" value="<?php echo $productId; ?>">
        
        <input type="radio" name="actie" value="toevoegen" id="toevoegen" required>
        <label for="toevoegen">Stock toevoegen</label>
        
        <input type="radio" name="actie" value="verwijderen" id="verwijderen" required>
        <label for="verwijderen">Stock verwijderen</label>
        <br><br>
        
        <label for="aantal">Aantal:</label>
        <input type="number" name="aantal" id="aantal" required min="1">
        <br><br>
        
        <button type="submit">Aanpassen</button>
    </form>

    <p><a href="admin.php">Terug naar admin</a></p>
</body>
</html>
