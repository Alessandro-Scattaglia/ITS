let items = [
    "Pizza", "Sushi", "Pasta", "Hamburger", "Insalata", "Tacos", "Curry", "Ramen", "Paella", "Lasagna",
    "Moby Dick", "1984", "Il Signore degli Anelli", "Harry Potter", "Orgoglio e Pregiudizio",
    "Il Piccolo Principe", "Don Chisciotte", "Odissea", "I Promessi Sposi", "Il Grande Gatsby",
    "Gelato", "Cioccolato", "Caffè", "Tè", "Bistecca", "Formaggio", "Pane", "Vino", "Mela", "Banana"
];
//set interval to 1 second
let i = 0;

let interval = setInterval(() => {
    console.log(items[i]);
    i++;

    if (i >= items.length) {
        clearInterval(interval);
    }
}, 1000);


//set timeout to 1 second
let j = 0;
function printItem() {
    if (j < items.length) {
        console.log(items[j]);
        setTimeout(printItem, 1000);
        j++;
    }
}

console.log(printItem());
