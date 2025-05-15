public class Main {
    public static void main(String[] args) {

    }

    public static boolean isVierkanteMatrix(double[][] getallenMatrix) {
        for (int rijTeller = 0; rijTeller < getallenMatrix.length; rijTeller++) {
            if (getallenMatrix[rijTeller].length != getallenMatrix.length) {
                return false;
            }
        }
        return true;
    }

    public static boolean isDiagonaalMatrix(double[][] getallenMatrix) {
        if (!isVierkanteMatrix(getallenMatrix)) {
            return false;
        }
        for (int rijTeller = 0; rijTeller < getallenMatrix.length; rijTeller++) {
            for (int kolomTeller = 0; kolomTeller < getallenMatrix[rijTeller].length; kolomTeller++) {
                if (rijTeller != kolomTeller && getallenMatrix[rijTeller][kolomTeller] != 0) {
                    return false;
                }
            }
        }
        return true;
    }
}