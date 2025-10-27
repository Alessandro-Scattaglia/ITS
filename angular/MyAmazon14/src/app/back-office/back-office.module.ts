import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoCatalogoProdottiComponent } from './components/bo-catalogo-prodotti/bo-catalogo-prodotti.component';
import { BoFormProdottoComponent } from './components/bo-form-prodotto/bo-form-prodotto.component';
import { BoListOrdiniComponent } from './components/bo-list-ordini/bo-list-ordini.component';
import { BoFormOrdineComponent } from './components/bo-form-ordine/bo-form-ordine.component';
import { RouterModule, Routes } from '@angular/router';
import { BoMainComponent } from './components/bo-main/bo-main.component';


const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
//  {path:'login', component: LoginComponent},
  {path:'main', component: BoMainComponent,
    children:[
          {path:'', redirectTo:'prodotto-list', pathMatch:'full'},  
          {path:'prodotto-list', component: BoCatalogoProdottiComponent},
          {path:'prodotto-form', component: BoFormProdottoComponent},
          {path:'ordine-list', component: BoListOrdiniComponent},
          {path:'ordine-form', component: BoFormOrdineComponent},
          {path:'**', redirectTo: '/error-page'}

        ]
  },
   {path:'**', redirectTo: '/error-page'}
]



@NgModule({
  declarations: [
    BoCatalogoProdottiComponent,
    BoFormProdottoComponent,
    BoListOrdiniComponent,
    BoFormOrdineComponent,
    BoMainComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BackOfficeModule { }
