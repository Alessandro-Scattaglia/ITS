import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoProdottiComponent } from './components/catalogo-prodotti/catalogo-prodotti.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CatalogoProdottiComponent,
    CarrelloComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class NegozioModule { }
