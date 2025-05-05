<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Tafels van vermenigvuldiging</title>
</head>
<body>
   <h1>Tafels van vermenigvuldiging</h1>
   <?php

   echo "<table border='1'>";

   # 10 rijen
   for ($teller1 = 0; $teller1 <= 10; $teller1++) {
      echo "<tr>";

      # 10 kolommen
      for ($teller2 = 0; $teller2 <= 10; $teller2++) {

         # Bereken de som
         $som = $teller1 * $teller2;
         echo "<td style='width: 30px; height: 30px;'>$som</td>";
      }

      echo "</tr>";
   }
   echo "</table>";

   ?>
</body>
</html>