function Photo(isProfile) {
   //this.url = "https://static1.squarespace.com/static/52b77f99e4b07e8bce6a3889/t/572be5d837013bcf0a1b3a70/1462494687296/%C2%A9+Katrin+Koenning";
    
   this.url = "unsplash1.jpg";
    //console.log(this.url); url x 50
    //this.url2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAuCAYAAAAcEfjaAAABV0lEQVRIx+2VsW7CQBBEDwTpIkXICMuyJdtfQsGXQUVFlSpVmjTESOn4BAoXLigsueAvaM2MBAht7g6v06ZYwNK8893ezGLatjV5ni9QO2PMC599ZdI0nWdZdgbQ4vsH0NgLQLSn+FZ4/gY0cgJBELxCdHiEUF+AhlaAH9jWG0SleNOnDbr/iON4AlEloA9AAyvAiqIogPAooHcnwIJghqrFmTZOgJUkSQRRI6C1E7huL8GbTmJ7Ky2w/PuWVIcOw3Daua2qi1NZQ20+i723XnurA/QQ0aJTRJ8J/oEuAFvNqcjWPwV4ibzM66Weeck+8YhTUNhm7xIPaUAhPtCoVjGtLdxbMgK/zsCwMDRi5YrhsnaJcRQrHzkNrW1l0MXKNQeCy95rsXLDUeNK3EqsfOIQ8/0DLVWAeku9Du1rK6ehE1BfnNoavcwn7L3tZO9eARIRLW4RvQA0+6DNwTHW6QAAAABJRU5ErkJggg==";
this.url2 = []
// this.url2[0] =  "unsplash2.jpg";
// this.url2[1] = "unsplash3.jpg";
// this.url2[2] =  "unsplash4.jpg";
// this.url2[3] =  "unsplash5.jpg";
// this.url2[4] =  "unsplash6.jpg";
// this.url2[5] =  "unsplash7.jpg";
// this.url2[6] = "unsplash8.jpg";
// this.url2[7] =  "unsplash9.jpg";
// this.url2[8] =  "unsplash10.jpg";
// this.url2[9] =  "unsplash11.jpg";
for(var i=2;i<12;i++)
{
    this.url2.push("unsplash" + i + ".jpg");
}
//this.url3 = this.url2[Math.floor(Math.random()* this.url2.length)];

//console.log(this.url3 + "llllllll");
    this.altText = "Lorem ipsum donor bla bla bla";
    this.isProfile = isProfile;
   // console.log(this.isProfile);true x50
   // console.log(this.altText); true + altText x 50

}

