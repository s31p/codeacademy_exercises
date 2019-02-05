function calculateTax(salary, type) {
    var tax = '';
    var overtax = '';
    if (type === "Craftsman") {
        tax =  0.05;
        overtax = 0.1;
    } else {
        tax = 0.11;
        overtax = 0.18;
    }

    var net = '';
	
    if (salary <= 1000) {
        net = 1000 * tax;
		
    } else {
        var ostatok = salary - 1000; //
        net = ostatok * overtax + 1000 * tax;
		
    }

    return net;
	
}

var result = calculateTax(5000, "Craftsman");
console.log(result);