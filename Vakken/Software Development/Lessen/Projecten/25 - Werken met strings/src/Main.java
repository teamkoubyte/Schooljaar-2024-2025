import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);
        String tekst1, tekst2;

        System.out.print("Typ tekst 1: ");
        tekst1 = toetsenbord.nextLine();

        System.out.print("Typ tekst 2: ");
        tekst2 = toetsenbord.nextLine();

        System.out.println("isEmpty: " + tekst1.isEmpty());
        System.out.println("isBlank: "+ tekst1.isBlank());
        System.out.println("Steven".equals(tekst2));
        System.out.println("esualsIgnoreCase: "+ tekst1.equalsIgnoreCase(tekst2));
        System.out.println(tekst2.trim());
    }
}