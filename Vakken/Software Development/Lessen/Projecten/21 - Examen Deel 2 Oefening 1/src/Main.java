public class Main {
    public static void main(String[] args) {
        String resultaat = "";
        boolean eersteGetal = true;

        for (int i = 1; i < 150; i += 2) {
            if (i % 7 == 0 && i != 35 && i != 105) {
                if (eersteGetal) {
                    resultaat += i;
                    eersteGetal = false;
                } else {
                    resultaat += ";" + i;
                }
            }
        }
        System.out.println(resultaat);
    }
}