/* Write a JavaScript program that will read in an integer and sum its digits.

*/
//function sumNumbers() {


//var i = 0;

//for(i=0; i < number1.lenght; i++) {
	
	var number1 = 23567;
	var num = number1
	          .toString()
               .split('')
               .map(Number)
               .reduce(function (a, b) {
                return a + b;
                 }, 0);
				 
console.log(num);	


/* var result = '123456'.split('').reduce(function(a,b){ return +a+ +b; });
alert(result);  */

