/**
 * Author: Alessandro Scattaglia
 * 
 * Converts a singular noun to its plural form based on the given number and logs the result.
 * @example
 * // Outputs:
 * // "1 cat"
 * // "5 cats"
 * // "3 sheep"
 * // "2 mice"
 * // "4 geese"
 * // "7 deer"
 */

function oneToMany(noun, number) {
    let pluralNoun = noun;

    if (number > 1) {
        switch (noun) {
            case "sheep":
                pluralNoun = "sheep";
                break;
            case "mouse":
                pluralNoun = "mice";
                break;
            case "goose":
                pluralNoun = "geese";
                break;
            case "deer":
                pluralNoun = "deer";
                break;
            default:
                pluralNoun = noun + "s";
        }
    }

    console.log(`${number} ${pluralNoun}`);
}

oneToMany("cat", 1);
oneToMany("cat", 5);
oneToMany("sheep", 3);
oneToMany("mouse", 2);
oneToMany("goose", 4);
oneToMany("deer", 7);
