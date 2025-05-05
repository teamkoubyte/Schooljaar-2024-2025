<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <input type="radio" name="credit_card" value="Visa">Visa <br>
        <input type="radio" name="credit_card" value="Mastercard">Mastercard <br>
        <input type="radio" name="credit_card" value="American Express">American Express <br>
        <input type="submit" name="Confirm" value="Confirm">
        
    </form>
</body>
</html>
<?php
   if (isset($_POST["Confirm"])) {

        if (isset($_POST["credit_card"])) {
            echo "";
        }
    $credit_card = $_POST["credit_card"];
    echo $credit_card;
   } 
   
?>