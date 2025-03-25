/**
 * Author: Alessandro Scattaglia
 * 
 * Logs whether books in a collection have been read or not.
 * @example
 * // Outputs:
 * // "Hai già letto Lo Hobbit di J.R.R. Tolkien"
 * // "Non hai ancora letto Il Signore degli Anelli di J.R.R. Tolkien"
 * // "Hai già letto 1984 di George Orwell"
 * // "Non hai ancora letto Il codice Da Vinci di Dan Brown"
 */

let books = [
    { title: "Lo Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "Il Signore degli Anelli", author: "J.R.R. Tolkien", alreadyRead: false },
    { title: "1984", author: "George Orwell", alreadyRead: true },
    { title: "Il codice Da Vinci", author: "Dan Brown", alreadyRead: false }
];

for (let i = 0; i < books.length; i++) {
    if (books[i].alreadyRead) {
        console.log("Hai già letto " + books[i].title + " di " + books[i].author);
    } else {
        console.log("Non hai ancora letto " + books[i].title + " di " + books[i].author);
    }
}
