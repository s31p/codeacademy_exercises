/*A Formula 1 championship race is starting up. There are 20 racers
 that drive 80 laps. Each lap is 10km.
  Every racecar has speed, fuel, and tire health.
   Every car has a different interval of going to the pit stop. 
   The pit stop refuels the fuel tank and changes the tires, 
   however it can change to different tires according to the conditions,
    and can give the racecar different upgrades every time the car 
    enters the pitstop.
     Each lap, every driver has a 5% chance to crash his car and end the race.
      Who will win?*/

     
      function main() {
       
        this.lap = 10;
        this.laps = 80; //80
        this.kmTotal = this.lap * this.laps;
        this.timeTotal =  Number(this.kmTotal / this.speed);
    
          function Racer(id, speed, fuel, tireHealth, isRacing, timeTotal) {
            this.id = id; 
            this.speed = speed;
            this.speed = getRandomNumber(190, 300);
              this.fuel = fuel;
              this.tireHealth = tireHealth;
              this.isRacing = isRacing;
              this.timeTotal = timeTotal;
             
              //this.kmTotal = this.lap * this.laps;
              this.timeTotal =  (800 / this.speed).toFixed(4);
             
    
          } //racer constructor

          this.generateRacers = function() {
            this.isRacing = true;
            this.racers = [];
        for(let i = 1; i <= 20; i++){
           
            this.racerx = new Racer("Racer No: "+i, this.speed,  getRandomNumber(80, 110), 100, true, this.timeTotal);
           
            this.racers.push(this.racerx);
            console.log(this.racers);
           
        }
    
        } //generateRacers



        this.lapsData = function() {
            this.generateRacers();
           
                  for(let j = 1; j <= this.laps; j++){
                      console.log("Lap No: " + j);
                      var newArr = [];
                      
                      this.racers.filter(function(racer){
                        

                      
                     //console.log(racer, "ppppppp");
                     this.carcrash = calculatePercent(1);
                     if(this.carcrash){
                        racer.isRacing = false;
                        console.log("this car crashed: "+ racer.id);
                        
                    } 
                    if(racer.isRacing==true){
                        newArr.push(racer); 
                    } 
                   return newArr;

                     });
                                     
                                   
                 console.log(newArr,"kkkkkkkk");

                 newArr.forEach(racer => {

                    

                    if(j % getRandomNumber(2, 9)==0){
                        if(racer.speed >= 270){
                         racer.tireHealth += getRandomNumber(-40, -65);
                         racer.fuel += -50;
                        } else if(racer.speed >= 230 < 270){
                            racer.tireHealth += getRandomNumber(-30, -50);
                            racer.fuel += -30;
                        } else{
                    racer.tireHealth += getRandomNumber(-20, -40);
                    racer.fuel += -20;
                        }
                   console.log(racer);
                   

                    if(racer.tireHealth < 30 || racer.fuel < 30){
                        var pitstop = new Pitstop();
                        racer.tireHealth = pitstop.changeTire(racer.tireHealth);
                        racer.fuel += pitstop.addFuel(racer.fuel);
                        racer.timeTotal =  (+racer.timeTotal + +0.5).toFixed(4);
                        console.log(racer.id + " went to the pitstop");
                        console.log(racer);
                    }
                }


            });

            newArr.sort(function(a, b){return a.timeTotal - b.timeTotal;});
            console.log("These are the final racers: " , newArr);
            console.log("The winner is: ", newArr[0]);

                  } //forloop no of laps






                }//laps data
                this.lapsData();

        } //main