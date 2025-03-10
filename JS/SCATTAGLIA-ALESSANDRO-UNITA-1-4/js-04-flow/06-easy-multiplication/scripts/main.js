/**
 * Author: Alessandro Scattaglia
 * 
 * Logs the multiplication tables. The first loop outputs the multiplication of numbers from 0 to 10 by 9. 
 * The second loop outputs the full multiplication table (1 to 10).
 * @example
 * // Outputs:
 * // "0 * 9 = 0"
 * // "1 * 9 = 9"
 * // "2 * 9 = 18"
 * // "..."
 * // "10 * 9 = 90"
 * // "1 * 1 = 1"
 * // "1 * 2 = 2"
 * // "1 * 3 = 3"
 * // ...
 * // "10 * 10 = 100"
 * 
 */

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * 9 = ${i * 9}`);
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
