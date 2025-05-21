<?php
session_start();
include 'connect.php';


if (!isset($_SESSION['gebruiker_type']) || $_SESSION['gebruiker_type'] !== 'admin') {
    header("Location: index.php");
    exit;
}

if (!isset($_GET['id'])) {
    header("Location: admin.php");
    exit;
}

$product_id = $_GET['id'];
$foutmelding = "";


if (isset($_POST['stock'])) {
    $nieuwe_stock = $_POST['stock'];

    if (!is_numeric($nieuwe_stock) || $nieuwe_stock < 0) {
        $foutmelding = "Stock moet een positief getal zijn.";
    } else {
        $stmt = $mysqli->prepare("UPDATE tblProducten SET stock = ? WHERE id = ?");
        $stmt->bind_param("si", $nieuwe_stock, $product_id);

        if ($stmt->execute()) {
            header("Location: admin.php");
            exit;
        } else {
            $foutmelding = "Er ging iets mis bij het opslaan.";
        }
    }
}


$result = $mysqli->query("SELECT productnaam, stock FROM tblProducten WHERE id = '$product_id'");
if (!$result || $result->num_rows !== 1) {
    header("Location: admin.php");
    exit;
}
$product = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Stock aanpassen</title>
</head>
<body>
    <h2>Stock aanpassen voor: <?php echo htmlspecialchars($product['productnaam']); ?></h2>

    <?php if (!empty($foutmelding)): ?>
        <p style="color:red;"><?php echo $foutmelding; ?></p>
    <?php endif; ?>

    <form method="post">
        <label>Nieuwe stock:</label>
        <input type="number" name="stock" value="<?php echo $product['stock']; ?>" min="0" required>
        <button type="submit">Opslaan</button>
        <a href="admin.php">Terug</a>
    </form>
</body>
</html>
