import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoProdottiComponent } from './components/catalogo-prodotti/catalogo-prodotti.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



@NgModule({
  declarations: [
    CatalogoProdottiComponent,
    CarrelloComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NegozioModule { }
