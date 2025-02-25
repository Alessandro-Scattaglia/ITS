function calculator(num) {
    let half = num / 2;  
    let square = half * half; 
    let area = Math.PI * square ** 2;  
    let percentage = (area / square) * 100;  

    return { area, percentage }; 
}

console.log(calculator(2));
