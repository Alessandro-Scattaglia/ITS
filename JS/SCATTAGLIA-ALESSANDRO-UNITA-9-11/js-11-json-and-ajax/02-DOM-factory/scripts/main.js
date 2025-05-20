/**
 * Author: Alessandro Scattaglia
 * 
 * Parses JSON strings representing a factory and a list of cars,
 * then displays their details in separate lists on the page.
 * 
 * @example
 * // Factory list shows:
 * // "id: 101"
 * // "name: AutoBuild Co."
 * // "location: Detroit, MI"
 * // Cars list shows:
 * // "Toyota Corolla (2021)"
 * // "Tesla Model 3 (2022)"
 * // "Ford Focus (2019)"
 */

const factoryJSON = `{
    "id": 101,
    "name": "AutoBuild Co.",
    "location": "Detroit, MI"
  }`;

const carsJSON = `[
    { "id": 1, "make": "Toyota", "model": "Corolla", "year": 2021 },
    { "id": 2, "make": "Tesla", "model": "Model 3", "year": 2022 },
    { "id": 3, "make": "Ford", "model": "Focus", "year": 2019 }
  ]`;

// Parsing
const factory = JSON.parse(factoryJSON);
const cars = JSON.parse(carsJSON);

// Display factory details
const factoryList = document.getElementById('factory-list');
for (const key in factory) {
  const li = document.createElement('li');
  li.textContent = `${key}: ${factory[key]}`;
  factoryList.appendChild(li);
}

// Display cars details
const carsList = document.getElementById('cars-list');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = `${car.make} ${car.model} (${car.year})`;
  carsList.appendChild(li);
});
