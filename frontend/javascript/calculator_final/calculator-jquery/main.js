var newRend = new Renderer();

var display2 = newRend.display;
console.log(display2);



var clearBtn = newRend.ac;

display2.text("0").css({"font-size": "38px", "display": "flex", "justify-content": "flex-end", "align-items": "flex-end"});
var disp;
var decimalBtn = $("#decimal");
var deleteBtn2 = newRend.deleteBtn;

var numBtns = $(".num");
console.log(numBtns);

var operatorBtns = $(".operation");
var equals = $(".equals");
var newArr2;
var display = "0";
var newArr = [];
var arrRes;

numBtns.each(function(){
    $(this).on("click", function() {

disp = $(this).text();
if(display === "0"){
    display = "";
}

display += disp;
newArr.push(display);
console.log(newArr, "ppppp");

arrRes = newArr.pop();
//console.log(arrRes);

display2.text(arrRes);
console.log(display);
    })
})
var operVar;
var rez;

operatorBtns.each(function() {
    $(this).on("click", function() {
       operVar = $(this).text();
       display = display2.text();
      display += operVar;
       newArr.push(display);
       console.log(newArr);
       arrRes = newArr.pop();
      
      
       console.log(arrRes);
       display2.text(arrRes);
      
      equals.on("click", function() {
         rez = eval(arrRes);
         display2.text(rez);
         display="";

      })
    })
})

equals.on("click", function() {

})
decimalBtn.on("click", function(){
    if(!display.includes(".")){
    display += ".";
    }
    display2.text(display);
});

clearBtn.on("click", function() {
    display = "0";
    newArr = [];
    display2.text(display);
    
})


deleteBtn2.on("click", function() {
   display = display.slice(0, display.length - 1);
  if (display === "") {
    display = "0";
  } 
    display2.text(display);
});


