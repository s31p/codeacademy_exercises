
function playersData(item, index){
    var players2 = [" Player name: " +item.name + "," , " points: " + item.points+ " "].join(" ");   
    return players2;
}

var playersPoints = players.sort(function(a, b){
    return a.points - b.points;
});
console.log(playersPoints, "LLL");
//var x = playersPoints.map(playersData);
/*var newdiv9 = document.createElement("div");
newdiv9.innerHTML = playersPoints.name;
document.body.appendChild(newdiv9);*/

