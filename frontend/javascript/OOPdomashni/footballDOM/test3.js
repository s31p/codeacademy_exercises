var players = [{name: 'Mario', points: 10}, {name:'Marko', points: 8}, {name: 'Andrea', points: 11}, {name: 'Milan', points: 5},{name: 'Matteo', points: 12}, {name: 'Dario', points: 3}, {name: 'Davide', points: 6}, {name:'Darko', points: 16}, {name: 'Fabio', points: 5}, {name: 'Paolo', points: 6}, {name: 'Pablo', points: 7}, {name: 'Goran', points: 13}, {name:'Biaggio', points: 4}, {name: 'Ronaldo', points: 4},{name: 'Andreas', points: 8},{name: 'Paulo', points: 17}, {name: 'Vasco', points: 13}, {name: 'Tino', points: 1}, {name: 'Adriano', points: 6}, {name:'Alessandro', points: 10}, {name: 'Alessio', points: 2}, {name: 'Michele', points: 12}];
    
var footballStars = [{name: 'David', points: 23}, {name: 'Freddie', points: 30}, {name: 'Andrey', points: 24}, {name: 'Cristiano', points: 26}];

var playersPoints = players.sort(function(a, b) {
  return a.points - b.points;
});

for (var i = 0; i <= 30; i++) {
  if (i % 8 === 0) {
    var dismissed = playersPoints.shift();
    console.log("The coach dismissed the player with the lowest score: " + " Player's name: " + dismissed.name + ", points: " + dismissed.points);
    var addStar = footballStars.splice(Math.floor(Math.random() * footballStars.length), 1)[0];
    console.log("A football star joined the team: ", addStar);
    players.push(addStar);
  }
}

var table = document.createElement("table");
var headerRow = document.createElement("th");
headerRow.style.backgroundColor = "#afadac";
headerRow.style.fontSize = "20px";

Object.keys(players[0]).forEach(key => {
  let headerCol = document.createElement("td");
  headerCol.textContent = key;
  headerRow.appendChild(headerCol);
});
table.appendChild(headerRow);

players.forEach(player => {
  let row = document.createElement("tr");
  Object.keys(player).forEach(key => {
    let col = document.createElement("td");
    col.textContent = player[key];
    row.appendChild(col);
  });
  table.appendChild(row);
});
document.body.appendChild(table);