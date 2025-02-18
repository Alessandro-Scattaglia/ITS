function squareNumber (num)
{
    console.log(`The result of squaring the number ${num} is ${Math.pow(num,2)}`);
}
squareNumber(4);
function halfNumber (num1)
{
    console.log(`Half of ${num1} is ${num1/2}`);
}


halfNumber(5);

function percentOf (n1,n2)
{
    percentage = n1/n2*100;
    console.log(`${n1}  is ${percentage}% of ${n2}`);
}
percentOf(2,4);

function areaOfCircle (radius)
{
    area = (radius**2)*Math.PI;
    console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}`);
}

areaOfCircle(2);
