CREATE DATABASE klas;
USE klas;

CREATE TABLE leerlingen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    telefoonnummer VARCHAR(20),
    voornaam VARCHAR(50),
    naam VARCHAR(50),
    straat VARCHAR(100),
    postcode VARCHAR(10),
    plaats VARCHAR(50),
    geboortedatum DATE
);

INSERT INTO leerlingen (telefoonnummer, voornaam, naam, straat, postcode, plaats, geboortedatum)
VALUES
('0470123456', 'Jan', 'Janssens', 'Bruul 10', '2800', 'Mechelen', '2000-01-01'),
('0486123456', 'Piet', 'Peeters', 'IJzerenleen 22', '2800', 'Mechelen', '2001-02-02'),
('0495123456', 'Els', 'Vermeulen', 'Onze-Lieve-Vrouwestraat 5', '2800', 'Mechelen', '2003-03-03'),
('0473123456', 'Sofie', 'De Smet', 'Befferstraat 15', '2800', 'Mechelen', '2002-04-04'),
('0478123456', 'Thomas', 'Claes', 'Korenmarkt 8', '2800', 'Mechelen', '2002-05-15'),
('0475123456', 'Laura', 'Wouters', 'Dijlepad 3', '2800', 'Mechelen', '2001-07-12'),
('0471123456', 'Kevin', 'Van den Broeck', 'Grote Markt 11', '2800', 'Mechelen', '2003-09-21'),
('0479123456', 'Sara', 'Mertens', 'Haverwerf 6', '2800', 'Mechelen', '2001-11-08'),
('0488123456', 'Bart', 'Jacobs', 'Vismarkt 9', '2800', 'Mechelen', '2000-12-30'),
('0477123456', 'Emma', 'Willems', 'Schuttersvest 25', '2800', 'Mechelen', '2004-06-18'),
('0476123456', 'Liam', 'Dupont', 'Kerkstraat 12', '2800', 'Mechelen', '2000-01-01'),