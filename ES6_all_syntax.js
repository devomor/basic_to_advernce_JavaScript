// 1. Variables (let, const)
// let: Declares block-scoped variables that can be reassigned.
let x = 10;
// const: Declares block-scoped constants whose values cannot be re-assigned.
 const pi = 3.14;
// 2. Arrow Functions
// Shorter syntax for writing functions, with implicit return for single expressions.
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
// 3. Template Literals
// Enhanced string literals allowing embedded expressions.
const name = 'Alice';
const greeting = `Hello, ${name}!`;
// 4. Destructuring Assignment
// Extracts values from arrays or objects into distinct variables.
// Array destructuring
const [first, second] = [1, 2, 3];
// Object destructuring
const { firstName, lastName } = { firstName: 'John', lastName: 'Doe' };
// 5. Default Parameters
// Provides default values for function parameters.
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
// 6. Rest Parameters
// Represents an indefinite number of arguments as an array.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
// 7. Spread Operator
// Allows an iterable to be expanded into individual elements.
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3
// 8. Classes
// Syntactical sugar over JavaScript's prototype-based inheritance.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise.`;
    }
}
// 9. Modules
// Allows JavaScript code to be split into reusable modules.
// Exporting module
export const PI = 3.14;
// Importing module
import { PI } from './math';
// 10. Promises
// Provides a cleaner alternative to callbacks for asynchronous programming.
function fetchData() {
    return new Promise((resolve, reject) => {
        // Asynchronous operation
        if (success) {
            resolve(data);
        } else {
            reject(error);
        }
    });
}
// 11. Async/Await
// Syntactic sugar for working with asynchronous code, built on top of Promises.
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}