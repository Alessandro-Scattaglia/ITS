const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


const port = process.env.PORT || 3000
//creiamo l’istanza del server
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_api_rest'
});

app.use(cors());
app.use(bodyParser.json());
// Creare un primo endpoint per la risorsa (ad esempio, seleziona tutti gli utenti)
app.get('/api/v1/users', (req, res) => {
    db.query('SELECT * FROM db_api_rest.users', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Errore nel database');
        } else {
            res.json(results);
        }
    });
})
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
