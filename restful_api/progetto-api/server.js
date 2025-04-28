const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// dichiariamo su che porta risponderÃ  il server web
const port = process.env.PORT || 3000
//creiamo lâ€™istanza del server
const app = express();

// Connessione al database MySql
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_api_rest'
   });

   // Middleware, per ogni richiesta verrÃ  abilitato CORS e verrÃ  parsificato il body JSON
app.use(cors());
app.use(bodyParser.json());
// Creare un primo endpoint per la risorsa (ad esempio, seleziona tutti gli utenti)
// searchAll
app.get('/api/v1/users', (req, res) => {
 db.query('SELECT * FROM t_utente', (err, results) => {
 if (err) {
 console.error(err);
 res.status(500).send('Errore nel database');
 } else {
 res.json(results);
 }
 });
});


// Creare un secondo endpoint per la risorsa con id  (ad esempio, /api/v1/users/1)
// searchById o read
app.get('/api/v1/users/:id', (req, res) => {
    const id= req.params.id;
    db.query('SELECT * FROM t_utente WHERE id =?',[id], (err, results) => {
    if (err) {
    console.error(err);
    res.status(500).send('Errore nel database');
    } else {
    res.json(results);
    }
    });
   });

// Creiamo  un  endpoint per creare una nuova risorsa user 
//IMPORTANTE: oltre all'URI devo passare un oggetto JSON che sarÃ  quello inserito sul database
app.post('/api/v1/users/', (req, res) => {
    // diciamo come vogliamo che il dato proveniente dal client sia strutturato
    // se il dato non sarÃ  coerente avremo probabilmente dei valori null
    const {id, nome, cognome,data_di_nascita} = req.body;
    // creiamo un nuovo oggetto USER e gli diamo un formato
    const newUser = {id, nome, cognome,data_di_nascita};

    db.query('INSERT INTO t_utente SET ?',newUser, (err, results) => {
    if (err) { 
    console.error(err);
    res.status(500).send('Errore nel database');
    } else {
    // la post restituisce l'oggetto con l'id inserito su database
    res.status(201).json({id:results.insertId,...newUser});

    }
    });
   });

// Creiamo  un  endpoint per creare la modifica alla risorsa user 
//IMPORTANTE: oltre all'URI devo passare un oggetto JSON che sarÃ  quello modificato sul database
   app.put('/api/v1/users/:id', (req, res) => {
    // leggo il parametro, l'id dell'oggetto da modificare
    const id= req.params.id;
    // leggo il dato inviato nel body della request
    // se il dato non sarÃ  coerente avremo probabilmente dei valori null
    const { nome, cognome,data_di_nascita} = req.body;
    // creiamo un nuovo oggetto USER e gli diamo un formato
    const updatedUser = { nome, cognome,data_di_nascita};

    db.query('UPDATE t_utente SET ? WHERE id=?',[updatedUser,id], (err, results) => {
    if (err) { 
    console.error(err);
    res.status(500).send('Errore nel database');
    } 
    
    if(results.affectedRows ==0){
        res.status(404).json({message:'Prodotto non trovato'});
    }
    
    res.json({id, ...updatedUser});
    // la post restituisce l'oggetto con l'id inserito su database
     
    });
   });




   // Creare un terzo endpoint per cancellare la risorsa con id  (ad esempio, /api/v1/users/1)
app.delete('/api/v1/users/:id', (req, res) => {
    const id= req.params.id;
    db.query('DELETE  FROM t_utente WHERE id =?',[id], (err, results) => {
    if (err) {
    console.error(err);
    res.status(500).send('Errore nel database');
    } else {
    res.json(results);
    }
    });
   });
   


// Avviare il server
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
   });
   