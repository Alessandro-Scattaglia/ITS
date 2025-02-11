use libreria;
-- 1. Elenco di tutti i libri
select * from libro;
-- 2. Elenco di tutti gli autori
select * from autore;
-- 3. Elenco di tutti gli editori
select * from editore;
-- 4. Selezionare il titolo e il prezzo dei libri ordinati per prezzo crescente
select titolo,prezzo from libro order by prezzo asc;
-- 5. Selezionare i libri con un prezzo superiore a 15€
select * from libro where prezzo>15;
-- 6. Contare il numero totale di libri nel database
select count(*) from libro;
-- 7. Ottenere la media delle pagine dei libri
select avg(pagine) from libro; 
-- 8. Trovare il libro più costoso
select max(prezzo) from libro where prezzo; 
-- 9. Trovare il libro meno costoso
select min(prezzo) from libro where prezzo; 
-- 10. Contare il numero di autori per nazione
select nazionalita,count(*) as num_autori from autore group by nazionalita;
-- 11. Elenco dei libri con più di 500 pagine
select titolo,pagine from libro where pagine>500;
-- 12. Elenco degli autori italiani
select * from autore where nazionalita = "it";
-- 13. Trovare tutti i libri pubblicati da un determinato editore (es. Mondadori)
select titolo,nome from libro as t1 JOIN editore as t2 ON t1.editore_id = t2.id where t2.nome = "Mondadori";
-- 14. Contare il numero di libri per ogni editore
select nome,count(*) as numero_lib from libro as t1 JOIN editore as t2 ON t1.editore_id = t2.id group by nome;
-- 15. Trovare i libri con più di 400 pagine pubblicati da un determinato editore
select titolo,nome,pagine from libro as t1 JOIN editore as t2 ON t1.editore_id = t2.id where t2.nome = "Mondadori" and t1.pagine>400;
-- 16. Trovare il numero di autori che hanno scritto almeno un libro
SELECT a.nome, COUNT(al.libro_id) AS numero_libri FROM autore a JOIN autore_libro al ON a.id = al.autore_id GROUP BY a.id HAVING numero_libri >= 1;
-- 17. Trovare gli autori che hanno scritto più di un libro
SELECT a.nome, COUNT(al.libro_id) AS numero_libri FROM autore a JOIN autore_libro al ON a.id = al.autore_id GROUP BY a.id HAVING numero_libri > 1;
-- 18. Trovare gli autori che non hanno scritto alcun libro
SELECT a.nome, COUNT(al.libro_id) AS numero_libri FROM autore a JOIN autore_libro al ON a.id = al.autore_id GROUP BY a.id HAVING numero_libri =0;
-- 19. Selezionare i libri con più di un autore

-- 20. Contare il numero di libri per autore
SELECT a.nome, COUNT(al.libro_id) AS numero_libri FROM autore a JOIN autore_libro al ON a.id = al.autore_id GROUP BY a.id;
-- 21. Ottenere la somma totale del prezzo di tutti i libri
select sum(prezzo) as somma from libro;
-- 22. Contare il numero di libri con un prezzo compreso tra 10 e 20 euro
select count(titolo) from libro where prezzo > 10 and prezzo < 20;
-- 23. Trovare il prezzo medio dei libri per editore
	select avg(prezzo) from libro l join editore e on l.editore_id = id group by e.id;
-- 24. Trovare gli autori con più libri pubblicati da editori diversi
SELECT a.nome, COUNT(DISTINCT l.editore_id) AS num_editori FROM autore a JOIN autore_libro al ON a.id = al.autore_id JOIN libro l ON al.libro_id = l.id GROUP BY a.id ORDER BY num_editori DESC;
-- 25. Trovare i libri con il prezzo più alto per ogni editore
SELECT l.titolo, e.nome AS editore, l.prezzo FROM libro l JOIN editore e ON l.editore_id = e.id WHERE l.prezzo = (SELECT MAX(prezzo) FROM libro WHERE editore_id = l.editore_id);
-- 26. Ottenere i 5 libri più costosi
SELECT titolo, prezzo FROM libro ORDER BY prezzo DESC LIMIT 5;
-- 27. Contare il numero di libri pubblicati da ciascun editore con più di 3 libri
SELECT e.nome AS editore, COUNT(l.id) AS num_libri FROM editore e JOIN libro l ON e.id = l.editore_id GROUP BY e.id HAVING num_libri > 3;
-- 28. Selezionare il nome degli editori che hanno pubblicato almeno un libro con più di 500 pagine
SELECT DISTINCT e.nome AS editore FROM editore e JOIN libro l ON e.id = l.editore_id WHERE l.pagine > 500;
-- 29. Trovare gli autori che hanno scritto libri pubblicati da più di un editore
SELECT a.nome, COUNT(DISTINCT l.editore_id) AS num_editori FROM autore a JOIN autore_libro al ON a.id = al.autore_id JOIN libro l ON al.libro_id = l.id GROUP BY a.id HAVING num_editori > 1;
-- 30. Contare il numero di libri per ogni autore con più di 1 libro
SELECT a.nome, COUNT(al.libro_id) AS num_libri FROM autore a JOIN autore_libro al ON a.id = al.autore_id GROUP BY a.id HAVING num_libri > 1;
