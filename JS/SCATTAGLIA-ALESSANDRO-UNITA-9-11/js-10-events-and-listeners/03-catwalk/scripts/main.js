/**
 * Author: Alessandro Scattaglia
 * 
 * Animates a cat image walking back and forth across the screen.
 * When the cat reaches the center, it stops, changes GIF for 10 seconds,
 * then resumes walking in the same direction.
 * 
 * @example
 * // The cat walks left and right across the screen.
 * // When it reaches the center: pauses, switches to an animated GIF for 10s, then continues.
 */

const cat = document.getElementById('cat');
let position = 0;
let direction = 1;
let walkTimer = null;
let originalSrc = cat.src;
let alternateSrc = 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'; 

function catWalk() {
  const screenWidth = window.innerWidth;
  const catWidth = cat.width;

  position += 10 * direction;
  cat.style.left = position + 'px';

  if (position + catWidth >= screenWidth || position <= 0) {
    direction *= -1;
    cat.style.transform = direction === -1 ? 'scaleX(-1)' : 'scaleX(1)';
  }

  const center = (screenWidth - catWidth) / 2;
  if (Math.abs(position - center) < 10) {
    clearInterval(walkTimer); 
    cat.src = alternateSrc;
    setTimeout(() => {
      cat.src = originalSrc;
      walkTimer = setInterval(catWalk, 50);
    }, 10000);
  }
}

walkTimer = setInterval(catWalk, 50);
