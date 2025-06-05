// Function to clone only string properties of an object recursively
function cloneStrings(obj) {
  let copy = {};
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === "string") {
      copy[key] = value;           // Copy string properties
    } else if (typeof value === "object" && value !== null) {
      copy[key] = cloneStrings(value); // Recursively clone nested objects
    }
    // ignore other types
  }
  return copy;
}

// Example object from previous exercise
let person = {
  name: 'Green Mueller',
  email: 'Rigoberto_Muller47@yahoo.com',
  address: '575 Aiden Forks',
  bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
  active: false,
  salary: 37993,
  birth: new Date('1965-04-18T13:38:00'),
  bankInformation: {
    amount: '802.04',
    date: new Date('2012-02-02'),
    business: 'Bernhard, Kuhn and Stehr',
    name: 'Investment Account 8624',
    type: 'payment',
    account: '34889694'
  }
};

// Clone only string properties
let clonedStrings = cloneStrings(person);

console.log(clonedStrings);
