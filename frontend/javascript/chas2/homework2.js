//1
/* Write a function that will receive 3 parameters. Two strings and a boolean. If the boolean value is “true”, concatenate the strings. If the value is false, concatenate them in the inverse order. Think about what would happen if we enter only 1 or 2 parameters.
*/



function concatenateStrings(myName, myLastName, boolean) {
	var personalData = myName + " " + myLastName;
	if ( boolean === true ) {
		return personalData;
	} else if (boolean === false) {
		
		var data2 = personalData.split(' '); /*ako nema space izmegju gi dava sekoja bukva poedinechno vo obraten redosled*/
		data2.reverse();
		data2.join(' ');
		return data2.toString();
		
	} else {
		return null;
	}

}

var data = concatenateStrings('Sanja', 'Petrovska', false);
console.log(data);
/* Calculate the tax that people need to pay for their salary. Until they reach 1000 eur, they pay 11% tax, but when they go above 1000 eur, they pay 18% for the sum above the threshold. (Example: 1300 eur salary, 1000 eur get taxed 11%, 300 eur get taxed 18%, get the total tax). Modify the function to check if the worker is a craftsman, if he is, drop the taxes to 5% and 10% respectively
*/
function calculateTax(worker, y) {
	if (worker === 'craftsman' && y > 1000) {
 tax = +[(y - 1000) * 18 / 100] + +(1000 * 11 / 100);
 console.log(tax);
	} else if ( worker === 'craftsman' && y <= 1000) {
		tax = (y * 11) / 100;
		console.log(tax);
	} else if (worker === 'regularWorker' && y > 1000){
		tax = +[(y - 1000) * 10 / 100] + +(1000 * 5 / 100);
		console.log(tax);
	} else if ( worker === 'regularWorker' && y <= 1000) {
		tax = (y * 5) / 100;
		console.log(tax);
	} else {
		null;
	}
}
calculateTax('craftsman', 1500);








