/**
 * Author: Alessandro Scattaglia
 * 
 * Checks if a name is part of a group and logs the result.
 * @example
 * // Outputs:
 * // "artur is NOT part of the group"
 */

function aContainsB(group, name) {
    if (group.indexOf(name) != -1) {
        console.log(name + " IS part of the group");
    } else {
        console.log(name + " is NOT part of the group");
    }
}

let group = "Mary, James, and John";
let name = "artur";
aContainsB(group, name);
