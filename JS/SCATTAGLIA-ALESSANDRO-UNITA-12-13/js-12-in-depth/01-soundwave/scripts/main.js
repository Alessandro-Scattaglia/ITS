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
