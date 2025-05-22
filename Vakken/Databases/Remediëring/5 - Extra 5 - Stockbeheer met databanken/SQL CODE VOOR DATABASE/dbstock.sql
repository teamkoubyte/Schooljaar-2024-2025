CREATE DATABASE dbstock;
USE dbstock;

CREATE TABLE tblProducten (
    id INT PRIMARY KEY AUTO_INCREMENT,
    naam VARCHAR(50),
    voorraad INT
);

CREATE TABLE tblAdmin (
    gebruikersnaam VARCHAR(50),
    wachtwoord VARCHAR(50)
);

INSERT INTO tblProducten (naam, voorraad) VALUES 
('Cola', 10),
('Fanta', 15),
('Sprite', 20);

INSERT INTO tblAdmin VALUES ('admin', 'admin123');