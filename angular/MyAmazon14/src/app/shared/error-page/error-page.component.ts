import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
    <h2>
      Si è verificato un errore , rotta non disponibile!!
  </h2>
  `,
  styles: [
  ]
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
