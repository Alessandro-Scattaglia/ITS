// Classe base per le carte
class Card {
    constructor(type, strength, defense, health) {
      this.type = type;
      this.strength = strength;
      this.defense = defense;
      this.health = health;
    }
  }
  
  // Carta personaggio (Character)
  class CharacterCard extends Card {
    constructor(strength, defense, health) {
      super('character', strength, defense, health);
    }
  
    // Attacca un nemico riducendone la salute (minimo 0)
    attack(enemy) {
      const damage = Math.max(this.strength - enemy.defense, 0);
      enemy.health = Math.max(enemy.health - damage, 0);
      console.log(`Character attacca Enemy causando ${damage} danni. Enemy health: ${enemy.health}`);
    }
  
    // Duel: confronto di forza, chi ha forza maggiore riduce la salute dell'altro
    duel(opponent) {
      if (this.strength > opponent.strength) {
        const diff = this.strength - opponent.strength;
        opponent.health = Math.max(opponent.health - diff, 0);
        console.log(`Duel: questo Character vince e riduce di ${diff} la salute dell'altro. Opponent health: ${opponent.health}`);
      } else if (this.strength < opponent.strength) {
        const diff = opponent.strength - this.strength;
        this.health = Math.max(this.health - diff, 0);
        console.log(`Duel: l'altro Character vince e riduce di ${diff} la salute di questo. Character health: ${this.health}`);
      } else {
        console.log("Duel: forze uguali, nessun effetto.");
      }
    }
  }
  
  // Carta magia (Spell)
  class SpellCard extends Card {
    constructor() {
      // Per semplicità impostiamo attributi fissi oppure random se necessario
      super('spell', 0, 0, 0);
    }
  
    // Buff: aumenta la forza del personaggio
    buff(character) {
      const increase = 5;
      character.strength += increase;
      character.health += increase;
      console.log(`Spell buff: Aumenta forza e salute di Character di ${increase}. Nuova forza: ${character.strength}, nuova health: ${character.health}`);
    }
  
    // Damage: infligge danno diretto al personaggio
    damage(character) {
      const damage = 10;
      character.health = Math.max(character.health - damage, 0);
      console.log(`Spell damage: Infligge ${damage} danni a Character. Character health: ${character.health}`);
    }
  }
  
  // Carta nemico (Enemy)
  class EnemyCard extends Card {
    constructor(strength, defense, health) {
      super('enemy', strength, defense, health);
    }
  }
  
  // Funzione per creare una carta casuale
  function creaCartaCasuale() {
    const tipi = ['character', 'spell', 'enemy'];
    const randomTipo = tipi[Math.floor(Math.random() * tipi.length)];
  
    // Per i personaggi ed enemy generiamo attributi casuali
    if (randomTipo === 'character') {
      const strength = Math.floor(Math.random() * 10) + 1;
      const defense = Math.floor(Math.random() * 5) + 1;
      const health = Math.floor(Math.random() * 30) + 20;
      return new CharacterCard(strength, defense, health);
    } else if (randomTipo === 'enemy') {
      const strength = Math.floor(Math.random() * 8) + 1;
      const defense = Math.floor(Math.random() * 4) + 1;
      const health = Math.floor(Math.random() * 25) + 15;
      return new EnemyCard(strength, defense, health);
    } else if (randomTipo === 'spell') {
      // Spell non ha attributi rilevanti per questo esempio
      return new SpellCard();
    }
  }
  
  // Creazione di due code (array) di carte per ciascun giocatore
  const N = 5; // numero di carte per giocatore
  let queuePlayer1 = [];
  let queuePlayer2 = [];
  
  for (let i = 0; i < N; i++) {
    queuePlayer1.push(creaCartaCasuale());
    queuePlayer2.push(creaCartaCasuale());
  }
  
  console.log("Carte iniziali del Giocatore 1:", queuePlayer1);
  console.log("Carte iniziali del Giocatore 2:", queuePlayer2);
  
  // Punteggio dei giocatori (basato sulla salute residua dei Character usati)
  let scorePlayer1 = 0;
  let scorePlayer2 = 0;
  
  // Simulazione dei turni di combattimento
  while (queuePlayer1.length > 0 && queuePlayer2.length > 0) {
    // Estrai la prima carta da ciascuna coda
    const card1 = queuePlayer1.shift();
    const card2 = queuePlayer2.shift();
  
    console.log("\nNuovo turno:");
    console.log("Giocatore 1 estrae:", card1);
    console.log("Giocatore 2 estrae:", card2);
  
    // In base al tipo di carte estrae l'azione
    if (card1.type === 'character' && card2.type === 'enemy') {
      // Character vs. Enemy: attacco
      card1.attack(card2);
    } else if (card1.type === 'enemy' && card2.type === 'character') {
      card2.attack(card1);
    } else if (card1.type === 'spell' && card2.type === 'character') {
      // Spell vs. Character: scelgo casualmente buff oppure damage
      if (Math.random() < 0.5) {
        card1.buff(card2);
      } else {
        card1.damage(card2);
      }
    } else if (card1.type === 'character' && card2.type === 'spell') {
      if (Math.random() < 0.5) {
        card2.buff(card1);
      } else {
        card2.damage(card1);
      }
    } else if (card1.type === 'character' && card2.type === 'character') {
      // Duel tra personaggi
      card1.duel(card2);
    } else if (card1.type === 'enemy' && card2.type === 'enemy') {
      // Enemy vs. Enemy: nessun effetto
      console.log("Enemy vs. Enemy: nessun effetto.");
    } else if (card1.type === 'spell' && card2.type === 'spell') {
      // Spell vs. Spell: nessun effetto
      console.log("Spell vs. Spell: nessun effetto.");
    } else {
      console.log("Combinazione non gestita.");
    }
  
    // Se sono state usate carte personaggio, aggiungi la salute residua al punteggio
    if (card1.type === 'character') {
      scorePlayer1 += card1.health;
    }
    if (card2.type === 'character') {
      scorePlayer2 += card2.health;
    }
  }
  
  console.log("\n--- Risultato finale ---");
  console.log("Punteggio Giocatore 1:", scorePlayer1);
  console.log("Punteggio Giocatore 2:", scorePlayer2);
  