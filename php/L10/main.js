const TITOLO = 'Serie TV';
const TABELLA = document.getElementById('tabella');
document.getElementById('titolo').textContent = TITOLO;

const URL = 'https://api.tvmaze.com/singlesearch/shows?q=';

const PREFERITI = ['Breaking Bad', 'Lost', 'The Office']
function printer(show){
fetch(URL + show)
    .then( risposta => risposta.json())
    .then(serie => {
        console.log(serie.name)
        const TR = document.createElement('tr');
        const TD1 = document.createElement('td');
        TD1.textContent = serie.name

        const TD2 = document.createElement('td')
        const TD3 = document.createElement('td')
        TD3.textContent = serie.genres.join(',')
        const TD4 = document.createElement('td')
        const IMG = document.createElement('img')
        IMG.setAttribute("src", serie.image.medium);
        TD4.append(IMG)
        TR.append(TD1,TD2,TD3,TD4);

        TABELLA.querySelector('tbody').append(TR);



    })

}

PREFERITI.forEach(s => printer(s))