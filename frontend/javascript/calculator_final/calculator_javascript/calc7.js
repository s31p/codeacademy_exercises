var newRend = new docDisplay();


this.dispVal = newRend.displayContainer;
this.dispVal.innerHTML = "0";
this.dispVal.style.textAlign = "end";
this.dispVal.style.lineHeight= "150px";
'-moz-block-height';
this.display = "0";
this.newArr = [];
var that = this;
this.pendingval;
var rez;
var tmpoperator;
var test;

document.onkeypress = function (e) {
    
    e = e || window.event;
    // use e.keyCode
    console.log(e)
    
   
   if(dispVal.innerHTML=="0"){
    dispVal.innerHTML=" ";
    
}
display += e.key;
   console.log(display, "beginning");
    dispVal.innerHTML = display;
    if(e.key=="+"){
        tmpoperator = "+";
       
     display += dispVal.innerHTML;
        newArr.push(parseFloat(display));
        rez = parseFloat(newArr.reduce(add));
        console.log(rez, "rez");
        dispVal.innerHTML = rez;
        rez = parseFloat(dispVal.innerHTML);
        console.log(rez, "second");
        console.log(result2, "result2*")
        
        display = "";
        

    } else if(e.key=="*"){
        tmpoperator = "*";
       
     display += dispVal.innerHTML;
        newArr.push(parseFloat(display));
        rez = parseFloat(newArr.reduce(multiply));
        console.log(rez, "rez");
        dispVal.innerHTML = rez;
        rez = parseFloat(dispVal.innerHTML);
        console.log(rez, "second");
        console.log(result2, "result2*")
        
        display = "";
        

    } else if(e.key=="/"){
        tmpoperator = "/";
       
     display += dispVal.innerHTML;
        newArr.push(parseFloat(display));
        rez = parseFloat(newArr.reduce(divide));
        console.log(rez, "rez");
        dispVal.innerHTML = rez;
        rez = parseFloat(dispVal.innerHTML);
        console.log(rez, "second");
        console.log(result2, "result2*")
        
        display = "";
        

    } else if(e.key=="-"){
        tmpoperator = "-";
       
     display += dispVal.innerHTML;
        newArr.push(parseFloat(display));
        rez = parseFloat(newArr.reduce(subtract));
        console.log(rez, "rez");
        dispVal.innerHTML = rez;
        rez = parseFloat(dispVal.innerHTML);
        console.log(rez, "second");
        console.log(result2, "result2*")
        
        display = "";
        

    }
    if(e.key == "Enter"){
        if(tmpoperator == "+"){
            test = rez + parseFloat(display);
    console.log(test, "test");
            console.log(test, "test=")
            dispVal.innerHTML=parseFloat(test);
display = test;
            test = "";
            newArr =[];
           
    }else if(tmpoperator == "*"){
        test = rez * parseFloat(display);
console.log(test, "test");
        console.log(test, "test=")
        dispVal.innerHTML=parseFloat(test);
display = test;
        test = "";
        newArr =[];
       
}else if(tmpoperator == "/"){
    test = rez / parseFloat(display);
console.log(test, "test");
    console.log(test, "test=")
    dispVal.innerHTML=parseFloat(test);
display = test;
    test = "";
    newArr =[];
   
} else if(tmpoperator == "-"){
    test = rez - parseFloat(display);
console.log(test, "test");
    console.log(test, "test=")
    dispVal.innerHTML=parseFloat(test);
display = test;
    test = "";
    newArr =[];
   
}
}

    
};

// this.display = "0";
// this.newArr = [];
// var that = this;
// this.pendingval;

this.clearBtn = newRend.btn1;
this.clearBtn.style.color = "red";

this.clearBtn.onclick = () => {
  
   display = "0";
   rez=0;
   this.newArr = [];
  
 dispVal.innerHTML = display;
 
}


this.decimalBtn = newRend.btn17;
this.decimalBtn.onclick = () => {
    if(!display.includes('.')){
        display+= '.';
    }
    dispVal.innerHTML = display;
}

this.deleteBtn = newRend.btn2;

this.deleteBtn.onclick = () => {

display = display.slice(0, display.length - 1);
/*if(display === ''){
    display = "0";
}*/
dispVal.innerHTML = display;
}

//this.plus = newRend.btn15;
this.add = function(a,b){
    return a + b;
}
this.multiply = function(a, b) {
    return a * b;
}
this.subtract = function(a, b){
    return a - b;
}
this.divide = function (a, b) {
    return a / b;
}




this.equals = newRend.btn18;


// var rez;
// var tmpoperator;
var result;
var result2;
var result3;
  
function performOperation(event2) {
//    if(event2=="+")
//    this.operator2=event2
//    else
    this.operator2 = event2.target.innerHTML;
    switch (this.operator2) {
        case "+":
     
        
        tmpoperator = "+";
        console.log('plus operacija',parseFloat(display));
        //if(display != ""){
           display = dispVal.innerHTML;
                newArr.push(parseFloat(display));
                
                rez = parseFloat(newArr.reduce(add));
               
        console.log(rez);
        
        dispVal.innerHTML = rez;
        rez = parseFloat(dispVal.innerHTML);
        
        console.log(result2, "result2*")
        
        display = "";
        
break;
case "x":
tmpoperator = "*";
display = dispVal.innerHTML;
console.log(parseFloat(display));

newArr.push(parseFloat(display));
                
rez = parseFloat(newArr.reduce(multiply));

console.log(rez);

dispVal.innerHTML = rez;
rez = parseFloat(dispVal.innerHTML);

console.log(result2, "result2*")

display = "";

break;
       
case "-":
tmpoperator = "-";
display = dispVal.innerHTML;
console.log(parseFloat(display));

newArr.push(parseFloat(display));
                
rez = parseFloat(newArr.reduce(subtract));

console.log(rez);

dispVal.innerHTML = rez;
rez = parseFloat(dispVal.innerHTML);

console.log(result2, "result2*")

display = "";

break;
   

case "/":
tmpoperator = "/";
display = dispVal.innerHTML;
console.log(parseFloat(display));

newArr.push(parseFloat(display));
                
rez = parseFloat(newArr.reduce(divide));

console.log(rez);

dispVal.innerHTML = rez;
rez = parseFloat(dispVal.innerHTML);

console.log(result2, "result2*")

display = "";
break;


case "=":
// var test;
console.log(rez,display)
if(tmpoperator=="+") {
    test = rez + parseFloat(display);
    
console.log(test, "test=")
dispVal.innerHTML=parseFloat(test);
test = "";
newArr =[];

}else if(tmpoperator == "*") {
    test = rez * parseFloat(display);
   
    dispVal.innerHTML=parseFloat(test);
    console.log(test, "test*");
    test ="";
    newArr =[];
   
}else if(tmpoperator == "-") {
    test = rez - parseFloat(display);
   
    dispVal.innerHTML=parseFloat(test);
    console.log(test, "test*");
    test ="";
    newArr =[];
}  else if(tmpoperator == "/") {
    test = rez / parseFloat(display);
   
    dispVal.innerHTML=parseFloat(test);
    console.log(test, "test*");
    test ="";
    newArr =[];
}     



break;

default: 
break;
    }
//return display;

}


this.displayNum = (event) => {
    var btnText = event.target.innerHTML;

    if(display === "0"){
        display = "";
    }
        display += btnText;
        dispVal.innerHTML = display;
       
    
}

this.nums = document.getElementsByClassName("num");
for(let i=0; i < nums.length; i++) {
    nums[i].addEventListener("click", displayNum, false);
    
}

this.btnsAll = document.getElementsByClassName("btnlinks");
for(let j = 0; j < btnsAll.length; j++){
    btnsAll[j].addEventListener("mousedown", function() {
        btnsAll[j].style.backgroundColor = "silver";
    });
    btnsAll[j].addEventListener("mouseup", function() {
       btnsAll[j].style.backgroundColor = "#937f6b";
    });
}

this.operators = document.getElementsByClassName("operator");
for(let i=0; i < operators.length; i++) {
    operators[i].addEventListener("click", performOperation, false);
}