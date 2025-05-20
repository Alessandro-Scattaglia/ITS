/**
 * Author: Alessandro Scattaglia
 * 
 * Controls a cat animation moving left and right on the screen.
 * Includes buttons to start, stop, speed up, and slow down the cat's movement.
 * Shows current animation speed in milliseconds.
 * 
 * @example
 * // Click "Start" to begin cat walking.
 * // Click "Faster" or "Slower" to adjust speed.
 * // Click "Stop" to halt animation.
 * // Info text updates with speed (e.g., "Speed: 40ms").
 */

const cat = document.getElementById('cat');
const startBtn = document.getElementById('start-btn');
const fasterBtn = document.getElementById('faster-btn');
const slowerBtn = document.getElementById('slower-btn');
const stopBtn = document.getElementById('stop-btn');
const info = document.getElementById('info');

let position = 0;
let direction = 1;
let speed = 50; // ms
let intervalId = null;

function updateInfo() {
  info.textContent = `Speed: ${speed}ms`;
}

function catWalk() {
  const screenWidth = window.innerWidth;
  const catWidth = cat.width;

  position += 10 * direction;
  cat.style.left = position + 'px';

  if (position + catWidth >= screenWidth || position <= 0) {
    direction *= -1;
    cat.style.transform = direction === -1 ? 'scaleX(-1)' : 'scaleX(1)';
  }
}

function startCat() {
  if (!intervalId) {
    intervalId = setInterval(catWalk, speed);
    setButtons(true);
  }
}

function stopCat() {
  clearInterval(intervalId);
  intervalId = null;
  setButtons(false);
}

function fasterCat() {
  if (speed > 10) {
    speed -= 10;
    restartInterval();
  }
}

function slowerCat() {
  speed += 10;
  restartInterval();
}

function restartInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(catWalk, speed);
  updateInfo();
}

function setButtons(running) {
  startBtn.disabled = running;
  stopBtn.disabled = !running;
  fasterBtn.disabled = !running;
  slowerBtn.disabled = !running;
  updateInfo();
}

// Event listeners
startBtn.addEventListener('click', startCat);
stopBtn.addEventListener('click', stopCat);
fasterBtn.addEventListener('click', fasterCat);
slowerBtn.addEventListener('click', slowerCat);

// Initialize state
setButtons(false);
updateInfo();
