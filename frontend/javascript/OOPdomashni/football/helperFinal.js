window.getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.calculatePercent = function(percent) {
    return (100 - percent) <= getRandomNumber(0, 100);
}

function calculatePercent2(x, percent) {
    return (x * percent)/100;
}


var players = [
    {name: 'Mario', points: 10}, {name:'Marko', points: 8}, {name: 'Andrea', points: 11}, {name: 'Milan', points: 5},{name: 'Matteo', points: 12}, {name: 'Dario', points: 3}, {name: 'Davide', points: 6}, {name:'Darko', points: 16}, {name: 'Fabio', points: 5}, {name: 'Paolo', points: 6}, {name: 'Pablo', points: 7}, {name: 'Goran', points: 13}, {name:'Biaggio', points: 4}, {name: 'Ronaldo', points: 4},{name: 'Andreas', points: 8},{name: 'Paulo', points: 17}, {name: 'Vasco', points: 13}, {name: 'Tino', points: 1}, {name: 'Adriano', points: 6}, {name:'Alessandro', points: 10}, {name: 'Alessio', points: 2}, {name: 'Michele', points: 12}];


var footballStars = [{name: 'David', points: 23}, {name: 'Freddie', points: 30}, {name: 'Andrey', points: 24}, {name: 'Cristiano', points: 26}];
var copy =[];
