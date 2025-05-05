# Samenvatting Opdracht - Von Neumann-architectuur

## Fixed Program Computers
Geef drie voorbeelden van fixed program computers vandaag de dag:
- Wasmachines
- Rekenmachines
- Microgolfovens

Een pc is geen fixed program computer, maar een stored program computer, waarbij zowel programma's als gegevens in het geheugen bewaard worden.

## Het concept van de Von Neumann-architectuur
Het concept van de stored program computer, zoals dat vandaag algemeen in gebruik is, werd bedacht door **John von Neumann in 1945**, en heet daarom de **Von Neumann-architectuur**.

Voor deze architectuur werden in een computergeheugen enkel gegevens bewaard, geen programma's. Het programmeren van een computer gebeurde door de juiste verbindingen te maken via een massa kabeltjes.

## Belangrijke Componenten
### **CPU (Centrale Verwerkingseenheid)**
De CPU bestaat uit de volgende componenten:
- **Control Unit (CU)**: Zendt signalen om het transport van gegevens te regelen.
- **Arithmetic Logic Unit (ALU)**: Voert berekeningen en logische beslissingen uit.
- **Cache**: Zorgt voor snelle toegang tot vaak gebruikte gegevens en instructies.

### **Processor-registers**
De CPU bevat vier belangrijke registers:
- **PC (Program Counter)**: Bevat het adres van de volgende instructie in het geheugen.
- **MAR (Memory Address Register)**: Bevat het adres waar een gegeven moet worden opgehaald of bewaard.
- **MDR (Memory Data Register)**: Bevat het gegeven dat opgehaald werd uit het geheugen of bewaard dient te worden.
- **ACC (Accumulator)**: Bevat het resultaat van berekeningen.

## De Von Neumann-cyclus
De Von Neumann-cyclus is het centrale mechanisme achter de werking van een Von Neumann-computer. Het bestaat uit drie stappen:
1. **Instruction Fetch**: Een instructie wordt als een rij bits ingelezen uit het werkgeheugen van de computer.
2. **Instruction Decode**: De ingelezen instructie wordt gedecodeerd in de werkelijke processor-instructie en de eventuele parameters die eraan meegegeven worden.
3. **Instruction Execute**: De gedecodeerde instructie wordt uitgevoerd.

## Von Neumann-flessenhals
Een nadeel van de Von Neumann-architectuur is de zogenaamde **Von Neumann-flessenhals (Von Neumann Bottleneck)**:
- Programma's en gegevens worden via **dezelfde systeembus** tussen het werkgeheugen en de processor vervoerd.
- Hierdoor kunnen programma's en gegevens **niet tegelijkertijd** worden vervoerd, wat vertraging veroorzaakt.
- Er bestaat inmiddels een **Harvard-architectuur**, waarbij programma's en gegevens langs **aparte bussen** vervoerd worden om deze vertraging te voorkomen.

