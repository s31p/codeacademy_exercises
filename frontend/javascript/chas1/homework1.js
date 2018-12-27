//HOMEWORK
// 1.Write a JavaScript program that will calculate the area of a circle
function calculateArea() {
var radius = 7;
var r = radius ** 2;
var pi = 3.14;
var area = pi * r;
console.log(area);
}
calculateArea();
//nachin 2
function calculateArea2() {
var radius = 7;  /*koga var se vnatre vo f/ja mozhe istoto ime da go koristime na povekje mesta*/
alert("The Area of a circle with radius=7 is:" + " " + radius ** 2 * Math.PI);
}
calculateArea2();



/* 2. Write a JavaScript program that will calculate the price of 30 iPhones brought in from USA, where the price of one iPhone is $899.95, the customs rate is 5% and the tax rate is 18%.
*/
function calculatePrice() {
	var price = 899.95;
	var taxRate = price * 18 / 100;
	var customsRate = price * 5 / 100;
	var totalWithTax = price + taxRate + customsRate;
	alert(totalWithTax);
	var quantity = 30;
	alert(totalWithTax * quantity);
	document.getElementById('price').innerHTML = ("Total price: " + totalWithTax * quantity + " dollars.");
}
calculatePrice();


/*3.Modify the previous task to handle any phone at any price, with any given customs and tax rates.
*/
/*var price = 899.95;
var taxRate = 18;
var quantity = 30;
var customsRate = 5;*/
function calculateTotalPrice(price, taxRate, quantity, customsRate) {
	
var customsTax = ((price * customsRate) / 100).toFixed(3);
var tax = ((price * taxRate) / 100).toFixed(3);


console.log('The price of 30 Iphones is:' + ' ' + ((price + +customsTax + +tax) * quantity).toFixed(2) + ' dollars.');
} //bez + gi dodava var kaj shto ima formula kako strings 
calculateTotalPrice(899.95, 18, 30, 5);

//nachin2
function calculateTotal(price, taxRate, quantity, customsRate) {
	
var customsTax = ((price * customsRate) / 100).toFixed(3);
var tax = ((price * taxRate) / 100).toFixed(3);


console.log('The price of 30 Iphones is:' + ' ' + ((price + +customsTax + +tax) * quantity).toFixed(2) + ' dollars.');
document.getElementById('price2').innerHTML = ('The price of 30 Iphones is:' + ' ' + ((price + +customsTax + +tax) * quantity).toFixed(2) + ' dollars.');

} 
//calculateTotal(); ja povikuvam vo html



