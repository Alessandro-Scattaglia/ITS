/**
 * Author: Alessandro Scattaglia
 * 
 * Logs recipe details including name, ingredients, and portions.
 * @example
 * // Outputs:
 * // "Il nome della ricetta è Salame al Cioccolato"
 * // "Gli ingredienti necessari sono: pane, cioccolato, burro, sale"
 * // "Il numero di porzioni è: 4"
 */




let recipe = {
    name: "Salame al Cioccolato",
    ingredients: ["pane", "cioccolato", "burro", "sale"],
    porzioni: 4
};


console.log("Il nome della ricetta è " + recipe.name);
console.log("Gli ingredienti necessari sono: " + recipe.ingredients);
console.log("Il numero di porzioni è: " + recipe.porzioni);




//bonus
let recipes = [
    {
        name: "Pasta alla Carbonara",
        ingredients: ["pasta", "uova", "guanciale", "pecorino", "pepe"],
        porzioni: 2
    },
    {
        name: "Tiramisù",
        ingredients: ["savoiardi", "mascarpone", "caffè", "uova", "zucchero", "cacao"],
        porzioni: 6
    },
    {
        name: "Pizza Margherita",
        ingredients: ["farina", "acqua", "lievito", "pomodoro", "mozzarella", "basilico"],
        porzioni: 1
    },
    {
        name: "Salame al Cioccolato",
        ingredients: ["pane", "cioccolato", "burro", "sale"],
        porzioni: 4
    }
];

for (i = 0; i < recipes.length; i++) {
    console.log("La ricetta " + (i + 1) + " è: " + recipes[i].name);
    console.log("Gli ingredienti necessari sono: " + recipes[i].ingredients);
    console.log("Il numero di porzioni è: " + recipes[i].porzioni);

}
