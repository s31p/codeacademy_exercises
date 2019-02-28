function SocialNetwork() {
    this.users = [];
  //  console.log(this.users); //array of obj 0-49 users, obj1 bio: title + descr + date + isBio ; obj2:profilePhoto, alttext + url + function respondToEventInvite
    this.events = [];
  // console.log(this.events); //array of 5 obj- event + 0-4 each event has an array of rand picked registered users with all user data included
    this.generateUsers = function() {
        for (var index = 0; index < 50; index++) {
            var person = new User(index);
            this.users.push(person);
        }
    }

    this.generateEvents = function() {
        for (var index = 0; index < 5; index++) {
            var evt = new SocialEvent(index);
            evt.inviteUsers(this.users);
            this.events.push(evt);
        }
    }

    this.generateUsers();
    this.generateEvents();
}