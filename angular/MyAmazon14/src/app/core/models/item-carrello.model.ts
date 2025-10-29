import { Prodotto } from "./prodotto.model";

export interface ItemCarrello{
    quantita: number;
    //prodotto:Prodotto;
    idProdotto: number;
    nome: string;
    prezzo: number;
    categoria:string; 
}