<?php
// Start de sessie.  Begin hier telkens mee op elke pagina!
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Geeft de waarden van de sessie-variabelen weer die je voordien opgeslagen hebt
session_destroy();
print "<br>Dit gaat nu niet meer: <a href='sessie2.php'>Klik hier om naar een andere pagina te gaan en te zien dat je sessievariabelen daar ook nog opgevraagd kunnen worden.</a>";
print "<br>Je kan hier de sessie terug aanmaken: <a href='index.php'>Klik hier om de sessievariabelen terug in te stellen.</a>";

?>

</body>
</html>