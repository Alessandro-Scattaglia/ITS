/**
 * Author: Alessandro Scattaglia
 * 
 * Capitalizes the first letter of a string and each word in a sentence, then logs the results.
 * @example
 * // Outputs:
 * // "Hello world"
 * // "My Name Is John"
 */

function capital(string) {
    let string1 = string.charAt(0);
    console.log(string1.toUpperCase() + string.slice(1));
}

function capital2(string) {
    const parole = string.split(' ');

    for (let i = 0; i < parole.length; i++) {
        parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
    }

    console.log(parole.join(' '));
}

capital("hello world");
capital2("my name is john");
