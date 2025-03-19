let choices = ["blue", "dog", "The Hobbit", "pizza"];

for (let i = 0; i < choices.length; i++) {
    let suffix = "th";
    if (i === 0) {
        suffix = "st";
    } else if (i === 1) {
        suffix = "nd";
    } else if (i === 2) {
        suffix = "rd";
    }
    console.log(`My ${i + 1}${suffix} choice is ${choices[i]}.`);
}