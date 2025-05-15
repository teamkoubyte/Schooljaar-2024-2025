import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);
        System.out.print("Geef een Franse infinitief: ");
        String infinitief = toetsenbord.nextLine().trim();

        if (infinitief.endsWith("er")) {
            String stam = infinitief.substring(0, infinitief.length() - 2);
            String participePasse = stam + "é";
            System.out.println("Participe passé van " + infinitief + " is " + participePasse);
        } else {
            if (infinitief.equals("recevoir")) {
                System.out.println("Participe passé van " + infinitief + " is reçu");
            } else if (infinitief.equals("prendre")) {
                System.out.println("Participe passé van " + infinitief + " is pris");
            } else if (infinitief.equals("voir")) {
                System.out.println("Participe passé van " + infinitief + " is vu");
            } else if (infinitief.equals("être")) {
                System.out.println("Participe passé van " + infinitief + " is été");
            } else if (infinitief.equals("courir")) {
                System.out.println("Participe passé van " + infinitief + " is couru");
            } else if (infinitief.equals("entendre")) {
                System.out.println("Participe passé van " + infinitief + " is entendu");
            } else if (infinitief.equals("sortir")) {
                System.out.println("Participe passé van " + infinitief + " is sorti");
            } else if (infinitief.equals("partir")) {
                System.out.println("Participe passé van " + infinitief + " is parti");
            } else if (infinitief.equals("finir")) {
                System.out.println("Participe passé van " + infinitief + " is fini");
            } else {
                System.out.println("Participe passé van " + infinitief + " is niet gekend.");
            }
        }
    }
}