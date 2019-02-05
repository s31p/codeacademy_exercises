function mobileVersion() {
window.document.body.style.backgroundImage = "url('unsplashBackgr.jpg')";

var mainDiv  = document.createElement("div");
mainDiv.style.width = "90%";
mainDiv.style.backgroundColor = "#302618";
mainDiv.style.margin = "0 auto";
mainDiv.style.opacity = "0.9";

var picContainer = document.createElement("div");
picContainer.style.width = "100%";
picContainer.style.height = "30vh";
mainDiv.appendChild(picContainer);

var profilePic = document.createElement("div");
profilePic.style.width = "100%";
profilePic.style.height = "100%";
profilePic.style.backgroundColor = "pink";
profilePic.style.borderRadius = "40px";
profilePic.style.border = "1px solid grey";
picContainer.appendChild(profilePic);

var profileLink = document.createElement("a");
profileLink.setAttribute("href", "#");
profilePic.appendChild(profileLink);
var profileImg = document.createElement("img");
profileImg.setAttribute("src", "unsplash6.jpg");
profileImg.style.width = "100%";
profileImg.style.height = "100%";
profileImg.style.borderRadius = "40px";
profileImg.style.objectFit = "cover";
profileLink.appendChild(profileImg);


var contentWrapper = document.createElement("div");
contentWrapper.style.width= "100%";
contentWrapper.style.backgroundColor = "#302618";
contentWrapper.style.marginTop = "10px";
contentWrapper.style.display = "flex";
contentWrapper.style.flexFlow= "column wrap";
contentWrapper.style.justifyContent = "center";
contentWrapper.style.alignContent = "center";

mainDiv.appendChild(contentWrapper);

var btn1 = document.createElement("button");
btn1.setAttribute("class", "accordion");
btn1.innerHTML= "About me";

contentWrapper.appendChild(btn1);

var about = document.createElement("div");
about.setAttribute("class", "panel");
about.style.width = "94";
about.style.minHeight = "100px";
about.style.height = "auto";
about.style.backgroundColor = "#77582e";
about.style.fontFamily = "'Work Sans', sans-serif";
about.style.border = "5px groove #28221a";
contentWrapper.appendChild(about);



var par2 = document.createElement("p");
par2.innerHTML = "Name: Sanja Petrovska";
par2.style.fontSize = "60%";
par2.style.fontFamily = "'Work Sans', sans-serif";
par2.style.fontStyle = "bold";
about.appendChild(par2);

var par3 = document.createElement("p");
par3.innerHTML = "Date of birth: 14.04.1987";
par3.style.fontSize = "60%";
par3.style.fontFamily = "'Work Sans', sans-serif";
par3.style.fontStyle = "bold";
about.appendChild(par3);

var par4 = document.createElement("p");
par4.innerHTML = "Current city: Skopje, R. of Macedonia";
par4.style.fontSize = "60%";
par4.style.fontFamily = "'Work Sans', sans-serif";
par4.style.fontStyle = "bold";
about.appendChild(par4);

var par5 = document.createElement("p");
par5.innerHTML = "Hobbies and interests: <br/> Foreign languages(Italian, English, French), programming(HTML5, CSS, Javascript)";
par5.style.fontSize = "60%";
par5.style.fontFamily = "'Work Sans', sans-serif";
par5.style.fontStyle = "bold";
about.appendChild(par5);

var par6 = document.createElement("p");
par6.innerHTML = "Education: <br/> International business and trade";
par6.style.fontSize = "60%";
par6.style.fontFamily = "'Work Sans', sans-serif";
par6.style.fontStyle = "bold";
about.appendChild(par6);

var par7 = document.createElement("p");
par7.innerHTML = "Current employer: <br/> ALOV AD, <br/> Administration manager, <br/> Publuc procurement";
par7.style.fontSize = "60%";
par7.style.fontFamily = "'Work Sans', sans-serif";
par7.style.fontStyle = "bold";
about.appendChild(par7);

var btn2 = document.createElement("button");
btn2.setAttribute("class", "accordion");
btn2.innerHTML= "Section1";

contentWrapper.appendChild(btn2);
var postDiv1 = document.createElement("div");
postDiv1.setAttribute("class", "panel panel2");
contentWrapper.appendChild(postDiv1);

var btn3 = document.createElement("button");
btn3.setAttribute("class", "accordion");
btn3.innerHTML= "Section2";

contentWrapper.appendChild(btn3);
var postDiv2 = document.createElement("div");
postDiv2.setAttribute("class", "panel panel2");
contentWrapper.appendChild(postDiv2);

var btn4 = document.createElement("button");
btn4.setAttribute("class", "accordion");
btn4.innerHTML= "Section3";

contentWrapper.appendChild(btn4);
var postDiv3 = document.createElement("div");
postDiv3.setAttribute("class", "panel panel2");
contentWrapper.appendChild(postDiv3);

function sectionDivs2()  {
    var postDivs = document.getElementsByClassName("panel2");
    for(var index = 0; index < postDivs.length; index++){
        postDivs[index].style.width = "100%";
        postDivs[index].style.height = "32%";
        postDivs[index].style.border = "1px solid grey";
        postDivs[index].style.borderRadius = "40px";
        postDivs[index].style.backgroundColor = "#7a6140";
        postDivs[index].style.color = "#fcebd4";
        //postDivs[index].style.opacity = "0.3";
        postDivs[index].style.fontFamily = "'Work Sans', sans-serif";
        postDivs[index].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
        postDivs[index].style.textIndent = "2em";
        postDivs[index].style.fontSize = "60%";
        postDivs[index].style.alignItems = "center";
        postDivs[index].style.textAlign = "justify";
        postDivs[index].style.textJustify = "inter-word";
        
    
    }
    }

    function customizeBtns() {
   var btns = document.getElementsByClassName("accordion");
   for(var j = 0; j < btns.length; j++){
    btns[j].style.backgroundColor = "#77582e";
    btns[j].style.fontFamily = "'Work Sans', sans-serif";
    btns[j].style.border = "5px groove #28221a";
    btns[j].style.fontSize = "80%";
    btns[j].style.height = "15vh";
    btns[j].style.fontStyle = "bold";
    btns[j].style.width = "100%";
    btns[j].style.outline = "none";
    btns[j].style.cursor = "pointer";
   }

    }

/*var btn5 = document.createElement("button");
btn5.setAttribute("class", "accordion");
btn5.innerHTML= "View gallery";

contentWrapper.appendChild(btn5);*/


/*ar galleryContainer = document.createElement("div");
galleryContainer.style.height = "150px";
galleryContainer.style.width = "100%";
galleryContainer.setAttribute("class", "panel");

contentWrapper.appendChild(galleryContainer);

var imgDiv1 = document.createElement("div");
imgDiv1.setAttribute("class", "slider fade");
imgDiv1.style.display = "none";
var img1 = document.createElement("img");
//img1.setAttribute("class", "slider");
galleryContainer.appendChild(imgDiv1);
img1.setAttribute("src", "unsplash1.jpg");
img1.style.position = "relative";
img1.style.width = "100%";
img1.style.objectFit ="contain";
imgDiv1.appendChild(img1);

var imgDiv2 = document.createElement("div");
imgDiv2.setAttribute("class", "slider fade");
imgDiv2.style.display = "none";
galleryContainer.appendChild(imgDiv2);
var img2 = document.createElement("img");
//img2.setAttribute("class", "slider");
img2.setAttribute("src", "unsplash2.jpg");
img2.style.width = "100%";
img2.style.objectFit ="contain";
imgDiv2.appendChild(img2);


function slideShow() {
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slider");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 1000); 
  } 
}*/

  
  



    
var footer = document.createElement("div");
footer.style.width = "100%";
footer.style.height = "5vh";
footer.style.marginTop = "5px";
footer.style.fontSize = "50%";
footer.style.backgroundColor = "#19140d";
footer.innerHTML = "All rights reserved  © FacenoteBook Inc.";
footer.style.color = "#e3e4e5";
footer.style.display = "flex";
footer.style.alignItems = "flex-end";
footer.style.fontFamily = "'Work Sans', sans-serif";

mainDiv.appendChild(footer);






document.body.appendChild(mainDiv);

var acc = document.getElementsByClassName("accordion");
var i;

var panels = document.getElementsByClassName("panel");
for(var index = 0; index < panels.length; index++){
    panels[index].style.display = "none";
    panels[index].style.overflow = "hidden";
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


sectionDivs2();
customizeBtns();
//customizeGallery();

//slideShow();

}
mobileVersion();