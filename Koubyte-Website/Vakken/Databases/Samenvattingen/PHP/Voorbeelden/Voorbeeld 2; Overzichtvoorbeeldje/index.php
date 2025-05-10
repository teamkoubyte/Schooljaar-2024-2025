<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overzichtvoorbeeldje</title>
</head>
<body>
    <?php
        // Om 1 lijn commentaar te schrijven gebruik je dubbele slashen (//)
        
        /*
            Meerdere lijnen commentaar kan je op deze manier schrijven.
            Schrijf steeds commentaar bij code die misschien later onduidelijk is.

            PHP-code staat tussen <?php en ?>
            Elke lijn code wordt afgesloten met een ;
            PHP wordt omgezet naar HTML. Alles wat je tot nu toe zag van HTML-tags, kan dus worden gebruikt in PHP-code.

            Tekst afdrukken kan met print of echo: er zijn subtiele verschillen tussen de tweede statements, meer later ...
        */
        
        print "Om tekst af te drukken gebruik je print ...";
        echo "maar echo werkt ook, kies maar wat je best lijkt.";

        // Je kan HTML gewoon in een print of echo zetten 
        print "<h3>Je gebruikt gewoon HTML tussen een printopdracht ...</h3>";

        /*
            PHP is een programmeertaal, het gebruik van variabelen is een belangrijk onderdeel van programmeertalen.
            Er zijn verschillende types variabelen, we beperken ons in het begin tot tekst en cijfers. 
        */

        print "Voor een variabele zet je een $. <br />";

        // Hier geven we de variabele $getal2 de waarde 10
        $getal2 = 10;

        // We maken een nieuwe variabele $som en zeggen dat hij hievoor $getal1 en $getal2 moet optellen.
        $som = $getal1 + $getal2;

        // We zorgen dat er op het scherm komt: 8 + 10 = 18
        print $getal1."+".$getal2."=".$som."<br />";

        // We geven de variabele $dier1 de waarde "Kat" (tekst tussen aanhalingstekens), $dier2 als waarde "hond".
        $dier1 = "kat";
        $dier2 = "hond";
        $dieren = $dier1.$dier2;
        print "Ik heb een ".$dier1." en een ".$dier2.". <br />";
        print "Als ik de twee variabelen samenvoeg krijg ik ".$dieren.". <br />";

        /*  Herhalingen
            Er zijn verschillende manieren om herhalingen te maken.
            De eerste is een FOR-loop. Je gebruikt deze als je weet hoe vaak je iets wil herhalen.
            In onderstaand voorbeeld begint de variabele $teller op 0, de lus zal lopen zoland $teller kleiner of gelijk is aan 10,
            er wordt steeds na elke lus 1 bijgeteld bij de teller met de instructie $teller++
        */

        for ($teller = 0; $teller <= 10; $teller++) { 
            print "FOR-lus. We zitten aan nummer ".$teller.". <br />";
        }
        
         /* Een tweede mogelijkheid is gebruik maken van een WHILE of een DO WHILE.
            Bij een WHILE-lus wordt eerst de voorwaarde gecontroleerd, het kan zijn dat deze dus niet uitgevoerd wordt als niet
            aan de voorwaarde voldaan is.
            Bij een DO-WHILE-lus wordt de lus eerst 1 keer uitgevoerd, dan pas wordt gecontroleerd of ze nog eens uitgevoerd moet worden.
         */
        
         $teller = 1;
         while ($teller <= 5) {
            print "WHILE-lus ... Het nummer is ".$teller.".<br />";
            $teller++;
         }

         $teller = 1;
         do {
            print "DO WHILE-lus ... Het nummer is ".$teller.". <br />";
         } while ($teller <= 5);
         echo 'Current PHP version: ' . phpversion();
    ?>
</body>
</html>