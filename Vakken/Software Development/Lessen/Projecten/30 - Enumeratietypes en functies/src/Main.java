public class Main {
    public static void main(String[] args) {
        System.out.println(berekenSom(5, 3));
        System.out.println(berekenSom(-5, 3));
        System.out.println(geefZinVoorWindrichting(Windrichting.NOORD));
    }


    public static int berekenSom(int getal1, int getal2) {
        int som;

        som = getal1 + getal2;
        return (som);
    }

    public static String geefZinVoorWindrichting(Windrichting windrichting) {
        String zin;

        zin = "De wind waait uit ";

        switch (windrichting) {
            case NOORD:
                zin += "het noorden";
                break;
            case OOST:
                zin += "het oosten";
                break;
            case ZUID:
                zin += "het zuiden";
                break;
            case WEST:
                zin += "het westen";
                break;
            default:
                zin = "";
            }
            zin += ".";
            return (zin);
    }
}