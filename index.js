 //area  calculation
 
//  var base = prompt("Enter your base: ");
//  var height = prompt("Enter your height : ");
//  var area = base * height;
//  document.write("Area  = "+area+"<br>");


 //simple calculation
//  var num1 = prompt('Enter a first  nubmer :');
//  var num2 = prompt("Enter a second number :")
//  var sum = num1 + num2;
//  document.write("the result is : "+sum);

 //use to if else 
var a = 10;
var b = 20;
var sum  = a+b;
if(a == b){
    document.write(" a = b : "+ sum);

}else{
    document.write("the result is "+sum);
}

for(var x =1 ; x<=10;x++){
    document.write("Hello Bangladesh<br>");
}

// use to while  loop
var  i = 1;
while(i<=100){
    document.write("result is :"+i);
    i++;
}

// //use ot do while loop
// var x = 11;
// do{
//     document.write("pritn the value :"+x);

// }while(i<=20){
//     document.write("result now show");
// };

//use to iifes
(function display( x, y ){
    var sum = x+y;
    document.write("result is :" +sum);
})(1,2);

// function Expreesion
var display2 = function displayMessage(msg){
    document.write(msg);
}
display2('i am a programmer');

//use to array 
// var nemes = new Array(2);
// names[0] = 'a';
// names[1] = 'a';
// for(var x =0; x<=names.lenght;x++){
//     document.write(x);
// }

// use to sort
 var numbers = [2,23,24,1,4];
 numbers.sort(function(a,b){
    return a -b;
 });
 document.write(numbers);


 // use to reverce
 var numbers = [2,23,24,1,4];
 numbers.sort(function(a,b){
    return b - a;
 });
 document.write(numbers);