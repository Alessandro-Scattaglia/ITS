// Function to clone a simple object (shallow copy, no deep cloning)
function clone(obj) {
  let copy = {}; // New empty object

  // Copy all properties from original to copy
  for (let key in obj) {
    copy[key] = obj[key];
  }

  return copy;
}

// Original object to clone
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

// Clone the object
let clonedPerson = clone(person);

// Change name of the cloned object
clonedPerson.name = "David Jefferson";

// Show both objects to confirm the original is not changed
console.log("Original person name:", person.name);      // Green Mueller
console.log("Cloned person name:", clonedPerson.name);  // David Jefferson
