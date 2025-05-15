public class Main {
    public static void main(String[] args) {
        String[] zinnenlijst = {
                "Hallo, ik ben Emely",
                "Vandaag hebben we een 8ste lesuur.",
                "k heb geen zin",
                "Hallo, ik ben een banaan.",
                "ristiano Ronaldo is de beste."
        };
        System.out.println(geefAantalGeldigeZinnen(zinnenlijst));
    }

    public static int geefAantalGeldigeZinnen (String[] zinnenLijst) {
        int aantalGeldigeZinnen = 0;
        String zin;

        for (int teller = 0; teller < zinnenLijst.length; teller++) {
            zin = zinnenLijst[teller];
            if (isGeldigeZin(zin)) {
                aantalGeldigeZinnen++;
            }
        }
        return aantalGeldigeZinnen;
    }

    public static boolean isGeldigeZin(String zin) {
        char nuldeKarakter, laatsteKarakter;
        boolean nuldeKarakterHoofdletter;
        boolean laatsteKarakterPuntVraagtekenOfUitreopteken;

        nuldeKarakter = zin.charAt(0);
        laatsteKarakter = zin.charAt(zin.length() - 1);
        nuldeKarakterHoofdletter = nuldeKarakter >= 'A' && nuldeKarakter <= 'Z';
        laatsteKarakterPuntVraagtekenOfUitreopteken = laatsteKarakter == '.'|| laatsteKarakter == '?' || laatsteKarakter == '!';
    }
    return(n);

}