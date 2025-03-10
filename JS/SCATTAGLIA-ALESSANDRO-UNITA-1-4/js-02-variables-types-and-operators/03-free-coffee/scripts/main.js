/**
 * Author: Alessandro Scattaglia 
 *
 * Logs the total number of coffee cups needed for a lifetime.
 * @example
 * // Outputs: "You will need 58420 cups of coffee to last you until the ripe old age of 99."
 */

let eta = 19;
let max_eta = 99;
let caffe_giornalieri = 2;

let count = (caffe_giornalieri * 365) * (max_eta - eta);

console.log(`You will need ${count} cups of coffee to last you until the ripe old age of ${max_eta}`);
