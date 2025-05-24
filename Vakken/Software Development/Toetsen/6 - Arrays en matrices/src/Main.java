public class Main {

    public static void main(String[] args) {
        int[] postcodes = {2000, 2800, 3000, 2100, 2200, 2600};
        double totaalPrijsLevering = prijsTotaleLevering(postcodes);

        System.out.println("De totale prijs van de levering is: €" + totaalPrijsLevering + ".");
        System.out.println();

        String[] woordenlijst = {"parler", "prends", "répondre", "assieds-toi", "recevoir"};
        int aantalGeldig = geefGeldigeFranseInfinitieven(woordenlijst);

        System.out.println("Er zijn " + aantalGeldig + " geldige Franse infinitieven.");
        System.out.println();

        int[][] matrix = {{-5, 5, 3}, {1, -1, 8}};

        int aantalElementen = geefElementenMatrix(matrix);
        System.out.println("Er zijn " + aantalElementen + " elementen in de matrix.");
    }

    public static double prijsTotaleLevering(int[] postcodes) {
        double totalePrijs = 0.0;

        for (int postcodeTeller = 0; postcodeTeller < postcodes.length; postcodeTeller++) {
            int postcode = postcodes[postcodeTeller];

            if (postcode == 2000) {
                totalePrijs += 5.00;
            } else if (postcode == 2600 || postcode == 2100 || postcode == 2200) {
                totalePrijs += 10.00;
            } else if (postcode == 2800) {
                totalePrijs += 15.00;
            } else {
                totalePrijs += 20.00;
            }
        }

        return totalePrijs;
    }

    public static int geefGeldigeFranseInfinitieven(String[] woordenLijst) {
        int aantalGeldigeFranseInfinitieven = 0;

        for (int woordTeller = 0; woordTeller < woordenLijst.length; woordTeller++) {
            String woord = woordenLijst[woordTeller];
            if (woord.endsWith("er") || woord.endsWith("re") || woord.endsWith("ir")) {
                aantalGeldigeFranseInfinitieven++;
            }
        }

        return aantalGeldigeFranseInfinitieven;
    }

    public static int geefElementenMatrix(int[][] matrix) {
        int element = 0;

        for (int rijTeller = 0; rijTeller < matrix.length; rijTeller++) {
            for (int kolomTeller = 0; kolomTeller < matrix[rijTeller].length; kolomTeller++) {
                if (matrix[rijTeller][kolomTeller] > (rijTeller + kolomTeller)) {
                    element++;
                }
            }
        }

        return element;
    }
}