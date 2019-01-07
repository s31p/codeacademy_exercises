/* An old woman has 3 cats. She has to feed 
them every day for one week. The cats’ 
names are Tabby, Lizzie and Mary. Tabby
 likes fish and Lizzy likes chicken. 
 Mary eats anything you give her. 
 Help the woman feed her cats by writing a 
 script that will feed them for a week. 
 The actual feeding procedure is: 
 console.log(nameofcat + “ started eating fish/
    chicken/whatever”);
    */





   document.body.style.backgroundColor = "#b3ffd9";

    var myBox = document.getElementById("myDiv");
    myBox.style.height = "500px";
    myBox.style.width = "600px";
    myBox.style.backgroundColor = " #3d5c5c";
    myBox.style.position = "absolute";
    myBox.style.left = "350px";
    myBox.style.top = "100px";
    myBox.style.border = "1px solid  #4d0f00";
    var par = document.createElement("p");
myBox.appendChild(par);
   
  var mySelect =  document.createElement("select");
   myBox.appendChild(mySelect);
   
   var option1 = document.createElement("option");
   var option2 = document.createElement("option");
   var option3 = document.createElement("option");
   mySelect.appendChild(option1);
   mySelect.appendChild(option2);
   mySelect.appendChild(option3);
   option1.setAttribute("value", "Tabby");
   option2.setAttribute("value", "Lizzie");
   option3.setAttribute("value", "Mary");
    option1.innerHTML = "Tabby";
    option2.innerHTML = "Lizzie";
     option3.innerHTML = "Mary";
  
   mySelect.style.color = "#991f00";
   mySelect.style.width = "150px";
   mySelect.style.height = "2em";
   mySelect.style.marginLeft = "210px";
   mySelect.style.marginTop = "50px";
   mySelect.style.borderRadius = "5px";
   
   //mySelect.selectedIndex = '1';
   
  
       mySelect.onfocus = function() {
           mySelect.style.backgroundColor = "#d1e0e0";
          
       };
       var secondDiv = document.createElement('div');
       myBox.appendChild(secondDiv);
       secondDiv.style.marginTop = "30px";
       var img1 = document.createElement("img");
       img1.src = "tabby.jpg";
       secondDiv.appendChild(img1);
       img1.style.width= "40%";
       img1.style.border = "1px solid grey";
       img1.style.borderRadius= "40px";
       img1.style.marginLeft = "15px";
       
       var img2 = document.createElement("img");
       img2.src = "lizzie.jpg";
       secondDiv.appendChild(img2);
       img2.style.width= "40%";
       img2.style.borderRadius= "40px";
       img2.style.border = "1px solid grey";
       img2.style.marginLeft = "15px";
       
       var img3 = document.createElement("img");
       img3.src = "mary.jpg";
       secondDiv.appendChild(img3);
       img3.style.width= "40%";
       img3.style.borderRadius= "40px";
       img3.style.border = "1px solid grey";
       img3.style.marginLeft = "15px";
       img3.style.display= "none";
       img2.style.display= "none";
       img1.style.display= "block";

       
       
       var par2 = document.createElement("p");
       par2.style.color = "#4d0f00";
       par2.style.fontSize = "20px";
       par2.style.marginLeft = "280px";
       par2.style.marginTop = "-100px";
       myBox.appendChild(par2);
       

       var par3 = document.createElement("p");
       par3.style.color = "white";
       par3.style.textShadow = "2px 2px grey";
       par3.style.fontSize = "26px";
       par3.style.marginLeft = "100px";
       par3.style.marginTop = "120px";
       myBox.appendChild(par3); 
      

function dateTime() {

    var myParagraph = "";

    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var now = new Date();
    
    var minutes = (now.getMinutes() < 10? '0' : '') + now.getMinutes();
    var seconds = (now.getSeconds() < 10? '0' : '') + now.getSeconds();
    var hours = (now.getHours() < 10? '0' : '') + now.getHours();
    myParagraph +=  days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + hours +":" + minutes + ":" + seconds;
   par.innerHTML = myParagraph;
   par.style.fontSize = '2em';
   par.style.color = " #4d0f00";
   par.style.marginLeft = "80px";




}

setInterval(dateTime, 1000);

var cat1 = {name: "Tabby", day1: "tuna", day2: "trout", day3: "salmon", day4: "tuna", day5: "fish based cat food", day6: "trout", day7: "hake" };
var cat2 = {name: "Lizzy", day1: "chicken liver pate", day2: "baked chicken breast", day3: "chicken based cat food", day4: "cat food", day5: "baked chicken meatballs", day6: "baked chicken and rice", day7: "cat food"};
var cat3 = {name: "Mary", day1: "cat food", day2: "trout", day3: "salmon", day4:"tuna", day5: "cat food", day6:"chicken breast", day7: "baked chicken meatballs"};


function switchCats() {
    var dayx;
switch (new Date().getDay()) {
  case 0:
    dayx = this.day2;
    break;
  case 1:
    dayx = this.day3;
    break;
  case 2:
    dayx = this.day4;
    break;
  case 3:
    dayx = this.day5;
    break;
  case 4:
    dayx = this.day6;
    break;
  case 5:
    dayx = this.day7;
    break;
  case  6:
    dayx = this.day1;
}
    par2.innerHTML = this.name + "'s" + " " + "meal for today is: " + dayx + ".";
}
cat1.logData = switchCats;
cat2.logData = switchCats;
cat3.logData = switchCats;
cat1.logData();
mySelect.onchange = function() {
    if(mySelect.value == 'Tabby') {
cat1.logData();
img1.style.display = "block";
 img3.style.display= "none";
 img2.style.display= "none";
} else if(mySelect.value == 'Lizzie') {
cat2.logData();
img2.style.display = "block";
img3.style.display= "none";
 img1.style.display= "none";
} else if(mySelect.value == 'Mary') {
cat3.logData();
img3.style.display = "block";
img2.style.display= "none";
img1.style.display= "none";
}
};

(function(countdown) {
    var start = new Date;
    start.setHours(18, 30, 0); 
  
    function pad(num) {
      return ("0" + parseInt(num)).substr(-2);
    }
  
    function tick() {
      var now = new Date;
      if (now > start) { 
        start.setDate(start.getDate() + 1);
      }
      var remain = ((start - now) / 1000);
      var hh = pad((remain / 60 / 60) % 60);
      var mm = pad((remain / 60) % 60);
      var ss = pad(remain % 60);
     par3.innerHTML =
       "Please feed the cats in: " + hh + ":" + mm + ":" + ss;
      setTimeout(tick, 1000);
      if( (ss == 00) && (mm ==00) && (hh == 00) ) {
        alert("It's time to feed the cats!");
    }
    }
  
    document.addEventListener('DOMContentLoaded', tick);
    
  })();
  //par3.innerHTML = countdown;

window.onload = function() {
    
   dateTime();


};