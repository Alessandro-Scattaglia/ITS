use prodotti;


-- # Tabelle per esercitazione ESE



-- **1. Tabella `prodotti`**



-- Rappresenta i prodotti disponibili.



CREATE TABLE prodotti (

    codice_prodotto VARCHAR(10) PRIMARY KEY,       -- Codice prodotto

    nome_prodotto VARCHAR(100) NOT NULL,        -- Nome del prodotto

    colore VARCHAR(50),                 -- colore del prodotto

    taglia VARCHAR(10),                 -- taglia del prodotto

    magazzino VARCHAR(10)               -- Codice magazzino

);



-- ------------------------------------

-- **2. Tabella `fornitori`**



-- Contiene informazioni sui fornitori.



CREATE TABLE fornitori (

    codice_fornitore VARCHAR(10) PRIMARY KEY,       -- Codice fornitore

    nome_fornitore VARCHAR(100) NOT NULL,        -- Nome del fornitore

    numero_soci INT,                          -- Numero di soci

    sede VARCHAR(100)                   -- Sede del fornitore

);



-- ------------------------------------

-- **3. Tabella `clienti`**



-- Raccoglie i dettagli dei clienti.



CREATE TABLE clienti (

    codice_cliente VARCHAR(10) PRIMARY KEY, -- Codice cliente

    Nome VARCHAR(100) NOT NULL,         -- Nome del cliente

    Email VARCHAR(100),                 -- Email del cliente

    data_registrazione DATE DEFAULT (CURRENT_DATE) -- Data di registrazione

);



-- ------------------------------------

-- **4. Tabella `prodotti_archivio`**



-- Archivia i prodotti obsoleti o meno utilizzati.



CREATE TABLE prodotti_archivio (

    codice_prodotto VARCHAR(10) PRIMARY KEY,       -- Codice prodotto

    nome_prodotto VARCHAR(100) NOT NULL,        -- Nome del prodotto

    colore VARCHAR(50),                 -- colore del prodotto

    taglia VARCHAR(10)                  -- taglia del prodotto

);



-- ------------------------------------

-- **5. Tabella `ordini`**



-- Memorizza gli ordini dei clienti.



CREATE TABLE ordini (

    codice_ordine VARCHAR(10) PRIMARY KEY,  -- Codice ordine

    codice_cliente VARCHAR(10) NOT NULL,    -- Codice cliente

    data_ordine DATE NOT NULL,           -- Data dell'ordine

    FOREIGN KEY (codice_cliente) REFERENCES clienti(codice_cliente)

);



-- ------------------------------------

-- **6. Tabella `vendite`**



-- Registra le vendite dei prodotti.



CREATE TABLE vendite (

    codice_vendita VARCHAR(10) PRIMARY KEY, -- Codice vendita

    codice_prodotto VARCHAR(10) NOT NULL,  -- Codice prodotto

    Quantita INT NOT NULL,             -- Quantità venduta

    PrezzoUnitario DECIMAL(10, 2),     -- Prezzo per unità

    Totale DECIMAL(10, 2),             -- Totale della vendita

    FOREIGN KEY (codice_prodotto) REFERENCES prodotti(codice_prodotto)

);



-- ------------------------------------

-- **7. Tabella `fornitori_prodotti`**



-- Gestisce l'associazione tra fornitori e prodotti.



CREATE TABLE fornitori_prodotti (

    codice_fornitore VARCHAR(10) NOT NULL,          -- Codice fornitore

    codice_prodotto VARCHAR(10) NOT NULL,          -- Codice prodotto

    Qta INT NOT NULL,                   -- Quantità fornita

    PRIMARY KEY (codice_fornitore, codice_prodotto),           -- Chiave primaria composita

    FOREIGN KEY (codice_fornitore) REFERENCES fornitori(codice_fornitore),

    FOREIGN KEY (codice_prodotto) REFERENCES prodotti(codice_prodotto)

);



-- ------------------------------------

-- **8. Tabella `ordini_temp`**



-- Una tabella temporanea per gestire dati prima di inserirli in `ordini`.



CREATE TABLE ordini_temp (

    codice_ordine VARCHAR(10) PRIMARY KEY,  -- Codice ordine temporaneo

    codice_cliente VARCHAR(10) NOT NULL,    -- Codice cliente

    data_ordine DATE NOT NULL            -- Data dell'ordine

);



-- ------------------------------------

-- Dopo aver creato la struttura delle tabelle, esercitati con le principali operazioni `DML`



-- ------------------------------------



-- # Esercizi di INSERT

--



-- -- ------------------------------------



-- -- ------------------------------------



-- Esegui 10 esercizi di `INSERT` in SQL per esercitarsi con la sintassi e i concetti.



-- ------------------------------------
-- 1. Inserire un singolo record
-- Inserire un prodotto nella tabella prodotti
INSERT INTO prodotti (codice_prodotto, nome_prodotto, colore, taglia, magazzino)  
VALUES ('P001', 'Maglietta', 'Rosso', 'M', 'MZ001');

-- --------------------------

-- 2. Inserire più record in una sola istruzione
-- Inserire più fornitori nella tabella fornitori
INSERT INTO fornitori (codice_fornitore, nome_fornitore, numero_soci, sede)  
VALUES 
    ('F001', 'Fornitore A', 5, 'Milano'),  
    ('F002', 'Fornitore B', 3, 'Roma'),  
    ('F003', 'Fornitore C', 8, 'Napoli');

-- --------------------------

-- 3. Inserire un record parziale
-- Inserire un cliente con alcuni campi lasciati nulli
INSERT INTO clienti (codice_cliente, Nome)  
VALUES ('C001', 'Mario Rossi');

-- ----------------------------

-- 4. Inserire un record calcolato da un'altra tabella
-- Copiare un prodotto dalla tabella prodotti alla tabella prodotti_archivio
INSERT INTO prodotti_archivio (codice_prodotto, nome_prodotto, colore, taglia)  
SELECT codice_prodotto, nome_prodotto, colore, taglia  
FROM prodotti  
WHERE codice_prodotto = 'P001';

-- ----------------------------

-- 5. Inserire una riga con una sottoquery
-- Inserire un ordine per il cliente più recente
INSERT INTO ordini (codice_ordine, codice_cliente, data_ordine)  
VALUES ('O001', (SELECT codice_cliente FROM clienti ORDER BY data_registrazione DESC LIMIT 1), CURRENT_DATE);

-- ----------------------------

-- 6. Inserire un record con valori default
-- Inserire un fornitore con i valori predefiniti per alcuni campi
INSERT INTO fornitori (codice_fornitore, nome_fornitore)  
VALUES ('F004', 'Fornitore D');

-- ----------------------------

-- 7. Inserire dati con valori calcolati
-- Inserire un record nella tabella vendite calcolando il totale
INSERT INTO vendite (codice_vendita, codice_prodotto, Quantita, PrezzoUnitario, Totale)  
VALUES ('V001', 'P001', 2, 15.50, 2 * 15.50);

-- --------------------------

-- 8. Inserire dati duplicati con modifiche
-- Duplicare un prodotto con un nuovo codice e colore
INSERT INTO prodotti (codice_prodotto, nome_prodotto, colore, taglia, magazzino)  
SELECT 'P002', nome_prodotto, 'Blu', taglia, magazzino  
FROM prodotti  
WHERE codice_prodotto = 'P001';

-- --------------------------

-- 9. Inserire dati nella tabella di associazione
-- Aggiungere una relazione tra fornitori e prodotti
INSERT INTO fornitori_prodotti (codice_fornitore, codice_prodotto, Qta)  
VALUES ('F001', 'P001', 100);

-- --------------------------

-- 10. Inserire dati provenienti da una tabella di log
-- Inserire tutti i record da una tabella temporanea a una tabella definitiva
INSERT INTO ordini (codice_ordine, codice_cliente, data_ordine)  
SELECT codice_ordine, codice_cliente, data_ordine FROM ordini_temp;




-- -- ------------------------------------



-- 1. Inserire un singolo record
-- Inserire un prodotto nella tabella prodotti
INSERT INTO prodotti (codice_prodotto, nome_prodotto, colore, taglia, magazzino)  
VALUES ('P001', 'Maglietta', 'Rosso', 'M', 'MZ001');

----------------------------

-- 2. Inserire più record in una sola istruzione
-- Inserire più fornitori nella tabella fornitori
INSERT INTO fornitori (codice_fornitore, nome_fornitore, numero_soci, sede)  
VALUES 
    ('F001', 'Fornitore A', 5, 'Milano'),  
    ('F002', 'Fornitore B', 3, 'Roma'),  
    ('F003', 'Fornitore C', 8, 'Napoli');

----------------------------

-- 3. Inserire un record parziale
-- Inserire un cliente con alcuni campi lasciati nulli
INSERT INTO clienti (codice_cliente, Nome)  
VALUES ('C001', 'Mario Rossi');

----------------------------

-- 4. Inserire un record calcolato da un'altra tabella
-- Copiare un prodotto dalla tabella prodotti alla tabella prodotti_archivio
INSERT INTO prodotti_archivio (codice_prodotto, nome_prodotto, colore, taglia)  
SELECT codice_prodotto, nome_prodotto, colore, taglia  
FROM prodotti  
WHERE codice_prodotto = 'P001';

----------------------------

-- 5. Inserire una riga con una sottoquery
-- Inserire un ordine per il cliente più recente
INSERT INTO ordini (codice_ordine, codice_cliente, data_ordine)  
VALUES ('O001', (SELECT codice_cliente FROM clienti ORDER BY data_registrazione DESC LIMIT 1), CURRENT_DATE);

----------------------------

-- 6. Inserire un record con valori default
-- Inserire un fornitore con i valori predefiniti per alcuni campi
INSERT INTO fornitori (codice_fornitore, nome_fornitore)  
VALUES ('F004', 'Fornitore D');

----------------------------

-- 7. Inserire dati con valori calcolati
-- Inserire un record nella tabella vendite calcolando il totale
INSERT INTO vendite (codice_vendita, codice_prodotto, Quantita, PrezzoUnitario, Totale)  
VALUES ('V001', 'P001', 2, 15.50, 2 * 15.50);

----------------------------

-- 8. Inserire dati duplicati con modifiche
-- Duplicare un prodotto con un nuovo codice e colore
INSERT INTO prodotti (codice_prodotto, nome_prodotto, colore, taglia, magazzino)  
SELECT 'P002', nome_prodotto, 'Blu', taglia, magazzino  
FROM prodotti  
WHERE codice_prodotto = 'P001';

----------------------------

-- 9. Inserire dati nella tabella di associazione
-- Aggiungere una relazione tra fornitori e prodotti
INSERT INTO fornitori_prodotti (codice_fornitore, codice_prodotto, Qta)  
VALUES ('F001', 'P001', 100);

----------------------------

-- 10. Inserire dati provenienti da una tabella di log
-- Inserire tutti i record da una tabella temporanea a una tabella definitiva
INSERT INTO ordini (codice_ordine, codice_cliente, data_ordine)  
SELECT codice_ordine, codice_cliente, data_ordine FROM ordini_temp;

----------------------------

-- 1. Aggiornare il colore dei prodotti con il codice "P001" in "rosso"
UPDATE prodotti SET colore = 'Rosso' WHERE codice_prodotto = 'P001';

----------------------------

-- 2. Incrementare il numero di soci di tutti i fornitori con sede a "Milano" di 2
UPDATE fornitori SET numero_soci = numero_soci + 2 WHERE sede = 'Milano';

----------------------------

-- 3. Aggiornare il magazzino del prodotto "P002" a "MZ002"
UPDATE prodotti SET magazzino = 'MZ002' WHERE codice_prodotto = 'P002';

----------------------------

-- 4. Ridurre del 10% la quantità disponibile per tutti i prodotti forniti da "F001"
UPDATE fornitori_prodotti SET Qta = Qta * 0.9 WHERE codice_fornitore = 'F001';

----------------------------

-- 5. Impostare il colore dei prodotti senza un colore definito a "bianco"
UPDATE prodotti SET colore = 'Bianco' WHERE colore IS NULL;

----------------------------

-- 6. Cambiare l'indirizzo di tutti i fornitori con codice "F002" in "Via Roma, 10"
UPDATE fornitori SET sede = 'Via Roma, 10' WHERE codice_fornitore = 'F002';

----------------------------

-- 7. Impostare la quantità a 0 per i prodotti mai forniti da alcun fornitore
UPDATE prodotti SET magazzino = '0' WHERE codice_prodotto NOT IN (SELECT codice_prodotto FROM fornitori_prodotti);

----------------------------

-- 8. Aggiornare la sede dei fornitori con meno di 3 soci a "Sede Sconosciuta"
UPDATE fornitori SET sede = 'Sede Sconosciuta' WHERE numero_soci < 3;

----------------------------

-- 9. Cambiare la taglia di tutti i prodotti di colore "verde" a "L"
UPDATE prodotti SET taglia = 'L' WHERE colore = 'Verde';

----------------------------

-- 10. Aggiornare il nome dei fornitori che hanno fornito almeno un prodotto con quantità superiore a 100 in "Fornitore Premium"
UPDATE fornitori SET nome_fornitore = 'Fornitore Premium' WHERE codice_fornitore IN (SELECT codice_fornitore FROM fornitori_prodotti WHERE Qta > 100);


-- # Esercizi di DELETE



-- -- ------------------------------------



-- -- ------------------------------------



-- Esegui 10 esercizi di `DELETE` in SQL per esercitarsi con la sintassi e i concetti.



-- 1. Eliminare i prodotti con magazzino "MZ003"
DELETE FROM prodotti WHERE magazzino = 'MZ003' AND codice_prodotto IS NOT NULL;

-- ------------------------------------

-- 2. Rimuovere tutti i fornitori con sede a "Napoli"
DELETE FROM fornitori WHERE sede = 'Napoli' AND codice_fornitore IS NOT NULL;

-- ------------------------------------

-- 3. Eliminare tutte le relazioni prodotto-fornitore per il prodotto con codice "P004"
DELETE FROM fornitori_prodotti WHERE codice_prodotto = 'P004' AND codice_fornitore IS NOT NULL;

-- ------------------------------------

-- 4. Rimuovere tutti i prodotti con colore "nero"
DELETE FROM prodotti WHERE colore = 'Nero' AND codice_prodotto IS NOT NULL;

-- ------------------------------------

-- 5. Eliminare tutti i fornitori con meno di 5 soci
DELETE FROM fornitori WHERE numero_soci < 5 AND codice_fornitore IS NOT NULL;

-- ------------------------------------

-- 6. Eliminare le relazioni prodotto-fornitore per i fornitori con codice "F003"
DELETE FROM fornitori_prodotti WHERE codice_fornitore = 'F003' AND codice_prodotto IS NOT NULL;

-- ------------------------------------

-- 7. Eliminare tutti i prodotti mai forniti da alcun fornitore
DELETE FROM prodotti WHERE codice_prodotto NOT IN (SELECT codice_prodotto FROM fornitori_prodotti) AND codice_prodotto IS NOT NULL;

-- ------------------------------------

-- 8. Rimuovere tutti i fornitori che non hanno fornito prodotti
DELETE FROM fornitori WHERE codice_fornitore NOT IN (SELECT DISTINCT codice_fornitore FROM fornitori_prodotti) AND codice_fornitore IS NOT NULL;

-- ------------------------------------

-- 9. Eliminare tutti i prodotti con quantità inferiore a 10 in qualsiasi relazione prodotto-fornitore
DELETE FROM fornitori_prodotti WHERE Qta < 10 AND codice_fornitore IS NOT NULL AND codice_prodotto IS NOT NULL;

-- ------------------------------------

-- 10. Rimuovere tutti i prodotti di taglia "S" e colore "giallo"
DELETE FROM prodotti WHERE taglia = 'S' AND colore = 'Giallo' AND codice_prodotto IS NOT NULL;





-- ------------------------------------

-- Svuota le tabelle con i tuoi dati di prova e carica i seguenti dati `fake` ed esegui le istruzioni `DQL`



-- ------------------------------------

-- ## Dati fake



-- Ecco le istruzioni SQL per inserire 10 record fittizi in ciascuna delle tabelle descritte:



-- ------------------------------------

-- **1. Inserire record nella tabella `prodotti`**



INSERT INTO prodotti (codice_prodotto, nome_prodotto, colore, taglia, magazzino) VALUES

('P001', 'Maglietta', 'Rosso', 'M', 'MZ01'),

('P002', 'Pantaloni', 'Blu', 'L', 'MZ02'),

('P003', 'Scarpe', 'Nero', '42', 'MZ03'),

('P004', 'Cappello', 'Verde', 'Unica', 'MZ01'),

('P005', 'Giacca', 'Grigio', 'XL', 'MZ02'),

('P006', 'Zaino', 'Rosso', NULL, 'MZ03'),

('P007', 'Occhiali', 'Nero', 'Unica', 'MZ01'),

('P008', 'Guanti', 'Bianco', 'M', 'MZ02'),

('P009', 'Cintura', 'Marrone', 'L', 'MZ03'),

('P010', 'Orologio', 'Oro', 'Unica', 'MZ01');



-- ------------------------------------

-- **2. Inserire record nella tabella `fornitori`**



INSERT INTO fornitori (codice_fornitore, nome_fornitore, numero_soci, Sede) VALUES

('F001', 'Forniture Srl', 10, 'sede'),

('F002', 'prodotti Spa', 15, 'Roma'),

('F003', 'Servizi & Co.', 8, 'Napoli'),

('F004', 'Global Supply', 20, 'Torino'),

('F005', 'Tech Parts', 5, 'Bologna'),

('F006', 'Fashion Line', 12, 'Firenze'),

('F007', 'Home Goods', 6, 'Verona'),

('F008', 'Quick Deliver', 9, 'Genova'),

('F009', 'Market Solutions', 7, 'Palermo'),

('F010', 'Green Supply', 4, 'Venezia');



-- ------------------------------------

-- **3. Inserire record nella tabella `clienti`**



INSERT INTO clienti (codice_cliente, Nome, Email, data_registrazione) VALUES

('C001', 'Mario Rossi', '<mario.rossi@example.com>', '2024-01-01'),

('C002', 'Anna Bianchi', '<anna.bianchi@example.com>', '2024-01-02'),

('C003', 'Luca Verdi', '<luca.verdi@example.com>', '2024-01-03'),

('C004', 'Giulia Neri', '<giulia.neri@example.com>', '2024-01-04'),

('C005', 'Marco Gialli', '<marco.gialli@example.com>', '2024-01-05'),

('C006', 'Elisa Blu', '<elisa.blu@example.com>', '2024-01-06'),

('C007', 'Francesco Viola', '<francesco.viola@example.com>', '2024-01-07'),

('C008', 'Chiara Marrone', '<chiara.marrone@example.com>', '2024-01-08'),

('C009', 'Alessio Rosa', '<alessio.rosa@example.com>', '2024-01-09'),

('C010', 'Sara Arancio', '<sara.arancio@example.com>', '2024-01-10');



-- ------------------------------------

-- **4. Inserire record nella tabella `prodotti_archivio`**



INSERT INTO prodotti_archivio (codice_prodotto, nome_prodotto, colore, taglia) VALUES

('A001', 'Maglietta Vintage', 'Rosso', 'M'),

('A002', 'Pantaloni Retrò', 'Blu', 'L'),

('A003', 'Scarpe Classiche', 'Nero', '42'),

('A004', 'Cappello d\'Epoca', 'Verde', 'Unica'),

('A005', 'Giacca Pesante', 'Grigio', 'XL'),

('A006', 'Zaino Montagna', 'Rosso', NULL),

('A007', 'Occhiali Retrò', 'Nero', 'Unica'),

('A008', 'Guanti Termici', 'Bianco', 'M'),

('A009', 'Cintura di Cuoio', 'Marrone', 'L'),

('A010', 'Orologio Vintage', 'Oro', 'Unica');



-- ------------------------------------

-- **5. Inserire record nella tabella `ordini`**



INSERT INTO ordini (codice_ordine, codice_cliente, data_ordine) VALUES

('O001', 'C001', '2024-01-11'),

('O002', 'C002', '2024-01-12'),

('O003', 'C003', '2024-01-13'),

('O004', 'C004', '2024-01-14'),

('O005', 'C005', '2024-01-15'),

('O006', 'C006', '2024-01-16'),

('O007', 'C007', '2024-01-17'),

('O008', 'C008', '2024-01-18'),

('O009', 'C009', '2024-01-19'),

('O010', 'C010', '2024-01-20');



-- ------------------------------------

-- **6. Inserire record nella tabella `vendite`**



INSERT INTO vendite (codice_vendita, codice_prodotto, Quantita, PrezzoUnitario, Totale) VALUES

('V001', 'P001', 10, 15.99, 159.90),

('V002', 'P002', 5, 29.99, 149.95),

('V003', 'P003', 8, 49.99, 399.92),

('V004', 'P004', 12, 9.99, 119.88),

('V005', 'P005', 6, 89.99, 539.94),

('V006', 'P006', 3, 59.99, 179.97),

('V007', 'P007', 15, 19.99, 299.85),

('V008', 'P008', 10, 12.99, 129.90),

('V009', 'P009', 4, 24.99, 99.96),

('V010', 'P010', 2, 199.99, 399.98);



-- ------------------------------------

-- **7. Inserire record nella tabella `fornitori_prodotti`**



INSERT INTO fornitori_prodotti (codice_fornitore, codice_prodotto, Qta) VALUES

('F001', 'P001', 100),

('F002', 'P002', 200),

('F003', 'P003', 150),

('F004', 'P004', 250),

('F005', 'P005', 300),

('F006', 'P006', 50),

('F007', 'P007', 80),

('F008', 'P008', 70),

('F009', 'P009', 90),

('F010', 'P010', 60);



-- ------------------------------------

-- **8. Inserire record nella tabella `ordini_temp`**



INSERT INTO ordini_temp (codice_ordine, codice_cliente, data_ordine) VALUES

('T001', 'C001', '2024-01-21'),

('T002', 'C002', '2024-01-22'),

('T003', 'C003', '2024-01-23'),

('T004', 'C004', '2024-01-24'),

('T005', 'C005', '2024-01-25'),

('T006', 'C006', '2024-01-26'),

('T007', 'C007', '2024-01-27'),

('T008', 'C008', '2024-01-28'),

('T009', 'C009', '2024-01-29'),

('T010', 'C010', '2024-01-30');



-- Altri record



-- 1. Inserire record nella tabella Prodotti

INSERT INTO Prodotti VALUES

('P011', 'Felpa', 'Blu', 'L', 'MZ01'),

('P012', 'Jeans', 'Denim', 'M', 'MZ02'),

('P013', 'Sneakers', 'Bianco', '43', 'MZ03'),

('P014', 'Sciarpa', 'Rosso', 'Unica', 'MZ01'),

('P015', 'Parka', 'Verde', 'XL', 'MZ02'),

('P016', 'Borsa', 'Nero', NULL, 'MZ03'),

('P017', 'Anello', 'Argento', 'Unica', 'MZ01'),

('P018', 'Calze', 'Grigio', 'M', 'MZ02'),

('P019', 'Portafoglio', 'Marrone', 'Unica', 'MZ03'),

('P020', 'Bracciale', 'Oro', 'Unica', 'MZ01');



-- 2. Inserire record nella tabella Fornitori

INSERT INTO Fornitori VALUES

('F011', 'Luxury Goods', 14, 'Milano'),

('F012', 'Fast Supply', 11, 'Roma'),

('F013', 'Eco Wear', 9, 'Napoli'),

('F014', 'Tech Fabrics', 18, 'Torino'),

('F015', 'Italian Fashion', 7, 'Bologna'),

('F016', 'Smart Retail', 13, 'Firenze'),

('F017', 'Best Products', 5, 'Verona'),

('F018', 'Trend Hub', 8, 'Genova'),

('F019', 'Design Concepts', 6, 'Palermo'),

('F020', 'Handmade Creations', 4, 'Venezia');



-- 3. Inserire record nella tabella Clienti

INSERT INTO Clienti VALUES

('C011', 'Giovanni Azzurro', '<giovanni.azzurro@example.com>', '2024-01-11'),

('C012', 'Martina Verde', '<martina.verde@example.com>', '2024-01-12'),

('C013', 'Paolo Nero', '<paolo.nero@example.com>', '2024-01-13'),

('C014', 'Francesca Bianca', '<francesca.bianca@example.com>', '2024-01-14'),

('C015', 'Davide Grigio', '<davide.grigio@example.com>', '2024-01-15'),

('C016', 'Silvia Viola', '<silvia.viola@example.com>', '2024-01-16'),

('C017', 'Emanuele Marrone', '<emanuele.marrone@example.com>', '2024-01-17'),

('C018', 'Roberta Gialla', '<roberta.gialla@example.com>', '2024-01-18'),

('C019', 'Alberto Rosso', '<alberto.rosso@example.com>', '2024-01-19'),

('C020', 'Elena Arancio', '<elena.arancio@example.com>', '2024-01-20');



-- 4. Inserire record nella tabella ProdottiArchivio

INSERT INTO ProdottiArchivio VALUES

('A011', 'Felpa Vintage', 'Blu', 'L'),

('A012', 'Jeans d\'Epoca', 'Denim', 'M'),

('A013', 'Sneakers Classiche', 'Bianco', '43'),

('A014', 'Sciarpa Retrò', 'Rosso', 'Unica'),

('A015', 'Parka Pesante', 'Verde', 'XL'),

('A016', 'Borsa Vintage', 'Nero', NULL),

('A017', 'Anello Antico', 'Argento', 'Unica'),

('A018', 'Calze di Lana', 'Grigio', 'M'),

('A019', 'Portafoglio in Pelle', 'Marrone', 'Unica'),

('A020', 'Bracciale Elegante', 'Oro', 'Unica');



-- 5. Inserire record nella tabella Ordini

INSERT INTO Ordini VALUES

('O011', 'C011', '2024-01-21'),

('O012', 'C012', '2024-01-22'),

('O013', 'C013', '2024-01-23'),

('O014', 'C014', '2024-01-24'),

('O015', 'C015', '2024-01-25'),

('O016', 'C016', '2024-01-26'),

('O017', 'C017', '2024-01-27'),

('O018', 'C018', '2024-01-28'),

('O019', 'C019', '2024-01-29'),

('O020', 'C020', '2024-01-30');



-- 6. Inserire record nella tabella Vendite

INSERT INTO Vendite VALUES

('V011', 'P011', 7, 25.99, 181.93),

('V012', 'P012', 4, 39.99, 159.96),

('V013', 'P013', 6, 59.99, 359.94),

('V014', 'P014', 9, 14.99, 134.91),

('V015', 'P015', 3, 99.99, 299.97),

('V016', 'P016', 5, 69.99, 349.95),

('V017', 'P017', 8, 29.99, 239.92),

('V018', 'P018', 10, 9.99, 99.90),

('V019', 'P019', 6, 34.99, 209.94),

('V020', 'P020', 2, 149.99, 299.98);



-- 7. Inserire record nella tabella FornitoriProdotti

INSERT INTO FornitoriProdotti VALUES

('F011', 'P011', 120),

('F012', 'P012', 180),

('F013', 'P013', 140),

('F014', 'P014', 220),

('F015', 'P015', 250),

('F016', 'P016', 60),

('F017', 'P017', 90),

('F018', 'P018', 75),

('F019', 'P019', 85),

('F020', 'P020', 50);



-- 8. Inserire record nella tabella OrdiniTemp

INSERT INTO OrdiniTemp VALUES

('T011', 'C011', '2024-02-01'),

('T012', 'C012', '2024-02-02'),

('T013', 'C013', '2024-02-03'),

('T014', 'C014', '2024-02-04'),

('T015', 'C015', '2024-02-05'),

('T016', 'C016', '2024-02-06'),

('T017', 'C017', '2024-02-07'),

('T018', 'C018', '2024-02-08'),

('T019', 'C019', '2024-02-09'),

('T020', 'C020', '2024-02-10');



-- ------------------------------------



-- # Esercizi di SELECT

--



-- -- ------------------------------------



-- ------------------------------------

-- Esegui 10 esercizi di `SELECT` in SQL per esercitarsi con la sintassi e i concetti.



-- ------------------------------------

-- **1. Selezionare tutti i dettagli dei prodotti di colore rosso**
SELECT * FROM prodotti WHERE colore = 'Rosso';

-- ------------------------------------

-- **2. Trovare i nomi e le sedi dei fornitori con più di 5 soci**
SELECT nome_fornitore, Sede FROM fornitori WHERE numero_soci > 5;

-- ------------------------------------

-- **3. Trovare il nome e l'email dei clienti registrati negli ultimi 30 giorni**
SELECT Nome, Email FROM clienti WHERE data_registrazione >= CURDATE() - INTERVAL 30 DAY;

-- ------------------------------------

-- **4. Calcolare il totale delle vendite per ogni prodotto**
SELECT codice_prodotto, SUM(Totale) AS TotaleVendite FROM vendite GROUP BY codice_prodotto;

-- ------------------------------------

-- **5. Recuperare i dettagli dei fornitori che forniscono almeno un prodotto di colore "verde"**
SELECT DISTINCT f.* FROM fornitori f
JOIN fornitori_prodotti fp ON f.codice_fornitore = fp.codice_fornitore
JOIN prodotti p ON fp.codice_prodotto = p.codice_prodotto
WHERE p.colore = 'Verde';

-- ------------------------------------

-- **6. Trovare i nomi dei clienti che hanno effettuato ordini**
SELECT DISTINCT c.Nome FROM clienti c
JOIN ordini o ON c.codice_cliente = o.codice_cliente;

-- ------------------------------------

-- **7. Visualizzare i prodotti mai forniti da alcun fornitore**
SELECT * FROM prodotti WHERE codice_prodotto NOT IN (SELECT codice_prodotto FROM fornitori_prodotti);

-- ------------------------------------

-- **8. Trovare i fornitori che forniscono almeno due prodotti diversi**
SELECT codice_fornitore FROM fornitori_prodotti
GROUP BY codice_fornitore HAVING COUNT(DISTINCT codice_prodotto) >= 2;

-- ------------------------------------

-- **9. Recuperare i dettagli delle vendite per prodotti il cui prezzo unitario è maggiore della media**
SELECT * FROM vendite v
JOIN prodotti p ON v.codice_prodotto = p.codice_prodotto
WHERE v.PrezzoUnitario > (SELECT ROUND(AVG(PrezzoUnitario)) FROM vendite);

-- ------------------------------------

-- **10. Trovare i prodotti venduti esclusivamente nel magazzino "MZ001"**
SELECT DISTINCT p.* FROM prodotti p
JOIN vendite v ON p.codice_prodotto = v.codice_prodotto
WHERE p.magazzino = 'MZ01'
AND NOT EXISTS (
    SELECT 1 FROM prodotti p2
    JOIN vendite v2 ON p2.codice_prodotto = v2.codice_prodotto
    WHERE p2.codice_prodotto = p.codice_prodotto AND p2.magazzino <> 'MZ01'
);

-- ------------------------------------



-- # Esercizi con OPERATORI

--



-- -- ------------------------------------



-- ------------------------------------



-- **1. Selezionare il nome e il prezzo aumentato del 10% per tutti i prodotti**
SELECT p.nome_prodotto, v.PrezzoUnitario, ROUND(v.PrezzoUnitario + (10 * v.PrezzoUnitario / 100), 2)
FROM prodotti p
JOIN vendite v ON p.codice_prodotto = v.codice_prodotto;

-- ------------------------------------

-- **2. Trovare i prodotti con un prezzo tra 50 e 100 (inclusi)**
SELECT nome_prodotto, PrezzoUnitario
FROM prodotti
WHERE PrezzoUnitario BETWEEN 50 AND 100;

-- ------------------------------------

-- **3. Visualizzare i fornitori con un numero di soci maggiore o uguale a 10**
SELECT nome_fornitore, numero_soci
FROM fornitori
WHERE numero_soci >= 10;

-- ------------------------------------

-- **4. Calcolare la quantità totale fornita per ogni prodotto**
SELECT codice_prodotto, SUM(quantita) AS QuantitaTotale
FROM fornitori_prodotti
GROUP BY codice_prodotto;

-- ------------------------------------

-- **5. Trovare i fornitori con il nome che inizia con "A"**
SELECT nome_fornitore
FROM fornitori
WHERE nome_fornitore LIKE 'A%';

-- ------------------------------------

-- **6. Mostrare tutti i prodotti che non sono né rossi né gialli**
SELECT nome_prodotto
FROM prodotti
WHERE colore NOT IN ('Rosso', 'Giallo');

-- ------------------------------------

-- **7. Trovare i fornitori che si trovano in città diverse da "Milano"**
SELECT nome_fornitore, sede
FROM fornitori
WHERE sede <> 'Milano';

-- ------------------------------------

-- **8. Calcolare la media delle quantità fornite da ciascun fornitore**
SELECT codice_fornitore, AVG(quantita) AS MediaQuantita
FROM fornitori_prodotti
GROUP BY codice_fornitore;

-- ------------------------------------

-- **9. Selezionare tutti i fornitori che forniscono almeno un prodotto in quantità superiore a 50**
SELECT DISTINCT f.nome_fornitore
FROM fornitori f
JOIN fornitori_prodotti fp ON f.codice_fornitore = fp.codice_fornitore
WHERE fp.quantita > 50;

-- ------------------------------------

-- **10. Visualizzare i prodotti con prezzo maggiore di 20 e in magazzini diversi da "MZ001"**
SELECT p.nome_prodotto, p.PrezzoUnitario, p.magazzino
FROM prodotti p
WHERE p.PrezzoUnitario > 20
AND p.magazzino <> 'MZ001';


-- ------------------------------------



-- # Esercizi con JOIN

--



-- -- ------------------------------------



-- ------------------------------------



-- **1. Mostrare il nome dei prodotti e i nomi dei fornitori che li forniscono**
SELECT p.nome_prodotto, f.nome_fornitore
FROM prodotti p
INNER JOIN fornitori_prodotti fp ON p.codice_prodotto = fp.codice_prodotto
INNER JOIN fornitori f ON fp.codice_fornitore = f.codice_fornitore;

-- ------------------------------------

-- **2. Trovare i fornitori che non forniscono alcun prodotto (LEFT JOIN con condizione NULL)**
SELECT f.nome_fornitore
FROM fornitori f
LEFT JOIN fornitori_prodotti fp ON f.codice_fornitore = fp.codice_fornitore
WHERE fp.codice_prodotto IS NULL;

-- ------------------------------------

-- **3. Calcolare la quantità totale fornita per ogni prodotto e visualizzare anche i prodotti che non sono forniti (LEFT JOIN)**
-- **3. Calcolare la quantità totale fornita per ogni prodotto e visualizzare anche i prodotti che non sono forniti (LEFT JOIN)**
SELECT p.nome_prodotto, COALESCE(SUM(fp.Qta), 0) AS QuantitaTotale
FROM prodotti p
LEFT JOIN fornitori_prodotti fp ON p.codice_prodotto = fp.codice_prodotto
GROUP BY p.nome_prodotto;

-- ------------------------------------

-- **4. Visualizzare i fornitori che forniscono prodotti con quantità maggiore di 50**
SELECT DISTINCT f.nome_fornitore
FROM fornitori f
JOIN fornitori_prodotti fp ON f.codice_fornitore = fp.codice_fornitore
WHERE fp.codice_prodotto IN (
    SELECT codice_prodotto FROM prodotti WHERE fp.Qta > 50
);

-- ------------------------------------

-- **5. Trovare i prodotti non forniti da nessun fornitore**
SELECT p.nome_prodotto
FROM prodotti p
LEFT JOIN fornitori_prodotti fp ON p.codice_prodotto = fp.codice_prodotto
WHERE fp.codice_fornitore IS NULL;

-- ------------------------------------

-- **6. Trovare i fornitori che forniscono solo prodotti di colore "rosso"**
SELECT f.nome_fornitore
FROM fornitori f
JOIN fornitori_prodotti fp ON f.codice_fornitore = fp.codice_fornitore
JOIN prodotti p ON fp.codice_prodotto = p.codice_prodotto
WHERE p.colore = 'Rosso'
GROUP BY f.nome_fornitore
HAVING COUNT(DISTINCT p.colore) = 1;

-- ------------------------------------

-- **7. Visualizzare i fornitori che forniscono almeno due prodotti diversi**
SELECT f.nome_fornitore
FROM fornitori f
JOIN fornitori_prodotti fp ON f.codice_fornitore = fp.codice_fornitore
GROUP BY f.nome_fornitore
HAVING COUNT(DISTINCT fp.codice_prodotto) >= 2;

-- ------------------------------------

-- **8. Trovare i prodotti forniti solo da un unico fornitore**
SELECT p.nome_prodotto
FROM prodotti p
JOIN fornitori_prodotti fp ON p.codice_prodotto = fp.codice_prodotto
GROUP BY p.nome_prodotto
HAVING COUNT(DISTINCT fp.codice_fornitore) = 1;

-- ------------------------------------

-- **9. Trovare i fornitori che forniscono prodotti con quantità media superiore a 30**
SELECT f.nome_fornitore
FROM fornitori f
JOIN fornitori_prodotti fp ON f.codice_fornitore = fp.codice_fornitore
GROUP BY f.nome_fornitore
HAVING AVG(fp.Qta) > 30;

-- ------------------------------------

-- **10. Visualizzare i prodotti e il numero di fornitori che li forniscono**
SELECT p.nome_prodotto, COUNT(DISTINCT fp.codice_fornitore) AS NumeroFornitori
FROM prodotti p
JOIN fornitori_prodotti fp ON p.codice_prodotto = fp.codice_prodotto
GROUP BY p.nome_prodotto;




-- ------------------------------------

-- # Esercizi con GROUP BY



-- ------------------------------------



-- ------------------------------------



-- **1. Contare il numero totale di prodotti disponibili**
SELECT COUNT(*) AS NumeroProdotti FROM prodotti;

-- ------------------------------------

-- **2. Calcolare la quantità totale fornita per ogni prodotto**
SELECT p.nome_prodotto, SUM(fp.Qta) AS QuantitaTotale
FROM prodotti p
JOIN fornitori_prodotti fp ON p.codice_prodotto = fp.codice_prodotto
GROUP BY p.nome_prodotto;

-- ------------------------------------

-- **3. Determinare la quantità media di prodotti forniti da ciascun fornitore**
SELECT f.nome_fornitore, AVG(fp.Qta) AS QuantitaMedia
FROM fornitori f
JOIN fornitori_prodotti fp ON f.codice_fornitore = fp.codice_fornitore
GROUP BY f.nome_fornitore;

-- ------------------------------------

-- **4. Calcolare il numero di fornitori per ciascun prodotto**
SELECT p.nome_prodotto, COUNT(DISTINCT fp.codice_fornitore) AS NumeroFornitori
FROM prodotti p
JOIN fornitori_prodotti fp ON p.codice_prodotto = fp.codice_prodotto
GROUP BY p.nome_prodotto;

-- ------------------------------------

-- **5. Trovare il prodotto con la quantità massima fornita**
SELECT p.nome_prodotto, SUM(fp.Qta) AS QuantitaTotale
FROM prodotti p
JOIN fornitori_prodotti fp ON p.codice_prodotto = fp.codice_prodotto
GROUP BY p.nome_prodotto
ORDER BY QuantitaTotale DESC
LIMIT 1;

-- ------------------------------------

-- **6. Determinare la quantità totale fornita per ciascun colore di prodotto**
SELECT p.colore, SUM(fp.Qta) AS QuantitaTotale
FROM prodotti p
JOIN fornitori_prodotti fp ON p.codice_prodotto = fp.codice_prodotto
GROUP BY p.colore;

-- ------------------------------------

-- **7. Contare il numero di prodotti forniti da ogni fornitore**
SELECT f.nome_fornitore, COUNT(DISTINCT fp.codice_prodotto) AS NumeroProdotti
FROM fornitori f
JOIN fornitori_prodotti fp ON f.codice_fornitore = fp.codice_fornitore
GROUP BY f.nome_fornitore;

-- ------------------------------------

-- **8. Calcolare il numero medio di soci dei fornitori per città**
SELECT f.citta, AVG(f.numero_soci) AS MediaSoci
FROM fornitori f
GROUP BY f.citta;

-- ------------------------------------

-- **9. Trovare i prodotti con una quantità totale fornita superiore a 100**
SELECT p.nome_prodotto, SUM(fp.Qta) AS QuantitaTotale
FROM prodotti p
JOIN fornitori_prodotti fp ON p.codice_prodotto = fp.codice_prodotto
GROUP BY p.nome_prodotto
HAVING QuantitaTotale > 100;

-- ------------------------------------

-- **10. Determinare il numero di prodotti forniti e la quantità totale fornita da fornitori con più di 5 soci**
SELECT f.nome_fornitore, COUNT(DISTINCT fp.codice_prodotto) AS NumeroProdotti, SUM(fp.Qta) AS QuantitaTotale
FROM fornitori f
JOIN fornitori_prodotti fp ON f.codice_fornitore = fp.codice_fornitore
WHERE f.numero_soci > 5
GROUP BY f.nome_fornitore;


-- ------------------------------------

-- # sperimentare le principali funzioni di testo in SQL



-- ------------------------------------

-- **Funzioni Stringa**

-- ------------------------------------
-- **1. Convertire il testo in maiuscolo**
SELECT UPPER(nome) AS NomeMaiuscolo FROM clienti;

-- ------------------------------------
-- **2. Convertire il testo in minuscolo**
SELECT LOWER(cognome) AS CognomeMinuscolo FROM clienti;

-- ------------------------------------
-- **3. Concatenare stringhe**
SELECT CONCAT(nome, ' ', cognome) AS NomeCompleto FROM clienti;

-- ------------------------------------
-- **4. Estrarre una parte di testo**
SELECT LEFT(nome, 3) AS PrimiTreCaratteri FROM clienti;

-- ------------------------------------
-- **5. Calcolare la lunghezza di una stringa**
SELECT nome, LENGTH(nome) AS LunghezzaNome FROM clienti;

-- ------------------------------------
-- **6. Rimuovere spazi iniziali e finali**
SELECT TRIM(nome) AS NomePulito FROM clienti;

-- ------------------------------------
-- **7. Sostituire una parte di testo**
SELECT REPLACE(colore, 'Rosso', 'Red') AS ColoreModificato FROM prodotti;

-- ------------------------------------
-- **8. Cercare una sottostringa**
SELECT * FROM clienti WHERE nome LIKE 'A%';

-- ------------------------------------
-- **9. Inserire testo con zeri a sinistra**
SELECT LPAD(id_ordine, 5, '0') AS ID_Ordine_Formattato FROM ordini;

-- ------------------------------------











-- **Funzioni Numeriche**

-- ------------------------------------
-- **1. Arrotondare un numero**
SELECT nome_prodotto, ROUND(PrezzoUnitario, 2) AS PrezzoArrotondato FROM vendite;

-- ------------------------------------
-- **2. Trovare il valore assoluto**
SELECT nome_prodotto, ABS(Qta - 50) AS DifferenzaAssoluta FROM fornitori_prodotti;

-- ------------------------------------
-- **3. Calcolare la potenza**
SELECT nome_prodotto, POW(Qta, 2) AS QuantitaAlQuadrato FROM fornitori_prodotti;

-- ------------------------------------
-- **4. Calcolare la radice quadrata**
SELECT nome_prodotto, SQRT(PrezzoUnitario) AS RadicePrezzo FROM vendite;

-- ------------------------------------
-- **5. Generare numeri casuali**
SELECT nome, RAND() AS NumeroCasuale FROM clienti;

-- ------------------------------------
-- **6. Trovare il valore massimo e minimo**
SELECT MAX(PrezzoUnitario) AS PrezzoMassimo, MIN(PrezzoUnitario) AS PrezzoMinimo FROM vendite;

-- ------------------------------------
-- **7. Arrotondare per eccesso e per difetto**
SELECT nome_prodotto, CEIL(prezzo) AS PrezzoArrotondatoSu, FLOOR(PrezzoUnitario) AS PrezzoArrotondatoGiu FROM vendite;

-- ------------------------------------
-- **8. Calcolare il resto della divisione (MOD)**
SELECT nome_prodotto, MOD(Qta, 3) AS RestoDivisione FROM fornitori_prodotti;

-- ------------------------------------
-- **9. Calcolare una media**
SELECT AVG(PrezzoUnitario) AS MediaPrezzi FROM vendite;

-- ------------------------------------

















-- **Funzioni Data, Ora, Datetime**

-- ------------------------------------
-- **1. Estrarre la data corrente**
SELECT codice_ordine, CURDATE() AS DataCorrente FROM ordini;

-- ------------------------------------
-- **2. Calcolare l'età di un cliente**
SELECT nome, cognome, TIMESTAMPDIFF(YEAR, data_nascita, CURDATE()) AS Eta FROM clienti;

-- ------------------------------------
-- **3. Estrarre anno, mese e giorno**
SELECT codice_ordine, YEAR(data_ordine) AS Anno, MONTH(data_ordine) AS Mese, DAY(data_ordine) AS Giorno FROM ordini;

-- ------------------------------------
-- **4. Calcolare la differenza tra date**
SELECT codice_ordine, DATEDIFF(CURDATE(), data_ordine) AS GiorniTrascorsi FROM ordini;

-- ------------------------------------
-- **5. Aggiungere giorni a una data**
SELECT codice_ordine, DATE_ADD(data_ordine, INTERVAL 10 DAY) AS NuovaData FROM ordini;

-- ------------------------------------
-- **6. Sottrarre mesi da una data**
SELECT codice_ordine, DATE_SUB(data_ordine, INTERVAL 3 MONTH) AS DataModificata FROM ordini;

-- ------------------------------------
-- **7. Estrarre il giorno della settimana**
SELECT codice_ordine, WEEKDAY(data_ordine) + 1 AS GiornoSettimana FROM ordini;

-- ------------------------------------
-- **8. Formattare una data**
SELECT codice_ordine, DATE_FORMAT(data_ordine, '%d/%m/%Y') AS DataFormattata FROM ordini;

-- ------------------------------------
-- **9. Calcolare il numero di mesi tra due date**
SELECT codice_ordine, TIMESTAMPDIFF(MONTH, data_ordine, CURDATE()) AS MesiTrascorsi FROM ordini;