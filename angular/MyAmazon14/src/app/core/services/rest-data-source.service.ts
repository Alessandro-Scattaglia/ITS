import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from '../models/prodotto.model';
import { Ordine } from '../models/ordine.model';

@Injectable({
  providedIn: 'root'
})
export class RestDataSourceService {

  // il servizio HttpClient viene iniettato e potremo quindi fare chiamate al backend
  constructor(private http: HttpClient) { }

  get catalogoProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]> ('http://localhost:3000/api/v1/products');
  }

  getOrdini(): Observable<Ordine[]> {
    return this.http.get<Ordine[]> ('http://localhost:3000/api/v1/orders');
  }
}
