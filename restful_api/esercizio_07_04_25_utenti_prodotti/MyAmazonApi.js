const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


const port = process.env.PORT || 4000
//creiamo l’istanza del server
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_myamazon'
});

app.use(cors());
app.use(bodyParser.json());
// Creare un primo endpoint per la risorsa (ad esempio, seleziona tutti gli utenti)
app.get('/myamazon/api/v1/prodotti', (req, res) => {
    db.query('SELECT * FROM t_prodotti', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Errore nel database');
        } else {
            res.json(results);
        }
    });
});



app.get('/myamazon/api/v1/utenti', (req, res) => {
    const sql = 'SELECT * FROM t_utenti';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Errore nel database:', err);
            res.status(500).send('Errore nel database');
        } else {
            const utentiSenzaPassword = results.map(({ password, ...rest }) => rest);
            res.json(utentiSenzaPassword);
        }
    });
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
