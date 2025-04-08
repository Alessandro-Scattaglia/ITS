const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Funzione per generare un intero casuale tra min e max (inclusi)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Inizializzazione delle pile: tre pile di piatti sporchi e una pila vuota di piatti puliti
let dirtyStacks = [[], [], []];
let cleanStack = [];

// Popolazione di ogni pila sporca con un numero casuale di piatti (da 3 a 20 piatti per ciascuna pila)
dirtyStacks.forEach((stack, index) => {
  let numPlates = getRandomInt(3, 20);
  for (let i = 1; i <= numPlates; i++) {
    stack.push(`Piatto ${i} (Stack ${index + 1})`);
  }
});

// Funzione per mostrare lo stato delle pile in console
function displayStacks() {
  console.clear();
  dirtyStacks.forEach((stack, index) => {
    console.log(`Pila sporca ${index + 1}: [${stack.join(', ')}]`);
  });
  console.log(`Pila pulita: [${cleanStack.join(', ')}]`);
}

// Funzione che lava un piatto: sceglie casualmente una pila sporca non vuota,
// rimuove il piatto dalla cima e lo aggiunge alla pila pulita
function washDish() {
  // Filtra le pile che non sono vuote
  const availableStacks = dirtyStacks.filter(stack => stack.length > 0);
  if (availableStacks.length > 0) {
    // Seleziona casualmente una pila disponibile
    const chosenIndex = getRandomInt(0, availableStacks.length - 1);
    // Trova l'indice reale della pila scelta in dirtyStacks
    const realIndex = dirtyStacks.indexOf(availableStacks[chosenIndex]);
    const dish = dirtyStacks[realIndex].pop();
    cleanStack.push(dish);
    console.log(`Lavato: ${dish} dalla Pila sporca ${realIndex + 1}`);
  }
}

// Funzione che simula il lavaggio di due piatti per volta
async function runSimulation() {
  console.log("Inizio simulazione della lavastoviglie!");
  // Continua finché almeno una pila sporca contiene dei piatti
  while (dirtyStacks.some(stack => stack.length > 0)) {
    // Lava fino a due piatti, se disponibili
    for (let i = 0; i < 2; i++) {
      if (dirtyStacks.some(stack => stack.length > 0)) {
        washDish();
      }
    }
    displayStacks();
  }
  console.log("Simulazione completata! Tutti i piatti sono stati lavati.");
}

// Avvio della simulazione
runSimulation();
