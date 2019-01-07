/*Write a JavaScript program to get the integers in range (x, y). Input the range as parameters. Print the result as a string.*/

/*function integersInRange(x, y) {
	
  for ( ; x < 100; x++) {
	  console.log(x + 1);
	  if( x == y - 2) {
		  
      break;
    }
  }
} 
integersInRange(2, 14);	*/
//nachin2
function displayIntegers(m, n) {
	//var i = 0;
	
	for(i=0; i < n; i++) {
		var s = m + 1 + i; 
		console.log(s);
		if(m + i === n - 2) {

			//console.log(m[i]);
			break;
		}
	}
}
displayIntegers(2, 6);
//
function displaySum2(a, b) {
	var m = 0;
	for(var i = a + 1; i < b; i++) {
		 console.log(i);
	}
	displaySum2(3, 8);
/* Write a JavaScript program that will iterate through a given range of numbers (as function parameters) and sum the numbers. However, if the iteration reaches a prime number, you should skip summing that number, but continue with the loop. A prime number is a number that is divisive only with itself or 1. Print out the sum to console and the number of times you skipped summing a prime number. BONUS: Print out the prime numbers you’ve found into a string or array.
*/


  var variable = 0;
function sumNumbers(input) {
    for (var i=0; i< input.length; i++) {
		variable += input[i];
		for(var idx = 2; idx < variable; idx+=0){
		
			
        
		if (variable % idx === 0) {
			return false;
			return variable !== 1 && variable !== 0;
    } 
    
}
	}
}
var s=sumNumbers([4,5,6]);
console.log(s);


function isPrime(numb){
  if (numb % 2 == 0) return false;
  for (var i=3; i<= Math.sqrt(numb); i = i + 2) {
    if (numb % i == 0) {
     return false;
    }
  }
  return true;
}
var q = isPrime(1);
console.log(q);
 /*var sumAll = function(result) {
  var sum = 0;
    min = Math.min.apply(null, result),
    max = Math.max.apply(null, result);
  for (var ind = min; ind <= max; ind++) {
    sum += ind;
	for(
  }
  return sum;
}
console.log(sumAll([3, 8]))*/
 

//var numbers = (displaySum).reduce(add, 0);
//function add(a, b) {
//    return a + b;
//}

//console.log(numbers);
/*var variable = 0;
function sum(input) {
    for (var idx=0; idx< input.length; idx++) {
        variable += input[idx];
    }
    return variable;
}
var s=sum([100,27,43,4,7,98]);
alert(s);*/
