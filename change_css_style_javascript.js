// Methods to Change CSS Styles:
// Using style property directly:
// You can directly modify individual style properties of an element using its style property.
// Example: Changing background color
let element = document.getElementById('myElement');
element.style.backgroundColor = 'blue';
element.style.color = 'white';
element.style.padding = '10px';

// Using setAttribute method:
// You can use the setAttribute method to set or change CSS styles as inline styles.
// Example: Changing width and height
let element = document.getElementById('myElement');
element.setAttribute('style', 'width: 200px; height: 100px; background-color: yellow;');

