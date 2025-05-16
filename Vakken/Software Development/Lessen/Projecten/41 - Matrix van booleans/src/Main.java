public class Main {
    public static void main(String[] args) {
        boolean[][] aanwezigheidsMatrix = {{true, true, false, true}, {false, true, false, false}, {false, true, false, true}, {false, true, false, false}, {false, true, false, true},};
        boolean[][] legeAanwezigheidsMatrix = {};
        System.out.println(berekenAantalAfwezigheden(aanwezigheidsMatrix));
        System.out.println(berekenAantalAfwezigheden(legeAanwezigheidsMatrix));
        System.out.println(berekenAantalAfwezighedenOpDag(aanwezigheidsMatrix, 2));
        System.out.println(berekenAantalAfwezighedenOpDag(legeAanwezigheidsMatrix, 2));
        System.out.println(berekenAantalAfwezighedenVoorLeerling(aanwezigheidsMatrix, 2));
    }

    public static int berekenAantalAfwezigheden(boolean[][] aanwezigheidsMatrix) {
        int aantal = 0;
        boolean element;

        for (int rijTeller = 0; rijTeller < aanwezigheidsMatrix.length; rijTeller++) {
            for (int kolomTeller = 0; kolomTeller < aanwezigheidsMatrix[rijTeller].length; kolomTeller++) {
                element = aanwezigheidsMatrix[rijTeller][kolomTeller];
                if (!element) {
                    aantal++;
                }
            }
        }
        return (aantal);
    }

    public static Integer berekenAantalAfwezighedenOpDag(boolean[][] aanwezighedenMatrix, int dagNummer) {
        int aantal = 0;
        boolean element;

        if (dagNummer >= aanwezighedenMatrix.length) {
            return (null);
        }
        for (int kolomTeller = 0; kolomTeller < aanwezighedenMatrix[dagNummer].length; kolomTeller++) {
            element = aanwezighedenMatrix[dagNummer][kolomTeller];
            if (!element) {
                aantal++;
            }
        }
        return (aantal);
    }

    public static Integer berekenAantalAfwezighedenVoorLeerling(boolean[][] aanwezighedenMatrix, int leerlingNummer) {
        boolean element;
        int aantalAfwezigheden = 0;

        if (leerlingNummer >= aanwezighedenMatrix.length) {
            return (null);
        }

        for (int rijTeller = 0; rijTeller < aanwezighedenMatrix.length; rijTeller++) {
            element = aanwezighedenMatrix[rijTeller][leerlingNummer];
            if (!element) {
                aantalAfwezigheden++;
            }
        }
        return aantalAfwezigheden;
    }

    public static double berekenGemiddeldAantalAfwezihedenOverAlleDagen(boolean[][] aanwezighedenMatrix) {
        int som = 0;

        for (int dagTeller = 0; dagTeller < aanwezighedenMatrix.length; dagTeller++) {
            som += berekenAantalAfwezighedenOpDag(aanwezighedenMatrix, dagTeller);
        }
        return (som / aanwezighedenMatrix.length);
    }
}



