public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }

    public static double geefPrijsJaarabonnement(int leeftijd) {
        Double prijs;

        if (leeftijd < 0) {
            prijs = null;
        } else if (leeftijd < 6) {
            prijs = 0.0;
        } else if (leeftijd <= 11) {
            prijs = 56.0;
        } else if (leeftijd <= 24) {
            prijs = 215.0;
        } else if (leeftijd <= 64) {
            prijs = 351.0;
        } else {
            prijs = 56.0;
        }
        return prijs;
    }
}