import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);

        int leeftijd;
        String kortingscategorie;
        double prijsOpBasisVanLeeftijd, prijsOpBasisVanKortingscategorie;
        double toegangsprijs;

        System.out.print("Geef je leeftijd: ");
        leeftijd = Integer.parseInt(toetsenbord.nextLine());

        System.out.print("Geef je eventuele kortingscategorie: ");
        kortingscategorie = Kortingscategorie.valueOf(toetsenbord.nextLine().toUpperCase());

        if (leeftijd <= 12) {
            prijsOpBasisVanLeeftijd = 0.0;
        } else if (leeftijd <= 17) {
            prijsOpBasisVanLeeftijd = 4.0;
        } else if (leeftijd <= 26) {
            prijsOpBasisVanLeeftijd = 13.0;
        } else {
            prijsOpBasisVanLeeftijd = 15.0;
        }

        switch (kortingscategorie) {
            case GROEPSTARIEF, MECHELAAR:
                prijsOpBasisVanKortingscategorie = 13.0;
                break;
            case PERSOON_MET_BEPERKING:
                prijsOpBasisVanKortingscategorie = 4.0;
                break;
            case UITPAS_MET_KANSENTARIEF:
                prijsOpBasisVanKortingscategorie = 3.0;
                break;
            case LERARENKAART, WERKNEMER_STAD_MECHELEN, MUSEUMPAS:
                prijsOpBasisVanKortingscategorie = 0.0;
                break;
            default:
                prijsOpBasisVanKortingscategorie = prijsOpBasisVanLeeftijd;
        }

        if (prijsOpBasisVanLeeftijd < prijsOpBasisVanKortingscategorie) {
            toegangsprijs = prijsOpBasisVanLeeftijd;
        } else {
            toegangsprijs = prijsOpBasisVanKortingscategorie;
        }

        System.out.println("Jouw toegangsprijs is " + toegangsprijs + " EUR");

        if (toegangsprijs == 0.0) {
            System.out.println("Geniet van je gratis bezoek.");
        } else {
            System.out.println("Geniet van je bezoek.");
        }
    }
}