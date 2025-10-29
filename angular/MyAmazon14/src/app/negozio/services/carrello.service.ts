import { Injectable } from '@angular/core';
import { ItemCarrello } from 'src/app/core/models/item-carrello.model';
import { Prodotto } from 'src/app/core/models/prodotto.model';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  private _prodottiInCarrello: ItemCarrello[] = [];

  constructor() {
    let carrelloSalvato = localStorage.getItem('carrelloSalvato');

    if (carrelloSalvato) {
      this._prodottiInCarrello = JSON.parse(carrelloSalvato);
    } else {
      localStorage.setItem(
        'carrelloSalvato',
        JSON.stringify(this._prodottiInCarrello)
      );
    }
  }

  aggiungi(prodotto: Prodotto) {
    // cerco se già esiste un prodotto dello stesso tipo in carrello
    let itemCarrello: ItemCarrello | undefined = this._prodottiInCarrello.find(
      (el) => el.idProdotto === prodotto.id
    );
    if (itemCarrello) {
      itemCarrello.quantita += 1;
    } else {
      // trasformo il prodotto in itemCarrello
      itemCarrello = {
        quantita: 1,
        idProdotto: prodotto.id!,
        nome: prodotto.nome,
        prezzo: prodotto.prezzo,
        categoria: prodotto.categoria,
      };
      this._prodottiInCarrello.push(itemCarrello);
    }
    this.aggiornaStorage();
  }

  get numeroProdottiInCarrello() {
    return this._prodottiInCarrello.length;
  }
  // restituisce gli item effettivi nel carrello
  get prodottiInCarrello() {
    return this._prodottiInCarrello;
  }
  get totaleQuantitaInCarrello() {
    return this._prodottiInCarrello.reduce(
      (totale, elemento) => totale + elemento.quantita,
      0
    );
  }

  get totalePrezziInCarrello() {
    return this._prodottiInCarrello.reduce(
      (totale, elemento) => totale + elemento.prezzo * elemento.quantita,
      0
    );
    
  }

  aumentaQuantita(idProdotto: number | string) {
    const item = this._prodottiInCarrello.find(
      (el) => el.idProdotto === idProdotto
    );
    if (item) {
      item.quantita += 1;
    }
    this.aggiornaStorage();
  }

  // diminuisce la quantità; se arriva a 0 rimuove l'item
  diminuisciQuantita(idProdotto: number | string) {
    const itemIndex = this._prodottiInCarrello.findIndex(
      (el) => el.idProdotto === idProdotto
    );
    if (itemIndex > -1) {
      const item = this._prodottiInCarrello[itemIndex];
      item.quantita -= 1;
      if (item.quantita <= 0) {
        this._prodottiInCarrello.splice(itemIndex, 1);
      }
    }
    this.aggiornaStorage();
  }

  // rimuove completamente l'item dal carrello
  rimuoviProdotto(idProdotto: number | string) {
    this._prodottiInCarrello = this._prodottiInCarrello.filter(
      (el) => el.idProdotto !== idProdotto
    );
    this.aggiornaStorage();
  }

  aggiorna(idProdotto: number | string, nuovaQuantita: number) {
    const item = this._prodottiInCarrello.find(
      (el) => el.idProdotto === idProdotto
    );
    if (item) {
      item.quantita = nuovaQuantita;
      if (item.quantita <= 0) {
        this.rimuoviProdotto(idProdotto);
      }
    }
    this.aggiornaStorage();
  }

  aggiornaStorage() {
    localStorage.setItem(
      'carrelloSalvato',
      JSON.stringify(this._prodottiInCarrello)
    );
  }
}
