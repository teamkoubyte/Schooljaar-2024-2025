import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);
        int leeftijd1 = 0, leeftijd2 = 0;
        String tekst;

        do {
            System.out.print("Geef leeftijd 1: ");
            leeftijd1 = Integer.parseInt(toetsenbord.nextLine());

            System.out.print("Geef leeftijd 2: ");
            leeftijd2 = Integer.parseInt(toetsenbord.nextLine());
        } while (leeftijd1 >= leeftijd2);

        while (leeftijd1 <= leeftijd2) {
            if (leeftijd1 >= 18) {
            tekst= "meerderjarige";
            } else {
                tekst = "minderjarige";
            }
            System.out.println(leeftijd1 + "|" + tekst);
            leeftijd1++;
        }
    }
}