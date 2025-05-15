public class Main {
    public static void main(String[] args) {
        System.out.println(isCorrecteZin("Hallo, gaat alles goed."));
        System.out.println(geefAantalCijfersInZin("Het is 9u30."));
    }

    public static boolean begintMetHoofdletter (String zin) {
        boolean beginHoofdletter;

        beginHoofdletter = zin.charAt(0) >= 'A' && zin.charAt(0) <= 'Z';

        return beginHoofdletter;
    }

    public static boolean eindigtOpPuntVraagtekenOfUitroepteken (String zin) {
        boolean eindePuntVraagtekenOfUitroepteken;

        eindePuntVraagtekenOfUitroepteken = zin.endsWith(".") || zin.endsWith("?") || zin.endsWith("!");

        return eindePuntVraagtekenOfUitroepteken;
    }

    public static boolean isCorrecteZin (String zin) {
       return (begintMetHoofdletter(zin) && eindigtOpPuntVraagtekenOfUitroepteken(zin));
    }

    public static int geefAantalCijfersInZin (String zin) {
        int aantalCijfers = 0;
        char karakter;

        for (int teller = 0; teller < zin.length(); teller++) {
            karakter = zin.charAt(teller);
            if (karakter >= '0' && karakter <= '9') {
                aantalCijfers++;
            }
        }
        return aantalCijfers;
    }

    public static boolean isAantalCijfersInZinEven(String zin) {
        int aantalCijfers = geefAantalCijfersInZin(zin);

        return aantalCijfers % 2 == 0;
    }

    public static int geefAantalKlinkersInZin (String zin) {
        int aantalKlinkers = 0;
        char karakter;

        for (int teller = 0; teller < zin.length(); teller++) {
            karakter = zin.charAt(teller);
            if (karakter == 'a' || karakter == 'e' || karakter == 'i' || karakter == 'o' || karakter == 'u' || karakter == 'A' || karakter == 'E' || karakter == 'I' || karakter == 'O' || karakter == 'U') {
                aantalKlinkers++;
            }
        }
        return aantalKlinkers;
    }

    public static boolean bevatZinMeerKlinkersDanCijfers(String zin) {
        int aantalKlinkers = geefAantalKlinkersInZin(zin);
        int aantalCijfers = geefAantalCijfersInZin(zin);

        return aantalKlinkers > aantalCijfers;
    }
}
