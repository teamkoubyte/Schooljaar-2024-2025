public class Main {
    public static void main(String[] args) {

        System.out.print(geefAttestResultaat(Attest.A_ATTEST));
        System.out.print(geefAttestResultaat(Attest.B_ATTEST));
        System.out.print(geefAttestResultaat(Attest.C_ATTEST));
        
    }

    public static String geefAttestResultaat (Attest attest) {
        String zin = "";

        switch (attest) {
            case A_ATTEST:
                zin += "Je bent geslaagd.";
                break;
            case B_ATTEST:
                zin += "Je hebt uitsluitingen.";
                break;
            case C_ATTEST:
                zin += "Je bent niet geslaagd.";
                break;
        }
        return zin;
    }
}