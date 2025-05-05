<?php
// Start de sessie.  Begin hier telkens mee op elke pagina!
session_start();
?>
<!DOCTYPE html>
<html>
<body>

    <?php
    if (isset($_SESSION["favkleur"])) {
	    // Geeft de waarden van de sessie-variabelen weer die je voordien opgeslagen hebt
	    print "Kleur: ".$_SESSION["favkleur"]."<br>";
	    print "Dier: ".$_SESSION["favdier"];
    } else {
	print "Ik zie geen sessievariabelen";
    }
    print "<br><a href='sessie3.php'>Klik hier om de sessie te vernietigen.</a>";
    ?>

</body>
</html>