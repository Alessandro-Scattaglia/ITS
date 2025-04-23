const flightsTable = document.getElementById('flights-table');
let flights = [];

const statuses = ['DEPARTING', 'ON_TIME', 'DELAYED', 'ARRIVED'];

function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function generateFlight() {
    const airlines = ['Alitalia', 'Lufthansa', 'Ryanair', 'EasyJet', 'Air France'];
    const cities = ['Roma', 'Milano', 'Parigi', 'Londra', 'Madrid', 'Berlino'];
    const gates = ['A1', 'B3', 'C2', 'D4', 'E5'];

    return {
        id: Date.now() + Math.random(),
        airline: getRandomItem(airlines),
        flightNumber: getRandomItem(airlines).substring(0, 2).toUpperCase() + Math.floor(100 + Math.random() * 900),
        origin: getRandomItem(cities),
        scheduled: new Date(Date.now() + Math.random() * 3600000),
        gate: getRandomItem(gates),
        statusIndex: 0,
        timestamp: Date.now()
    };
}

function updateStatuses() {
    for (let flight of flights) {
        if (flight.statusIndex < statuses.length - 1) {
            flight.statusIndex++;
        }
    }
}

function cleanArrivedFlights() {
    const now = Date.now();
    flights = flights.filter(flight => {
        const isArrived = statuses[flight.statusIndex] === 'ARRIVED';
        const tooOld = now - flight.timestamp > 60000;
        return !(isArrived && tooOld);
    });
}

function drawFlights() {
    flights.sort((a, b) => a.scheduled - b.scheduled);
    flightsTable.innerHTML = '';

    for (let flight of flights) {
        const row = document.createElement('tr');
        const status = statuses[flight.statusIndex];
        row.innerHTML = `
            <td>${flight.airline}</td>
            <td>${flight.flightNumber}</td>
            <td>${flight.origin}</td>
            <td>${flight.scheduled.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
            <td>${flight.gate}</td>
            <td class="status-${status.toLowerCase()}">${status.replace('_', ' ')}</td>
        `;
        flightsTable.appendChild(row);
    }
}

function simulate() {
    updateStatuses();
    cleanArrivedFlights();
    flights.push(generateFlight());
    drawFlights();
}

setInterval(simulate, 5000);
