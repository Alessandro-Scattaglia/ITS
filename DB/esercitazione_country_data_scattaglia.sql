-- 1. Selezionare tutti i paesi e i loro dati
select * from `country-data`;

-- 2. Selezionare solo il nome dei paesi
select country from `country-data`;
-- 3. Selezionare i paesi con un'aspettativa di vita superiore a 70 anni
select * from `country-data` where `life_expec` > 70;

-- 4. Selezionare i paesi con un PIL pro capite maggiore di 10.000
select * from `country-data` where `gdpp` > 10000;

-- 5. Trovare i paesi con un tasso di mortalità infantile inferiore a 20
select * from `country-data` where `child_mort` <20;

-- 6. Ordinare i paesi per reddito pro capite in ordine decrescente
select * from `country-data` order by `income` desc;

-- 7. Ordinare i paesi per aspettativa di vita in ordine crescente
select * from `country-data` order by `life_expec` asc;

-- 8. Selezionare i paesi con un tasso di fertilità superiore a 5
select * from `country-data` where `total_fer` > 5;

-- 9. Trovare i paesi con una spesa sanitaria superiore al 10% del PIL
select * from `country-data` where `health` > 10;

-- 10. Selezionare i paesi con un'inflazione negativa (deflazione)
select * from `country-data` where `inflation` <0;

-- 11. Trovare i paesi con esportazioni che superano il 50% del PIL
select * from `country-data` where `exports` > 50;

-- 12. Trovare i paesi con importazioni maggiori delle esportazioni
select * from `country-data` where `imports` > `exports`;

-- 13. Selezionare i paesi con un PIL pro capite compreso tra 5.000 e 10.000
select * from `country-data` where `gdpp` > 5000 and `gdpp` < 10000 order by `gdpp` asc;

-- 14. Trovare i paesi con un tasso di fertilità inferiore a 2 e un'aspettativa di vita superiore a 75 anni
select * from `country-data` where `total_fer` < 2 and `life_expec` > 75;

-- 15. Selezionare i paesi con un tasso di mortalità infantile maggiore di 100
select * from `country-data` where `child_mort` > 100;

-- 16. Trovare i paesi con reddito pro capite maggiore di 15.000 e inflazione inferiore a 5%
select * from `country-data` where `income` > 15000 and `inflation` <5;

-- 17. Ordinare i paesi per spesa sanitaria in ordine decrescente
select * from `country-data` order by `healt` desc;

-- 18. Selezionare i paesi con un PIL pro capite inferiore a 2.000
select * from `country-data` where `gdpp` < 2000;
-- 19. Trovare i paesi con esportazioni e importazioni combinate superiori al 90% del PIL
SELECT country, (exports + imports) / gdpp AS trade_ratio
FROM country_data
WHERE (exports + imports) / gdpp > 0.9;

-- 20. Trovare i 3 paesi con il più alto rapporto tra spesa sanitaria e reddito pro capite
SELECT country, health / income AS health_ratio
FROM `country-data`
ORDER BY health_ratio DESC
LIMIT 3;

-- 21. Trovare il rapporto tra fertilità totale e aspettativa di vita per ogni paese e ordinarlo in ordine crescente
SELECT country, total_fer / life_expec AS fertility_life_ratio
FROM `country-data`
ORDER BY fertility_life_ratio ASC;

-- 22. Calcolare la media del tasso di fertilità per i paesi con un’aspettativa di vita superiore a 70 anni
SELECT AVG(total_fertility) AS avg_fertility
FROM `country-data`
WHERE life_expectancy > 70;

-- 23. Trovare i paesi con il massimo e il minimo reddito pro capite
SELECT country, income
FROM `country-data`
WHERE income = (SELECT MAX(income) FROM `country-data`)
   OR income = (SELECT MIN(income) FROM `country-data`);

-- 24. Contare il numero di paesi con inflazione negativa
SELECT COUNT(*) AS num_countries
FROM `country-data`
WHERE inflation < 0;

-- 25. Trovare i 5 paesi con il PIL pro capite (gdpp) più alto
SELECT country, gdpp
FROM `country-data`
ORDER BY gdpp DESC
LIMIT 5;

-- 26. Calcolare la somma delle esportazioni e delle importazioni per ciascun paese
SELECT country, (exports + imports) AS total_trade
FROM `country-data`;

-- 27. Trovare i paesi dove il totale delle esportazioni è almeno il doppio delle importazioni
SELECT country
FROM `country-data`
WHERE exports >= 2 * imports;

-- 28. Calcolare il PIL pro capite medio (gdpp) per ogni gruppo di aspettativa di vita (fasce di 10 anni)
SELECT FLOOR(life_expec / 10) * 10 AS life_expectancy_group, AVG(gdpp) AS avg_gdpp
FROM `country-data`
GROUP BY life_expectancy_group
ORDER BY life_expectancy_group;

-- 29. Trovare i paesi con un tasso di mortalità infantile superiore alla media globale
SELECT country, child_mort
FROM `country-data`
WHERE child_mort > (SELECT AVG(child_mort) FROM country_data);

-- 30. Trovare i paesi con il massimo tasso di mortalità infantile in ogni fascia di reddito
SELECT country, income, child_mort
FROM `country-data` AS c1
WHERE child_mort = (
    SELECT MAX(child_mort)
    FROM `country-data` AS c2
    WHERE c1.income = c2.income
);
