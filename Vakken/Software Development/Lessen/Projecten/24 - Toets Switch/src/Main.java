import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner toetsenbord = new Scanner(System.in);
        String plaats = "", gewenstePlaats, typeLigging, nietZin = " is niet geschikt voor de gebruiker.", welZin = " is wel geschikt voor de gebruiker.";
        double minimumWeekprijs, minimumWeekbudget;

        switch (plaats.toUpperCase().trim()) {
                case "Mechelen" :
                    typeLigging = "S";
                    minimumWeekprijs = 550.00;
                    break;

                case "Westerlo" :
                    typeLigging = "S";
                    minimumWeekprijs = 550.00;
                    break;

                case "Antwerpen" :
                    typeLigging = "S";
                    minimumWeekprijs = 700.00;
                    break;

                case "Hasselt" :
                    typeLigging = "S";
                    minimumWeekprijs = 500.00;
                    break;

                case "Luik" :
                    typeLigging = "S";
                    minimumWeekprijs = 350.00;
                    break;

                case "Libramont" :
                    typeLigging = "S";
                    minimumWeekprijs = 400.00;
                    break;

                case "Bertrix":
                    typeLigging = "L";
                    minimumWeekprijs = 400.00;
                    break;

                case "Geel":
                    typeLigging = "G";
                    minimumWeekprijs = 350.00;
                    break;

                case "Aarschot":
                    typeLigging = "G";
                    minimumWeekprijs = 370.00;
                    break;

                case "Leuven":
                    typeLigging = "G";
                    minimumWeekprijs = 650.00;
                    break;
            default:
                typeLigging = "";
                minimumWeekprijs = 0;
        }

        System.out.print("Wat is de gewenste plaats? ");
        plaats = toetsenbord.nextLine();

        System.out.print("Wat is het gewenste type ligging? ");
        typeLigging = toetsenbord.nextLine();

        System.out.print("Wat is het beschikbaar weekbudget? ");
        minimumWeekbudget = Double.parseDouble(toetsenbord.nextLine());

        if (typeLigging.equalsIgnoreCase("G") && typeLigging.equalsIgnoreCase("L") && typeLigging.equalsIgnoreCase("S")) {
            System.out.println(plaats + welZin);
        } else if (minimumWeekbudget >= minimumWeekprijs) {
            System.out.println(plaats + welZin);
        } else if (minimumWeekprijs < minimumWeekbudget) {
            System.out.println(plaats + nietZin);
        } else {
            System.out.println("Zandpoort Holidays heeft geen vakantiestudio's in " + plaats);
        }

    }
}