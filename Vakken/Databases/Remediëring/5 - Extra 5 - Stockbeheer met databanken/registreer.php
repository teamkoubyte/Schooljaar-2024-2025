<?php
include 'connect.php';

$foutmelding = "";

if (isset($_POST['naam']) && isset($_POST['wachtwoord'])) {
    $naam = $mysqli->real_escape_string($_POST['naam']);
    $wachtwoord = password_hash($_POST['wachtwoord'], PASSWORD_DEFAULT);
    $type = 'gebruiker';

    $check_sql = "SELECT id FROM tblgebruikers WHERE naam = '$naam'";
    $result = $mysqli->query($check_sql);

    if ($result && $result->num_rows > 0) {
        $foutmelding = "Naam bestaat al.";
    } else {
        $sql = "INSERT INTO tblgebruikers (naam, wachtwoord, type) VALUES ('$naam', '$wachtwoord', '$type')";
        if ($mysqli->query($sql) == TRUE) {
            header("Location: login.php");
            exit;
        }
    }
}
?>

<form  method="post">
    Naam: <input type="text" name="naam" required><br>
    Wachtwoord: <input type="password" name="wachtwoord" required><br>
    <button type="submit">Account aanmaken</button>
</form>
<?php 
    if ($foutmelding): 
?>

<p><?php echo $foutmelding; ?></p>

<?php endif; ?>