<?php
session_start();
include 'connect.php';
$foutmelding = "";

$controleerTabel = $mysqli->query("SHOW TABLES LIKE 'tblAdmin'");
if($controleerTabel->num_rows == 0) {
    // Tabel bestaat niet, maak deze aan
    $mysqli->query("CREATE TABLE tblAdmin (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        gebruikersnaam VARCHAR(50) NOT NULL,
        wachtwoord VARCHAR(50) NOT NULL
    )");
    
    $mysqli->query("INSERT INTO tblAdmin (gebruikersnaam, wachtwoord) VALUES ('admin', 'admin123')");
}

if (isset($_POST['gebruikersnaam']) && isset($_POST['wachtwoord'])) {
    $gebruikersnaam = $_POST['gebruikersnaam'];
    $wachtwoord = $_POST['wachtwoord'];
    
    $sqlQuery = "SELECT * FROM tblAdmin WHERE gebruikersnaam = '$gebruikersnaam' AND wachtwoord = '$wachtwoord'";
    $resultaat = $mysqli->query($sqlQuery);
    
    if ($resultaat->num_rows > 0) {
        $_SESSION['admin'] = true;
        
        // Redirect naar admin pagina
        header("Location: admin.php");
        exit();
    } else {
        $foutmelding = "Ongeldige gebruikersnaam of wachtwoord";
    }
}
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <?php if ($foutmelding != ""): ?>
        <p><?php echo $foutmelding; ?></p>
    <?php endif; ?>
    <form method="post" action="">
        Gebruikersnaam: <input type="text" name="gebruikersnaam" required><br>
        Wachtwoord: <input type="password" name="wachtwoord" required><br>
        <button type="submit">Inloggen</button>
    </form>
    <p><a href="index.php">Terug naar voorraad</a></p>
</body>
</html>