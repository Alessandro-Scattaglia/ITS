# Codice per l'accesso agli elementi DOM


### 1. Ogni immagine sulla pagina

```javascript
const immagini = document.querySelectorAll('img');
console.log(immagini);
// Risultato:
// NodeList(269) [img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, …]




const menuPrincipale = document.querySelector('nav');
console.log(menuPrincipale);
// Risultato:
// <nav gog-menu class="menu menu-prices-in-eur menu--windows menu-curr-symbol-before menu-language-en-us">
//   <!-- Contenuto del menu -->
// </nav>

const notizie = document.querySelectorAll('.news-item');
console.log(notizie);
// Risultato:
// NodeList []  // Nessun elemento trovato

const footer = document.querySelector('footer');
console.log(footer);
// Risultato:
// <footer class="footer-microservice main-footer">
//   <div class="footer-microservice__top footer-microservice-content">
//     <!-- Contenuto del top -->
//   </div>
//   <div class="footer-microservice__middle">
//     <!-- Contenuto del middle -->
//   </div>
//   <div class="footer-microservice-secondary footer-microservice-content" footer-links>
//     <!-- Contenuto secondario -->
//   </div>
// </footer>

const socialLinks = document.querySelectorAll('.social-links a');
console.log(socialLinks);
// Risultato:
// NodeList []  // Nessun elemento trovato
