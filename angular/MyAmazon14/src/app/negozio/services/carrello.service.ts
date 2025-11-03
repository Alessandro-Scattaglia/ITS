import { Injectable } from '@angular/core';
import { ItemCarrello } from 'src/app/core/models/item-carrello.model';
import { Prodotto } from 'src/app/core/models/prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private _prodottiInCarrello: ItemCarrello[] = [];

  constructor() {
    let carrelloSalvato = localStorage.getItem("carrelloSalvato");

    if(carrelloSalvato){
      this._prodottiInCarrello = JSON.parse(carrelloSalvato);
    }
    else{
      localStorage.setItem("carrelloSalvato", JSON.stringify( this._prodottiInCarrello));
    }
  }

  aggiungi(prodotto: Prodotto) {
    // cerco se già esiste un prodotto dello stesso tipo in carrello
    let itemCarrello:ItemCarrello | undefined = this._prodottiInCarrello.find(el => el.idProdotto === prodotto.id);
    if (itemCarrello) {
      itemCarrello.quantita += 1;
    }
    else {
      // trasformo il prodotto in itemCarrello
      itemCarrello = {
        quantita: 1,
        idProdotto: prodotto.id!,
        nome: prodotto.nome,
        prezzo: prodotto.prezzo,
        categoria: prodotto.categoria

      }
      this._prodottiInCarrello.push(itemCarrello);
    }
    this.aggiornaCarrelloSuLocaleStorage();
  }

  get numeroProdottiInCarrello() {
    return this._prodottiInCarrello.length;
  }

  get totaleQuantitaInCarrello() {
    //let totale =0;
     //this._prodottiInCarrello.forEach(el => totale += el.quantita);
    return   this._prodottiInCarrello.reduce ( (totale , elemento) => totale + elemento.quantita   ,0 );   
    //return totale;
  }


    get totalePrezziInCarrello() {
    //let totale =0;
     //this._prodottiInCarrello.forEach(el => totale += el.quantita);
    return   this._prodottiInCarrello.reduce ( (totale , elemento) => totale +  (elemento.quantita *elemento.prezzo)   ,0 );   
    //return totale;
  }

   get copiaProdottiInCarrello() {
    //let totale =0;
     //this._prodottiInCarrello.forEach(el => totale += el.quantita);
    return   [... this._prodottiInCarrello]   ;
    //return totale;
  }

  rimuovi(idProdotto: number)
  { 

     let index = this._prodottiInCarrello.findIndex(item => item.idProdotto === idProdotto);
     this._prodottiInCarrello.splice(index,1); 
  this.aggiornaCarrelloSuLocaleStorage();
    }


  aggiorna(idProdotto: number, quantita:number)
  { 

     let item: ItemCarrello | undefined = this._prodottiInCarrello.find(item => item.idProdotto === idProdotto);
     if(item ){
           item.quantita = quantita;
          }
     this.aggiornaCarrelloSuLocaleStorage();     
  }

  aggiornaCarrelloSuLocaleStorage(){
     localStorage.setItem("carrelloSalvato", JSON.stringify( this._prodottiInCarrello));

  }
}
