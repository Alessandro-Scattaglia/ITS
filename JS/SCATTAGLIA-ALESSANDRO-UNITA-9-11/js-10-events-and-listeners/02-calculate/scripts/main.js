/**
 * Author: Alessandro Scattaglia
 * 
 * Performs basic calculations (square, half, percentage, and area of a circle)
 * based on user input and shows the result. Supports both button clicks and Enter key.
 * 
 * @example
 * // Inputs:
 * // - square: 4 → "Result: 16"
 * // - half: 10 → "Result: 5"
 * // - percent: 20 and 50 → "Result: 40%"
 * // - area: 3 → "Result: 28.27"
 * // User can press Enter to trigger the same calculations
 */

function square(num) {
    return num * num;
}

function half(num) {
    return num / 2;
}

function percent(num1, num2) {
    return (num1 / num2) * 100;
}

function area(radius) {
    return Math.PI * radius * radius;
}

document.getElementById('square-button').addEventListener('click', function () {
    const val = parseFloat(document.getElementById('square-input').value);
    document.getElementById('solution').textContent = `Result: ${square(val)}`;
});

document.getElementById('half-button').addEventListener('click', function () {
    const val = parseFloat(document.getElementById('half-input').value);
    document.getElementById('solution').textContent = `Result: ${half(val)}`;
});

document.getElementById('percent-button').addEventListener('click', function () {
    const val1 = parseFloat(document.getElementById('percent1-input').value);
    const val2 = parseFloat(document.getElementById('percent2-input').value);
    document.getElementById('solution').textContent = `Result: ${percent(val1, val2)}%`;
});

document.getElementById('area-button').addEventListener('click', function () {
    const val = parseFloat(document.getElementById('area-input').value);
    document.getElementById('solution').textContent = `Result: ${area(val).toFixed(2)}`;
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            switch (input.id) {
                case 'square-input':
                    document.getElementById('square-button').click();
                    break;
                case 'half-input':
                    document.getElementById('half-button').click();
                    break;
                case 'percent1-input':
                case 'percent2-input':
                    document.getElementById('percent-button').click();
                    break;
                case 'area-input':
                    document.getElementById('area-button').click();
                    break;
            }
        }
    });
});
