/**
 * Author: Alessandro Scattaglia
 * 
 * Greets the user in different languages based on the input.
 * @example
 * // Outputs:
 * // "Ciao, Mondo"
 * // "Hello, World"
 * // "Hallo, Welt"
 * helloWorld('it');
 * helloWorld('en');
 * helloWorld('de');
 */

function helloWorld(language) {
    if (language == 'it') {
        console.log("Ciao, Mondo");
    }
    else if (language == 'de') {
        console.log("Hallo, Welt");
    }
    else {
        console.log("Hello, World");
    }
}

helloWorld('it');
helloWorld('en');
helloWorld('de');
