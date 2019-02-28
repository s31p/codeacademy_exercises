function User(id) {
    this.name = "Person-" + id;
   // console.log(this.name); Person- + from 0-49
    this.profilePhoto = new Photo(true);
    //console.log(this.profilePhoto); object-  url + isProfile-true+ alttext   x50
    this.bio = new Story(true);
    //console.log(this.bio); //title + description + isBio:true +date
    this.album = [];
     this.photos = new Photo(false);
    //photos.url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAuCAYAAAAcEfjaAAABV0lEQVRIx+2VsW7CQBBEDwTpIkXICMuyJdtfQsGXQUVFlSpVmjTESOn4BAoXLigsueAvaM2MBAht7g6v06ZYwNK8893ezGLatjV5ni9QO2PMC599ZdI0nWdZdgbQ4vsH0NgLQLSn+FZ4/gY0cgJBELxCdHiEUF+AhlaAH9jWG0SleNOnDbr/iON4AlEloA9AAyvAiqIogPAooHcnwIJghqrFmTZOgJUkSQRRI6C1E7huL8GbTmJ7Ky2w/PuWVIcOw3Daua2qi1NZQ20+i723XnurA/QQ0aJTRJ8J/oEuAFvNqcjWPwV4ibzM66Weeck+8YhTUNhm7xIPaUAhPtCoVjGtLdxbMgK/zsCwMDRi5YrhsnaJcRQrHzkNrW1l0MXKNQeCy95rsXLDUeNK3EqsfOIQ8/0DLVWAeku9Du1rK6ehE1BfnNoavcwn7L3tZO9eARIRLW4RvQA0+6DNwTHW6QAAAABJRU5ErkJggg==";

    //unsplash1.jpg, unsplash2.jpg, unsplash3.jpg, unsplash4.jpg,
       // unsplash5.jpg, unsplash6.jpg, unsplash7.jpg, unsplash8.jpg, unsplash9.jpg, unsplash10.jpg];
    console.log(this.album); //empty array [] x 50


    this.respondToEventInvite = function(socialEvent) {
        socialEvent.registeredUsers.push(this);
    }

   /* this.generateImages = function() {
        for (let index = 0; index < 10; index ++) {
            var image = 
        }
    }*/
}