// JSON string (semplificata per esempio)
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
  
  // Scrittura della factory
  const factoryList = document.getElementById('factory-list');
  for (const key in factory) {
    const li = document.createElement('li');
    li.textContent = `${key}: ${factory[key]}`;
    factoryList.appendChild(li);
  }
  
  // Scrittura delle auto
  const carsList = document.getElementById('cars-list');
  cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = `${car.make} ${car.model} (${car.year})`;
    carsList.appendChild(li);
  });
  