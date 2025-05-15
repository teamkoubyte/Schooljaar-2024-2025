import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenord = new Scanner(System.in);
        String tekst;
        boolean binairGetal = true;
        int teller;
        char karakter;

        System.out.print("Binair getal: ");
        tekst = toetsenord.nextLine();
        if (karakter != '0' && karakter != '1') {
            binairGetal = false;
        }
        if (binairGetal) {
            System.out.println("Dit is een geldig binair getal.");
        } else {
            System.out.println("Dit is geen geldig binair getal");
        }
    }
}