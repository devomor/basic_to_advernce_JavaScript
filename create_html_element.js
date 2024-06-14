// Creating HTML Elements:
// createElement()
// Creates a new HTML element specified by the tag name.
let newDiv = document.createElement('div');
// createTextNode()
// Creates a new text node with the specified text.
let newText = document.createTextNode('Hello, World!');
// Adding HTML Elements:
// appendChild()
// Appends a node as the last child of a specified parent node.
let parent1 = document.getElementById('parentElement');
parent1.appendChild(newDiv);
// insertBefore()
// Inserts a node before a specified child node in the parent node.
let existingChild = document.getElementById('existingChild');
parent.insertBefore(newDiv, existingChild);
// Removing HTML Elements:
// removeChild()
// Removes a specified child node from the DOM.
let parent = document.getElementById('parentElement');
let childToRemove = document.getElementById('childElement');
parent.removeChild(childToRemove);

