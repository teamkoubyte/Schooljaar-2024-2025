

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);

        String stad, provincie;
        System.out.print("Geef een stad: ");
        stad = toetsenbord.nextLine().trim();

        switch (stad.toUpperCase()) {
            case "MECHELEN" , "ANTWERPEN":
                provincie = "Antwerpen";
                break;
            case "LEUVEN" , "AARSCHOT":
                provincie = "Vlaams-Brabant";
                break;
            case "GENT":
                provincie = "Oost-Vlaanderen";
                break;
            case "OOSTENDE", "BRUGGE":
                provincie = "West-Vlaanderen";
                break;
            case "CHARLEROI":
                provincie = "Henegouwen";
                break;
            case "WAVER":
                provincie = "Waals-Brabant";
                break;
            default:
                provincie = "";
        }
        if (provincie.isEmpty()) {
            System.out.println("De provincie is niet gekend voor de stad " + stad + ".");
        } else {
            System.out.println((stad + " ligt in de provincie " + provincie + "."));
        }

    }
}

