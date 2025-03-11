/**
 * Author: Alessandro Scattaglia
 * 
 * Capitalizes the first letter of a string and each word in a sentence, then logs the results.
 * @example
 * // Outputs:
 * // "Hello world"
 * // "My Name Is John"
 */

function capital(str) {
    let text = str.charAt(0);
    console.log(text.toUpperCase() + str.slice(1));
}

function capital2(str) {
    const parole = str.split(' ');

    for (let i = 0; i < parole.length; i++) {
        parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
    }

    console.log(parole.join(' '));
}

capital("hello world");
capital2("my name is john");
