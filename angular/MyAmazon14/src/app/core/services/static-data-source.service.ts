import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSourceService {

  private _catalogoProdotti :Prodotto[]=[
  { "id": 1, "nome": "Candy lavasciuga", "descrizione": "bella lavatrice", "img_url": "candy.jpg", "prezzo": 299.99, "categoria": "Elettrodomestici" },
  { "id": 2, "nome": "Samsung Laptop 12", "descrizione": "Bel pc veloce", "img_url": "samsung.jpg", "prezzo": 449.99, "categoria": "Portatili" },
  { "id": 3, "nome": "Redmi 14 PRO", "descrizione": "Cellulare veloce e performante", "img_url": "redmi.jpg", "prezzo": 529.99, "categoria": "Cellulari" },
  { "id": 4, "nome": "Tosaerba Bosch", "descrizione": "Perfetto per il giardino", "img_url": "tosaerba.jpg", "prezzo": 189.99, "categoria": "Giardinaggio" },
  { "id": 5, "nome": "Piantatrice Automatica", "descrizione": "Per piantare facilmente fiori e piante", "img_url": "piantatrice.jpg", "prezzo": 150.00, "categoria": "Giardinaggio" },
  { "id": 6, "nome": "Zaino da trekking", "descrizione": "Ideale per escursioni in montagna", "img_url": "zaino_trekking.jpg", "prezzo": 89.99, "categoria": "Sport" },
  { "id": 7, "nome": "Bicicletta 26\" Shimano", "descrizione": "Comoda per le passeggiate nel parco", "img_url": "bicicletta.jpg", "prezzo": 359.99, "categoria": "Sport" },
  { "id": 8, "nome": "Racchetta da tennis Wilson", "descrizione": "Per un gioco da campione", "img_url": "racchetta_tennis.jpg", "prezzo": 120.00, "categoria": "Sport" },
  { "id": 9, "nome": "Frigorifero LG", "descrizione": "Frigorifero spazioso e efficiente", "img_url": "frigorifero.jpg", "prezzo": 499.99, "categoria": "Elettrodomestici" },
  { "id": 10, "nome": "Smartwatch Garmin", "descrizione": "Smartwatch per monitorare attività e salute", "img_url": "garmin.jpg", "prezzo": 199.99, "categoria": "Elettronica" },
  { "id": 11, "nome": "Cuffie Bluetooth Sony", "descrizione": "Audio cristallino e senza fili", "img_url": "cuffie.jpg", "prezzo": 129.99, "categoria": "Elettronica" },
  { "id": 12, "nome": "Motosega Einhell", "descrizione": "Per tagliare facilmente legna e rami", "img_url": "motosega.jpg", "prezzo": 159.99, "categoria": "Giardinaggio" },
  { "id": 13, "nome": "Set da ping pong", "descrizione": "Tutto il necessario per giocare a ping pong", "img_url": "ping_pong.jpg", "prezzo": 69.99, "categoria": "Sport" },
  { "id": 14, "nome": "Carrello da giardino", "descrizione": "Carrello robusto per il giardinaggio", "img_url": "carrello.jpg", "prezzo": 89.99, "categoria": "Giardinaggio" },
  { "id": 15, "nome": "Set di attrezzi per giardinaggio", "descrizione": "Tutti gli strumenti necessari per il giardinaggio", "img_url": "attrezzi_giardino.jpg", "prezzo": 45.00, "categoria": "Giardinaggio" }
]


  constructor() { }

  get catalogoProdotti(){
  
    // restituiamo una copia della 'array orginale 
    return [...this._catalogoProdotti]; 
  }


}
