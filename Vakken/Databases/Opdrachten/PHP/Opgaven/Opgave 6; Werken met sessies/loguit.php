<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>
<?php
    session_destroy();
    print "<br>Je bent uitgelogd.";
    print "<br><a href='login.php'>Ga naar login</a>";
?>
</body>
</html>