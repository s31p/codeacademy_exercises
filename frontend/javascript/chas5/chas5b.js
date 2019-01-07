/* Write a JavaScript program to find the armstrong numbers of 3 digits. Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 
*/


for (var i = 100; i < 1000; i++) {

	var splitNum = i.toString().split('');

	var sum = (+((splitNum[0] ** 3) + (splitNum[1] ** 3) + (splitNum[2] ** 3)));

	if (i == sum) {
		console.log(i);
	}
}

/* Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
*/
function displayNum() {
	var sum1 = 0;
	for (var m = 0; m < 1000; m++) {
		if ((m % 3 == 0) || (m % 5 == 0)) {

			sum1 = sum1 + m;
		}
	}
	console.log(sum1);
}
displayNum();
