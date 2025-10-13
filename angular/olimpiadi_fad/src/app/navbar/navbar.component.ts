import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  nomeApplicazione = 'Olimpiadi14';
  elencoLink = ['Home', 'Atleti', 'Nazioni', 'Sports', 'Sedi', 'Login'];
  
}
