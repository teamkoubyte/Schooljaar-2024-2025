# De For-lus in Programmeren

## Wat is een for-lus?
Een for-lus is een begrensde herhaling die ook wel een "zelftellende lus" wordt genoemd. Deze wordt gebruikt wanneer bepaalde instructies een vooraf bekend aantal keren herhaald moeten worden.

## Syntax van een for-lus
```java
for (initialization; condition; increment) {
    statements;
}
```

## Onderdelen van een for-lus
1. **Initialisatie**: Hier wordt de teller aangemaakt en geïnitialiseerd (bijv. `int number = 1`)
2. **Conditie**: De voorwaarde die bepaalt of de lus blijft doorgaan (bijv. `number < 10`)
3. **Increment**: De aanpassing van de teller na elke iteratie (bijv. `number++`)
4. **Statements**: De code die binnen de lus wordt uitgevoerd

## Hoe werkt een for-lus?
De for-lus volgt een specifiek patroon:
1. De initialisatie wordt één keer uitgevoerd aan het begin
2. De conditie wordt gecontroleerd voor elke iteratie
3. Als de conditie waar is:
   - De statements worden uitgevoerd
   - De increment operatie wordt uitgevoerd
   - Terug naar stap 2
4. Als de conditie onwaar is, stopt de lus

## Voorbeeld
```java
// Dit voorbeeld drukt alle getallen van 1 tot 9 op het scherm
for (int number = 1; number < 10; number++) {
    System.out.println(number);
}
```

Dit voorbeeld:
- Start met `number = 1`
- Controleert of `number < 10` (waar)
- Print de waarde van `number`
- Verhoogt `number` met 1
- Herhaalt tot `number` gelijk is aan 10

## Oneindige for-lus
Een for-lus kan oneindig worden als de eindwaarde in de conditie nooit bereikt wordt:

```java
// Dit is een oneindige loop omdat i steeds kleiner wordt
for (int i = 1; i < 10; i--) {
    System.out.println(i);
}
```

## Variaties
- **Aflopende lus**: `for (int i = 10; i > 0; i--)`
- **Stappen anders dan 1**: `for (int i = 0; i < 100; i += 5)`
- **Meerdere variabelen**: `for (int i = 0, j = 10; i < j; i++, j--)`
