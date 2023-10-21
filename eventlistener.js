// document.querySelector('button').addEventListener('click',function(){
//     alert("system pop up");
// });

var myVar =document.querySelector("h1");
myVar.addEventListener('mouseover',function(){
    myVar.classList.add("pera-style");
});
myVar.addEventListener('mouseout',function(){
    myVar.classList.remove("pera-style");
});