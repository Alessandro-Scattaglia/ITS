let babies = [];

let baby1 = {
  name: "Lyla",
  months: 8,
  noises: ["laugh", "giggle"],
  favoriteFoods: ["banana", "carrot"]
};
babies.push(baby1);

babies.push({
  name: "Milo",
  months: 10,
  noises: ["cry", "coo"],
  favoriteFoods: ["apple", "pear"]
});

let baby3 = Object.assign({}, {
  name: "Sofia",
  months: 6,
  noises: ["babble", "squeal"],
  favoriteFoods: ["pumpkin", "avocado"]
});
babies.push(baby3);

function createBaby(name, months, noises, favoriteFoods) {
  return {
    name,
    months,
    noises,
    favoriteFoods
  };
}
let baby4 = createBaby("Leo", 9, ["grunt", "hum"], ["peach", "zucchini"]);
babies.push(baby4);

for (let baby of babies) {
  for (let key in baby) {
    console.log(`[${key}: ${JSON.stringify(baby[key])}]\n\n\n\n`);  
  }
}

for (let baby of babies) {
  baby.outfit = {
    shirt: "blue",
    pants: "gray",
    shoes: "white"
  };
}

for (let baby of babies) {
  console.log(baby);
}


