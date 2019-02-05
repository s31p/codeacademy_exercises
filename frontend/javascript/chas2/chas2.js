/*function ploshtina(shirina, visina) {
	return shirina * visina;
}
var result3 = ploshtina(4,5);

//return values,
// variable scope 

function scopeTest() {
	var result2 = 5;
}
scopeTest();
alert(result2); 
*/
/*function celsiusToFahrenheit(celsius) {
//var fahrenheit = celsius * 1.8 + 32;
 return celsius * 1.8 + 32;


}
var result = celsiusToFahrenheit(30);
console.log(result);

function fahrenheitToCelsius(fahrenheit) {
	//var celsius = (fahrenheit - 32 ) / 1.8;
	
	return (5/9) * (fahrenheit - 32);
}

	var result2 = fahrenheitToCelsius(86);
    console.log(result2);*/
	
	// if else
		/*function convert(temperature, type) {
			if(type === "C") {
				return temperature * 1.8 + 32;
			} else if (type === "F"){
				return(5 / 9) * (temperature - 32);
			} else {
				return 0;
			}
		}
		
		var result = convert(35, "C");
	   console.log(result);*/
	   //1
	   function decision(moneyBalance) {
		   
		   if(moneyBalance > 3000) {
			   alert("Go to a restaurant!");
		   } else if(moneyBalance <= 3000) {
				   alert("Go to the cinema");
			   }
			   else{
				   alert("Stay at home!");
			   }
		   
	   }
	   
	  decision(4000);
	   
	   //2
	   function maxOfThree(a, b, c) {
		   return Math.max(3, 6, 9);
	   }
	  console.log(maxOfThree());
	  
	  
	  function maxOfThree2(a, b, c) {
		  if(a > b && a > c) {
			  return a;
		  } else if (b > a && b > c) {
			  return b;
		  } else if ( c > a && c > b) {
			  return c;
		  
		  } else {
			  return 0;
		  }
	  }
		var maxNum = maxOfThree2(2, 14, 5);	 
        console.log( maxNum);		
			  
		  
	 //3
	 /* Calculate the cost of registering a vehicle if the tariff is:
3000 denars for vehicles that have less or equal than 85 bhp
5000 denars for vehicles above 85 bhp but less or equal than150 bhp
15000 denars for vehicles above 150 bhp
*/
     
	 function registrationCost(bhp) {
		 if ( bhp <= 85) {
			return  3000; 
		 } else if(bhp > 85 && bhp <= 150 ) {
			 return 5000;
		 } else {
			 return 15000;
		 
		 
		 
	 }
	 
	 }
	 
	 var x = registrationCost(140);
	 console.log(x);
	 
	 
	 
	 