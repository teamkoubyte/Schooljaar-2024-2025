import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);
        String zin, nieuweZin = "";
        char karakters, karaktersTwee;
        int klinkerTeller = 0, leestekenTeller = 0, haakjesTeller = 0, cijferTeller = 0;


        do {
            System.out.print("Geef een zin die start met een hoofdletter en eindigt op een uitroepteken of een punt: ");
            zin = toetsenbord.nextLine();
        } while (!((zin.charAt(0) >= 'A' && zin.charAt(0) <= 'Z') && (zin.endsWith("!") || zin.endsWith("."))));

        for (int teller = 0; teller <= zin.length() / 2; teller++) {
            karakters = zin.charAt(teller);
            if (karakters >= '0' && karakters <= '9') {
                cijferTeller++;
            } else if (karakters == '(' || karakters == ')') {
                haakjesTeller++;
            } else if (karakters == ',' || karakters == '!' || karakters == ';' || karakters == '?' || karakters == '.' || karakters == ':') {
                leestekenTeller++;
            } else if ((karakters == 'A' || karakters == 'E' || karakters == 'I' || karakters == 'O' || karakters == 'U') || (karakters == 'a' || karakters == 'e' || karakters == 'i' || karakters == 'o' || karakters == 'u')) {
                klinkerTeller++;
            }
        }

        for (int tellerTwee = zin.length() - 1; tellerTwee <= zin.length() / 2; tellerTwee--) {
            karaktersTwee = zin.charAt(tellerTwee);
            if ((karaktersTwee == 'a' || karaktersTwee == 'e' || karaktersTwee == 'i' || karaktersTwee == 'o' || karaktersTwee == 'u')) {
                nieuweZin += '%';
            } else if (karaktersTwee == '!' || karaktersTwee == ',' || karaktersTwee == ';' || karaktersTwee == '?' || karaktersTwee == '.' || karaktersTwee == ':') {
                nieuweZin += '|';
            } else if (karaktersTwee >= '0' && karaktersTwee <= '9') {
                nieuweZin += '^';
            }
        }

        System.out.println("Aantal cijfers in de tweede helft van de zin: " + cijferTeller);
        System.out.println("Aantal haakjes in de tweede helft van de zin: " + haakjesTeller);
        System.out.println("Aantal leestekens in de tweede helft van de zin: " + leestekenTeller);
        System.out.println("Aantal klinkers in de tweede helft van de zin: " + klinkerTeller);
        System.out.println(nieuweZin);
    }
}