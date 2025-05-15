import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);

    }

    public static double berekenOmtrekRechthoek
            (double lengte, double breedte) {
        return (2 * lengte) + (2 * breedte);
    }

    public static double berekenOppervlakteRechthoek
            (double lengte, double breedte) {
        return lengte * breedte;
    }

    public static double berekenOmtrekCirkel
            (double straal) {
        return 2 * Math.PI * straal;
    }

    public static double berekenOppervlakteCirkel
            (double straal) {
        return Math.PI * Math.pow(straal, 2);
    }

    public static double berekenVerschilTussenOppervlakteEnOmtrekVanRechthoek
            (double lengte, double breedte) {
        double oppervlakte, omtrek;

        oppervlakte = berekenOppervlakteRechthoek(lengte, breedte);
        omtrek = berekenOmtrekRechthoek(lengte, breedte);
        return (oppervlakte - omtrek);
    }

    public static double berekenDiscriminant
            (double a, double b, double c) {
        return (b * b) - (4 * a * c);
    }

    public static double bewerkGetallen(double getal1, double getal2, Bewerking bewerking) {
        switch (bewerking) {
            case PLUS:
                return getal1 + getal2;
            case MIN:
                return getal1 - getal2;
            case MAAL:
                return getal1 * getal2;
            case DELEN:
                if (getal2 == 0) {
                    System.out.println("Kan niet delen door nul");
                }
                return getal1 / getal2;
            default:
                return 0;
        }
    }

    public static String geefCijfersVanEenString(String zin) {
        String resultaat = "";
        for (int teller = 0; teller < zin.length(); teller++) {
            char karakter = zin.charAt(teller);
            if (karakter >= '0' && karakter <= '9') {
                resultaat += karakter;
            }
        }
        return resultaat;
    }
}