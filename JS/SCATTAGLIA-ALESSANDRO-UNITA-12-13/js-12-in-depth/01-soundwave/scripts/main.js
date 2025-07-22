/**
 * @description Transforms each word in the array by capitalizing each character in turn,
 * adding an increasing number of exclamation marks. Stores all transformed versions
 * in the result array. This demonstrates nested loops, string manipulation, and array methods.
 * @author Alessandro Scattaglia
 * @output
 * Quack!
 * qUack!!
 * quAck!!!
 * quaCk!!!!
 * quacK!!!!!
 * Sneeze!
 * sNeeze!!
 * snEeze!!!
 * sneEze!!!!
 * sneeZe!!!!!
 * sneezE!!!!!!
 * Boom!
 * bOom!!
 * boOm!!!
 * booM!!!!
 */

let noisesArray = ['quack', 'sneeze', 'boom'];
let result = [];

for (let word of noisesArray) {
    for (let i = 0; i < word.length; i++) {
        let word1 = word.toLowerCase().split('');
        word1[i] = word1[i].toUpperCase();
        result.push(word1.join('') + '!'.repeat(i + 1));
    }
}

console.log(result);
