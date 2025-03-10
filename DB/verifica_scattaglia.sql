CREATE DATABASE BibliotecheDB;
USE BibliotecheDB;

CREATE TABLE Biblioteche (
    codice INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    indirizzo VARCHAR(255) NOT NULL,
    citta VARCHAR(100) NOT NULL
);

CREATE TABLE TelefonoBiblioteca (
    codice_biblioteca INT,
    numero_telefono VARCHAR(20),
    PRIMARY KEY (codice_biblioteca, numero_telefono),
    FOREIGN KEY (codice_biblioteca) REFERENCES Biblioteche(codice)
);

CREATE TABLE OrariApertura (
    codice_biblioteca INT,
    giorno_settimana VARCHAR(10),
    orario_apertura TIME,
    orario_chiusura TIME,
    PRIMARY KEY (codice_biblioteca, giorno_settimana),
    FOREIGN KEY (codice_biblioteca) REFERENCES Biblioteche(codice)
);

CREATE TABLE Libri (
    ISBN VARCHAR(50) PRIMARY KEY,
    titolo VARCHAR(255) NOT NULL,
    autore VARCHAR(255) NOT NULL,
    genere VARCHAR(100) NOT NULL,
    anno_pubblicazione INT NOT NULL
);

CREATE TABLE CopieLibri (
    codice_copia INT AUTO_INCREMENT,
    codice_biblioteca INT,
    ISBN VARCHAR(50),
    stato_conservazione VARCHAR(20) NOT NULL,
    PRIMARY KEY (codice_copia, codice_biblioteca),
    FOREIGN KEY (codice_biblioteca) REFERENCES Biblioteche(codice),
    FOREIGN KEY (ISBN) REFERENCES Libri(ISBN)
);

CREATE TABLE Utenti (
    codice INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cognome VARCHAR(100) NOT NULL,
    data_nascita DATE NOT NULL,
    numero_cellulare VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE IscrizioniBiblioteca (
    codice_utente INT,
    codice_biblioteca INT,
    PRIMARY KEY (codice_utente, codice_biblioteca),
    FOREIGN KEY (codice_utente) REFERENCES Utenti(codice),
    FOREIGN KEY (codice_biblioteca) REFERENCES Biblioteche(codice)
);

CREATE TABLE Prestiti (
    codice INT PRIMARY KEY AUTO_INCREMENT,
    codice_utente INT,
    codice_copia INT,
    codice_biblioteca INT,
    data_inizio DATE NOT NULL,
    data_scadenza DATE NOT NULL,
    data_restituzione DATE,
    FOREIGN KEY (codice_utente) REFERENCES Utenti(codice),
    FOREIGN KEY (codice_copia, codice_biblioteca) REFERENCES CopieLibri(codice_copia, codice_biblioteca)
);

CREATE TABLE Prenotazioni (
    codice INT PRIMARY KEY AUTO_INCREMENT,
    codice_utente INT,
    codice_biblioteca INT,
    ISBN VARCHAR(50),
    data_prenotazione DATE NOT NULL,
    FOREIGN KEY (codice_utente) REFERENCES Utenti(codice),
    FOREIGN KEY (codice_biblioteca) REFERENCES Biblioteche(codice),
    FOREIGN KEY (ISBN) REFERENCES Libri(ISBN)
);

CREATE TABLE Eventi (
    codice INT PRIMARY KEY AUTO_INCREMENT,
    titolo VARCHAR(255) NOT NULL,
    descrizione TEXT NOT NULL,
    data_evento DATE NOT NULL,
    orario_evento TIME NOT NULL,
    codice_biblioteca INT NOT NULL,
    max_partecipanti INT NOT NULL,
    FOREIGN KEY (codice_biblioteca) REFERENCES Biblioteche(codice)
);

CREATE TABLE PartecipazioniEventi (
    codice_utente INT,
    codice_evento INT,
    PRIMARY KEY (codice_utente, codice_evento),
    FOREIGN KEY (codice_utente) REFERENCES Utenti(codice),
    FOREIGN KEY (codice_evento) REFERENCES Eventi(codice)
);






use bibliotechedb;

INSERT INTO Biblioteche (nome, indirizzo, citta) VALUES
('Biblioteca 1', 'Via Roma 10', 'Torino'),
('Biblioteca 2', 'Via Torino 10', 'Roma'),
('Biblioteca 3', 'Via Milano 10', 'Bologna'),
('Biblioteca 4', 'Via Bologna 10', 'Milano');

INSERT INTO TelefonoBiblioteca (codice_biblioteca, numero_telefono) VALUES
(1, '0123456789'),
(2, '1234567890'),
(3, '2345678901'),
(4, '3456789012');

INSERT INTO OrariApertura (codice_biblioteca, giorno_settimana, orario_apertura, orario_chiusura) VALUES
(1, 'Lunedì', '09:00', '18:00'),
(2, 'Mercoledì', '10:00', '19:30'),
(3, 'Sabato', '08:00', '14:30'),
(4, 'Domenica', '08:00', '14:30');

INSERT INTO Libri (ISBN, titolo, autore, genere, anno_pubblicazione) VALUES
('12345', 'libro1', 'autore1', 'Fantasy', 1954),
('23456', 'libro2', 'autore2', 'Horror', 1987),
('34567', 'libro3', 'autore3', 'Giallo', 2001),
('45678', 'libro4', 'autore4', 'Romanzo', 2010),
('56789', 'libro5', 'autore5', 'Avventura', 2020);

INSERT INTO CopieLibri (codice_biblioteca, ISBN, stato_conservazione) VALUES
(1, '12345', 'Danneggiato'),
(2, '23456', 'Ottimo'),
(3, '34567', 'Buono'),
(3, '45678', 'Danneggiato'),
(4, '56789', 'Buono');


INSERT INTO Utenti (nome, cognome, data_nascita, numero_cellulare) VALUES
('Mario', 'Rossi', '1985-03-22', '3331234567'),
('Luca', 'Bianchi', '1990-02-25', '3332345678'),
('Alessandro', 'Verdi', '2000-11-30', '3333456789'),
('Giulia', 'Neri', '1995-06-15', '3398765432');

INSERT INTO IscrizioniBiblioteca (codice_utente, codice_biblioteca) VALUES
(1, 1),
(2, 2),
(3, 1),
(3, 3),
(2, 4),
(1, 4);

INSERT INTO Prestiti (codice_utente, codice_copia, codice_biblioteca, data_inizio, data_scadenza, data_restituzione) VALUES 
(1, 1, 1, '2025-03-01', '2025-03-15', '2025-03-07'),
(3, 2, 2, '2025-03-05', '2025-03-19', NULL),
(4, 3, 3, '2024-11-01', '2024-11-15', '2024-11-10'),
(1, 4, 3, '2023-12-20', '2024-01-05', '2024-01-03'),
(2, 5, 4, '2025-01-10', '2025-01-24', NULL);

INSERT INTO Prenotazioni (codice_utente, codice_biblioteca, ISBN, data_prenotazione) VALUES
(1, 2, '12345', '2025-03-07'),
(2, 3, '23456', '2025-03-06'),
(3, 1, '12345', '2025-03-10'),
(4, 2, '23456', '2025-03-08'),
(1, 3, '34567', '2025-03-11'),
(2, 4, '45678', '2025-03-12'),
(3, 1, '56789', '2025-03-15');

INSERT INTO Eventi (titolo, descrizione, data_evento, orario_evento, codice_biblioteca, max_partecipanti) VALUES
('Presentazione del libro1', 'Incontro con l\'autore1', '2025-03-20', '18:00:00', 2, 50),
('Presentazione del libro2', 'Incontro con l\'autore2', '2025-03-22', '15:30:00', 3, 100),
('Presentazione del libro3', 'Incontro con l\'autore3', '2025-03-25', '16:00:00', 1, 25),
('Presentazione del libro4', 'Incontro con l\'autore4', '2025-03-30', '20:00:00', 4, 55),
('Presentazione del libro5', 'Incontro con l\'autore5', '2025-03-31', '11:30:00', 4, 200);

INSERT INTO PartecipazioniEventi (codice_utente, codice_evento) 
VALUES
(1, 1),
(3, 2),
(2, 3),
(4, 4),
(1, 5),
(2, 1);





-- Query di Test

-- Elencare tutti i libri disponibili in una specifica biblioteca.
SELECT l.ISBN, l.titolo, l.autore 
from libri l 
join copielibri C ON l.ISBN = C.ISBN
where C.codice_biblioteca = 1;

-- Trovare gli utenti con più di 3 libri in prestito attualmente.
SELECT u.nome, u.cognome, COUNT(p.codice) AS numero_prestiti
from utenti u
join Prestiti p ON u.codice = p.codice_utente
where P.data_restituzione IS NULL
group by U.codice
having COUNT(P.codice) > 3;

-- Elencare i prestiti attivi di un determinato utente.
SELECT p.codice, l.titolo, p.data_inizio, p.data_scadenza
from Prestiti p
join CopieLibri c ON p.codice_copia = c.codice_copia AND p.codice_biblioteca = c.codice_biblioteca
join Libri l ON C.ISBN = l.ISBN
where p.codice_utente = 2 AND p.data_restituzione IS NULL;

-- Elencare tutti gli eventi in una specifica biblioteca ordinati per data.
SELECT e.titolo, e.descrizione, e.data_evento, e.orario_evento
from Eventi e
where e.codice_biblioteca = 1
order by e.data_evento, e.orario_evento;

-- Verificare quali libri hanno il maggior numero di prenotazioni.
SELECT l.ISBN, l.titolo, COUNT(p.codice) AS numero_prenotazioni
from Prenotazioni p
join Libri l ON p.ISBN = l.ISBN
group by l.ISBN
order by numero_prenotazioni DESC;

-- Trovare i libri più frequentemente prestati nell’ultimo anno.
SELECT l.isbn, l.titolo, COUNT(*) AS numero_prestiti
from prestiti p
join copielibri c ON p.codice_copia = c.codice_copia
join libri l ON c.isbn = l.isbn
where p.data_inizio >= CURDATE() - INTERVAL 1 YEAR
group by l.isbn
order by numero_prestiti DESC;

-- Elencare le biblioteche con il maggior numero di prestiti attivi.
SELECT b.nome, count(p.codice) as numero_prestiti
from prestiti p
join biblioteche b on p.codice_biblioteca = b.codice
where p.data_restituzione is null
group by b.codice
order by numero_prestiti desc;

-- Visualizzare gli utenti iscritti a più di una biblioteca.
SELECT u.nome, u.cognome, count(i.codice_biblioteca) as numero_biblioteche
from utenti u
join iscrizionibiblioteca i on u.codice = i.codice_utente
group by u.codice
having count(i.codice_biblioteca) > 1;

-- Trovare i libri danneggiati presenti in una biblioteca specifica.
select l.isbn, l.titolo, c.stato_conservazione
from copielibri c
join libri l on c.isbn = l.isbn
where c.codice_biblioteca = 1 and c.stato_conservazione = 'danneggiato';

-- Trovare gli eventi con più iscritti e verificare se hanno ancora posti disponibili.
select e.titolo, e.data_evento, e.orario_evento, e.max_partecipanti, count(pe.codice_utente) as partecipanti_attuali
from eventi e
left join partecipazionieventi pe on e.codice = pe.codice_evento
group by e.codice
having partecipanti_attuali <= e.max_partecipanti;