<?php
session_start();

function genereer_som() {
  $getal1 = rand(1, 20);
  $getal2 = rand(1, 20);
  $operator = rand(1, 4);
  switch ($operator) {
    case 1:
      $som = $getal1 . ' + ' . $getal2;
      $antwoord = $getal1 + $getal2;
      break;
    case 2:
      $som = $getal1 . ' - ' . $getal2;
      $antwoord = $getal1 - $getal2;
      break;
    case 3:
      $som = $getal1 . ' * ' . $getal2;
      $antwoord = $getal1 * $getal2;
      break;
    case 4:
      if ($getal2 != 0) {
        $getal1 = $getal2 * rand(1, 10);
        $som = $getal1 . ' / ' . $getal2;
        $antwoord = $getal1 / $getal2;
      } else {
        return genereer_som();
      }
      break;
  }
  return array('som' => $som, 'antwoord' => $antwoord);
}

if (isset($_POST['reset'])) {
  session_unset();
  session_destroy();
  session_start();
}

if (!isset($_SESSION['score'])) {
  $_SESSION['score'] = 0;
  $_SESSION['aantal_oefeningen'] = 0;
  $_SESSION['oefeningen'] = array();
}

if (isset($_POST['antwoord'])) {
  $antwoord_gebruiker = $_POST['antwoord'];
  
  $huidige_index = $_SESSION['aantal_oefeningen'];
  $juiste_antwoord = $_SESSION['oefeningen'][$huidige_index]['antwoord'];
  
  if ($antwoord_gebruiker == $juiste_antwoord) {
    $_SESSION['score']++;
    $feedback = "Je antwoord was juist!";
  } else {
    $feedback = "Je antwoord was fout. Het juiste antwoord is: " . $juiste_antwoord;
  }
  
  $_SESSION['aantal_oefeningen']++;
}

if ($_SESSION['aantal_oefeningen'] < 10) {
  $nieuwe_som = genereer_som();
  $_SESSION['oefeningen'][$_SESSION['aantal_oefeningen']] = $nieuwe_som;
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Rekenoefeningen</title>
</head>
<body>
  <h1>Rekenoefeningen</h1>
  
  <?php if ($_SESSION['aantal_oefeningen'] > 0): ?>
    <h2>Je maakte <?php echo $_SESSION['aantal_oefeningen']; ?> oefeningen.</h2>
    <?php if (isset($feedback)): ?>
      <p><?php echo $feedback; ?></p>
    <?php endif; ?>
    <h2>Je behaalde <?php echo $_SESSION['score']; ?> op <?php echo $_SESSION['aantal_oefeningen']; ?></h2>
  <?php endif; ?>
  
  <?php if ($_SESSION['aantal_oefeningen'] < 10): ?>
    <p>Oefening nummer <?php echo $_SESSION['aantal_oefeningen'] + 1; ?>:</p>
    <p><?php echo $_SESSION['oefeningen'][$_SESSION['aantal_oefeningen']]['som']; ?> = </p>
    <form method="post">
      <input type="text" name="antwoord">
      <input type="submit" value="Verbeter!">
    </form>
  <?php else: ?>
    <p>Eindresultaat: Je behaalde <?php echo $_SESSION['score']; ?> op 10.</p>
    <form method="post">
      <input type="hidden" name="reset" value="1">
      <input type="submit" value="Nieuwe poging">
    </form>
  <?php endif; ?>
</body>
</html>