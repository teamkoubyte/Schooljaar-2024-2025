<?php
session_start();
include 'connect.php';

if (!isset($_SESSION['admin']) || $_SESSION['admin'] !== true) {
    header("Location: login.php");
    exit;
}

if (isset($_GET['delete'])) {
    $productId = intval($_GET['delete']);
    $mysqli->query("DELETE FROM tblProducten WHERE id = $productId");
    header("Location: admin.php");
    exit;
}

if (isset($_POST['product_id']) && isset($_POST['actie']) && isset($_POST['aantal'])) {
    $productId = intval($_POST['product_id']);
    $actie = $_POST['actie'];
    $aantal = intval($_POST['aantal']);
    
    $resultaat = $mysqli->query("SELECT voorraad FROM tblProducten WHERE id = $productId");
    $rij = $resultaat->fetch_assoc();
    $huidigeVoorraad = $rij['voorraad'];
    
    if ($actie == 'toevoegen') {
        $nieuweVoorraad = $huidigeVoorraad + $aantal;
        $mysqli->query("UPDATE tblProducten SET voorraad = $nieuweVoorraad WHERE id = $productId");
    } else if ($actie == 'verwijderen') {
        $nieuweVoorraad = max(0, $huidigeVoorraad - $aantal);
        $mysqli->query("UPDATE tblProducten SET voorraad = $nieuweVoorraad WHERE id = $productId");
    }
    
    header("Location: admin.php");
    exit;
}

$resultaat = $mysqli->query("SELECT id, naam, voorraad FROM tblProducten");
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Admin Pagina</title>
</head>
<body>
    <h2>Productenlijst</h2>
    <table border="1" cellpadding="5">
        <tr>
            <th>ID</th>
            <th>Productnaam</th>
            <th>Stock</th>
            <th>Acties</th>
        </tr>        <?php while ($rij = $resultaat->fetch_assoc()): ?>
        <tr>
            <td><?php echo $rij['id']; ?></td>
            <td><?php echo htmlspecialchars($rij['naam']); ?></td>
            <td><?php echo $rij['voorraad']; ?></td>
            <td>                <form method="post" action="stock_aanpassen.php">
                    <input type="hidden" name="id" value="<?php echo $rij['id']; ?>">
                    <button type="submit">Stock aanpassen</button>
                </form>
                <a href="admin.php?delete=<?php echo $rij['id']; ?>" onclick="return confirm('Weet je zeker dat je dit product wilt wissen?');">Product wissen</a>            </td>
        </tr>
        <?php endwhile; ?>
    </table>
    
    <a href="logout.php">Uitloggen</a>
</body>
</html>
