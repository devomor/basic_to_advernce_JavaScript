// document.getElementById("heading1").innerHTML = 'this a head 2';
// document.querySelector('.pid').innerHTML = ' this is a peragraf';


function myMessage(){
    var myVar = document.querySelector('#paraid1');
    myVar.innerHTML = 'You have clicked on button1';
}


var heading3 = document.createElement('h2');
var text = document.createTextNode("this is a heading 2");
heading3.appendChild(text);

var myDiv = document.getElementById('my-dive');
myDiv.appendChild(heading3);

function addStyle(){
    var myVer1 = document.querySelector('#paraid');
    myVer1.classList.add('pera-style');
}

function removeStyle(){
    var myVer1 = document.querySelector('#paraid');
    myVer1.classList.remove('pera-style');
}