package com.mohamedkoubaa;

public class Main {
    public static void main(String[] args) {
        int aantalKamers = 3;
        int aantalKasten = 5;
        int aantalTafels = 2;
        String naamKat1 = "Pistache";
        String naamKat2 = "Rosemary";
        char energieLabel = 'A';
        boolean mooiWeer = true;
        boolean resultaat;

        resultaat = (aantalKamers == aantalKasten - aantalTafels) || (aantalKamers % 2 == aantalKasten % 2);
    }
}