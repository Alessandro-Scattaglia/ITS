import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [],
})
export class CheckoutComponent {
  // Dati del form
  datiOrdine = {
    nome: '',
    cognome: '',
    indirizzo: '',
    citta: '',
    metodoPagamento: '',
  };

  // Metodi di pagamento disponibili
  metodiPagamento = ['Carta di Credito', 'PayPal', 'Bonifico Bancario'];

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Ordine inviato:', this.datiOrdine);
    alert('Ordine inviato con successo!');
    // Reset dei campi
    this.datiOrdine = {
      nome: '',
      cognome: '',
      indirizzo: '',
      citta: '',
      metodoPagamento: '',
    };
  }

  tornaAlCarrello() {
    this.router.navigate(['/carrello']);
  }
}
