/**
 * Author: Alessandro Scattaglia
 * 
 * Generates a short sentence using user-provided noun, adjective, and person name,
 * and displays it when a button is clicked.
 * 
 * @example
 * // User inputs: noun = "pizza", adjective = "spicy", person = "Alessandro"
 * // On click: displays "Alessandro really likes spicy pizza."
 */

document.getElementById('gen-button').addEventListener('click', makeStory);

function makeStory() {
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;

    const story = `${person} really likes ${adjective} ${noun}.`;

    document.getElementById('story').textContent = story;
}
