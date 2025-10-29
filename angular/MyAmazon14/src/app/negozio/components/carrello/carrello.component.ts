import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styles: [
  ]
})
export class CarrelloComponent implements OnInit {

  constructor(public carrello:CarrelloService) { }

  ngOnInit(): void {
  }


  

}
