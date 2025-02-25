function greaterNum(num1, num2) {
    if (num1 > num2) {
        console.log(`The greatest number of ${num1} and ${num2} is ${num1}`);
    }
    else {
        console.log(`The greatest number of ${num1} and ${num2} is ${num2}`);
    }
}

console.log(greaterNum(99,21));
console.log(greaterNum(2,1));