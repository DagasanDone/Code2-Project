let note = prompt("Please enter your note.");
if(note < 0 || note > 100 ){
  console.log("Please enter a valid note! ");
}else if (note <= 49){
  console.log("Your grade is F ");
}else if(note <= 59) {
  console.log("Your grade is D ");
}else if(note <=69 ){
  console.log("Your grade is C ");
}else if(note <= 89){
  console.log("Your grade is B ");
}else if(note <=100){
console.log("Your grade is A ");
}


let season = prompt("Please enter your month . Start with capital letter.") ; 
switch (season){
  case'September':
  console.log("The season is Autumn.");
  break;

  case 'October':
  console.log("The season is Autumn.");
  break;

  case 'November':
  console.log("The season is Autumn.");
  break;

  case 'December':
    console.log("The season is Winter.");
    break;

  case 'January':
    console.log("The season is Winter.");
    break;

  case 'February':
    console.log("The season is Winter.");
    break;

  case 'March':
    console.log("The season is Spring.");
    break;

  case 'April':
    console.log("The season is Spring.");
    break;

  case 'May':
    console.log("The season is Spring.");
    break;

  case 'June' :
    console.log("The season is Summer.");
    break;

  case 'July':
    console.log("The season is Summer.");
    break;

  case 'August':
    console.log("The season is Summer.");


}

let month = prompt("Please enter a month, start with capital letter!");
switch(month){
 case 'January':
   console.log("January has 31 days.");
   break;

 case'February':
  console.log("February has 28 days.");
  break;

case'March':
 console.log("March has 31 days.");
 break;

case'April':
console.log("April has 30 days.");
break;

case'May':
console.log("May has 31 days.");
break;

case'Jun':
console.log("Jun has 30 days.");
break;

case'July':
console.log("July has 31 days.");
break;

case'August':
console.log("August has 31 days.");
break;

case'September' :
console.log("September has 30 days.");
break;

case'October':
console.log("October has 31 days.");
break;

case'November' :
console.log("November has 30 days.");
break;

case 'December':
  console.log("December has 31 days.");
  break;

}



