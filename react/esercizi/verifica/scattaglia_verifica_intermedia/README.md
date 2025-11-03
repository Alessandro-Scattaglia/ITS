# Esercizi per la verifica intermedia

## Prima di iniziare - setup dell'ambiente

Installa le dipdenzenze con:
`npm install`

Avvia il server di sviluppo con:
`npm run dev`

## Esercizi

### Esercizio 1

Crea un componente `Button` che accetta le proprietà `onClick` e `title`

### Esercizio 2

Fai in modo che il componente `Container` accetti la proprietà `childre` e gestisca il **props forwarding**.

### Esercizio 3

Fai in modo che il componente `RecipeList` mostri l'array di ricette `DUMMY_RECIPES`.
Utilizza `.map()` per il rendering della lista.

### Esercizio 4

Sistema il componente `RegistrationForm` in modo che abbia:

- 3 campi input controllati con `useState`: nome, email, password;
- un pulsante "Sign up" che dev'essere disabilitato se uno dei campi è vuoto;
- al click sul pulsante valida il campo email con il regex  
  `const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;`
  e mostra un messaggio di errore se non è valida
