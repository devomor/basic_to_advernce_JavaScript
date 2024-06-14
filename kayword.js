//javascript keywort total 26 
//keyword name list  : break,case,catch, continue ,debugger , dafault ,delete,
//do,else ,finally ,for ,function , if ,in ,instanceof , new return, switch ,
//this, throw,try , typeof,var, void ,thile ,with ,

// break
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i); // 0, 1, 2
}

// case
let fruit = 'apple';
switch (fruit) {
    case 'banana':
        console.log('Banana is good!');
        break;
    case 'apple':
        console.log('Apple is sweet!');
        break;
    default:
        console.log('Unknown fruit.');
}

// catch
try {
    throw new Error('Oops!');
} catch (error) {
    console.error(error.message); // Oops!
}

// continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i); // 0, 1, 2, 4
}

// debugger
function debugExample() {
    debugger; // Execution will pause here if developer tools are open
    console.log('Debugging');
}
debugExample();

// default
switch (fruit) {
    case 'banana':
        console.log('Banana is good!');
        break;
    case 'apple':
        console.log('Apple is sweet!');
        break;
    default:
        console.log('Unknown fruit.'); // Unknown fruit.
}

// delete
let obj = { prop: 'value' };
delete obj.prop;
console.log(obj.prop); // undefined

// do
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 3); // 0, 1, 2

// else
if (fruit === 'banana') {
    console.log('Banana');
} else {
    console.log('Not a banana'); // Not a banana
}

// finally
try {
    throw new Error('Oops again!');
} catch (error) {
    console.error(error.message);
} finally {
    console.log('This will always run'); // This will always run
}

// for
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}

// function
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet('Omor')); // Hello, Omor

// if
if (fruit === 'apple') {
    console.log('Fruit is apple'); // Fruit is apple
}

// in
let car = { make: 'Toyota', model: 'Camry' };
console.log('make' in car); // true

// instanceof
console.log(car instanceof Object); // true

// new
let date = new Date();
console.log(date);

// return
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // 5

// switch
switch (fruit) {
    case 'banana':
        console.log('Banana');
        break;
    case 'apple':
        console.log('Apple'); // Apple
        break;
    default:
        console.log('Unknown');
}

// this
let personA = {
    name: 'Omor',
    greet: function() {
        console.log(this.name);
    }
};
personA.greet(); // Omor

// throw
function checkPositive(number) {
    if (number < 0) {
        throw new Error('Negative number');
    }
    return 'Positive number';
}
try {
    console.log(checkPositive(-1));
} catch (error) {
    console.error(error.message); // Negative number
}

// try
try {
    throw new Error('Try error');
} catch (error) {
    console.error(error.message); // Try error
}

// typeof
console.log(typeof "I am Omor"); // string

// var
var name = 'Omor';
console.log(name); // Omor

// void
void function() {
    console.log('This is a void function');
}(); // This is a void function

// while
let j = 0;
while (j < 3) {
    console.log(j);
    j++;
} // 0, 1, 2

// with (not recommended to use)
with (Math) {
    console.log(sqrt(16)); // 4
}





//javaScritpt data type total type 4
// 1.String
//2.Number
//3.Boolean
//4.objects

//String data type
var name = "omar faruk";
document.write(name);

//Number data type
var Number = 190;
document.write(Number);

//Boolen data type
var ValidationCheck = false;
document.write(ValidationCheck);

//Object data type
let person = {
    name: "John",
    age: 30,
    isStudent: false,
    address: {
        city: "New York",
        zipCode: "10001"
    }
};

// Convert the object to a string representation
let personString = JSON.stringify(person);

// Display the string representation using document.write()
document.write(personString);