/* An orc warrior is fighting a human footman. 
The battle ends when one of them dies. 
The orc has 720 hitpoints, does 23-35 damage 
and has 5 armor. The human footman has 550 hitpoints, 
does 18-27 damage, but has a shield that gives him 9 armor. 
Shields and armor deduct the damage that the fighter takes.
 Who will win the fight?
*/
var humanFootmanDamage = 0;
var hitPoints = 500;
var armor = 9;
for(i=0; i <= hitPoints; i++){
// console.log(i);

if( i += 20){
    humanFootmanDamage += armor;
}

}
console.log("Human footman: " + (+humanFootmanDamage + +hitPoints));


var hitPoints2 = 700;
var orcWarriorDamage = 0;
var armor2 = 5;
for(indx=0; indx <= hitPoints2; indx++) {
   // console.log(indx);
    if(indx += 30){
        orcWarriorDamage += armor2;
    }
    
}
console.log("Orc warrior: " + (+orcWarriorDamage + +hitPoints2));

if((+humanFootmanDamage + +hitPoints) > (+orcWarriorDamage + +hitPoints2)) {
    alert("The human footman wins!");
} else {
    alert("The orc warrior wins!")
}
