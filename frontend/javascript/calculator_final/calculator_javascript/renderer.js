

function docDisplay() {

this.mainContainer = document.createElement("div");
this.mainContainer.style.width = "300px";
this.mainContainer.style.height = "450px";
this.mainContainer.style.margin = "0 auto";
this.mainContainer.style.borderRadius = "10px";
this.mainContainer.style.backgroundColor = "#937f6b";
this.mainContainer.style.padding = "15px";

this.displayContainer = document.createElement("div");
this.displayContainer.setAttribute("id", "display");
//displayContainer.innerHTML = "0";
this.displayContainer.style.fontSize = "46px";
this.displayContainer.style.width = "90%";
this.displayContainer.style.height = "100px";
this.displayContainer.style.backgroundColor = "#fff";
this.displayContainer.style.margin = "0 auto";
this.displayContainer.style.marginBottom = "10px";
this.displayContainer.style.borderRadius = "5px 5px 0 0";
this.displayContainer.style.border = "3px inset";
this.displayContainer.style.borderColor = "#2b2117 #54412f #54412f #2b2117";
this.mainContainer.appendChild(this.displayContainer);

this.contentContainer = document.createElement("div");
this.contentContainer.setAttribute("class", "contentContainer");
//contentContainer.style.width = "90%";
//contentContainer.style.height = "330px";
//contentContainer.style.margin = "0 auto";
//contentContainer.style.borderRadius = "0 0 5px 5px";
//contentContainer.style.backgroundColor = "#937f6b";
//contentContainer.style.border = "3px inset";
//contentContainer.style.borderColor = "#2b2117 #54412f #54412f #2b2117";
//contentContainer.style.display = "grid";


this.mainContainer.appendChild(this.contentContainer);

this.btn1 = document.createElement("div");
this.btn1.innerHTML = "AC";
this.btn1.setAttribute("value", "AC");
this.btn1.setAttribute("class", "btnlinks");
this.contentContainer.appendChild(this.btn1);
this.btn2 = document.createElement("div");
this.btn2.innerHTML = "delete";
this.btn2.setAttribute("value", "delete");
this.btn2.setAttribute("class", "btnlinks");
this.contentContainer.appendChild(this.btn2);
this.btn3 = document.createElement("div");
this.btn3.innerHTML = "/";
this.btn3.setAttribute("value", "/");
this.btn3.setAttribute("class", "btnlinks operator");
this.contentContainer.appendChild(this.btn3);
this.btn4 = document.createElement("div");
this.btn4.innerHTML= "7";
this.btn4.setAttribute("value", "7");
this.btn4.setAttribute("class", "btnlinks num");
this.contentContainer.appendChild(this.btn4);
this.btn5 = document.createElement("div");
this.btn5.innerHTML= "8";
this.btn5.setAttribute("value", "8");
this.btn5.setAttribute("class", "btnlinks num");
this.contentContainer.appendChild(this.btn5);
this.btn6 = document.createElement("div");
this.btn6.innerHTML= "9";
this.btn6.setAttribute("value", "9");
this.btn6.setAttribute("class", "btnlinks num");
this.contentContainer.appendChild(this.btn6);
this.btn7 = document.createElement("div");
this.btn7.innerHTML= "x";
this.btn7.setAttribute("value", "x");
this.btn7.setAttribute("class", "btnlinks operator");
this.contentContainer.appendChild(this.btn7);
this.btn8 = document.createElement("div");
this.btn8.innerHTML= "4";
this.btn8.setAttribute("value", "4");
this.btn8.setAttribute("class", "btnlinks num");
this.contentContainer.appendChild(this.btn8);
this.btn9 = document.createElement("div");
this.btn9.innerHTML= "5";
this.btn9.setAttribute("value", "5");
this.btn9.setAttribute("class", "btnlinks num");
this.contentContainer.appendChild(this.btn9);
this.btn10 = document.createElement("div");
this.btn10.innerHTML= "6";
this.btn10.setAttribute("value", "6");
this.btn10.setAttribute("class", "btnlinks num");
this.contentContainer.appendChild(this.btn10);
this.btn11 = document.createElement("div");
this.btn11.innerHTML= "-";
this.btn11.setAttribute("value", "-");
this.btn11.setAttribute("class", "btnlinks operator");
this.contentContainer.appendChild(this.btn11);
this.btn12 = document.createElement("div");
this.btn12.innerHTML= "1";
this.btn12.setAttribute("value", "1");
this.btn12.setAttribute("class", "btnlinks num");
this.contentContainer.appendChild(this.btn12);
this.btn13 = document.createElement("div");
this.btn13.innerHTML= "2";
this.btn13.setAttribute("value", "2");
this.btn13.setAttribute("class", "btnlinks num");
this.contentContainer.appendChild(this.btn13);
this.btn14 = document.createElement("div");
this.btn14.innerHTML= "3";
this.btn14.setAttribute("value", "3");
this.btn14.setAttribute("class", "btnlinks num");
this.contentContainer.appendChild(this.btn14);
this.btn15 = document.createElement("div");
this.btn15.innerHTML= "+";
this.btn15.setAttribute("value", "+");
this.btn15.setAttribute("class", "btnlinks operator");
this.contentContainer.appendChild(this.btn15);
this.btn16 = document.createElement("div");
this.btn16.innerHTML= "0";
this.btn16.setAttribute("value", "0");
this.btn16.setAttribute("class", "btnlinks num");
this.contentContainer.appendChild(this.btn16);
this.btn17 = document.createElement("div");
this.btn17.innerHTML= ".";
this.btn17.setAttribute("value", ".");
this.btn17.setAttribute("class", "btnlinks");
this.contentContainer.appendChild(this.btn17);
this.btn18 = document.createElement("div");
this.btn18.innerHTML= "=";
this.btn18.setAttribute("value", "=");
this.btn18.setAttribute("class", "btnlinks operator");
this.contentContainer.appendChild(this.btn18);


document.body.appendChild(this.mainContainer);

}
//window.onload = function() {
  
  // docDisplay();
   
//}