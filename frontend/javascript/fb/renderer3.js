function Renderer(person) {
  this.user = person;
 
  window.document.body.style.backgroundImage = "url('unsplashBackgr.jpg')";
  this.mainContainer = document.getElementById("mainContainer");
  this.mainContainer.style.width = "90%";
  this.mainContainer.style.backgroundColor = "#302618";
  this.mainContainer.style.margin = "0 auto";
  this.mainContainer.style.opacity = "0.9";

  this.renderAll = function () {
    this.imgsContainer();
    this.textContainer();
    // this.renderRight();
    this.footer();

  };


  this.imgsContainer = function () {
    picContainer = document.createElement("div");
    picContainer.style.width = "100%";
    picContainer.style.height = "300px";
    //picContainer.style.opacity = "0.8";
    picContainer.style.display = "flex";
    picContainer.style.flexFlow = "row wrap";
    picContainer.style.justifyContent = "space-between";

    this.mainContainer.appendChild(picContainer);


    this.profilePicture1 = function () {
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

      profileImg.src = this.user.profilePhoto.url;
      profileImg.style.width = "100%";
      profileImg.style.height = "100%";
      profileImg.style.borderRadius = "40px";
      profileImg.style.objectFit = "cover";
      profileLink.appendChild(profileImg);


    };
    this.profilePicture1();
     var galleryContMain = document.createElement("div");
     
    var galleryCont = document.createElement("div");
    var imgs2Container = document.createElement("img");

    this.album1 = function () {
      var photosContainer = document.createElement("div");
      photosContainer.setAttribute("id", "photosContainer");
      photosContainer.style.width = "60%";
      photosContainer.style.height = "100%";
      photosContainer.style.backgroundColor = "#302618";
      photosContainer.style.display = "flex";
      photosContainer.style.flexWrap = "wrap";
      photosContainer.style.alignContent = "space-between";
      photosContainer.style.justifyContent = "space-between";
      picContainer.appendChild(photosContainer);
      
      const fragment = document.createDocumentFragment();
      for (let indx = 0; indx < this.user.photos.url2.length; indx++) {
       const myDivs2 = document.createElement("img");
       myDivs2.setAttribute("class", "box");
       myDivs2.src = this.user.photos.url2[indx];
       fragment.appendChild(myDivs2);
      }
      photosContainer.appendChild(fragment);
      
      this.photoDivs = function () {


        var myDivs = document.getElementsByClassName("box");
        
        countertmp = 0;
        
        for (var i = 0; i < myDivs.length; i++) {
         
          myDivs[i].style.width = "17%";
          myDivs[i].style.height = "45%";
          myDivs[i].style.borderRadius = "40px";
          myDivs[i].style.border = "1px solid grey";
          myDivs[i].style.objectFit = "cover";



          //   myDivs[i].appendChild(imgs2);
          myDivs[i].addEventListener("click", function () {
            var el = document.getElementById("galeryPopUp");
            
let deleteX2 = document.getElementById("deleteX");
let btnR2 = document.getElementById("right");
let btnL2 = document.getElementById("left");
            if (el != null) {
              el.innerHTML = "";
            }
            if( deleteX2 || btnL2 || btnR2){
              deleteX2.remove() || btnL2.remove() || btnR2.remove();
            }
            popUpGallery(event.target);
           
           
          }, false);
          //  console.log( myDivs[i].src = this.user.photos.url2[9] + "PPPPPPPPP");
          //  document.getElementById("galeryPopUp").reset();
   



        }
      
        
      }
      this.photoDivs();
      


    }  //album1Container  
    this.album1();


    function resizePhotos() {
      var images = document.getElementsByTagName("img");
      for (let i = 0; i < images.length; i++) {

        images[i].style.transform = "3s ease-in-out"
        images[i].addEventListener("mouseover", function () {

          images[i].style.transform = "scale(1.1)";

        })
        images[i].addEventListener("mouseout", function () {


          images[i].style.transform = "scale(1.0)";
        })
      }
    }
    resizePhotos();

      

    function popUpGallery(event) {
      this.src = event.src;
      galleryCont.id = "galeryPopUp";
      galleryContMain.style.height = "25vh";
      galleryContMain.style.display = "flex";
      galleryContMain.style.margin = "0 auto";
     // galleryContMain.style.alignItems = "center";
     // galleryContMain.style.justifyContent = "center";
      galleryContMain.style.width = "40%";
      galleryCont.style.width = "80%";
      galleryCont.style.height = "25vh";
      galleryCont.style.display = "block";
      galleryCont.style.position = "relative";
      galleryCont.style.margin = "0 auto";
      //styleElem.innerHTML = "#galeryPopUp:before {content: "#left";}";
      // galleryCont.style.zIndex = "1";
      //galleryCont.style.marginLeft = "30%";
      //galleryCont.style.marginTop = "-20%";
      galleryCont.style.backgroundColor = "red";
      imgs2Container.style.margin = "0 auto";
      imgs2Container.src = this.src;
      imgs2Container.id = "popupimg";
      

      galleryContMain.appendChild(galleryCont);
      picContainer.appendChild(galleryContMain);
      imgs2Container.style.width = "100%";
      imgs2Container.style.height = "100%";
      galleryCont.appendChild(imgs2Container);
     
   

      function mySlider(n) {
        var images2;
        var currentImg = document.getElementById("popupimg").src.split('/').pop();
        

        images2 = person.photos.url2;
        var tmp = images2.indexOf(currentImg);
        if (n > 0) {
          if (tmp < images2.length - 1) {

            //this.src++;
            tmp++;
          } else {
            tmp = 0;

          }


        }
        else {
          if (tmp < images2.length) {

            //this.src++;
            if (tmp <= 0) {
              tmp = images2.length;
            }
            tmp--;
          }
          else {
            tmp = 0;

          }
        }
        imgs2Container.src = images2[tmp];

      }

   
    var deletePopUp2 = document.createElement('a');
    deletePopUp2.setAttribute("href", "#");
    deletePopUp2.setAttribute("id", "deleteX");
    var deletePopUp = document.createElement("i");
   
    deletePopUp2.appendChild(deletePopUp);
    deletePopUp.setAttribute("class", "fas fa-times");
    deletePopUp.style.transform = "scale(2.4)";
  // deletePopUp2.style.marginLeft = "200px";
   deletePopUp2.style.marginBottom = "100px";
    
  //  galleryCont.pseudoStyle('after', 'content', '"deletePopUp2"');
galleryContMain.appendChild(deletePopUp2);



  deletePopUp.addEventListener("click", function(){
//console.log(event.target);
let el = document.getElementById("galeryPopUp");
let deleteX = document.getElementById("deleteX");
let btnR = document.getElementById("right");
let btnL = document.getElementById("left");
           // if (el != null) {
           //   el.innerHTML = "";
             el.remove();
             btnR.remove();
             btnL.remove();
             deleteX.remove();
             deletePopUp.remove();
           
           // }  
//event.target.offsetParent.remove();
            
  });

     this.btnLeft = document.createElement("button");
      this.btnLeft.setAttribute("id", "left");
      this.btnLeft.style.backgroundColor = "#fff";
      this.btnLeft.style.marginTop = "3%";
     // this.btnLeft.style.marginLeft = "-40px";
     // this.btnLeft.style.marginBottom = "0px";
      this.btnLeft.style.width = "30px";
      this.btnLeft.style.height = "50px";
      this.btnLeft.style.float = "left";
      this.btnLeft.style.display = "block";
      this.btnLeft.style.position = "absolute";
     // this.btnLeft.style.justifyContent = "center";

      galleryContMain.appendChild(this.btnLeft);
      var arrowL = document.createElement("img");
      arrowL.setAttribute("src", "arrow-left.png");
      this.btnLeft.appendChild(arrowL);


      this.btnRight = document.createElement("button");
      this.btnRight.style.backgroundColor = "#fff";
      this.btnRight.setAttribute("id", "right");
      this.btnRight.style.marginTop = "3%";
      this.btnRight.style.marginLeft = "430px";
      this.btnRight.style.width = "30px";
      this.btnRight.style.height = "50px";
      this.btnRight.style.float = "right";
      this.btnRight.style.display = "block";
      this.btnRight.style.position = "absolute";
      //this.btnRight.style.textAlign = "center";
      galleryContMain.appendChild(this.btnRight);
      var arrowR = document.createElement("img");
      arrowR.style.display = "block";
      arrowR.style.position = "absolute";
      arrowR.style.marginTop = "-20px";
      //arrowR.style.margin = "0 auto";
      arrowR.setAttribute("src", "arrow-right.png");
      this.btnRight.appendChild(arrowR);

      this.btnRight.addEventListener("click", function () {

        mySlider(1);
      });
      this.btnLeft.addEventListener("click", function () {

        mySlider(-1);
      });

    } //popupGallery()   

  }; //imgsContainer
  // setTimeout("mySlider()", 500);
  // btnRight.addEventListener("click", plusSlides(1), false);




  //mySlider();

  //  window.addEventListener('DOMContentLoaded', function() {
  /*    this.btnRight.addEventListener("click", function() {
          this.plusDivs(+1);
      });



}, false);//window event listener */






  this.textContainer = function () {
    var textMain = document.createElement("div");
    textMain.style.width = "100%";
    textMain.style.height = "auto";
    textMain.style.minHeight = "200px";
    textMain.style.display = "flex";
    textMain.style.flexFlow = "colum wrap";
    textMain.style.justifyContent = "space-between";
    textMain.style.marginTop = "15px";
    mainContainer.appendChild(textMain);

    var biographyContainer = document.createElement("div");
    biographyContainer.style.width = "35%";
    biographyContainer.style.height = "auto";
    biographyContainer.style.minHeight = "100px";
    biographyContainer.style.backgroundColor = "#77582e";
    biographyContainer.style.fontFamily = "'Work Sans', sans-serif";

    biographyContainer.innerHTML = this.user.name + "<br/>" + this.user.bio.description;
    console.log(this.user.bio);
    biographyContainer.style.border = "5px groove #28180e";


    textMain.appendChild(biographyContainer);




    var storyContainer = document.createElement("div");
    storyContainer.style.width = "60%";
    storyContainer.style.minHeight = "100px";
    storyContainer.style.height = "auto";
    storyContainer.style.backgroundColor = "#7a6140";

    for (let i = 0; i < 5; i++) {
      var storyDiv = document.createElement("div");
      storyContainer.appendChild(storyDiv);
      storyDiv.innerHTML = "<b>" + this.user.bio.title + "</b>" + "<br/>" + this.user.bio.description + "<br/>" + this.user.bio.date;
      //return this.user.bio.title + "<br/>" + this.user.bio.description + "<br/>" +this.user.bio.date;
      storyDiv.style.color = "#fcebd4";
      storyDiv.style.marginTop = "10px";
      storyDiv.style.fontFamily = "'Work Sans', sans-serif";
      var storyBtn = document.createElement("button");
      storyBtn.textContent = "delete story";
      storyBtn.style.float = "right";
      storyDiv.appendChild(storyBtn);
      storyBtn.addEventListener("click", function (event) {
        console.log(event.target);
        var deleteStory = event.target.parentNode;
        deleteStory.parentNode.removeChild(this.parentNode);
      });

    }
    textMain.appendChild(storyContainer);
  }//textContainer

  this.footer = function () {
    var footer = document.createElement("div");
    footer.style.width = "100%";
    footer.style.height = "40px";
    footer.style.marginTop = "20px";
    footer.style.backgroundColor = "#19140d";
    footer.innerHTML = "All rights reserved  © FacenoteBook Inc.";
    footer.style.color = "#e3e4e5";
    footer.style.display = "flex";
    footer.style.alignItems = "flex-end";
    footer.style.fontFamily = "'Work Sans', sans-serif";

    mainContainer.appendChild(footer);
  }


}//mainDiv