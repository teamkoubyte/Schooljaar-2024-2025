import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);

        System.out.print("Voer je leeftijd in: ");
        int leeftijd = Integer.parseInt(toetsenbord.nextLine());

        if (isMeerderjarig(leeftijd)) {
            System.out.println("Je bent meerderjarig.");
        } else {
            System.out.println("Je bent minderjarig.");
        }
    }

    public static boolean isMeerderjarig(int leeftijd) {
        return (leeftijd >= 18);
    }
}