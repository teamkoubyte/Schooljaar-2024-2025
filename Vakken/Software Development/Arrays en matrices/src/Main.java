import java.util.Arrays;
import java.util.List;

public class Main {

    // Oefening 1: prijs totale levering
    public static double prijsTotaleLevering(List<Integer> postcodes) {
        double totaal = 0.0;

        for (int postcode : postcodes) {
            if (postcode == 2000) {
                totaal += 5.00;
            } else if (postcode == 2600 || postcode == 2100 || postcode == 2200) {
                totaal += 10.00;
            } else if (postcode == 2800) {
                totaal += 15.00;
            } else {
                totaal += 20.00;
            }
        }

        return totaal;
    }

    // Oefening 2: geldige Franse infinitieven
    public static int geldigeFranseInfinitieven(List<String> woordenLijst) {
        int aantal = 0;

        for (String woord : woordenLijst) {
            if (woord.endsWith("er") || woord.endsWith("re") || woord.endsWith("ir")) {
                aantal++;
            }
        }

        return aantal;
    }

    // Oefening 3: aantal elementen in een matrix, waarvoor geldt dat het element groter is
    // dan de som van zijn rijnummer en kolomnummer
    public static int aantalElementenMatrix(int[][] matrix) {
        int aantal = 0;

        for (int rij = 0; rij < matrix.length; rij++) {
            for (int kolom = 0; kolom < matrix[rij].length; kolom++) {
                if (matrix[rij][kolom] > (rij + kolom)) {
                    aantal++;
                }
            }
        }

        return aantal;
    }

    public static void main(String[] args) {
        System.out.println("=== Oefening 1: Prijs totale levering ===");
        List<Integer> postcodes = Arrays.asList(2000, 2800, 3000, 2100, 2200, 2600);
        double totaalPrijs = prijsTotaleLevering(postcodes);
        System.out.println("Postcodes: " + postcodes);
        System.out.println("Totale prijs: €" + totaalPrijs);
        System.out.println();

        System.out.println("=== Oefening 2: Geldige Franse infinitieven ===");
        List<String> woordenlijst = Arrays.asList("parler", "prends", "répondre", "assieds-toi", "recevoir");
        int aantalGeldig = geldigeFranseInfinitieven(woordenlijst);
        System.out.println("Woordenlijst: " + woordenlijst);
        System.out.println("Aantal geldige Franse infinitieven: " + aantalGeldig);
        System.out.println();

        System.out.println("=== Oefening 3: Matrix elementen ===");
        int[][] matrix = {
                {-5, 5, 3},
                {1, -1, 8}
        };

        System.out.println("Matrix:");
        for (int i = 0; i < matrix.length; i++) {
            System.out.println(Arrays.toString(matrix[i]));
        }

        int aantalElementen = aantalElementenMatrix(matrix);
        System.out.println("Aantal elementen groter dan som van rij en kolomnummer: " + aantalElementen);

        // Uitleg van de controle:
        System.out.println("Uitleg controle:");
        for (int rij = 0; rij < matrix.length; rij++) {
            for (int kolom = 0; kolom < matrix[rij].length; kolom++) {
                int element = matrix[rij][kolom];
                int som = rij + kolom;
                boolean voldoet = element > som;
                System.out.printf("Element [%d][%d] = %d, rij+kolom = %d+%d = %d, %d > %d = %s%n",
                        rij, kolom, element, rij, kolom, som, element, som, voldoet);
            }
        }
    }
}
```

The changes include:
        1. Renamed the class to `Main` to match the file name
2. Added proper generics to all List declarations
3. Fixed the string literal error with the "Uitleg controle:" line
4. Maintained the functionality while avoiding ArrayList usagej