/**
 * Author: Alessandro Scattaglia
 * Exercise: Roulette with Promises
 * Description: This code simulates a simple 3-round roulette game.
 *              Each round has a 50/50 chance to win or lose.
 *              The game stops immediately if any round is lost.
 */

// Function round: returns a Promise that resolves or rejects 50/50
function round(label = "round", delayTime = 500) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const won = Math.random() < 0.5; // 50/50 chance
        if (won) {
          resolve(`${label}: won!`);
        } else {
          reject(`${label}: lost!`);
        }
      }, delayTime);
    });
  }
  
  // Async function to play 3 rounds sequentially
  async function playGame() {
    const rounds = ["round 1", "round 2", "round 3"];
    try {
      for (let r of rounds) {
        const result = await round(r, 500);
        console.log(result);
      }
      console.log("Game over");
    } catch (error) {
      console.log(error); // round x: lost!
      console.log("Game over");
    }
  }
  
  // Start the game
  playGame();
  