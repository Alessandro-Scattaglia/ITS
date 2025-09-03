import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atleta-list',
  templateUrl: './atleta-list.component.html',
  styleUrls: ['./atleta-list.component.css']
})
export class AtletaListComponent {

listaAtleti = [
  { Id: 1, nome: "Gianmarco", cognome: "Tamberi", specialita: "salto in alto", nazione: "Italia" },
  { Id: 2, nome: "Marcell", cognome: "Jacobs", specialita: "velocista", nazione: "Italia" },
  { Id: 3, nome: "Novak", cognome: "Djokovic", specialita: "tennis", nazione: "Serbia" },
  { Id: 4, nome: "Federica", cognome: "Brignone", specialita: "sci alpino", nazione: "Italia" },
  { Id: 5, nome: "Lewis", cognome: "Hamilton", specialita: "Formula 1", nazione: "Regno Unito" },
  { Id: 6, nome: "Sofia", cognome: "Goggia", specialita: "sci alpino", nazione: "Italia" },
  { Id: 7, nome: "Valentina", cognome: "Vezzali", specialita: "scherma", nazione: "Italia" },
  { Id: 8, nome: "Caeleb", cognome: "Dressel", specialita: "nuoto", nazione: "USA" },
  { Id: 9, nome: "Simone", cognome: "Biles", specialita: "ginnastica artistica", nazione: "USA" },
  { Id: 10, nome: "Filippo", cognome: "Ganna", specialita: "ciclismo su pista", nazione: "Italia" },
  { Id: 11, nome: "Iga", cognome: "Swiatek", specialita: "tennis", nazione: "Polonia" },
  { Id: 12, nome: "Bebe", cognome: "Vio", specialita: "scherma paralimpica", nazione: "Italia" },
  { Id: 13, nome: "Allyson", cognome: "Felix", specialita: "atletica leggera", nazione: "USA" },
  { Id: 14, nome: "Alberto", cognome: "Tomba", specialita: "sci alpino", nazione: "Italia" },
  { Id: 15, nome: "Usain", cognome: "Bolt", specialita: "velocista", nazione: "Giamaica" },
  { Id: 16, nome: "Cristiano", cognome: "Ronaldo", specialita: "calcio", nazione: "Portogallo" },
  { Id: 17, nome: "Roger", cognome: "Federer", specialita: "tennis", nazione: "Svizzera" },
  { Id: 18, nome: "Edoardo", cognome: "Mangiarotti", specialita: "scherma", nazione: "Italia" },
  { Id: 19, nome: "Peter", cognome: "Sagan", specialita: "ciclismo su strada", nazione: "Slovacchia" },
  { Id: 20, nome: "Salvatore", cognome: "Antibo", specialita: "atletica leggera", nazione: "Italia" }
];



 

}
