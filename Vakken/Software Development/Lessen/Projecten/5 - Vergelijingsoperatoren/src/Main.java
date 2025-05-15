public class Main {
    public static void main(String[] args) {
        String voornaam = "Mohamed";
        String famillienaam = "Koubaa";
        String naam;
        char karakter;

        /* naam = voornaam + " " + famillienaam;
        System.out.println(naam);
        */

        naam = voornaam;
        naam += " ";
        naam += famillienaam;
        System.out.println(naam);
        karakter = naam.charAt(0);
        System.out.println(karakter);
        karakter = naam.charAt(6);
        System.out.println(karakter);
        karakter = naam.charAt(7);
        System.out.println(karakter);




    }
}