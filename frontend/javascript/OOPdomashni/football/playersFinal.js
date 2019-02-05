function playersData(item, index){
    var players2 = [" Player name: " +item.name + "," , " points: " + item.points+ " "].join(" ");   
    return players2;
}
function getPlayers(){
    var playersD = players.map(playersData);
    console.log(players.map(playersData));
    return playersD;
    
}
var playersDt = getPlayers();

function getStars() {
    var playersS = footballStars.map(playersData);
    console.log(footballStars.map(playersData));
    return playersS;
}

var playersST = getStars();

var playersPoints = players.sort(function(a, b){
    return a.points - b.points;
});
console.log(playersPoints);
//var dismissed;
//var dismissed = playersPoints.shift();
//console.log("Dismissed player: "+ " Player's name: " +dismissed.name+ ", points: "+dismissed.points);
//function generatePlayers() {
/*var keys = Object.keys(footballStars);
var p = keys.length;
console.log('ovde',footballStars.length)
var index = Math.floor(Math.random() * p);
var randomKey = keys[index];
var addStar = footballStars[randomKey];*/
//footballStars.pop(addStar);
/*footballStars.forEach(function(person){
if(players.push(addStar) === true){
copy.pop(addStar);
}
});
for(var i=0; i < copy.length; i++){
    addStar = copy[i];
}
}*/
//players.push(addStar);
//console.log("Player: " +addStar.name,  ", points: "+addStar.points);