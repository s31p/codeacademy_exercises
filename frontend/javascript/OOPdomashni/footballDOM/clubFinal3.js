var table = document.createElement("table");
var main = document.createElement("tr");
main.innerHTML = "MONTHLY REPORT";
main.style.color = "#fff";
main.style.fontSize = "26px";
main.style.backgroundColor = "#232322";
table.appendChild(main);
var headerR = document.createElement("tr");
headerR.textContent = "Initial statistics, Players:";
headerR.style.border = "1px solid grey";
headerR.style.fontSize = "22px";
headerR.style.backgroundColor = "grey"
table.appendChild(headerR);

var headerRow = document.createElement("th");
headerRow.style.backgroundColor = "#605a54";
headerRow.style.fontSize = "20px";
/*Object.keys(players[0]).forEach(key => {
    let headerCol = document.createElement("td");
    headerCol.textContent = key;
    headerRow.appendChild(headerCol);
  });*/
  //table.appendChild(headerRow);
  //test
  players.forEach(player => {
    let row = document.createElement("tr");
    Object.keys(player).forEach(key => {
      let col = document.createElement("td");
      col.style.backgroundColor = "#b7906e";
      col.textContent = player[key];
      row.appendChild(col);
    });
    table.appendChild(row);
  });

  var headerRow2 = document.createElement("th");
  headerRow2.innerHTML = "Football stars in consideration:"
  headerRow2.style.backgroundColor = "#605a54";
headerRow2.style.fontSize = "20px";
  table.appendChild(headerRow2);

  footballStars.forEach(player => {
    let row = document.createElement("tr");
    Object.keys(player).forEach(key => {
      let col = document.createElement("td");
      col.style.backgroundColor = "#b7906e";
      col.textContent = player[key];
      row.appendChild(col);
    });
    table.appendChild(row);
  });

  var newHeader = document.createElement("th");
  newHeader.innerHTML = "Points:";
  headerR.appendChild(newHeader);
  document.body.appendChild(table);


var createClub = new Object();

createClub.name="Milan";
createClub.noOfSeats = 200;
createClub.noOfGames = 30;
createClub.jerseysSold;
createClub.score = 0;
createClub.goal;
createClub.totalScore = 0;
createClub.seatsTotal;
createClub.damage;
createClub.seatsTaken;
var dataContainer = document.createElement("div");
document.body.appendChild(dataContainer);

createClub.dailySales = function() {
this.seatsTaken =  Math.round(calculatePercent2(getRandomNumber(60, 80), this.noOfSeats));
var ticketPrice = getRandomNumber(25, 35);


this.goal = calculatePercent(30);
if(this.goal ===false){
    this.score = 0;
    this.jerseysSold = Math.round(FanShop(this.seatsTaken, 10) * 5);
    console.log("Fanshop-total sold: " + this.jerseysSold + "$");
    var par1 = document.createElement("p");
    par1.innerHTML = "Fanshop-total sold: " + this.jerseysSold + "$";
    dataContainer.appendChild(par1);
} else if (this.goal === true) {
    this.score = 1;

    var keys = Object.keys(players);
            var p = keys.length;
            console.log('ovde', players.length)
            var index = Math.floor(Math.random() * p);
            var randomKey = keys[index];
            var player1 = players[randomKey];
            player1.points+=1;

          
            console.log("The team scored a goal: "+ "Player- " ,player1);

            var par3 = document.createElement("p");
    par3.innerHTML = "The team scored a goal: "+ "Player- "  +player1.name +", Points: " +player1.points;
    dataContainer.appendChild(par3);

    this.jerseysSold = Math.round(FanShop(this.seatsTaken, 25) * 5);
            console.log("Fanshop-total sold: " + this.jerseysSold + "$");

            var par2 = document.createElement("p");
    par2.innerHTML = "Fanshop-total sold: " + this.jerseysSold + "$";
    dataContainer.appendChild(par2);
        } else {
            console.log("error");

        }
        this.seatsTotal = this.seatsTaken * ticketPrice;
        this.damage = Math.round(calculatePercent2(this.seatsTotal, 40));
        console.log(" Ticket Price: " + ticketPrice + "$" + " Seats Taken: " + this.seatsTaken + " total from tickets: " + this.seatsTotal + "$" +" goals: " + this.score);
       
        var par4 = document.createElement("p");
        par4.innerHTML = " Ticket Price: " + ticketPrice + "$" + " Seats Taken: " + this.seatsTaken + " total from tickets: " + this.seatsTotal + "$" +" goals: " + this.score;
       
        dataContainer.appendChild(par4);
        
        return this.score;
       
    }
  
 
 
  createClub.totalSales = function() {
      this.totalScore = 0;
     this.totalFanshop=0;
     this.totalTickets = 0;
     this.hooliganDamage = 0;
     this.jerseysSold2 = 0;
     this.noOfTickets = 0;
     var total = 0;
      for(index = 1; index <= this.noOfGames; index++){
          var par5 = document.createElement("p");
          par5.innerHTML = "Day " + index + ": ";
          par5.style.backgroundColor = "#38200f";
          par5.style.color="white";
          par5.style.fontSize = "20px";
          dataContainer.appendChild(par5);
      console.log("Day " + index + ": ");
           

          this.totalScore += createClub.dailySales();
        
        this.totalFanshop += createClub.jerseysSold;
        this.totalTickets += createClub.seatsTotal;
        this.hooliganDamage += createClub.damage;
        this.jerseysSold2 += Math.round(createClub.jerseysSold / 5);
        this.noOfTickets += createClub.seatsTaken;
        total = (this.totalFanshop + this.totalTickets) - this.hooliganDamage;

        if(index %8 ===0){
            var dismissed = playersPoints.shift();
            console.log("The coach dismissed the player with the lowest score: "+ " Player's name: " +dismissed.name+ ", points: "+dismissed.points);
             
            var par6 = document.createElement("p");
            par6.innerHTML = "The coach dismissed the player with the lowest score: "+ " Player's name: " +dismissed.name+ ", points: "+dismissed.points;
             
            dataContainer.appendChild(par6);

            var addStar = footballStars.splice(Math.floor(Math.random()*footballStars.length), 1);
                   console.log("A football star joined the team: ");
                   var addStar2 = addStar.map(playersData);
                   console.log(addStar2);
                  
                   var par7 = document.createElement("p");
                   par7.innerHTML = "A football star joined the team: " + addStar2;
                   dataContainer.appendChild(par7);

                players.push(addStar2);
                
        }
      }
      console.log("*Total revenues: " + total + "$");
      console.log(this.name + " scored a total of: " + this.totalScore + " goals.");
      console.log("Total jerseys sold: " + this.jerseysSold2 + "; Total from fanshop: "+ this.totalFanshop +"$");
      console.log("Total tickets sold: "+ this.noOfTickets +"; Total from tickets: " + this.totalTickets + "$");
      console.log("Hooligans caused a total damage of: " + this.hooliganDamage + "$");
      
      var table2 = document.createElement("table");
      var finalStat = document.createElement("th");
      finalStat.innerHTML = "FINAL STATISTICS:"
      finalStat.style.backgroundColor = "#fc0f02";
      finalStat.style.color = "#fff";
      finalStat.style.fontSize = "20px";
      table2.appendChild(finalStat);
      var headerRow = document.createElement("th");
      headerRow.style.backgroundColor = "#afadac";
      headerRow.style.fontSize = "20px";
      
      Object.keys(playersPoints[0]).forEach(key => {
        let headerCol = document.createElement("td");
        headerCol.textContent = key;
        headerCol.style.backgroundColor = "#e55149";
        headerRow.appendChild(headerCol);
      });
      table2.appendChild(headerRow);
      
      playersPoints.forEach(player => {
        let row = document.createElement("tr");
        Object.keys(player).forEach(key => {
          let col = document.createElement("td");
          col.textContent = player[key];
          col.style.backgroundColor = "#e55149";
          row.appendChild(col);
        });
        table2.appendChild(row);
      });
     table.appendChild(table2);
     

      var finalData = document.createElement("div");
      
      table.appendChild(finalData);

      var newpar2 = document.createElement("p");
      newpar2.innerHTML = "SUM TOTAL:";
      newpar2.style.backgroundColor = "#701204";
      newpar2.style.color = "#fff";
      newpar2.style.fontSize = "20px";
      finalData.appendChild(newpar2);
      var newpar = document.createElement("p");
      newpar.innerHTML = "*Total revenues: " + total + "$" + "<br/>"+ this.name + " scored a total of: " + this.totalScore + " goals." + "<br/>"+ "Total jerseys sold: " + this.jerseysSold2 + "; Total from fanshop: "+ this.totalFanshop +"$" + "<br/>"+"Total tickets sold: "+ this.noOfTickets +"; Total from tickets: " + this.totalTickets + "$"+ "<br/>"+"Hooligans caused a total damage of: " + this.hooliganDamage + "$.";
      newpar.style.backgroundColor = "#93754f";
      finalData.appendChild(newpar);


  //getPlayers();
     //console.log(players +"Llllllllllllll");
       //    getStars();
       //   var newData = document.createElement("td");
        //  newData.innerHTML = players;
        //  table.appendChild(newData);


         
  }
  createClub.totalSales();
 

  
