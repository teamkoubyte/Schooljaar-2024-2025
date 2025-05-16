<?php
    session_start()
?>

<!DOCTYPE html>
<html>
<body>
    
<?php 
    if(isset($_SESSION["inlog"])){
        if ($_SESSION["inlog"]=="gebruiker"){
            print "Je bent ingelogd als gebruiker. 
            <br> Naam: gebruiker
            <br> Wachtwoord: gebruiker  
            <br> Adres: Gebruikersesteenweg
            <br> Nummer: gebruiker1
            <br> Plaats: Mechelen      ";
        }
        if($_SESSION["inlog"]=="admin"){
            print "Je bent ingelogd als admin. <br> Naam: admin
            <br> Wachtwoord: admin.
            <br> Adres: Adminsesteenweg
            <br> Nummer: admin1
            <br> Plaats: Mechelen     ";
        }
        print "<br> <a href='loguit.php'>Log uit. Je zal terug moeten inloggen om deze pagina te kunnen bekijken.</a>";
    }

    else {
        header('Location: login.php');
    }
?>
</body>
</html>