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

///DOM Selection Methods:
// getElementById()
// Retrieves an element by its id attribute.
let element = document.getElementById('elementId');
// getElementsByClassName()
// Retrieves a collection of elements with the specified class name.
let element1 = document.getElementsByClassName('className');
// getElementsByTagName()
// Retrieves a collection of elements with the specified tag name.
let element2 = document.getElementsByTagName('tagName');
// querySelector()
// Retrieves the first element that matches a specified CSS selector.
let element3 = document.querySelector('selector');
// querySelectorAll()
// Retrieves a list of elements that match a specified CSS selector.
let element4 = document.querySelectorAll('selector');
// getElementByName()
// Retrieves a collection of elements with the specified name attribute (mostly used for form elements)
let elements = document.getElementsByName('nameAttribute');



// Explanation:
// getElementById('id'): Returns the element with the specified id attribute.
// getElementsByClassName('class'): Returns a live HTMLCollection of elements with the specified class name.
// getElementsByTagName('tag'): Returns a live HTMLCollection of elements with the specified tag name.
// querySelector('selector'): Returns the first element that matches the specified CSS selector.
// querySelectorAll('selector'): Returns a static NodeList representing a list of elements that match the specified group of selectors.
// getElementByName('name'): Returns a NodeList or HTMLCollection of elements with the specified name attribute (commonly used with form elements).

