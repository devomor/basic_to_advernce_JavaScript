// Basic Syntax of Object Literals
// An object literal is a comma-separated list of key-value pairs wrapped in curly braces.
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
// Accessing Object Properties
// Dot notation:
console.log(person.name); // John
console.log(person.age);  // 30
// Bracket notation:
console.log(person['name']); // John
console.log(person['age']);  // 30
// Adding and Modifying Properties

person.job = 'Developer';
person['country'] = 'USA';
person.age = 31;
// Removing Properties
delete person.age;
// ES6 Enhancements to Object Literals
// 1. Shorthand Property Names
// If a variable name matches the property name, you can omit the value.


const person = {
    name, // Equivalent to name: name
    age   // Equivalent to age: age
};
// 2. Computed Property Names
// Allows the use of expressions for property names.

const prop = 'job';
const person = {
    [prop]: 'Developer'
};
console.log(person.job); // Developer
// 3. Method Definitions
// Simpler syntax for defining methods in an object.

const person = {
    name: 'Jane',
    greet() { // Equivalent to greet: function() { ... }
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet(); // Hello, my name is Jane
// 4. Property Value Shorthand
// When creating an object from variables with the same names as the property names.
const person = { name, age };
console.log(person); // { name: 'Alice', age: 28 }
// Example Combining Features
const dynamicKey = 'age';
const person = {
    name: 'John',
    [dynamicKey]: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); // John
console.log(person.age);  // 30
person.greet(); // Hello, my name is John
// Nested Objects
// You can create nested objects using object literals.
const person = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'New York'
    },
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.address.city); // New York
// Merging Objects
// You can use the spread operator to merge objects.

const person = {
    name: 'John',
    age: 30
};

const job = {
    title: 'Developer',
    company: 'ABC Corp'
};

const personWithJob = { ...person, ...job };
console.log(personWithJob); // { name: 'John', age: 30, title: 'Developer', company: 'ABC Corp' }
// Object Destructuring
// Extract properties from an object into variables using destructuring.

const person = {
    name: 'John',
    age: 30,
    job: {
        title: 'Developer',
        company: 'ABC Corp'
    }
};

const { name, age, job: { title, company } } = person;
console.log(name); // John
console.log(age);  // 30
console.log(title); // Developer
console.log(company); // ABC Corp