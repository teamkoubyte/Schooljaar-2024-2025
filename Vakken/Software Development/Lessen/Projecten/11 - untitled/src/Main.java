import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);

        String voornaam;
        String familienaam;
        int aantalDoelpunten;

        System.out.print("Geef de voornaam van je favoriete voetballer: ");
        voornaam = toetsenbord.nextLine();
        System.out.println(voornaam);

        System.out.print("Geef de familienaam van je favoriete voetballer: ");
        familienaam = toetsenbord.nextLine();
        System.out.println(familienaam);

        System.out.println("Geef het aantal gescoorde doelpunten: ");
        aantalDoelpunten = Integer.parseInt(toetsenbord.nextLine());
        System.out.print(aantalDoelpunten);


    }
}