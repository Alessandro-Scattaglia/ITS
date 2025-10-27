import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    // modulo che contiene il servizio HttpClient per fare chiamate al backend
    HttpClientModule
  ]
})
export class CoreModule { }
