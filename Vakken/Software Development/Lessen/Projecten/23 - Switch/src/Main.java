import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
     Scanner toetsenbord = new Scanner(System.in);



     for (int teller = 0; teller < stad.length() / 2; teller ++) {
         karakter = stad.charAt(teller);
         System.out.print(karakter);
     }

     System.out.println("*** Toon de tweede helft van de string ***");
     for (int teller = stad.length() / 2; teller < stad.length(); teller++) {
         karakter = stad.charAt(teller);
         System.out.print(karakter);
     }

        System.out.println();

    }
}