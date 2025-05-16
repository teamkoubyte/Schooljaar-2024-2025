# Arrays en Matrices in Java
![Arrays en Matrices](https://img.shields.io/badge/Topic-Arrays%20en%20Matrices-brightgreen)

## 📝 Inhoudsopgave
- [1. Arrays](#1-arrays)
  - [1.1 Wat zijn Arrays?](#11-wat-zijn-arrays)
  - [1.2 Arrays declareren en initialiseren](#12-arrays-declareren-en-initialiseren)
  - [1.3 Arrays manipuleren](#13-arrays-manipuleren)
- [2. Matrices (2D Arrays)](#2-matrices-2d-arrays)
  - [2.1 Wat zijn Matrices?](#21-wat-zijn-matrices)
  - [2.2 Matrices declareren en initialiseren](#22-matrices-declareren-en-initialiseren)
  - [2.3 Matrices manipuleren](#23-matrices-manipuleren)
  - [2.4 Speciale matrices](#24-speciale-matrices)
- [3. Praktische toepassingen](#3-praktische-toepassingen)
  - [3.1 Boolean Matrices](#31-boolean-matrices)
  - [3.2 String Matrices](#32-string-matrices)
- [4. Tips en best practices](#4-tips-en-best-practices)

---

## 1. Arrays

### 1.1 Wat zijn Arrays?

> 💡 **Definitie**: Een array is een geordende verzameling van elementen van hetzelfde datatype.

Arrays in Java zijn objecten die een vaste grootte hebben en worden gebruikt om meerdere waarden van hetzelfde type op te slaan. Ze bieden een efficiënte manier om met verzamelingen data te werken.

| Voordelen | Nadelen |
|-----------|---------|
| ✅ Snelle toegang tot elementen | ❌ Vaste grootte na initialisatie |
| ✅ Efficiënt geheugengebruik | ❌ Homogene gegevensstructuur (één datatype) |
| ✅ Eenvoudig itereren over elementen | ❌ Kost tijd om elementen in te voegen of te verwijderen |

### 1.2 Arrays declareren en initialiseren

Er zijn verschillende manieren om een array te declareren en te initialiseren in Java:

```java
// Declaratie
int[] getallenlijst;  // Voorkeurmethode
int getallen[];       // Ook mogelijk, maar minder gebruikelijk

// Initialisatie
getallenlijst = new int[5];  // Array met 5 elementen (standaardwaarde 0)

// Declaratie en initialisatie in één stap
int[] scores = new int[10];  // Array met 10 integers

// Declaratie en initialisatie met specifieke waarden
int[] punten = {85, 93, 76, 68, 92};  // Array met 5 waarden
```

De indexering van array-elementen begint bij 0:

| Index | 0 | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|---|
| Waarde | 85 | 93 | 76 | 68 | 92 |

### 1.3 Arrays manipuleren

Arrays kunnen op verschillende manieren worden benaderd en gemanipuleerd:

```java
// Toegang tot elementen
int eersteScore = punten[0];  // Waarde: 85
int laatsteScore = punten[4];  // Waarde: 92

// Elementen wijzigen
punten[2] = 80;  // Verander de waarde op index 2 naar 80

// Lengte van een array opvragen
int aantalScores = punten.length;  // Waarde: 5

// Itereren over een array
for (int i = 0; i < punten.length; i++) {
    System.out.println("Score " + (i+1) + ": " + punten[i]);
}

// For-each lus (moderne manier)
for (int score : punten) {
    System.out.println("Score: " + score);
}
```

---

## 2. Matrices (2D Arrays)

### 2.1 Wat zijn Matrices?

> 💡 **Definitie**: Een matrix is een tweedimensionale array (een array van arrays).

Matrices worden gebruikt om tabelgegevens of raster-gestructureerde informatie op te slaan.

### 2.2 Matrices declareren en initialiseren

```java
// Declaratie
int[][] matrix;

// Initialisatie
matrix = new int[3][4];  // 3 rijen, 4 kolommen

// Declaratie en initialisatie in één stap
int[][] puntenTabel = new int[5][3];  // 5 rijen, 3 kolommen

// Initialisatie met specifieke waarden
int[][] schaakbord = {
    {1, 0, 1, 0, 1, 0, 1, 0},
    {0, 1, 0, 1, 0, 1, 0, 1},
    // ... meer rijen
};
```

Visualisatie van een 3x4 matrix:

<table>
  <tr>
    <td style="background-color:#e6f7ff">[0][0]</td>
    <td style="background-color:#e6f7ff">[0][1]</td>
    <td style="background-color:#e6f7ff">[0][2]</td>
    <td style="background-color:#e6f7ff">[0][3]</td>
  </tr>
  <tr>
    <td style="background-color:#f0f7ff">[1][0]</td>
    <td style="background-color:#f0f7ff">[1][1]</td>
    <td style="background-color:#f0f7ff">[1][2]</td>
    <td style="background-color:#f0f7ff">[1][3]</td>
  </tr>
  <tr>
    <td style="background-color:#e6f7ff">[2][0]</td>
    <td style="background-color:#e6f7ff">[2][1]</td>
    <td style="background-color:#e6f7ff">[2][2]</td>
    <td style="background-color:#e6f7ff">[2][3]</td>
  </tr>
</table>

### 2.3 Matrices manipuleren

```java
// Toegang tot elementen
int element = matrix[1][2];  // Element op rij 1, kolom 2

// Element wijzigen
matrix[0][1] = 42;

// Itereren over een matrix
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();  // Nieuwe regel na elke rij
}

// Moderne for-each methode
for (int[] rij : matrix) {
    for (int waarde : rij) {
        System.out.print(waarde + " ");
    }
    System.out.println();
}
```

### 2.4 Speciale matrices

#### Jagged Arrays (Onregelmatige matrices)
Dit zijn matrices waarbij elke rij een verschillende lengte kan hebben:

```java
int[][] jaggedArray = new int[3][];
jaggedArray[0] = new int[4];
jaggedArray[1] = new int[2];
jaggedArray[2] = new int[5];
```

#### Vierkante matrix
Een matrix met evenveel rijen als kolommen:

```java
boolean isVierkanteMatrix(double[][] getallenMatrix) {
    for (int rijTeller = 0; rijTeller < getallenMatrix.length; rijTeller++) {
        if (getallenMatrix[rijTeller].length != getallenMatrix.length) {
            return false;
        }
    }
    return true;
}
```

#### Diagonaal matrix
Een vierkante matrix waarbij alle elementen buiten de diagonaal nul zijn:

```java
boolean isDiagonaalMatrix(double[][] getallenMatrix) {
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
```

---

## 3. Praktische toepassingen

### 3.1 Boolean Matrices

Boolean matrices worden vaak gebruikt om aanwezigheid/afwezigheid of waar/onwaar situaties in een tabel te representeren.

Voorbeeld van een aanwezigheidsmatrix:

```java
boolean[][] aanwezigheidsMatrix = {
    {true, true, false, true},    // Dag 1: leerlingen aanwezigheid
    {false, true, false, false},  // Dag 2: leerlingen aanwezigheid
    {false, true, false, true},   // Dag 3: leerlingen aanwezigheid
};
```

Methoden om deze data te verwerken:

```java
// Totaal aantal afwezigheden berekenen
public static int berekenAantalAfwezigheden(boolean[][] aanwezigheidsMatrix) {
    int aantal = 0;
    
    for (int rijTeller = 0; rijTeller < aanwezigheidsMatrix.length; rijTeller++) {
        for (int kolomTeller = 0; kolomTeller < aanwezigheidsMatrix[rijTeller].length; kolomTeller++) {
            if (!aanwezigheidsMatrix[rijTeller][kolomTeller]) {
                aantal++;
            }
        }
    }
    return aantal;
}

// Afwezigheden op een bepaalde dag berekenen
public static Integer berekenAantalAfwezighedenOpDag(boolean[][] aanwezighedenMatrix, int dagNummer) {
    int aantal = 0;
    
    if (dagNummer >= aanwezighedenMatrix.length) {
        return null;
    }
    
    for (int kolomTeller = 0; kolomTeller < aanwezighedenMatrix[dagNummer].length; kolomTeller++) {
        if (!aanwezighedenMatrix[dagNummer][kolomTeller]) {
            aantal++;
        }
    }
    return aantal;
}
```

### 3.2 String Matrices

String matrices worden gebruikt om tekstgegevens in tabelformaat op te slaan.

```java
String[][] namen = {
    {"Jan", "Piet", "Klaas"},
    {"Marie", "Sophie", "Emma"},
    {"Thomas", "Lucas", "Noah"}
};
```

Een methode om de totale lengte van alle strings te berekenen:

```java
public static int berekenSomVanLengtesVanAlleNamen(String[][] voornamenMatrix) {
    int totaal = 0;
    
    for (int i = 0; i < voornamenMatrix.length; i++) {
        for (int j = 0; j < voornamenMatrix[i].length; j++) {
            totaal += voornamenMatrix[i][j].length();
        }
    }
    
    return totaal;
}
```

---

## 4. Tips en best practices

- ✨ **Controleer altijd op 'out of bounds'**: Voorkom ArrayIndexOutOfBoundsException door te controleren of indices binnen de grenzen vallen.
- ✨ **Gebruik descriptieve naamgeving**: Kies duidelijke namen die het doel van je array of matrix weergeven.
- ✨ **Overweeg andere collecties voor dynamische grootte**: Als de grootte van je collectie vaak verandert, overweeg dan `ArrayList` of andere Collection types.
- ✨ **Pas op met grote arrays/matrices**: Grote arrays/matrices kunnen veel geheugen gebruiken.
- ✨ **Initialiseer waar passend**: Initialiseer arrays met standaardwaarden wanneer dat zinvol is.

```java
// Slechte praktijk:
int[] data = new int[100];  // 100 nullen zonder context

// Betere praktijk:
int[] temperaturen = new int[7];
Arrays.fill(temperaturen, -999);  // -999 als indicator voor 'nog niet gemeten'
```

---

> 📚 Deze samenvatting is gebaseerd op de lesstof en voorbeelden van de cursus Software Development. De code-voorbeelden zijn geïnspireerd op praktische toepassingen uit de lespraktijk.