function SocialEvent(id) {
    this.name = "Event-" + id;
    //console.log(this.name+"hhhhhhhhhh"); Event-01, Event01, 03, 04, 05
    this.registeredUsers = [];
//console.log(this.registeredUsers+ "kkkkkkkkkk"); empty calls x5 
    this.inviteUsers = function(users) {
        for (var index = 0; index < 5; index++) {
            var pickedUser = getRandom(0, users.length - 1);
            users[pickedUser].respondToEventInvite(this);
           //console.log(pickedUser + "jjjjjjjjjjj"); //calls random users 0-49 
        }
    }
}