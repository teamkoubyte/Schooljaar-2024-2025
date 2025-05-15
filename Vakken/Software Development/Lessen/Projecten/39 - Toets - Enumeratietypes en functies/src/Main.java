public class Main {
    public static void main(String[] args) {
        System.out.println(bepaalGoedkoopsteKamer(0));
    }

    public static String bepaalGoedkoopsteKamer(int aantalReizigers) {
        if (aantalReizigers <= 0) {
            return null;
        }

        String goedkoopsteKamer;
        
        if (aantalReizigers <= 2) {
            goedkoopsteKamer = "De goedkoopste kamer is " + Soortkamer.GRAND_STUDIO_2_EENPERSOONSBEDDEN;
        } else if (aantalReizigers <= 3) {
            goedkoopsteKamer = "De goedkoopste kamer is " + Soortkamer.EENVOUDIGE_STUDIO_2_EENPERSOONSBEDDEN;
        } else if (aantalReizigers <= 4) {
            goedkoopsteKamer = "De goedkoopste kamer is " + Soortkamer.EENVOUDIGE_VIERPERSOONSKAMER;
        } else if (aantalReizigers <= 6) {
            goedkoopsteKamer = "De goedkoopste kamer is " + Soortkamer.FAMILIEKAMER;
        } else {
            return null;
        }
        return goedkoopsteKamer;
    }
}