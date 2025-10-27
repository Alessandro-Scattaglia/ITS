import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  nomeApplicazione = "MyAmazon14";
  elencoLink =[
    {pathLink:"/catalogo", nomeLink :"Catalogo"},
    {pathLink:"/carrello", nomeLink :"Carrello"},
    {pathLink:"/checkout", nomeLink :"Checkout"},
    {pathLink:"/back-office", nomeLink :"Back Office"}
  ];
    

  constructor() { }

  ngOnInit(): void {
  }

}

