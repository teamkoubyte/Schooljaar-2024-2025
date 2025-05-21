
<?php
session_start();
include 'connect.php';

$foutmelding = "";

if (isset($_POST['naam']) && isset($_POST['wachtwoord'])) {
    $naam = $mysqli->real_escape_string($_POST['naam']);
    $wachtwoord = $_POST['wachtwoord'];

    $sql = "SELECT id, wachtwoord, type FROM tblgebruikers WHERE naam = '$naam'";
    $result = $mysqli->query($sql);

    if ($result && $result->num_rows == 1) {
        $row = $result->fetch_assoc();
        if (password_verify($wachtwoord, $row['wachtwoord'])) {
            $_SESSION['gebruiker_id'] = $row['id'];
            $_SESSION['gebruiker_type'] = $row['type'];
            if ($row['type'] == 'admin') {
                header("Location: admin.php");
                exit;
            } 
        } else {
            $foutmelding = "Ongeldige gebruikersnaam of wachtwoord.";
        }
    } else {
        $foutmelding = "Ongeldige gebruikersnaam of wachtwoord.";
    }
}
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form method="post">
        Gebruikersnaam: <input type="text" name="gebruikersnaam" required><br>
        Wachtwoord: <input type="password" name="wachtwoord" required><br>
    <button type="submit">Inloggen</button> 
    </form>
</body>
</html>

