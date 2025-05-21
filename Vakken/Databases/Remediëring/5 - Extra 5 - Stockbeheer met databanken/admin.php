<?php
session_start();
include 'connect.php';


if (!isset($_SESSION['gebruiker_id'])) {
    header("Location: login.php");
    exit;
}

if ($_SESSION['gebruiker_type'] !== 'admin') {
    header("Location: gebruiker.php"); 
    exit;
}

if (isset($_GET['delete'])) {
    $product_id = intval($_GET['delete']);
    $mysqli->query("DELETE FROM tblProducten WHERE id = $product_id");
    header("Location: admin.php");
    exit;
}


$result = $mysqli->query("SELECT id, productnaam, stock FROM tblProducten");
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
        </tr>
        <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?php echo $row['id']; ?></td>
            <td><?php echo htmlspecialchars($row['productnaam']); ?></td>
            <td><?php echo $row['stock']; ?></td>
            <td>
                <a href="wijzig_stock.php?id=<?php echo $row['id']; ?>">Aanpassen</a>
                <a href="admin.php?delete=<?php echo $row['id']; ?>" onclick="return confirm('Weet je zeker dat je dit product wilt verwijderen?');">Verwijderen</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>
