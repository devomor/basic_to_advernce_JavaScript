
var numberOfwon = 0;
var numberOflost = 0;

for(var i  = 1; i<=5;i++){
    var guesnumber = parseInt(prompt('Enter a  number from 1 to 5 : '));
var randomNumber = Math.floor(Math.random()*5)+1;

if(guesnumber == randomNumber){
    numberOfwon++;
}else{
    numberOflost--;
}
}

document.write('You have a won'+numberOfwon);
document.write("you have lost , Random number was "+numberOflost);