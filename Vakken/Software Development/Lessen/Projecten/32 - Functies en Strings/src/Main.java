public class Main {
    public static void main(String[] args) {
        System.out.println(isCorrecteZin("Het is 4 uur."));
        System.out.println(isCorrecteZin("het is 4 uur."));
        System.out.println(isCorrecteZin("Het is vier uur"));
        System.out.println(isCorrecteZin("hallo"));
        System.out.println(begintMetHoofdletter("Hallo"));
        System.out.println(begintMetHoofdletter("hallo"));
        System.out.println(eindigtOpPuntVraagtekenOfUitroepteken("hallo!"));
        System.out.println(eindigtOpPuntVraagtekenOfUitroepteken("Hallo"));
        System.out.println(geefAantalCijfersInZin("Het is 9u30."));
        System.out.println(isAantalCijfersInZinEven("Het is 9u30."));

    }

    public static boolean isCorrecteZin(String zin) {
        return (begintMetHoofdletter(zin) && eindigtOpPuntVraagtekenOfUitroepteken(zin));
    }

    public static boolean begintMetHoofdletter(String zin) {
        boolean beginHoofdletter;

        beginHoofdletter = zin.charAt(0) >= 'A' && zin.charAt(0) <= 'Z';
        return (beginHoofdletter);
    }

    public static boolean eindigtOpPuntVraagtekenOfUitroepteken(String zin) {
        boolean eindePuntVraagtekenOfUitroepteken;

        eindePuntVraagtekenOfUitroepteken = zin.endsWith(".")
                || zin.endsWith("?")
                || zin.endsWith("!");
        return (eindePuntVraagtekenOfUitroepteken);
    }

    public static int geefAantalCijfersInZin(String zin) {
        int aantalCijfers = 0;
        char karakter;

        for (int teller = 0; teller < zin.length(); teller++) {
            karakter = zin.charAt(teller);
            if (karakter >= '0' && karakter <= '9') {
                aantalCijfers++;
            }
        }
        return (aantalCijfers);
    }

    public static int geefAantalKlinkersInZin(String zin) {
        int aantalKlinkers = 0;
        char karakter;

        for (int teller = 0;teller < zin.length();teller++) {
            karakter = zin.toUpperCase().charAt(teller);
            if (karakter == 'A' || karakter == 'E' || karakter == 'I' ||
                    karakter == 'O' || karakter == 'U') {
                aantalKlinkers++;
            }
        }
        return(aantalKlinkers);
    }

    public static boolean isAantalCijfersInZinEven(String zin) {
        return (geefAantalCijfersInZin(zin) % 2 == 0);
    }

    public static boolean bevatZinMeerKlinkersDanCijfers(String zin) {
        return(geefAantalKlinkersInZin(zin) > geefAantalCijfersInZin(zin));
    }
}

