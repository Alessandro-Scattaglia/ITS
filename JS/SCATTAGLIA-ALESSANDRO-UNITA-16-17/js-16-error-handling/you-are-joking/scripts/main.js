/**
 * Random Joke Fetcher
 * Author: Alessandro Scattaglia
 * Description: This script fetches random jokes from the JokeAPI (https://v2.jokeapi.dev)
 *              and displays them on the page. It handles errors, retries up to 3 times, 
 *              and can fetch jokes by type and by amount.
 * Example usage:
 *   fetchRandomJoke().then(joke => console.log(joke));
 *   fetchJokeByType("Programming", 2).then(jokes => console.log(jokes));
 */

const jokeParagraph = document.getElementById('joke');
const jokeButton = document.getElementById('getJoke');

const API_URL = "https://v2.jokeapi.dev/joke/Any"; // Random joke API

// Function to fetch a random joke with retry logic
function fetchRandomJoke(retries = 3) {
  return new Promise((resolve, reject) => {
    const attemptFetch = (triesLeft) => {
      fetch(API_URL)
        .then(response => {
          if (!response.ok) throw new Error("Server response error");
          return response.json();
        })
        .then(data => {
          if (data.type === "single") {
            resolve(data.joke);
          } else {
            resolve(`${data.setup} - ${data.delivery}`);
          }
        })
        .catch(error => {
          if (triesLeft > 0) {
            console.warn(`Retrying... attempts left: ${triesLeft - 1}`);
            attemptFetch(triesLeft - 1);
          } else {
            reject("Unable to fetch a joke after 3 attempts.");
          }
        });
    };

    attemptFetch(retries);
  });
}

// Event listener for the button
jokeButton.addEventListener("click", () => {
  jokeParagraph.textContent = "Loading...";
  fetchRandomJoke()
    .then(joke => jokeParagraph.textContent = joke)
    .catch(err => jokeParagraph.textContent = err);
});

// Bonus: fetch jokes by type and by number
function fetchJokeByType(type = "Any", amount = 1) {
  return new Promise((resolve, reject) => {
    fetch(`https://v2.jokeapi.dev/joke/${type}?amount=${amount}`)
      .then(res => res.json())
      .then(data => {
        if (amount === 1) {
          if (data.type === "single") resolve(data.joke);
          else resolve(`${data.setup} - ${data.delivery}`);
        } else {
          const jokes = data.jokes.map(j => j.type === "single" ? j.joke : `${j.setup} - ${j.delivery}`);
          resolve(jokes);
        }
      })
      .catch(err => reject("Error fetching jokes: " + err));
  });
}
