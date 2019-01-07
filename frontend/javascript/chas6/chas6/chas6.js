




//2
function pulseCheck() {
    var checkPulse = '';
for(i = 1; i <= 60; i++) {
    console.log(checkPulse + i);
if(i +=14) {
    console.log("performing insertAction");

}
if(i == 60) {
    console.log('The patient is Alive!');
}
}

}
pulseCheck();

//3

function checkNumb(y) {

var number = y.toString().split('');
var number2 = number.reverse();
if(number.join('') == number2.join('')) {
    console.log(y + " is a palindrome!");
}
else {
    console.log(y + " is not a palindrome");
}

}
checkNumb(3443);


//4

function checkFuel() {
var fuelPerkm = 7/100;
for(i = 1; i <= 43; i++) {
 if (i == 43){
     console.log(fuelPerkm * i + " liters");
 }

}

}

checkFuel();


//5 
function flirtPoints() {


    
}









