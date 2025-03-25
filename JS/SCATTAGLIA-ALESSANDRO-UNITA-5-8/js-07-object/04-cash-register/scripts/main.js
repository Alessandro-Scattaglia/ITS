/**
 * Author: Alessandro Scattaglia
 * 
 * Calculates the total cost of items in a shopping cart.
 * @example
 * // Outputs:
 * // "Il costo della spesa totale è 60.55"
 */

function cashRegister(cartForParty) {
    let total = 0;
    for (let chiave in cartForParty) {
        total += parseFloat(cartForParty[chiave]);
    }
    console.log(`Il costo della spesa totale è ${total}`);
}

let cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

cashRegister(cartForParty);
