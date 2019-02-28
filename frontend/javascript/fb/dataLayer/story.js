function Story(isBio) {
    this.title = "This is a title";
  //  console.log(this.title);  calls title x 50
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";
    //console.log(this.description); x50
    this.isBio = isBio;
   // console.log(this.isBio); // true x1
    this.date = new Date();
    //console.log(this.date); calls date x50
}

