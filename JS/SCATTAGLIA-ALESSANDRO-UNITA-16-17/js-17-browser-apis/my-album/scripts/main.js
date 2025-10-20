/**
 * My Album
 * Author: Alessandro Scattaglia
 * Description: Dynamically loads 10 random images in a 4x3 grid. Allows adding/removing images,
 *              drag & drop for rearranging, and remembers the state using localStorage.
 */

const gallery = document.getElementById('gallery');
const addBtn = document.getElementById('addImage');
const removeBtn = document.getElementById('removeImage');

const MAX_IMAGES = 10;

// Load images from localStorage or fetch new ones
let images = JSON.parse(localStorage.getItem('myAlbumImages')) || [];

async function fetchRandomImage() {
  // Picsum provides random images
  return `https://picsum.photos/200?random=${Math.floor(Math.random() * 10000)}`;
}

// Render gallery
async function renderGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img');
    img.src = images[i];
    img.draggable = true;
    img.dataset.index = i;
    gallery.appendChild(img);

    // Drag & Drop events
    img.addEventListener('dragstart', dragStart);
    img.addEventListener('dragover', dragOver);
    img.addEventListener('drop', drop);
    img.addEventListener('dragend', dragEnd);
  }
  localStorage.setItem('myAlbumImages', JSON.stringify(images));
}

// Add new image
addBtn.addEventListener('click', async () => {
  if (images.length < MAX_IMAGES) {
    const newImg = await fetchRandomImage();
    images.push(newImg);
    renderGallery();
  } else {
    alert('Maximum 10 images reached.');
  }
});

// Remove last image
removeBtn.addEventListener('click', () => {
  if (images.length > 0) {
    images.pop();
    renderGallery();
  } else {
    alert('No images to remove.');
  }
});

// Drag & Drop logic
let draggedIndex = null;

function dragStart(e) {
  draggedIndex = e.target.dataset.index;
  e.dataTransfer.effectAllowed = "move";
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  const targetIndex = e.target.dataset.index;
  if (draggedIndex === null || targetIndex === undefined) return;

  // Swap images
  const temp = images[draggedIndex];
  images[draggedIndex] = images[targetIndex];
  images[targetIndex] = temp;

  renderGallery();
}

function dragEnd() {
  draggedIndex = null;
}

// Initial load: fetch images if localStorage is empty
(async function init() {
  if (images.length === 0) {
    for (let i = 0; i < MAX_IMAGES; i++) {
      images.push(await fetchRandomImage());
    }
  }
  renderGallery();
})();
