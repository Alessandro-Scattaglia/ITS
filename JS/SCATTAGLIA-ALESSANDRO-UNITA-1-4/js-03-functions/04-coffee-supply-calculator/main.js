function calculateSupply(age, amount_per_day)
{
    max_age = 100;
    count_cups = (amount_per_day * 365) * (max_age - age);
   
    console.log(`You will need ${count_cups} cups of coffee to last you until the age of ${max_age}`);
}


calculateSupply(99,5);
calculateSupply(100,1);
calculateSupply(50,2);
