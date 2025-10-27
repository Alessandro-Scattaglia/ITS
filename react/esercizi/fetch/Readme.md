# Esercitazioni con useEffect

## 1. Salvataggio automatico nel `localStorage`
- Il componente `NoteEditor` salva in automatico i dati nello storage. Le caratteristiche:
    - è una `<textarea>`;
    - al caricamento di pagina, la nota salvata viene recuperata;
    - c'è un pulsante "Cancella nota" che elimina la nota

- Usa `useState` per gestireil testoM
- usa `useEffect` per caricare la nota dallo storage e per salvarla quando cambia.


## 2. Notifica temporanea con `setTimeout`
- Il componente `Notification` deve 
    - mostrare un messaggio di successo quando apparte;
    - sparire dopo 3 secondi;
    - avere un pulsante "Mostra notifica" per farla riapparire.
- Usa `useState` per gestire se la notifica e visibile;
- usa `useEffect` con `setTimeout` per nascondere la notifica dopo 3 secondi
- Pulisci il timeout nel cleanup di `useEffect`

## 3. Mouse tracker con  `addEventListener`
- Un componente `MouseTracker` che:
    - mostra le coordinate X e Y del mouse in tempo reale;
    - ha un bottone "Start Tracking" / "Stop Tracking"
    - quando attivo, aggiorna le coordinate mentre muovi il mouse.

- Usa `useState` per: le coordinate (`{x: 0, y: 0}`) e lo stato di tracking (/attivo/non attivo);
- usa`useEffect` per aggiungere listener `mousemove` quando tracking è attivo
- rimuovere il listener nel cleanup

#### 🧐 Suggerimento
```jsx
useEffect(() => {
  if (!isTracking) return;
  
  function handleMouseMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }
  
  window.addEventListener("mousemove", handleMouseMove);
  
  // Cleanup
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, [isTracking]);
```

## 4. Chiamata API con `fetch`
- Il componente `UserList` deve:
    - al caricamente, fare una fetch a `https://jsonplaceholder.typicode.com/users`;
    - mostrare "Loading..." durante la fetch;
    - mostrare la lista di utenti con un componente `UserCard` che contiene: nome, username e email;
    - gestire eventuali errori mostrando un messaggio.
- Usa `useState` per gestire gli utenti, il loading e gli errori;
- usa `useEffect` fer fare la fetch quando il componente viene montato;
