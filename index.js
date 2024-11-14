const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

// Fonction pour générer un nombre entier aléatoire entre min et max
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const FILE_PATH = './data.json';

const makeCommit = (n) => {
    if (n === 0) return simpleGit().push();

    const x = getRandomInt(0, 54);  // Remplace random.int(0, 54) par getRandomInt
    const y = getRandomInt(0, 6);   // Remplace random.int(0, 6) par getRandomInt
    const DATE = moment().subtract(1, 'y').add(1, 'd')
        .add(x, 'w').add(y, 'd').format();

    const data = { date: DATE };
    console.log(DATE);

    jsonfile.writeFile(FILE_PATH, data, () => {
        simpleGit().add(FILE_PATH).commit(DATE, { '--date': DATE },
            makeCommit.bind(this, --n));
    });
};

makeCommit(500);  // Choisis un nombre ici pour le nombre de commits



