let johnScore_1 = 89; 
let johnScore_2 = 120;
let johnScore_3 = 103;

let johnAverageScore = ((johnScore_1 + johnScore_2 + johnScore_3) / 3) ;
console.log( johnAverageScore);

let mikeAverageScore = ((116+94+113)/3) ;
//let averageScore = 

if(johnAverageScore > mikeAverageScore) {
console.log(`John's team wins with ${johnAverageScore}  points`);
} else if(johnAverageScore < mikeAverageScore){
console.log(`Mike's team wins with ${mikeAverageScore} points`);
}else {
  console.log('There is a draw!');
}

let maryAverageScore = ((97+ 134 + 105) / 3);
if(johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore){
  console.log(`John's team wins with ${johnAverageScore} points.`);
}else if (johnAverageScore < mikeAverageScore && maryAverageScore <mikeAverageScore){
  console.log(`Mike's team wins with ${mikeAverageScore} points.`);
}else{
  console.log('There is a draw!');
}