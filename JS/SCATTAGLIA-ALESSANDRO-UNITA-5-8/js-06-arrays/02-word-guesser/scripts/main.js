let word = ['C', 'A', 'T'];
let guessed = ['_', '_', '_'];
let maxGuesses = 6;

function guessLetter(letter) {
    if (maxGuesses === 0) {
        console.log("No more guesses left.");
        return;
    }

    let found = false;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            guessed[i] = letter;
            found = true;
        }
    }

    if (!found) {
        maxGuesses--;
    }

    console.log(guessed.join(' '));

    if (found) {
        console.log("Correct letter!");
    } else {
        console.log("Wrong letter. Guesses left:", maxGuesses);
    }

    if (!guessed.includes('_')) {
        console.log("You won!");
    } else if (maxGuesses === 0) {
        console.log("You lost. The word was:", word.join(''));
    }
}

guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('T');
