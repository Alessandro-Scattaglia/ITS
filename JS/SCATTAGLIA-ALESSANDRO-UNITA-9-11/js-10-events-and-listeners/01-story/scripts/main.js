
document.getElementById('gen-button').addEventListener('click', makeStory);

function makeStory() {
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;


    const story = `${person} really likes ${adjective} ${noun}.`;


    document.getElementById('story').textContent = story;
}
