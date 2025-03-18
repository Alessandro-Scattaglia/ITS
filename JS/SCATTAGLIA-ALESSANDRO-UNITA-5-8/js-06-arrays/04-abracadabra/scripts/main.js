let str = "Abracadabra";
let modifiedStr = str.slice(0, 3) + "X" + str.slice(4);
console.log(modifiedStr);




//2

let str1 = "Abracadabra";
let arr = str1.split('');
arr[3] = 'X';
let modifiedStr1 = arr.join('');
console.log(modifiedStr1);



//3

let str2 = "Abracadabra";
let modifiedStr2 = str2.replace(str2[3], 'X');
console.log(modifiedStr2);