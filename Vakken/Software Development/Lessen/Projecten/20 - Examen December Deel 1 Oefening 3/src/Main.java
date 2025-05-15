import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);

        int getal1, getal2, somGetal;

        System.out.print("Geef mij het eerst gehele getal: ");
        getal1 = Integer.parseInt(toetsenbord.nextLine());
        System.out.print("Geef mij het tweede gehele getal: ");
        getal2 = Integer.parseInt(toetsenbord.nextLine());
        somGetal = getal1 + getal2;

        System.out.println("De som van " + getal1 + " en " + getal2 + " is " + somGetal + ".");
        if (somGetal == 4) {
            System.out.println("Dit is een ongeluksgetal in China en Japan.");
        } else if (somGetal == 9) {
            System.out.println("Dit is een ongeluksgetal in Japan");
        } else if (somGetal == 13) {
            System.out.println("Dit is een ongeluksgetal in vele landen.");
        } else if (somGetal == 14) {
            System.out.println("Dit is een ongeluksgetal in China.");
        } else if (somGetal == 17) {
            System.out.println("Dit is een ongeluksgetal in Italië en Brazilië.");
        } else {
            System.out.println("Dit is geen ongeluksgetal.");
        }
    }
}