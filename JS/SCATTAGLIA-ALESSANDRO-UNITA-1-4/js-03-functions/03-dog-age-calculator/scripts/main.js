/**
 * Author: Alessandro Scattaglia
 * 
 * Calculates the dog's age in human years and the human's age in dog years.
 * @example
 * // Outputs: "Your dog is 1 years old in human years!"
 * // Outputs: "You are 49 years old in dog years!"
 * calculateDogAge(7, 1);
 */

function calculateDogAge(dog_age, human_age) {
    dog_human_age = dog_age / 7;
    console.log(`Your dog is ${dog_human_age} years old in human years!`);
    human_age = dog_age * 7;
    console.log(`You are ${human_age} years old in dog years!`);
}

calculateDogAge(7, 1);
calculateDogAge(14, 2);
calculateDogAge(21, 3);
