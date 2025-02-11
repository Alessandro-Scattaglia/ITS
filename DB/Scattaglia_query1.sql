
CREATE TABLE prodotti (
id INT PRIMARY KEY auto_increment,
nome VARCHAR(50),
prezzo DECIMAL(6,2),
quantita INT
);


ALTER TABLE prodotti ADD COLUMN descrizione TEXT AFTER nome;


CREATE TABLE ordini (
id INT PRIMARY KEY auto_increment,
data_ordine date,
totale DECIMAL(6,2),
id_cliente int
);



CREATE TABLE clienti (
id INT PRIMARY KEY auto_increment,
nome VARCHAR(30),
cognome VARCHAR(30),
email VARCHAR(100),
provincia VARCHAR(2)
);

ALTER TABLE clienti MODIFY column cognome VARCHAR(50), ADD COLUMN telefono VARCHAR(20) AFTER cognome;

CREATE TABLE americhe (
id INT PRIMARY KEY auto_increment,
stato VARCHAR(50),
capitale VARCHAR(50)
);

CREATE TABLE europa (
id INT PRIMARY KEY auto_increment,
stato VARCHAR(50),
capitale VARCHAR(50)
);


CREATE TABLE africa (
id INT PRIMARY KEY auto_increment,
stato VARCHAR(50),
capitale VARCHAR(50)
);

CREATE TABLE libro (
id INT PRIMARY KEY auto_increment,
titolo VARCHAR(100),
prezzo DECIMAL(6,2),
pagine INT,
id_editore int
);
rename table clienti TO customers;





















