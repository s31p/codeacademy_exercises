/* Write a JavaScript program that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen (alert or console.log).
*/
var num = '';
for(var i = 0; i <= 15; i++) {
	if( i % 2 ==0) {
		num += i + '-is ' + 'even;' + ' ';
	} else {
		num += i + '-is ' + 'odd;' + ' ';
	}
	
}
console.log(num);

/* Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". (Print with console.log)
*/ 

function fizzBuzz() {
	//var numb = '';
	for(var i = 1; i <= 100; i++) {
		//numb =  numb + ' ' + i;
		if(i % 3 == 0 && i % 5 ==0) {
			console.log('FizzBuzz');
		} else if(i % 5 == 0) {
			console.log('Buzz');
		} else if(i % 3 == 0) {
			console.log('Fizz');
		} else {
			console.log(i);
	    }
	}
}

fizzBuzz();





