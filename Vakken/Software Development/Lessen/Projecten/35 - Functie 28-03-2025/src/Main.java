public class Main {
    public static void main(String[] args) {
        System.out.println(geefCijfersVanEenString("Steven52Jan30"));
        System.out.println(geefCijfersVanEenString("StevenJan30"));

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

    public static int geefAantalCijfersVanEenString(String zin) {
        return(geefCijfersVanEenString(zin).length());
    }

    public static int berekenSomVanCijfersInTejst(String zin) {
        return(geefCijfersVanEenString(zin).length());
    }



}