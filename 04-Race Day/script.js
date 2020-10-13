let age = prompt("What is your age?");
let regTime = prompt("When are you registering?");
let raceNumber =Math.floor(Math.random() * 1001 ); 
let reg_early = true ; 
//age= 25; 

if((age > 18) && (age < 40) && (reg_early == true)){
  raceNumber =raceNumber + 1000 ; 
}
if((age > 18) && (reg_early == true)){
  console.log(`Your age is ${age} and you registered at ${regTime}am  and your race number is ${raceNumber } your race is starting at 9:30 am ` );
} else if (age >18 && reg_early !== true){
  console.log(`Your age is ${age} and you registered at ${regTime}am  and your race number is ${raceNumber } your race is starting at 11:00 am ` );
} else if ( age < 18){
  console.log(`Your age is ${age} and you registered at ${regTime}am  and your race number is ${raceNumber } your race is starting at 12:30 pm ` );
}else if(age == 18){
 console.log("Come to the registration desk."); 
}

 
