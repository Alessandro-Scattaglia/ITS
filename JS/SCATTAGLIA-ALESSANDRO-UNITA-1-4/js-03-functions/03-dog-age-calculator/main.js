function calculateDogAge(dog_age, human_age) {
    dog_human_age = dog_age / 7;
    console.log(`Your dog is ${dog_human_age} years old in human years!`);
    human_age = dog_age * 7;
    console.log(`You are ${human_age} years old in dog years!`);
}
calculateDogAge(7, 1);
calculateDogAge(14, 2);
calculateDogAge(21, 3);
