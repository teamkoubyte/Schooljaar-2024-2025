import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        int[][] ritNaarBovenMatrix =
                {
                        {80, 50, 65, 70, 0},
                        {-70, 100, 55, 49, 53},
                        {52, -49, 61, -65, 0},
                        {72, 81, 66, -100, 0}
                };
        System.out.println(berekenAantalPersonenPerVerdieping(ritNaarBovenMatrix));
        System.out.println(berekenAantalPersonenPerVerdieping(legeRitNaarBovenMatrix));

    }

    public static ArrayList<Integer> berekenAantalPersonenPerVerdieping
            (int[][] ritNaarBovenMatrix) {

        int gewicht;
        int aantalPersonen = 0;
        ArrayList<Integer> resultatenLijst = new ArrayList<Integer>();

        for (int rijTeller = 0; rijTeller < ritNaarBovenMatrix.length; rijTeller++) {
            for (int kolomTeller = 0;
                 kolomTeller < ritNaarBovenMatrix[rijTeller].length;
                 kolomTeller++) {
                gewicht = ritNaarBovenMatrix[rijTeller][kolomTeller];
                if (gewicht > 0) {
                    aantalPersonen++;
                } else if (gewicht < 0) {
                    aantalPersonen--;
                }
            }
            resultatenLijst.add(aantalPersonen);
        }
        return(resultatenLijst);
    }
}



