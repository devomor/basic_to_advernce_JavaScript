// rowser Object Model (BOM) Methods and Properties:
// **Window Object Methods
// Here's a comprehensive list of commonly used methods and properties in the Browser Object Model (BOM) in JavaScript:

// Window Object Methods and Properties:
// Alert Dialog:
// window.alert(): Displays an alert dialog with a message.
window.alert('Hello, World!');

// Confirm Dialog:
// window.confirm(): Displays a dialog box with a message and OK/Cancel buttons.
let result = window.confirm('Are you sure?');

// Prompt Dialog:
// window.prompt(): Displays a dialog box that prompts the user for input.
let userInput = window.prompt('Please enter your name:', 'John Doe');

// Set Timeout:
// window.setTimeout(): Executes a function once after a specified delay (in milliseconds).

setTimeout(function() {
    console.log('Delayed execution');
}, 2000); // Executes after 2 seconds

// Set Interval:
// window.setInterval(): Repeatedly executes a function at specified intervals (in milliseconds).

setInterval(function() {
    console.log('Repeated execution');
}, 1000); // Executes every 1 second
// Location Object:
// window.location: Provides information about the current URL and methods to redirect the browser.
console.log(window.location.href); // Current URL
window.location.href = 'https://example.com'; // Redirect to a new URL

// History Object:
// window.history: Provides methods to navigate through the browser history.
window.history.back(); // Go back one page
window.history.forward(); // Go forward one page

// Navigator Object:
// window.navigator: Provides information about the browser and its capabilities.
console.log(window.navigator.userAgent); // User agent string

// Open a New Window:
// window.open(): Opens a new browser window or tab.
let newWindow = window.open('https://example.com', '_blank');

// Close the Current Window:
// window.close(): Closes the current browser window (not allowed for most browsers due to security restrictions).
window.close();

// Screen Object:
// window.screen: Provides information about the user's screen.
console.log(window.screen.width); // Screen width in pixels

// LocalStorage and SessionStorage:
// window.localStorage and window.sessionStorage: Allows you to store key-value pairs locally in the browser.
localStorage.setItem('username', 'John');
let username = localStorage.getItem('username');