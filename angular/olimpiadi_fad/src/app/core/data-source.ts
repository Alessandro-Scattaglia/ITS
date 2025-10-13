import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSource {
  private atleti = [
    { nome: 'Mario', sport: 'Corsa', eta: 25 },
    { nome: 'Luca', sport: 'Salto in lungo', eta: 22 }
  ];

  getAtleti() {
    return this.atleti;
  }

  addAtleta(nuovo: { nome: string; sport: string; eta: number }) {
    this.atleti.push(nuovo);
  }
}
