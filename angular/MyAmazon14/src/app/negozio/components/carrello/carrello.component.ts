import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styles: [
  ]
})
export class CarrelloComponent implements OnInit {

  constructor(public carrello:CarrelloService) { }

  ngOnInit(): void {
  }

  rimuoviDalCarrello( idProdotto: number){
    let ris = confirm("Sei sicuro ? Rimuoverà il prodotto e tutte le quantità");
    if(ris){
      this.carrello.rimuovi(idProdotto);
    }
  }

   modificaQuantita(idProdotto: number, inputQuantita: HTMLInputElement )
  {
    let quantitaNumber = Number(inputQuantita.value);
    if(quantitaNumber <0){
      inputQuantita.value="1";
      //alert ("la quantità non può essere minore di 0, la quantità sarà impostata a 1");
  
    }
    this.carrello.aggiorna(idProdotto, quantitaNumber);
  }


  



}
