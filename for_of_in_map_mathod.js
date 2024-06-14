// Loops in JavaScript: for...of and for...in
// for...of Loop
// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It provides a convenient way to access the values of an iterable.


const array = [10, 20, 30, 40];

for (const value of array) {
    console.log(value);
}

// Output:
// 10
// 20
// 30
// 40
// for...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object. It provides access to the keys (property names) of an object.


const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
    console.log(key, object[key]);
}

// Output:
// a 1
// b 2
// c 3
// Array Methods: map and filter
// Array.prototype.map()
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not mutate the original array.


const numbers1 = [1, 2, 3, 4, 5];

const doubled = numbers1.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (original array remains unchanged)
// Array.prototype.filter()
// The filter method creates a new array with all elements that pass the test implemented by the provided function. It does not mutate the original array.


const numbers2 = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
console.log(numbers); // [1, 2, 3, 4, 5] (original array remains unchanged)
// Examples Combining Loops and Array Methods
// Using for...of to Iterate Over an Array

const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
    console.log(fruit);
}

// Output:
// apple
// banana
// cherry
// Using for...in to Iterate Over Object Properties

const person = { name: 'Alice', age: 25, city: 'Wonderland' };

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Output:
// name: Alice
// age: 25
// city: Wonderland
// Using map to Transform an Array
const numbers3 = [1, 2, 3, 4, 5];

const squared = numbers.map(num => num * num);

console.log(squared); // [1, 4, 9, 16, 25]
// Using filter to Filter an Array

const numbers4 = [1, 2, 3, 4, 5];

const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers); // [1, 3, 5]
// Combining map and filter
// You can chain map and filter together to first filter an array and then transform it.


const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
    .filter(num => num % 2 === 0) // Filter out odd numbers
    .map(num => num * 10); // Multiply each remaining number by 10

console.log(result); // [20, 40, 60]
