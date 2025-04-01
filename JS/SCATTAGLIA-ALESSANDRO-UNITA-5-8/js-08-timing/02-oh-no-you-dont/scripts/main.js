/**
 * Author: Alessandro Scattaglia
 * 
 * Demonstrates the use of `setTimeout` to schedule a function execution after a delay and then cancel it using `clearTimeout`.
 * @example
 * // Outputs:
 * // "function cancelled" (after 5 seconds)
 * // No output for "Doing something useful..." because it is cancelled before execution (after 10 seconds).
 */

function useful() {
  console.log("Doing something useful...");
}

let task = setTimeout(useful, 10000);

function cancelUseful() {
  clearTimeout(task);
  console.log("function cancelled");
}

setTimeout(cancelUseful, 5000);

