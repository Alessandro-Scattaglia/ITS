import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoProdottiComponent } from './negozio/components/catalogo-prodotti/catalogo-prodotti.component';
import { CarrelloComponent } from './negozio/components/carrello/carrello.component';
import { CheckoutComponent } from './negozio/components/checkout/checkout.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { path: 'catalogo', component: CatalogoProdottiComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'checkout', component: CheckoutComponent   },

   { path: 'error-page', component: ErrorPageComponent },
  // caricamento lazy del modulo amministrazione
  {
    path: 'back-office',
    loadChildren: () => import('./back-office/back-office.module')
      .then(m => m.BackOfficeModule)
  },
  {
    path: 'fatture',
    loadChildren: () => import('./fatture/fatture.module')
      .then(m => m.FattureModule)
  },
  { path: '**', redirectTo: 'error-page' }


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
