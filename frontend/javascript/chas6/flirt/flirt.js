/* A girl tries to impress a boy by 
flirting with him. Every flirt she 
makes is worth 1 point, every third 
flirt is worth 5 points and every 5th 
flirt is worth 10 points. Every 10th 
flirt the boy gets tired and deducts 
the girl’s points by 12. Write a function 
that will calculate if the girl impressed 
the boy or not, by accepting the number of
 tries the girl should use and the number
  of hitpoints the boy has, as function 
  parameters. */


var img = document.getElementById("myImg");
img.style.width = '500px';
img.style.marginLeft = '100px';

var myResult = document.getElementById("result");
myResult.style.marginLeft = "102px";
  var resultGirl = document.createElement("td");
  myResult.appendChild(resultGirl);
  resultGirl.setAttribute("id", "girlpoints");
  var resultBoy = document.createElement("td");
  myResult.appendChild(resultBoy);
  resultBoy.setAttribute("id", "boyHitpoints");
  resultGirl.style.border = "1px solid black";
  resultBoy.style.border = "1px solid black";
  resultGirl.style.width = "240px";
  resultBoy.style.width = "240px";

function calculate(girlFlirts){

  var boyHitpoints = 12;
  var girlPoints1 = 1;
  var girlPoints3 = 5;
  var girlPoints5 = 10;
  var girlPointsx = 15;
  var sum = 0;
  var sum1 = 0;
  var intervalHandle;
 for(var i =1; i <= girlFlirts; i++){
 
     if( i%10 ===0){
       console.log( i + "-" + boyHitpoints);
       sum1 += boyHitpoints;
     
     } else if ((i % 3 === 0) && (i% 5 ===0)){
         console.log( i + "-" + girlPointsx);
         sum += girlPointsx;
         
     }else if(i %3 ===0){
         console.log ( i + "-" + girlPoints3);
         sum += girlPoints3;
         
     } else if(i%5 ===0) {
        console.log( i + "-" + girlPoints5);
        sum += girlPoints5;
        
     } else {
        console.log( i + "-" + girlPoints1);
        sum += girlPoints1;
        
     }
       
 }
 document.getElementById('girlpoints').innerHTML = "The girl won: " + sum + "points."; 
 document.getElementById('boyHitpoints').innerHTML = "Couple of times the boy got tired and deducted a total of " +  sum1 + " from her flirtpoints."; 
 console.log(sum);
 console.log(sum1); 
 var finalRes = sum - sum1;
 console.log(Math.floor(finalRes));

 
 var newRes = (sum1 * 100) / sum;
  console.log(newRes);
  var newRes2 = 100 - newRes;
  console.log(newRes2);

  function move() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= newRes2) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
     
    }
  }
  move();
  function alertRes() {
  if( newRes2 > 50){
    alert("He likes her!");
  } else {
    alert("He doesn't like her!");
  }
  
}
intervalHandle = setTimeout(alertRes, 2000);
 }
  calculate(30);
  


  
  

