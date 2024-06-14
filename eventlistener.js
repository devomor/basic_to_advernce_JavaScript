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


// Event Handler Methods:
// addEventListener()
// Attaches an event handler to an element without overwriting existing event handlers.
document.getElementById('myButton').addEventListener('click', handleClick);
// removeEventListener()
// Removes an event handler that has been attached with addEventListener()
document.getElementById('myButton').removeEventListener('click', handleClick);
// onclick
// Event handler property for handling click events.
document.getElementById('myButton').onclick = function(event) { };
// onchange
// Event handler property for handling change events.
document.getElementById('myInput').onchange = function(event) {  };
// onsubmit
// Event handler property for handling form submission events.
document.getElementById('myForm').onsubmit = function(event) {  };
// onkeydown, onkeyup, onkeypress
// Event handler properties for handling keyboard events.
element.onkeydown = function(event) { };
element.onkeyup = function(event) {  };
element.onkeypress = function(event) {  };
document.addEventListener('keydown', function(event) {  });
// onmouseover, onmouseout
// Event handler properties for handling mouse over and mouse out events.
element.onmouseover = function(event) {  };
element.onmouseout = function(event) { };
document.getElementById('myElement').onmouseover = function(event) {  };
// onload
// Event handler property for handling the load event (e.g., for <body> or <img> elements)
window.onload = function(event) {  };


// Explanation:
// addEventListener('event', function, useCapture): Preferred method to attach event listeners dynamically to elements. Allows multiple event listeners on the same element.
// removeEventListener('event', function, useCapture): Removes event listeners added with addEventListener().
// element.onevent = function(event) { ... }: Direct assignment to onevent properties (onclick, onchange, etc.) attaches event handlers but overwrites existing ones.
// 'on...' event handler properties: Provide direct access to handle specific events like click (onclick), change (onchange), submit (onsubmit), key events (onkeydown, onkeyup, onkeypress), mouse events (onmouseover, onmouseout), and load (onload).

