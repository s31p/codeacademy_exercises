

var form = document.createElement("form");
document.body.appendChild(form);

var input1 = document.createElement("input");
input1.setAttribute("name", "First name:");
input1.setAttribute("type", "text");
form.appendChild(input1);

var input2 = document.createElement("input");
input2.setAttribute("name", "Last name:");
input2.setAttribute("type", "text");
form.appendChild(input2);

var input3 = document.createElement("input");
input3.setAttribute("name", "E-mail:");
input3.setAttribute("type", "email");
input3.setAttribute("id", "mail");
form.appendChild(input3);

var input4 = document.createElement("input");
input4.setAttribute("name", "Password:");
input4.setAttribute("type", "password");
input4.setAttribute("id", "pswd");
form.appendChild(input4);

var btn  = document.createElement("button");
btn.textContent = "Click me!";
btn.style.marginTop = "20px";
btn.style.backgroundColor = "#f47142";
btn.style.border = "3px groove #91452a";
btn.style.color = "#260f07";
btn.style.fontWeight = "bold";
form.appendChild(btn);

var par = document.createElement("div");
form.appendChild(par);

var pass = document.getElementById("pswd");
var mail = document.getElementById("mail");
btn.addEventListener("click", function(){
   
    par.innerHTML = (getValues(input1, input2, input3, input4));
    if(pass.value.length <= 8) {
        alert("Your password needs to be at least 8 characters!");
    } 
});
function getValues(a, b, c, d){
    
   if((a.value === "") || (b.value === "") || (c.value === "") || (d.value === "")){
    alert("Please fill in all required fields!");
   return  "";

  } else {
    return "First name: " + a.value + " Last name: " + b.value + " E-mail: " + c.value+ " Password: "+ d.value+ ".";
 
}
}

function pswdPrepare() {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    pass.addEventListener('blur',function(){
        if(!regEx.test(pass.value)) {
          alert("Your password must contain at least one uppercase and lowercase letter, one numerical and one special character!");
        }
      });
}



function prepareForm() {
    form.onsubmit = function() {
        return false;
    }
}

window.addEventListener("load", function() {
    var inputs= document.getElementsByTagName("input");
for(var i = 0; i < inputs.length; i++){
    inputs[i].style.width = "120px";
    inputs[i].style.border = "2px inset #2b1108";
    inputs[i].style.color = "#2b1108";
    inputs[i].classList.add("inp");
    inputs[i].style.marginRight = "10px";
    var label = document.createElement("label");
    label.innerHTML = inputs[i].name;
    inputs[i].before(label);

    
    
}
pswdPrepare();
prepareForm();
})
