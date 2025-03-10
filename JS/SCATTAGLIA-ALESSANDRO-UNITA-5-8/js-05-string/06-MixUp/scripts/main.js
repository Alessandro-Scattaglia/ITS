/**
 * Author: Alessandro Scattaglia
 * 
 * Swaps the first two letters of two strings and logs the result.
 * @example
 * // Outputs:
 * // "moao cindo"
 * // "pamma mapa"
 */

function MixUp(str1, str2) {
    let scambio = str2.slice(0, 2) + str1.slice(2);
    str2 = str1.slice(0, 2) + str2.slice(2);

    console.log(scambio.concat(" " + str2));
}

MixUp("ciao", "mondo");
MixUp("mamma", "papa");
