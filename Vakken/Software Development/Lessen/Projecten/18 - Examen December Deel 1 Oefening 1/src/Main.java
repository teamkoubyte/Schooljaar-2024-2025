import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);
        char karakters;
        String geldigeZin;
        char letter1;
        int teller = 0, aantalklinkers = 0, aantalCijfers = 0;
        int aantalHoofdletters = 0, aantalKleineletters = 0, aantalSpaties = 0;

        do {
            System.out.print("Geef een zin in: ");
            geldigeZin = toetsenbord.nextLine();
            letter1 = geldigeZin.charAt(0);
        } while (!(letter1 >= 'A' && letter1 <= 'Z' && geldigeZin.endsWith(".") || geldigeZin.endsWith("?") || geldigeZin.endsWith("!") || geldigeZin.endsWith(";") || geldigeZin.endsWith(":")));
        while
        (teller < geldigeZin.length()) {
            karakters = geldigeZin.charAt(teller);
            if (karakters >= 'A' && karakters <= 'Z') {
                aantalHoofdletters++;
            } else if (karakters >= 'a' && karakters <= 'z') {
                aantalKleineletters++;
            } else if (karakters >= '0' && karakters <= '9') {
                aantalCijfers++;
            } else if (karakters == ' ') {
                aantalSpaties++;
            }
            teller++;
        }
        System.out.println("Het aantal hoofdletters is: " + aantalHoofdletters);
        System.out.println("Het aantal kleine letters is: " + aantalKleineletters);
        System.out.println("Het aantal cijfers is: " + aantalCijfers);
        System.out.println("Het aantal spaties is: " + aantalSpaties);
        System.out.println(geldigeZin);

    }
}