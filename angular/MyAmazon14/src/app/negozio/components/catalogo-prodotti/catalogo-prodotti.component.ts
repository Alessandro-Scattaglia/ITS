import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/core/models/prodotto.model';
import { RestDataSourceService } from 'src/app/core/services/rest-data-source.service';
import { StaticDataSourceService } from 'src/app/core/services/static-data-source.service';

@Component({
  selector: 'app-catalogo-prodotti',
  templateUrl: './catalogo-prodotti.component.html',
  styles: [
  ]
})
export class CatalogoProdottiComponent implements OnInit {

  // varibile di istanzas per gestire il caricamento dei dati e il differente layout
  loading = true;
  // variabile per gestire il messaggio di errore nel caricamento 
  messaggioErrore='';

  categoriaSelezionata='';

  categorie: string[] =[];
  private _prodotti:Prodotto[] =[];

  // prima versipone con data source statico
  //constructor(private dataSource: StaticDataSourceService) {
  constructor(private dataSource: RestDataSourceService) { }

   setCategoriaSelezionata(nuovaCategoria: string ){
    this.categoriaSelezionata = nuovaCategoria;
   }

   get prodotti(){

     return this._prodotti.filter(p=>this.categoriaSelezionata ==='' || p.categoria === this.categoriaSelezionata   );
   }


  ngOnInit(): void {
   
    // assegnazione con lo staticDataSource
   //  this._prodotti = this.dataSource.catalogoProdotti;

   // la subscribe fa effettivamente partire la chimata che è asincrona.
   // se devo fare delle operazioni con i dati che arrivano , come ad esempio caricare le categorie, 
   // devo farlo all'interno della call back function !!!
    this.dataSource.catalogoProdotti
        .subscribe(dati =>{
          this._prodotti = dati ;
            let ris: string[] = [];  
          let totaleCategorie: string[] = this._prodotti.map(p => p.categoria);
          totaleCategorie.forEach( el =>{
                if(!ris.includes(el )) 
                    ris.push(el)
                });
          this.categorie = ris.sort();

          this.loading=false;
        
        });


    /*
    let totaleCategorie: string[] = this.prodotti.map(p => p.categoria);
    let setCategorie: Set<string> = new Set(totaleCategorie);
    this.categorie = Array.from(setCategorie);
    */
  
  }

}
