import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);
        String voornaam;
        int leeftijd;
        int gewicht;
        int lengte;

        System.out.print("Wat is je voornaam? ");
        voornaam = toetsenbord.nextLine().trim();

        System.out.print("Wat is je leeftijd? ");
        leeftijd = Integer.parseInt(toetsenbord.nextLine().trim());

        System.out.print("Wat is je gewicht? ");
        gewicht = Integer.parseInt(toetsenbord.nextLine().trim());

        System.out.print("Wat is je lengte? ");
        lengte = Integer.parseInt(toetsenbord.nextLine().trim());

        if (leeftijd >= 18 && leeftijd <= 80) {
            System.out.println("Je hebt een geschikte leeftijd" + " (" + leeftijd + " jaar)" + " om de Javatoren te beklimmen");

            if (leeftijd > gewicht / 5 && leeftijd < lengte / 2) {
                System.out.println("Je voldoet aan alle voorwaarden om op de Cork Screw te mogen");
            } else if (voornaam.charAt(voornaam.length() - 1) == Character.toLowerCase(voornaam.charAt(0))) {
                System.out.println("je voornaam begint met " + voornaam.charAt(0) + " en eindigt met " + voornaam.charAt(voornaam.length() - 1) + "Daarom mag je plaatsnemen in de Nameride");
            } else {
                System.out.println("Je mag weliswaar niet in de Cork Screw en de Nameride, maar er zijn nog heel wat andere leuke attracties.");
            }
        } else {
            System.out.println("Je bent " + leeftijd + " jaar oud. Je hebt een geschikte leeftijd om spaghetti te eten in ons restaurant");

            if (voornaam.charAt(0) == 'P' || voornaam.charAt(0) == 'p' && voornaam.length() >= 5) {
                System.out.println("je voornaam begint met een " + voornaam.charAt(0) + " en is " + voornaam.length() + " karakters lang daarom mag je een pizza eten in ons restaurant");
            }
        }
    }
}

