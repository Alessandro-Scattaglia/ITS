const express = require("express");
// se uso un database mysql versione 8 o successiva
//const mysql2 = require('mysql2');
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

// dichiariamo su che porta rispondera'  il server web
const port = process.env.PORT || 3001;
//creiamo l istanza del server Express
const app = express();

// Connessione al database MySql
/*const db = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'db_api_rest'
   });*/

// Connessione al database SQLite
const db = new sqlite3.Database(
  "./database/chinook.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error("Errore nella connessione al db SqlLite :", err.message);
    } else {
      console.log("Connessione al db SqlLite avvenuta con successo");
    }
  }
);

// Middleware, per ogni richiesta verrÃ  abilitato CORS e verrÃ  parsificato il body JSON
app.use(cors());
app.use(bodyParser.json());

// Creare un primo endpoint per la risorsa (ad esempio, seleziona tutti gli utenti)
// searchAll
// invoco con localehost:3000/api/v1/users
app.get("/api/v1/artists", (req, res) => {
  // questo per mysql
  //db.query('SELECT * FROM t_utente', (err, results) => {
  db.all("SELECT * FROM artist",  (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Errore nel database");
    } else {
      res.json(results);
    }
  });
});

// Creare un secondo endpoint per la risorsa con id  (ad esempio, /api/v1/users/1)
// searchById o read
// invoco con localehost:3000/api/v1/users/1
app.get("/api/v1/artists/:ArtistId", (req, res) => {
  const ArtistId = req.params.ArtistId;
  db.get("SELECT * FROM artist WHERE ArtistId =?", [ArtistId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Errore nel database");
    } else if (!results) {
      res.status(404).json({ message: "artista non trovato" });
    } else {
      res.json(results);
    }
  });
});


// Creiamo  un  endpoint per creare una nuova risorsa user
//IMPORTANTE: oltre all'URI devo passare un oggetto JSON che sarÃ  quello inserito sul database
app.post("/api/v1/artists/", (req, res) => {
  const {  Name } = req.body;
  const name = {  Name };

  db.run("INSERT INTO artist ( Name) VALUES (?)", [name], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Errore nel database");
    } else {
      // la post restituisce l'oggetto con l'id inserito su database
      res.status(201).json({ Name: Name });
    }
  });
});
/*
// Creiamo  un  endpoint per creare la modifica alla risorsa user
//IMPORTANTE: oltre all'URI devo passare un oggetto JSON che sarÃ  quello modificato sul database
app.put("/api/v1/users/:id", (req, res) => {
  // leggo il parametro, l'id dell'oggetto da modificare
  const id = req.params.id;
  // leggo il dato inviato nel body della request
  // se il dato non sarÃ  coerente avremo probabilmente dei valori null
  const { nome, cognome, data_di_nascita } = req.body;
  // creiamo un nuovo oggetto USER e gli diamo un formato
  const updatedUser = { nome, cognome, data_di_nascita };

  db.query(
    "UPDATE t_utente SET ? WHERE id=?",
    [updatedUser, id],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Errore nel database");
      }

      if (results.affectedRows == 0) {
        res.status(404).json({ message: "Prodotto non trovato" });
      }

      res.json({ id, ...updatedUser });
      // la post restituisce l'oggetto con l'id inserito su database
    }
  );
});

// Creare un terzo endpoint per cancellare la risorsa con id  (ad esempio, /api/v1/users/1)
app.delete("/api/v1/users/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE  FROM t_utente WHERE id =?", [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Errore nel database");
    } else {
      res.json(results);
    }
  });
});
*/

// Avviare il server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
