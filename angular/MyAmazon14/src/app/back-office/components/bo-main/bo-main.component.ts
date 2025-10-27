import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bo-main',
  template: `
    <div class="row mt-2">
    <div class="col-3">
        <div class="btn-group-vertical w-100" role="group">
            <button class="btn btn-outline-info mt-2">
                Logout
            </button>
            <button class="btn btn-outline-info mt-2" 
            routerLink="/back-office/main/prodotto-list"
                routerLinkActive="active">
                Lista prodotti
            </button>  
            <button class="btn btn-outline-info mt-2" 
            routerLink="/back-office/main/ordine-list"
                routerLinkActive="active">
                Lista ordini
            </button>

        </div>
    </div>

    <div class="col-9">
        <!-- router outlet di secondo livello-->
        <router-outlet></router-outlet>
    </div>
</div>
  `,
  styles: [
  ]
})
export class BoMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
