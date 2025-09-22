/**
 * Author: Alessandro Scattaglia
 * Exercise: Delay with Promises
 * Description: This code implements a delay function using JavaScript Promises.
 *              It works with any type of function: regular, arrow, or anonymous.
 *              Example usage: delay(300).then(myFunction);
 */

// Implementation of the delay function using Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // 1. Regular function
  function myFunction() {
    console.log("Regular function executed!");
  }
  delay(1000).then(myFunction);
  
  // 2. Arrow function
  const arrowFunc = () => console.log("Arrow function executed!");
  delay(1500).then(arrowFunc);
  
  // 3. Anonymous function
  delay(2000).then(() => {
    console.log("Anonymous function executed!");
  });
  