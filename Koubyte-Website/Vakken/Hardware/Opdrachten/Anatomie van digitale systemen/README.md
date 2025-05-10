# 📚 Anatomie van Digitale Systemen

## 1. Binaire Basis 🧠

### 1.1 Waarom rekenen computers binair?
Computers zijn opgebouwd uit kleine draadjes waar elektriciteit door kan stromen:
- Wanneer een draadje onder stroom staat is dit een **1**
- Wanneer er geen stroom door loopt is dit een **0**

Zo kan een computer rekenen en dus nadenken! Een computer aan het berekenen of nadenken is eigenlijk een hele hoop draadjes die wel of niet onder stroom staan.

### 1.2 Binaire vs. Decimale getallen

| 🔢 Decimale getallen | 💻 Binaire getallen |
|---------------------|---------------------|
| Bestaan uit **10 cijfers**: 0-9 | Bestaan uit **2 cijfers**: 0 en 1 |
| Mensen gebruiken dit | Computers gebruiken dit |
| Positiewaarde: 10<sup>n</sup> | Positiewaarde: 2<sup>n</sup> |

#### Voorbeelden:
- Het binaire getal **10111** is het decimale getal **23**
- Het binaire getal **110000** is het decimale getal **48**

## 2. Conversies tussen Binair en Decimaal 🔄

### 2.1 Binair naar Decimaal: Stappenplan
1. Schrijf het binair getal als aparte cijfers
2. Onder elk cijfer schrijf je zijn waarde (1, 2, 4, 8, 16, etc.)
3. Vermenigvuldig de binaire waarde met het getal eronder
4. Tel alle getallen op

**Voorbeeld**: 10111 omrekenen
```
1    0    1    1    1
16   8    4    2    1
1×16 0×8  1×4  1×2  1×1 = 16 + 0 + 4 + 2 + 1 = 23
```

### 2.2 Decimaal naar Binair: Stappenplan
1. Schrijf de machten van 2 op van groot naar klein
2. Zoek de grootste macht die kleiner/gelijk is aan het decimale getal
3. Zet een 1 bij die macht en trek het af van je decimale getal
4. Herhaal deze stappen voor het overgebleven getal
5. Vul alle andere posities aan met 0

**Voorbeeld**: 13 omrekenen naar binair
```
128  64  32  16  8   4   2   1
                    1   1   0   1  = 1101
```
(8 + 4 + 1 = 13)

## 3. Data en Gegevensverwerking 💾

### 3.1 Wat is data?
- Data is synoniem voor **informatie** of **gegeven**
- Praktische voorbeelden zijn: boeken, kaarten, tabellen, kleuren

### 3.2 Wat is verwerking?
Alle acties die met behulp van of op data gebeuren:
- **Input**: De invoer van data
- **Processing**: Het behandelen van informatie
- **Output**: Het eindresultaat van de actie

### 3.3 Bestandsformaten en -types
Een formaat bepaalt **hoe data bewaard wordt**:
- Fotoformaten: jpg, png, gif, tif
- Deze formaten bewaren gegevens op verschillende manieren

## 4. Digitale Opslag 💿

### 4.1 Wat is een medium?
Het medium is de **manier waarop je data bewaart** of verplaatst:
- Analoge wereld: papier, steen, bord
- Digitale omgeving: USB, harde schijf

### 4.2 Wat is metadata?
- Metadata is **informatie over informatie**
- Metadata is **data over data**
- Bijvoorbeeld: bestandsgrootte, aanmaakdatum, auteur

### 4.3 Datagroottes

| Eenheid | Omvang |
|---------|--------|
| Bit | Kleinste eenheid (0 of 1) |
| Byte | 8 bits |
| Kilobyte (KB) | 1024 bytes |
| Megabyte (MB) | 1024 KB |
| Gigabyte (GB) | 1024 MB |
| Terabyte (TB) | 1024 GB |
| Petabyte (PB) | 1024 TB |
| Exabyte (EB) | 1024 PB |
| Zettabyte (ZB) | 1024 EB |
| Yottabyte (YB) | 1024 ZB |

#### Omrekenen:
- **Bits naar grotere eenheden**: Aantal bits delen door 8, dan steeds door 1024
- **Grotere eenheden naar bits**: Vermenigvuldigen met 1024, dan met 8

## 5. Dataverbindingen en Netwerken 🌐

### 5.1 Wat is een dataverbinding?
Een verbinding waarmee gegevens worden verzonden.

### 5.2 Soorten dataverbindingen:
- Ethernet-kabel
- WiFi
- Glasvezelkabel
- Mobiele netwerken (4G, 5G)
- ADSL (internet via telefoonkabel)

### 5.3 Bandbreedte vs. Latency

| 📊 Bandbreedte | ⏱️ Latency |
|----------------|-----------|
| De hoeveelheid data die je tegelijkertijd via je internetverbinding kunt versturen en ontvangen | De tijd die data kost om van het ene punt naar het andere punt te reizen |
| Uitgedrukt in **hoeveelheid data** | Uitgedrukt in **tijd** |
| Bepaalt hoe snel je bestanden kunt downloaden | Bepaalt hoe snel een website reageert |
| Meer bandbreedte = sneller voor meerdere apparaten | Meer afstand/netwerken = hogere latency |

Bandbreedte is belangrijk voor apparaten die internet gebruiken - met meer bandbreedte heb je sneller en stabieler internet voor meer apparaten.