import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atleta-list',
  template: `
    <h2>Elenco Atleti</h2>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Specialita</th>
            <th>Nazione</th>
            <th>Partecipazione Gara</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let atleta of elencoAtleti">
            <td>{{atleta.id}}</td>
            <td>{{atleta.nome}}</td>
            <td>{{atleta.cognome}}</td>
            <td>{{atleta.specialita}}</td>
            <td>{{atleta.nazione}}</td>
            <td><button (click)="aggiungiAtletaAllaGara(atleta)">Aggiungi alla gara</button></td>
          </tr>
        </tbody>
      </table>

    <div>
      <h3>Atleti selezionati per la gara:</h3>
      <ul>
        <li *ngFor="let atleta of atletiNellaGara">
          {{atleta.nome}} {{atleta.cognome}} - {{atleta.specialita}} ({{atleta.nazione}})
        </li>
      </ul>
    </div>
    <div *ngIf="atletaSelezionato" class="alert alert-warning">
      Atleta già selezionato per la gara!
    </div>
  `,
  styles: [
  ]
})
export class AtletaListComponent {
  elencoAtleti = [
    {
      id: 1,
      nome: 'Mario',
      cognome: 'Rossi',
      specialita: '100m',
      nazione: 'Italia'
    },
    {
      id: 2,
      nome: 'Luigi',
      cognome: 'Verdi',
      specialita: '200m',
      nazione: 'Italia'
    },
    {
      id: 3,
      nome: 'John',
      cognome: 'Doe',
      specialita: '100m',
      nazione: 'USA'
    }
  ]

  atletiNellaGara: any[] = [];
  atletaSelezionato: boolean = false;

  aggiungiAtletaAllaGara(atleta: any) {
    if (!this.atletiNellaGara.find(a => a.id === atleta.id)) {
      this.atletiNellaGara.push(atleta);
      this.atletaSelezionato = false;
    } else {
      this.atletaSelezionato = true;
    }
  }

}
