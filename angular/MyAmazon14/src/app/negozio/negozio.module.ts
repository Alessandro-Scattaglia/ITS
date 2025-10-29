import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogoProdottiComponent } from './components/catalogo-prodotti/catalogo-prodotti.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
  declarations: [
    CatalogoProdottiComponent,
    CarrelloComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
]
})
export class NegozioModule { }
