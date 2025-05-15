public class Main {
    public static void main(String[] args) {

        Stad stad;
        Provincie provincie;

        stad = Stad.GENT;

        switch (stad) {
            case ANTWEREPEN, MECHELEN, GEEL, HERENTALS:
                provincie = Provincie.ANTWERPEN;
                break;

            case LEUVEN, AARSCHOT:
                provincie = Provincie.VLAAMS_BRABANT;
                break;

            case LUIK:
                provincie = Provincie.LUIK;
                break;

            case GENT:
                provincie = Provincie.OOST_VLAANDEREN;
                break;

            case LOUVAIN_LA_NEUVE:
                provincie = Provincie.WAALS_BRABANT;
                break;

            case HASSELT:
                provincie = Provincie.LIMBURG;
                break;

            default:
                provincie = null;
        }
        System.out.println("De stad " + stad + " ligt in de provincie " + provincie + ".");
    }
}