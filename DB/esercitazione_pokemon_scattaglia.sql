use esercitazioni;

-- 1. Recuperare tutti i Pokémon con il tipo principale "Fire"
SELECT * FROM pokemon WHERE `Type 1` = 'Fire';

-- 2. Selezionare il nome e il tipo principale dei Pokémon con una velocità superiore a 100
SELECT `Name`, `Type 1` FROM pokemon WHERE `Speed` > 100;

-- 3. Contare quanti Pokémon sono considerati "Legendary"
SELECT COUNT(*) FROM pokemon WHERE `Legendary` = 'True';

-- 4. Recuperare i Pokémon con attacco superiore a 120 e difesa superiore a 100
SELECT * FROM pokemon WHERE `Attack` > 120 AND `Defense` > 100;

-- 5. Ottenere tutti i Pokémon della prima generazione
SELECT * FROM pokemon WHERE `Generation` = 1;

-- 6. Mostrare i nomi e il totale di statistiche dei Pokémon ordinati per valore totale in ordine decrescente
SELECT `Name`, `Total` FROM pokemon ORDER BY `Total` DESC;

-- 7. Mostrare i Pokémon che hanno entrambi i tipi "Grass" e "Poison"
SELECT * FROM pokemon WHERE `Type 1` = 'Grass' AND `Type 2` = 'Poison';

-- 8. Recuperare i Pokémon con punti salute (HP) inferiori a 50, ordinati per HP in ordine crescente
SELECT * FROM pokemon WHERE `HP` < 50 ORDER BY `HP` ASC;

-- 9. Trovare i Pokémon con il valore totale pari o superiore a 500, ordinati per tipo principale e poi per nome
SELECT * FROM pokemon WHERE `Total` >= 500 ORDER BY `Type 1`, `Name`;

-- 10. Ottenere tutti i Pokémon di tipo principale "Water" con una velocità superiore a 80
SELECT * FROM pokemon WHERE `Type 1` = 'Water' AND `Speed` > 80;

-- 11. Visualizzare i tre Pokémon con il valore di difesa più alto
SELECT * FROM pokemon ORDER BY `Defense` DESC LIMIT 3;

-- 12. Recuperare il nome e il tipo principale dei Pokémon che hanno un attacco maggiore della loro difesa
SELECT `Name`, `Type 1` FROM pokemon WHERE `Attack` > `Defense`;

-- 13. Ottenere i Pokémon di tipo "Dragon" che appartengono alla terza generazione
SELECT * FROM pokemon WHERE (`Type 1` = 'Dragon' OR `Type 2` = 'Dragon') AND `Generation` = 3;

-- 14. Visualizzare i Pokémon non leggendari che hanno una velocità massima tra 80 e 100
SELECT * FROM pokemon WHERE `Legendary` = 'False' AND `Speed` BETWEEN 80 AND 100;

-- 15. Trovare i Pokémon con il minor valore totale tra quelli della prima generazione con entrambi i tipi definiti
SELECT * FROM pokemon WHERE `Generation` = 1 AND `Type 2` IS NOT NULL ORDER BY `Total` ASC LIMIT 1;

-- 16. Trovare i 5 Pokémon con il miglior rapporto Attacco/Difesa
SELECT *, (`Attack` / `Defense`) AS `Atk_Def_Ratio` FROM pokemon ORDER BY `Atk_Def_Ratio` DESC LIMIT 5;

-- 17. Ottenere i Pokémon con il valore totale più alto per ogni generazione
SELECT * FROM pokemon p1 WHERE `Total` = (SELECT MAX(`Total`) FROM pokemon p2 WHERE p2.`Generation` = p1.`Generation`);

-- 18. Calcolare la media di attacco per ogni tipo principale
SELECT `Type 1`, AVG(`Attack`) AS `Avg_Attack` FROM pokemon GROUP BY `Type 1`;

-- 19. Contare i Pokémon per ogni generazione
SELECT `Generation`, COUNT(*) AS `Count` FROM pokemon GROUP BY `Generation`;

-- 20. Contare quanti Pokémon ci sono per ogni combinazione di tipo principale e secondario
SELECT `Type 1`, `Type 2`, COUNT(*) AS `Count` FROM pokemon GROUP BY `Type 1`, `Type 2`;

-- 21. Calcolare il valore medio di HP, Attacco e Difesa per Pokémon leggendari e non leggendari
SELECT `Legendary`, AVG(`HP`) AS `Avg_HP`, AVG(`Attack`) AS `Avg_Attack`, AVG(`Defense`) AS `Avg_Defense` FROM pokemon GROUP BY `Legendary`;

-- 22. Creare una tabella virtuale con tutti i possibili tipi distinti e il numero di Pokémon per ciascuna combinazione
SELECT `Type 1`, `Type 2`, COUNT(*) AS `Count` FROM pokemon GROUP BY `Type 1`, `Type 2`;

-- 23. Trovare i Pokémon leggendari con il massimo valore di ogni statistica
SELECT * FROM pokemon WHERE `Legendary` = 'True' AND (`HP` = (SELECT MAX(`HP`) FROM pokemon WHERE `Legendary` = 'True') OR `Attack` = (SELECT MAX(`Attack`) FROM pokemon WHERE `Legendary` = 'True') OR `Defense` = (SELECT MAX(`Defense`) FROM pokemon WHERE `Legendary` = 'True') OR `Sp. Atk` = (SELECT MAX(`Sp. Atk`) FROM pokemon WHERE `Legendary` = 'True') OR `Sp. Def` = (SELECT MAX(`Sp. Def`) FROM pokemon WHERE `Legendary` = 'True') OR `Speed` = (SELECT MAX(`Speed`) FROM pokemon WHERE `Legendary` = 'True'));

-- 24. Creare un elenco di Pokémon raggruppati per generazione, calcolando il totale complessivo delle statistiche per ciascuna generazione
SELECT `Generation`, SUM(`Total`) AS `Total_Stats` FROM pokemon GROUP BY `Generation`;

-- 25. Contare il numero di Pokémon leggendari e non leggendari per ciascun tipo principale
SELECT `Type 1`, `Legendary`, COUNT(*) AS `Count` FROM pokemon GROUP BY `Type 1`, `Legendary`;

-- 26. Creare una classifica per tipo principale basata sulla media di attacco dei Pokémon di quel tipo
SELECT `Type 1`, AVG(`Attack`) AS `Avg_Attack` FROM pokemon GROUP BY `Type 1` ORDER BY `Avg_Attack` DESC;

-- 27. Creare un elenco con il numero di Pokémon per ciascuna combinazione di generazione e stato leggendario, ordinato per generazione e numero di Pokémon
SELECT `Generation`, `Legendary`, COUNT(*) AS `Count` FROM pokemon GROUP BY `Generation`, `Legendary` ORDER BY `Generation`, `Count` DESC;

-- 28. Elencare tutti i Pokémon con il valore totale massimo per ogni combinazione di tipo principale e secondario
SELECT * FROM pokemon p1 WHERE `Total` = (SELECT MAX(`Total`) FROM pokemon p2 WHERE p2.`Type 1` = p1.`Type 1` AND p2.`Type 2` = p1.`Type 2`);

-- 29. Mostrare i Pokémon con velocità superiore alla media della tabella
SELECT * FROM pokemon WHERE `Speed` > (SELECT AVG(`Speed`) FROM pokemon);

-- 30. Elencare tutti i Pokémon con una velocità maggiore della media per il loro tipo principale
SELECT * FROM pokemon p1 WHERE `Speed` > (SELECT AVG(`Speed`) FROM pokemon p2 WHERE p2.`Type 1` = p1.`Type 1`);
