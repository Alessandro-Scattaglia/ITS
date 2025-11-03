import { CarrelloService } from "src/app/negozio/services/carrello.service";

export interface Ordine {
    id?: number;
   // id_utente: number;
    nome:string;
    cognome: string;
    citta:string;
    indirizzo:string;
    data_ordine: Date;
    carrello?:CarrelloService
    totale_ordine: number;

}