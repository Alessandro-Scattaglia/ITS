import { Component } from '@angular/core';

@Component({
  selector: 'app-atleta-list',
  templateUrl: './atleta-list.component.html',
  styleUrls: ['./atleta-list.component.css']
})
export class AtletaListComponent {

  listaAtleti = [
    { Id: 1, nome: "Gianmarco", cognome: "Tamberi", specialita: "salto in alto", nazione: "Italia", immagine: "assets/atleti/tamberi.webp" },
    { Id: 2, nome: "Marcell", cognome: "Jacobs", specialita: "velocista", nazione: "Italia", immagine: "assets/atleti/jacobs.jpg" },
    { Id: 3, nome: "Novak", cognome: "Djokovic", specialita: "tennis", nazione: "Serbia", immagine: "assets/atleti/djokovic.jpg" },
    { Id: 4, nome: "Federica", cognome: "Brignone", specialita: "sci alpino", nazione: "Italia", immagine: "assets/atleti/brignone.jpg" },
    { Id: 5, nome: "Lewis", cognome: "Hamilton", specialita: "Formula 1", nazione: "Regno Unito", immagine: "assets/atleti/hamilton.jpg" },
    { Id: 6, nome: "Sofia", cognome: "Goggia", specialita: "sci alpino", nazione: "Italia", immagine: "assets/atleti/goggia.jpg" },
    { Id: 7, nome: "Valentina", cognome: "Vezzali", specialita: "scherma", nazione: "Italia" , immagine: "assets/atleti/vezzali.jpg"},
    { Id: 8, nome: "Caeleb", cognome: "Dressel", specialita: "nuoto", nazione: "USA" , immagine: "assets/atleti/dressel.jpg"},
    { Id: 9, nome: "Simone", cognome: "Biles", specialita: "ginnastica artistica", nazione: "USA", immagine: "assets/atleti/biles.jpg" },
    { Id: 10, nome: "Filippo", cognome: "Ganna", specialita: "ciclismo su pista", nazione: "Italia" , immagine: "assets/atleti/ganna.jpg" },
    { Id: 11, nome: "Iga", cognome: "Swiatek", specialita: "tennis", nazione: "Polonia" , immagine: "assets/atleti/swiatek.jpg"},
    { Id: 12, nome: "Bebe", cognome: "Vio", specialita: "scherma paralimpica", nazione: "Italia" , immagine: "assets/atleti/vio.jpg"},
    { Id: 13, nome: "Allyson", cognome: "Felix", specialita: "atletica leggera", nazione: "USA" , immagine: "assets/atleti/felix.jpg"},
    { Id: 14, nome: "Alberto", cognome: "Tomba", specialita: "sci alpino", nazione: "Italia" , immagine: "assets/atleti/tomba.jpg"},
    { Id: 15, nome: "Usain", cognome: "Bolt", specialita: "velocista", nazione: "Giamaica" , immagine: "assets/atleti/bolt.jpg"},
    { Id: 16, nome: "Cristiano", cognome: "Ronaldo", specialita: "calcio", nazione: "Portogallo" , immagine: "assets/atleti/ronaldo.jpg"},
    { Id: 17, nome: "Roger", cognome: "Federer", specialita: "tennis", nazione: "Svizzera" , immagine: "assets/atleti/federer.jpg"},
    { Id: 18, nome: "Edoardo", cognome: "Mangiarotti", specialita: "scherma", nazione: "Italia" , immagine: "assets/atleti/mangiarotti.jpg"},
    { Id: 19, nome: "Peter", cognome: "Sagan", specialita: "ciclismo su strada", nazione: "Slovacchia" , immagine: "assets/atleti/sagan.jpg"},
    { Id: 20, nome: "Salvatore", cognome: "Antibo", specialita: "atletica leggera", nazione: "Italia" , immagine: "assets/atleti/antibo.jpg"}
    
  ];

}
