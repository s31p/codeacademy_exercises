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
}
	displaySum2(3, 8);
/* Write a JavaScript program that will iterate through a given range of numbers (as function parameters) and sum the numbers. However, if the iteration reaches a prime number, you should skip summing that number, but continue with the loop. A prime number is a number that is divisive only with itself or 1. Print out the sum to console and the number of times you skipped summing a prime number. BONUS: Print out the prime numbers you’ve found into a string or array.
*/


  
function sumNumbers(input) {
  var variable = 0;
  
    for (var i=0; i< input.length; i++) {
       
        if(!isPrime(input[i])) {
          variable += input[i];
        } 
       else {
         console.log(input[i]);
       }
    }
    
    return variable;
    
}
var s=sumNumbers([3,4,5,6,7, 17]);
console.log(s);
 
 
function isPrime(number) {
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    return false;
  }

  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }
 
  for (var i = 3; i*i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;

}

