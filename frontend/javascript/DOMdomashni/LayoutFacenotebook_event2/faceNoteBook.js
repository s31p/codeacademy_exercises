

function desktopVersion() {
window.document.body.style.backgroundImage = "url('unsplashBackgr.jpg')";

var mainDiv  = document.createElement("div");
mainDiv.style.width = "90%";
mainDiv.style.backgroundColor = "#302618";
mainDiv.style.margin = "0 auto";
mainDiv.style.opacity = "0.9";

var picContainer = document.createElement("div");
picContainer.style.width = "100%";
picContainer.style.height = "300px";
//picContainer.style.opacity = "0.8";
picContainer.style.display = "flex";
picContainer.style.flexFlow= "row wrap";
picContainer.style.justifyContent = "space-between";

mainDiv.appendChild(picContainer);

var profilePic = document.createElement("div");
profilePic.style.width = "35%";
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

var photosContainer = document.createElement("div"); 
photosContainer.style.width = "60%";
photosContainer.style.height = "100%";
photosContainer.style.backgroundColor = "#302618";
photosContainer.style.display = "flex";
photosContainer.style.flexWrap = "wrap";
photosContainer.style.alignContent = "space-between";
photosContainer.style.justifyContent = "space-between";
picContainer.appendChild(photosContainer);


var div1 = document.createElement("div");
div1.setAttribute("class", "box");
photosContainer.appendChild(div1);
var link1 = document.createElement("a");
link1.setAttribute("href", "#");
div1.appendChild(link1);
var img1 = document.createElement("img");
img1.setAttribute("src", "unsplash1.jpg");
img1.style.width = "100%";
img1.style.height = "100%";
img1.style.objectFit = "cover";
img1.style.borderRadius = "40px";
link1.appendChild(img1);
var div2 = document.createElement("div");
div2.setAttribute("class", "box");
photosContainer.appendChild(div2);
var link2 = document.createElement("a");
link2.setAttribute("href", "#");
div2.appendChild(link2);
var img2 = document.createElement("img");
img2.setAttribute("src", "unsplash2.jpg");
img2.style.width = "100%";
img2.style.height = "100%";
img2.style.objectFit = "cover";
img2.style.borderRadius = "40px";
link2.appendChild(img2);
var div3 = document.createElement("div");
div3.setAttribute("class", "box");
photosContainer.appendChild(div3);
var link3 = document.createElement("a");
link3.setAttribute("href", "#");
div3.appendChild(link3);
var img3 = document.createElement("img");
img3.setAttribute("src", "unsplash3.jpg");
img3.style.width = "100%";
img3.style.height = "100%";
img3.style.objectFit = "cover";
img3.style.borderRadius = "40px";
link3.appendChild(img3);
var div4 = document.createElement("div");
div4.setAttribute("class", "box");
photosContainer.appendChild(div4);
var link4 = document.createElement("a");
link4.setAttribute("href", "#");
div4.appendChild(link4);
var img4 = document.createElement("img");
img4.setAttribute("src", "unsplash4.jpg");
img4.style.width = "100%";
img4.style.height = "100%";
img4.style.objectFit = "cover";
img4.style.borderRadius = "40px";
link4.appendChild(img4);
var div5 = document.createElement("div");
div5.setAttribute("class", "box");
photosContainer.appendChild(div5);
var link5 = document.createElement("a");
link5.setAttribute("href", "#");
div5.appendChild(link5);
var img5 = document.createElement("img");
img5.setAttribute("src", "unsplash5.jpg");
img5.style.width = "100%";
img5.style.height = "100%";
img5.style.objectFit = "cover";
img5.style.borderRadius = "40px";
link5.appendChild(img5);
var div6 = document.createElement("div");
div6.setAttribute("class", "box");
photosContainer.appendChild(div6);
var link6 = document.createElement("a");
link6.setAttribute("href", "#");
div6.appendChild(link6);
var img6 = document.createElement("img");
img6.setAttribute("src", "unsplash7.jpg");
img6.style.width = "100%";
img6.style.height = "100%";
img6.style.objectFit = "cover";
img6.style.borderRadius = "40px";
link6.appendChild(img6);
var div7 = document.createElement("div");
div7.setAttribute("class", "box");
photosContainer.appendChild(div7);
var link7 = document.createElement("a");
link7.setAttribute("href", "#");
div7.appendChild(link7);
var img7 = document.createElement("img");
img7.setAttribute("src", "unsplash8.jpg");
img7.style.width = "100%";
img7.style.height = "100%";
img7.style.objectFit = "cover";
img7.style.borderRadius = "40px";
link7.appendChild(img7);
var div8 = document.createElement("div");
div8.setAttribute("class", "box");
photosContainer.appendChild(div8);
var link8 = document.createElement("a");
link8.setAttribute("href", "#");
div8.appendChild(link8);
var img8 = document.createElement("img");
img8.setAttribute("src", "unsplash9.jpg");
img8.style.width = "100%";
img8.style.height = "100%";
img8.style.objectFit = "cover";
img8.style.borderRadius = "40px";
link8.appendChild(img8);
var div9 = document.createElement("div");
div9.setAttribute("class", "box");
photosContainer.appendChild(div9);
var link9 = document.createElement("a");
link9.setAttribute("href", "#");
div9.appendChild(link9);
var img9 = document.createElement("img");
img9.setAttribute("src", "unsplash10.jpg");
img9.style.width = "100%";
img9.style.height = "100%";
img9.style.objectFit = "cover";
img9.style.borderRadius = "40px";
link9.appendChild(img9);
var div10 = document.createElement("div");
div10.setAttribute("class", "box");
photosContainer.appendChild(div10);
var link10 = document.createElement("a");
link10.setAttribute("href", "#");
div10.appendChild(link10);
var img10 = document.createElement("img");
img10.setAttribute("src", "unsplash11.jpg");
img10.style.width = "100%";
img10.style.height = "100%";
img10.style.objectFit = "cover";
img10.style.borderRadius = "40px";
link10.appendChild(img10);

function resizePhotos() {
    var images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++){
        
        images[i].style.transform ="3s ease-in-out"
        images[i].addEventListener("mouseover", function() {
         
          images[i].style.transform= "scale(1.2)";
         
        })
       images[i].addEventListener("mouseout", function() {
         
          
           images[i].style.transform= "scale(1.0)";
        })
    }
}   

function photoDivs () {
var myDivs = document.getElementsByClassName("box");
  for(var i = 0; i < myDivs.length; i++){
    
     myDivs[i].style.width = "17%";
     myDivs[i].style.height = "45%";
     myDivs[i].style.backgroundColor = "red";
     myDivs[i].style.borderRadius = "40px";
     //myDivs[i].style.display = "flex";
     myDivs[i].style.border = "1px solid grey";
    
  }
}
//photoDivs();
var contentWrapper = document.createElement("div");
contentWrapper.style.width= "100%";
contentWrapper.style.backgroundColor = "#302618";
contentWrapper.style.marginTop = "20px";
contentWrapper.style.display = "flex";
contentWrapper.style.flexFlow= "row wrap";
contentWrapper.style.justifyContent = "space-between";
mainDiv.appendChild(contentWrapper);

var about = document.createElement("div");
about.style.width = "35%";
about.style.height = "600px";
about.style.backgroundColor = "#77582e";
about.style.fontFamily = "'Work Sans', sans-serif";
about.style.border = "5px groove #28221a"
contentWrapper.appendChild(about);


var par1 = document.createElement("p");
par1.innerHTML = "About me";
par1.style.fontSize = "20px";
par1.style.fontFamily = "'Work Sans', sans-serif";
par1.style.fontStyle = "bold";
about.appendChild(par1);

var par2 = document.createElement("p");
par2.innerHTML = "Name: Sanja Petrovska";
par2.style.fontSize = "18px";
par2.style.fontFamily = "'Work Sans', sans-serif";
par2.style.fontStyle = "bold";
about.appendChild(par2);

var par3 = document.createElement("p");
par3.innerHTML = "Date of birth: 14.04.1987";
par3.style.fontSize = "18px";
par3.style.fontFamily = "'Work Sans', sans-serif";
par3.style.fontStyle = "bold";
about.appendChild(par3);

var par4 = document.createElement("p");
par4.innerHTML = "Current city: Skopje, R. of Macedonia";
par4.style.fontSize = "18px";
par4.style.fontFamily = "'Work Sans', sans-serif";
par4.style.fontStyle = "bold";
about.appendChild(par4);

var par5 = document.createElement("p");
par5.innerHTML = "Hobbies and interests: <br/> Foreign languages(Italian, English, French), programming(HTML5, CSS3, Javascript)";
par5.style.fontSize = "18px";
par5.style.fontFamily = "'Work Sans', sans-serif";
par5.style.fontStyle = "bold";
about.appendChild(par5);

var par6 = document.createElement("p");
par6.innerHTML = "Education: <br/> International business and trade";
par6.style.fontSize = "18px";
par6.style.fontFamily = "'Work Sans', sans-serif";
par6.style.fontStyle = "bold";
about.appendChild(par6);

var par7 = document.createElement("p");
par7.innerHTML = "Current employer: <br/> ALOV AD, <br/> Administration manager, <br/> Public procurement";
par7.style.fontSize = "18px";
par7.style.fontFamily = "'Work Sans', sans-serif";
par7.style.fontStyle = "bold";
about.appendChild(par7);

function setFontStyle() {
    var font1 = document.getElementsByTagName("p");
    for(let y = 0; y < font1.length; y++){
        if(window.innerWidth < 800){
            font1[y].style.fontSize = "14px";
        }
    }
}

var postSections = document.createElement("div");
postSections.style.width = "60%";
postSections.style.height = "600px";
postSections.style.backgroundColor = "#302618";
postSections.style.display = "flex";
postSections.style.flexFlow = "column wrap";
postSections.style.justifyContent = "space-between";
postSections.style.textShadow = "3px 3px #2d2519";
contentWrapper.appendChild(postSections);

var postDiv1 = document.createElement("div");
postDiv1.setAttribute("class", "section");
postSections.appendChild(postDiv1);
var postDiv2 = document.createElement("div");
postDiv2.setAttribute("class", "section");
postSections.appendChild(postDiv2);
var postDiv3 = document.createElement("div");
postDiv3.setAttribute("class", "section");
postSections.appendChild(postDiv3);

 function sectionDivs ()  {
var postDivs = document.getElementsByClassName("section");
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
    postDivs[index].style.display = "flex";
    postDivs[index].style.alignItems = "center";
    postDivs[index].style.textAlign = "justify";
    postDivs[index].style.textJustify = "inter-word";
    

}
}

var footer = document.createElement("div");
footer.style.width = "100%";
footer.style.height = "50px";
footer.style.marginTop = "20px";
footer.style.backgroundColor = "#19140d";
footer.innerHTML = "All rights reserved  © FacenoteBook Inc.";
footer.style.color = "#e3e4e5";
footer.style.display = "flex";
footer.style.alignItems = "flex-end";
footer.style.fontFamily = "'Work Sans', sans-serif";

mainDiv.appendChild(footer);

document.body.appendChild(mainDiv);


   
    photoDivs();
    resizePhotos();
    sectionDivs();
    setFontStyle();
}
desktopVersion();