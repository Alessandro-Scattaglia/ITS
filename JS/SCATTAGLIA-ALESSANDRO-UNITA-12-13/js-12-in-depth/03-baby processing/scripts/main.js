/**
 * @description Manages an array of baby objects using object literals and a factory function.
 * Each baby has a name, age in months, noises, favorite foods, and an outfit.
 * Includes functions to describe the outfit and simulate feeding with random food order.
 * Demonstrates object construction, method abstraction, array shuffling, and string formatting.
 * @author Alessandro Scattaglia
 * @output
 * Emma is wearing a red shirt, black pants and yellow shoes
 * Emma is eating peas and rice
 * Luca is wearing a red shirt, black pants and yellow shoes
 * Luca is eating melon and grapes
 * Chloe is wearing a red shirt, black pants and yellow shoes
 * Chloe is eating broccoli and potato
 * Noah is wearing a red shirt, black pants and yellow shoes
 * Noah is eating corn and strawberry
 */

let babies = [];

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

for (let baby of babies) {
  baby.outfit = {
    shirt: "red",
    pants: "black",
    shoes: "yellow"
  };
}

function getBabyOutfit(baby) {
  return baby.name + " is wearing a " + baby.outfit.shirt + " shirt, " +
         baby.outfit.pants + " pants and " + baby.outfit.shoes + " shoes";
}

function feedBaby(baby) {
  let foods = baby.favoriteFoods.slice();
  foods.sort(() => Math.random() - 0.5);

  let sentence = baby.name + " is eating ";
  if (foods.length === 1) {
    sentence += foods[0];
  } else {
    let last = foods.pop();
    sentence += foods.join(", ") + " and " + last;
  }

  console.log(sentence);
}

for (let baby of babies) {
  console.log(getBabyOutfit(baby));
  feedBaby(baby);
}
