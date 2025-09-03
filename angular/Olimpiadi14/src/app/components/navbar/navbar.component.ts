import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <!-- Logo -->
    <a class="navbar-brand" routerLink="/">MyApp</a>

    <!-- Toggle button per mobile da gestire  click
    <button
      class="navbar-toggler"
      aria-controls="navbarNav"
      aria-expanded="!isCollapsed"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
-->
    <!-- Menu  da gestire collasso con direttiva attributo-->
    <div class="navbar-collapse">
      <ul class="navbar-nav ms-auto flex-row">
        <li class="nav-item mx-2">
          <a class="nav-link" >Home</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" >Carrello</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" >Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
