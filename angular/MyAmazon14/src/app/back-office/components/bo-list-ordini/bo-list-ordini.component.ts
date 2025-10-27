import { Component, OnInit } from '@angular/core';
import { Ordine } from 'src/app/core/models/ordine.model';
import { RestDataSourceService } from 'src/app/core/services/rest-data-source.service';

@Component({
  selector: 'app-bo-list-ordini',
  templateUrl: './bo-list-ordini.component.html',
  styles: [
  ]
})
export class BoListOrdiniComponent implements OnInit {

  ordini:Ordine[]= [];

  constructor(private dataSource: RestDataSourceService) { }

  ngOnInit(): void {
     this.dataSource.getOrdini()
        .subscribe(dati => this.ordini = dati); 
  }

}
