import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);

        String voornaam;
        String familienaam;
        int aantalDoelpunten;
        boolean verschillendeLengte;
        boolean isLionelMessi;
        boolean isEvenOfDeelbaarDoor6;
        boolean isOnevenEnTussen5en25;

//1.                                                                                                   //
        System.out.print("Geef de voornaam van je favoriete voetballer: ");
        voornaam = toetsenbord.nextLine();
        System.out.println(voornaam);

//2.                                                                                                   //
        System.out.print("Geef de familienaam van je favoriete voetballer: ");
        familienaam = toetsenbord.nextLine();
        System.out.println(familienaam);

//3.                                                                                                   //
        System.out.print("Geef het aantal door " + voornaam + " " + familienaam + " gescoorde doelpunten: ");
        aantalDoelpunten = Integer.parseInt(toetsenbord.nextLine());
        System.out.println(aantalDoelpunten);

//4.                                                                                                   //
        verschillendeLengte = voornaam.length() != familienaam.length();
        System.out.println("De voornaam en de familienaam van je favoriete voetballer bevatten een verschillend aantal karakters: " + !verschillendeLengte);

//5.                                                                                                   //
        isLionelMessi = voornaam.equals("Lionel") && familienaam.equals("Messi");
        System.out.println("Je favoriete voetballer heet Lionel Messi: " + isLionelMessi);

//6.                                                                                                   //
        isEvenOfDeelbaarDoor6 = (aantalDoelpunten % 2 == 0) || (aantalDoelpunten % 6 == 0);
        System.out.println("Het aantal doelpunten is even of deelbaar door 6: " + isEvenOfDeelbaarDoor6);

//8.                                                                                                   //
        isOnevenEnTussen5en25 = (aantalDoelpunten % 2 != 0) && (aantalDoelpunten > 5 && aantalDoelpunten < 25);
        System.out.println("Het aantal doelpunten is een oneven getal dat tussen 5 en 25 " + isOnevenEnTussen5en25);







































    }
}