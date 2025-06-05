// Array to store all babies
let babies = [];

// Create baby objects and add them to the array
let baby1 = {
  name: "Emma",
  months: 8,
  noises: ["chuckle", "snicker"],
  favoriteFoods: ["rice", "peas"]
};
babies.push(baby1);

babies.push({
  name: "Luca",
  months: 10,
  noises: ["whine", "murmur"],
  favoriteFoods: ["grapes", "melon"]
});

let baby3 = {
  name: "Chloe",
  months: 6,
  noises: ["yawn", "sigh"],
  favoriteFoods: ["broccoli", "potato"]
};
babies.push(baby3);

function createBaby(name, months, noises, favoriteFoods) {
  return {
    name,
    months,
    noises,
    favoriteFoods
  };
}

let baby4 = createBaby("Noah", 9, ["grunt", "whistle"], ["strawberry", "corn"]);
babies.push(baby4);

// Add outfit to each baby
for (let baby of babies) {
  baby.outfit = {
    shirt: "red",
    pants: "black",
    shoes: "yellow"
  };
}

// Function that returns a sentence with the baby's outfit
function getBabyOutfit(baby) {
  return baby.name + " is wearing a " + baby.outfit.shirt + " shirt, " +
         baby.outfit.pants + " pants and " + baby.outfit.shoes + " shoes";
}

// Function that prints what the baby is eating (random order)
function feedBaby(baby) {
  let foods = baby.favoriteFoods.slice(); // Copy the array
  foods.sort(() => Math.random() - 0.5); // Shuffle it

  let sentence = baby.name + " is eating ";
  if (foods.length === 1) {
    sentence += foods[0];
  } else {
    let last = foods.pop();
    sentence += foods.join(", ") + " and " + last;
  }

  console.log(sentence);
}

// Run both functions on all babies
for (let baby of babies) {
  console.log(getBabyOutfit(baby));
  feedBaby(baby);
}
