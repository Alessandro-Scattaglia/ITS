function calculator(num) {
    let half = num / 2;
    let square = num * num;
    let area = Math.PI * square ** 2;
    let percentage = (area / square) * 100;

    setTimeout(() => console.log(half), 3000);
    setTimeout(() => console.log(square), 6000);
    setTimeout(() => console.log(area), 9000);
    setTimeout(() => console.log(percentage), 12000);


}

calculator(2);

