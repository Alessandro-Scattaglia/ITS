let array_citta = ["Torino", "Milano", "Roma", "Napoli", "Firenze"];

function trovaCitta(n_lettere) {
    for (let i = 0; i < array_citta.length; i++) {

        if (array_citta[i].length <= n_lettere) {
            console.log(array_citta[i]);
        }
    }

}

trovaCitta("6");