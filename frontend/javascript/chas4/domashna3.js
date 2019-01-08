/* Write a function that accepts two numbers 
N and X.
 Find the closest number bigger than N that is
  TOTALLY DIFFERENT than the number X.
   A number is TOTALLY DIFFERENT from 
   another if every digit in the first 
   number is different than every digit
    of the second number. You are not permitted 
    to use arrays or matrices (we haven’t learned 
        them yet). It’s ok to write subprocedures
         (helper functions that get called
             in your main function). */

             

function compareNumbers(searchNumber, compareNumber){ 
    var isEqual = true;
     var digitsCompare = compareNumber.toString().split('');
      searchNumber.toString().split('').forEach(function(num,index){
           if(!(num===digitsCompare[index])){
                isEqual = false;
         } 
        });
         return isEqual; 
        } 

var b = compareNumbers(123,124);
console.log(b);
var d = compareNumbers(123,123); 
 console.log(d);
