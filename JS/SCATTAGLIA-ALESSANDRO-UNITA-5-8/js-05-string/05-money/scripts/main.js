/**
 * Author: Alessandro Scattaglia
 * 
 * Logs the total amount in dollars and converts it to euros.
 * @example
 * // Outputs:
 * // "1 dollars"
 * // "10 dollars"
 * // "1000000 dollars"
 * // "1 dollars are 0.92 in euro"
 * // "10 dollars are 9.2 in euro"
 * // "1000000 dollars are 920000 in euro"
 */

function money(total) {
    console.log(total + " dollars");
}

function money_convert(total) {
    const tassoCambio = 0.92;
    let euro = total * tassoCambio;
    console.log(total + " dollars are " + euro + " in euro");
}

money(1);
money(10);
money(1000000);

money_convert(1);
money_convert(10);
money_convert(1000000);