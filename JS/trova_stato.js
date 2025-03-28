const statiDelMondo = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua e Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaigian", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Bielorussia", "Belgio", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia ed Erzegovina", "Botswana", "Brasile", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Capo Verde", "Cambogia",
  "Camerun", "Canada", "Repubblica Centrafricana", "Ciad", "Cile", "Cina", "Colombia", "Comore", "Congo (Repubblica del)", "Congo (Repubblica Democratica del)",
  "Costa Rica", "Croazia", "Cuba", "Cipro", "Cechia", "Danimarca", "Gibuti", "Dominica", "Repubblica Dominicana", "Ecuador",
  "Egitto", "El Salvador", "Guinea Equatoriale", "Eritrea", "Estonia", "Eswatini", "Etiopia", "Figi", "Finlandia", "Francia",
  "Gabon", "Gambia", "Georgia", "Germania", "Ghana", "Grecia", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Ungheria", "Islanda", "India", "Indonesia", "Iran", "Iraq", "Irlanda",
  "Israele", "Italia", "Giamaica", "Giappone", "Giordania", "Kazakistan", "Kenya", "Kiribati", "Kosovo", "Corea del Nord", "Corea del Sud",
  "Kuwait", "Kirghizistan", "Laos", "Lettonia", "Libano", "Lesotho", "Liberia", "Libia", "Liechtenstein", "Lituania",
  "Lussemburgo", "Madagascar", "Malawi", "Malesia", "Maldive", "Mali", "Malta", "Isole Marshall", "Mauritania", "Mauritius",
  "Messico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Marocco", "Mozambico", "Birmania (Myanmar)", "Namibia",
  "Nauru", "Nepal", "Paesi Bassi", "Nuova Zelanda", "Nicaragua", "Niger", "Nigeria", "Macedonia del Nord", "Norvegia", "Oman",
  "Pakistan", "Palau", "Palestina", "Panama", "Papua Nuova Guinea", "Paraguay", "Perù", "Filippine", "Polonia", "Portogallo", "Qatar",
  "Romania", "Russia", "Ruanda", "Saint Kitts e Nevis", "Santa Lucia", "Saint Vincent e Grenadine", "Samoa", "San Marino", "São Tomé e Príncipe", "Arabia Saudita",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovacchia", "Slovenia", "Isole Salomone", "Somalia", "Sudafrica",
  "Sud Sudan", "Spagna", "Sri Lanka", "Sudan", "Suriname", "Svezia", "Svizzera", "Siria", "Tagikistan", "Tanzania",
  "Thailandia", "Timor Est", "Togo", "Tonga", "Trinidad e Tobago", "Tunisia", "Turchia", "Turkmenistan", "Tuvalu", "Uganda",
  "Ucraina", "Emirati Arabi Uniti", "Regno Unito", "Stati Uniti", "Uruguay", "Uzbekistan", "Vanuatu", "Città del Vaticano", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe"
];

function trovaStato(lettera, n_lettere) {
  for (let i = 0; i < statiDelMondo.length; i++) {
    let stato_minuscolo = statiDelMondo[i].toLowerCase();
    let match = true;  // Variabile per controllare se tutte le lettere corrispondono

    for (let j = 0; j < n_lettere; j++) {
      if (lettera[j] !== stato_minuscolo[j]) {
        match = false;  // Se una lettera non corrisponde, non è un match
        break;          // Uscita immediata dal ciclo
      }
    }

    if (match) {
      console.log(statiDelMondo[i]);
    }
  }
}


trovaStato("ita", "3"); 