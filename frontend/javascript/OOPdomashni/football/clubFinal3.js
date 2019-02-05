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

createClub.dailySales = function() {
this.seatsTaken =  Math.round(calculatePercent2(getRandomNumber(60, 80), this.noOfSeats));
var ticketPrice = getRandomNumber(25, 35);

this.goal = calculatePercent(30);
if(this.goal ===false){
    this.score = 0;
    this.jerseysSold = Math.round(FanShop(this.seatsTaken, 10) * 5);
    console.log("Fanshop-total sold: " + this.jerseysSold + "$");

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

    this.jerseysSold = Math.round(FanShop(this.seatsTaken, 25) * 5);
            console.log("Fanshop-total sold: " + this.jerseysSold + "$");
        } else {
            console.log("error");

        }
        this.seatsTotal = this.seatsTaken * ticketPrice;
        this.damage = Math.round(calculatePercent2(this.seatsTotal, 40));
        console.log(" Ticket Price: " + ticketPrice + "$" + " Seats Taken: " + this.seatsTaken + " total from tickets: " + this.seatsTotal + "$" +" goals: " + this.score);
       

        
        return this.score;
       
    }
  
 // createClub.dailySales();
 
  createClub.totalSales = function() {
      this.totalScore = 0;
     this.totalFanshop=0;
     this.totalTickets = 0;
     this.hooliganDamage = 0;
     this.jerseysSold2 = 0;
     this.noOfTickets = 0;
     var total = 0;
      for(index = 1; index <= this.noOfGames; index++){
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
             
            var addStar = footballStars.splice(Math.floor(Math.random()*footballStars.length), 1);
                   console.log("A football star joined the team: ");
                   var addStar2 = addStar.map(playersData);
                   console.log(addStar2);
                  // console.log(addStar.map(playersData));
                // document.getElementById("par").innerHTML = addStar.map(playersData);
                players.push(addStar2);
                 //var newstar2 = Object.assign({}, players.push(addStar2));
                 //console.log(newstar2, "PPPPPPPPPPPP");
          
                 //console.log(addStar2.name, "PPPPPPPPPPPPPP");
          
        }
      }
      console.log("*Total revenues: " + total + "$");
      console.log(this.name + " scored a total of: " + this.totalScore + " goals.");
      console.log("Total jerseys sold: " + this.jerseysSold2 + "; Total from fanshop: "+ this.totalFanshop +"$");
      console.log("Total tickets sold: "+ this.noOfTickets +"; Total from tickets: " + this.totalTickets + "$");
      console.log("Hooligans caused a total damage of: " + this.hooliganDamage + "$");
      
  //getPlayers();
     console.log(players);
           getStars();
  }
  createClub.totalSales();
 