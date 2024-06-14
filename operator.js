//more operator explain


// 1. Arithmetic Operators
// Used for basic mathematical operations.
// + (Addition)
document.write(1+2);
// - (Subtraction)
document.write(1-2);
// * (Multiplication)
document.write(1*2);
// / (Division)
document.write(1/2);
// % (Modulus)
document.write(1%2);
// ++ (Increment)
document.write(a++);
// -- (Decrement)
document.write('Decrement: ');
document.write(b--); // 2 (value of `b` is now 1, but 2 is written before decrement)
document.write('<br>');
document.write('Decrement (after decrement): ');
document.write(b); // 1
document.write('<br>');
// ** (Exponentiation)
document.write('Exponentiation: ');
document.write(c ** 3); // 2 raised to the power of 3 (2^3) = 8
document.write('<br>');


// = (Assignment)
let e = 5;
document.write('Assignment (=): ');
document.write(a); // 5
document.write('<br>');

// += (Addition assignment)
a += 3; // equivalent to a = a + 3;
document.write('Addition assignment (+=): ');
document.write(a); // 8
document.write('<br>');

// -= (Subtraction assignment)
a -= 2; // equivalent to a = a - 2;
document.write('Subtraction assignment (-=): ');
document.write(a); // 6
document.write('<br>');

// *= (Multiplication assignment)
a *= 4; // equivalent to a = a * 4;
document.write('Multiplication assignment (*=): ');
document.write(a); // 24
document.write('<br>');

// /= (Division assignment)
a /= 6; // equivalent to a = a / 6;
document.write('Division assignment (/=): ');
document.write(a); // 4
document.write('<br>');

// %= (Modulus assignment)
a %= 3; // equivalent to a = a % 3;
document.write('Modulus assignment (%=): ');
document.write(a); // 1
document.write('<br>');

// **= (Exponentiation assignment)
a **= 3; // equivalent to a = a ** 3;
document.write('Exponentiation assignment (**=): ');
document.write(a); // 1 (since 1^3 is still 1)
document.write('<br>');

// <<= (Left shift assignment)
let b = 5; // 5 in binary is 101
b <<= 1; // equivalent to b = b << 1;
document.write('Left shift assignment (<<=): ');
document.write(b); // 10 (binary 1010)
document.write('<br>');

// >>= (Right shift assignment)
b >>= 2; // equivalent to b = b >> 2;
document.write('Right shift assignment (>>=): ');
document.write(b); // 2 (binary 10)
document.write('<br>');

// >>>= (Unsigned right shift assignment)
let c = -5; // -5 in binary (32-bit) is 11111111111111111111111111111011
c >>>= 1; // equivalent to c = c >>> 1;
document.write('Unsigned right shift assignment (>>>=): ');
document.write(c); // 2147483645
document.write('<br>');

// &= (Bitwise AND assignment)
let d = 6; // 6 in binary is 110
d &= 3; // equivalent to d = d & 3; (3 in binary is 011)
document.write('Bitwise AND assignment (&=): ');
document.write(d); // 2 (binary 010)
document.write('<br>');

// ^= (Bitwise XOR assignment)
d ^= 1; // equivalent to d = d ^ 1; (1 in binary is 001)
document.write('Bitwise XOR assignment (^=): ');
document.write(d); // 3 (binary 011)
document.write('<br>');

// |= (Bitwise OR assignment)
d |= 2; // equivalent to d = d | 2; (2 in binary is 010)
document.write('Bitwise OR assignment (|=): ');
document.write(d); // 3 (binary 011)
document.write('<br>');

// 3. Comparison Operators
// Used to compare values.
// == (Equal to)
// != (Not equal to)
// === (Strict equal to)
// !== (Strict not equal to)
// > (Greater than)
// < (Less than)
// >= (Greater than or equal to)
// <= (Less than or equal to)
// ? (Ternary/conditional operator)

// == (Equal to)
document.write('Equal to (==): ');
document.write(5 == 5); // true
document.write('<br>');
document.write('Equal to (==): ');
document.write(5 == '5'); // true (type coercion)
document.write('<br>');

// != (Not equal to)
document.write('Not equal to (!=): ');
document.write(5 != 6); // true
document.write('<br>');
document.write('Not equal to (!=): ');
document.write(5 != '5'); // false (type coercion)
document.write('<br>');

// === (Strict equal to)
document.write('Strict equal to (===): ');
document.write(5 === 5); // true
document.write('<br>');
document.write('Strict equal to (===): ');
document.write(5 === '5'); // false (no type coercion)
document.write('<br>');

// !== (Strict not equal to)
document.write('Strict not equal to (!==): ');
document.write(5 !== 6); // true
document.write('<br>');
document.write('Strict not equal to (!==): ');
document.write(5 !== '5'); // true (no type coercion)
document.write('<br>');

// > (Greater than)
document.write('Greater than (>): ');
document.write(6 > 5); // true
document.write('<br>');

// < (Less than)
document.write('Less than (<): ');
document.write(5 < 6); // true
document.write('<br>');

// >= (Greater than or equal to)
document.write('Greater than or equal to (>=): ');
document.write(5 >= 5); // true
document.write('<br>');

// <= (Less than or equal to)
document.write('Less than or equal to (<=): ');
document.write(5 <= 5); // true
document.write('<br>');

// ? (Ternary/conditional operator)
let age = 18;
let canVote = (age >= 18) ? 'Yes, can vote' : 'No, cannot vote';
document.write('Ternary operator (age >= 18 ? "Yes, can vote" : "No, cannot vote"): ');
document.write(canVote); // 'Yes, can vote'
document.write('<br>');

// 4. Logical Operators
// Used for logical operations.
// && (Logical AND)
// || (Logical OR)
// ! (Logical NOT)
  // && (Logical AND)
  document.write('Logical AND (&&): ');
  document.write(true && true); // true
  document.write('<br>');
  document.write('Logical AND (&&): ');
  document.write(true && false); // false
  document.write('<br>');
  document.write('Logical AND (&&): ');
  document.write(false && true); // false
  document.write('<br>');
  document.write('Logical AND (&&): ');
  document.write(false && false); // false
  document.write('<br>');

  // || (Logical OR)
  document.write('Logical OR (||): ');
  document.write(true || true); // true
  document.write('<br>');
  document.write('Logical OR (||): ');
  document.write(true || false); // true
  document.write('<br>');
  document.write('Logical OR (||): ');
  document.write(false || true); // true
  document.write('<br>');
  document.write('Logical OR (||): ');
  document.write(false || false); // false
  document.write('<br>');

  // ! (Logical NOT)
  document.write('Logical NOT (!): ');
  document.write(!true); // false
  document.write('<br>');
  document.write('Logical NOT (!): ');
  document.write(!false); // true
  document.write('<br>');

  // Combined logical operations
//   let a = true, b = false, c = true;
  document.write('Combined logical operations: ');
  document.write(a && b || c); // true
  document.write('<br>');
  document.write('Combined logical operations with NOT: ');
  document.write(!a || b && c); // false
  document.write('<br>');

// 5. Bitwise Operators
// Operate on binary representations of numbers.
// & (Bitwise AND)
// | (Bitwise OR)
// ^ (Bitwise XOR)
// ~ (Bitwise NOT)
// << (Bitwise left shift)
// >> (Bitwise right shift)
// >>> (Bitwise unsigned right shift)
  // & (Bitwise AND)
  document.write('Bitwise AND (&): ');
  document.write((5 & 3).toString(2)); // 0101 & 0011 = 0001 (binary) = 1 (decimal)
  document.write('<br>');

  // | (Bitwise OR)
  document.write('Bitwise OR (|): ');
  document.write((5 | 3).toString(2)); // 0101 | 0011 = 0111 (binary) = 7 (decimal)
  document.write('<br>');

  // ^ (Bitwise XOR)
  document.write('Bitwise XOR (^): ');
  document.write((5 ^ 3).toString(2)); // 0101 ^ 0011 = 0110 (binary) = 6 (decimal)
  document.write('<br>');

  // ~ (Bitwise NOT)
  document.write('Bitwise NOT (~): ');
  document.write((~5).toString(2)); // ~0101 = 1010 (binary) = -6 (decimal)
  document.write('<br>');

  // << (Bitwise left shift)
  document.write('Bitwise left shift (<<): ');
  document.write((5 << 1).toString(2)); // 0101 << 1 = 1010 (binary) = 10 (decimal)
  document.write('<br>');

  // >> (Bitwise right shift)
  document.write('Bitwise right shift (>>): ');
  document.write((5 >> 1).toString(2)); // 0101 >> 1 = 0010 (binary) = 2 (decimal)
  document.write('<br>');

  // >>> (Bitwise unsigned right shift)
  document.write('Bitwise unsigned right shift (>>>): ');
  document.write((-5 >>> 1).toString(2)); // -5 in 32-bit binary is 11111111111111111111111111111011
                                          // >>> 1 = 01111111111111111111111111111101 (binary) = 2147483645 (decimal)
  document.write('<br>');

// 6. String Operators
// Primarily used for string concatenation.
// + (Concatenation)
// += (Concatenation assignment)
  // + (Concatenation)
  let str1 = 'Hello';
  let str2 = 'World';
  document.write('Concatenation (+): ');
  document.write(str1 + ' ' + str2); // Hello World
  document.write('<br>');

  // += (Concatenation assignment)
  let greeting = 'Hi';
  let name = 'Alice';
  greeting += ', ' + name + '!';
  document.write('Concatenation assignment (+=): ');
  document.write(greeting); // Hi, Alice!
  document.write('<br>');

// 7. Conditional (Ternary) Operator
// Shorthand for an if-else statement.
// condition ? expr1 : expr2
 // Basic example
 let message = (age >= 18) ? 'Adult' : 'Minor';
 document.write('Basic example: ');
 document.write(message); // Adult
 document.write('<br>');

 // Using expressions
 let num1 = 5, num2 = 10;
 let max = (num1 > num2) ? num1 : num2;
 document.write('Using expressions: ');
 document.write(max); // 10
 document.write('<br>');

 // Nested ternary operator
 let score = 85;
 let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : (score >= 70) ? 'C' : 'F';
 document.write('Nested ternary operator: ');
 document.write(grade); // B
 document.write('<br>');

 // Ternary operator with function call
 function isEven(num) {
     return (num % 2 === 0) ? 'Even' : 'Odd';
 }
 document.write('Ternary operator with function call: ');
 document.write(isEven(7)); // Odd
 document.write('<br>');

// 8. Comma Operator
// Evaluates multiple expressions and returns the last expression.
// , (Comma)
  // Example 1: Basic usage
  let a = (5 + 2, 7 * 2);
  document.write('Example 1 (Basic usage): ');
  document.write(a); // 14
  document.write('<br>');

  // Example 2: Function argument
  function increment(x) {
      return (x++, x);
  }
  let F = increment(5);
  document.write('Example 2 (Function argument): ');
  document.write(b); // 6
  document.write('<br>');
  // Example 3: Multiple assignments
  c = 5, d = 10;
  document.write('Example 3 (Multiple assignments): ');
  document.write(c + d); // 15
  document.write('<br>');
  // Example 4: Increment multiple variables
  num1++, num2++;
  document.write('Example 4 (Increment multiple variables): ');
  document.write(num1 + ', ' + num2); // 2, 3
  document.write('<br>');

// 9. Unary Operators
// Operate on a single operand.
// + (Unary plus)
// - (Unary negation)
// ! (Logical NOT)
// ~ (Bitwise NOT)
// typeof (Type of operator)
// void (Discards a return value)
// delete (Deletes an object property)

// 10. Relational Operators
// Used to test relationships between two variables or expressions.
// in (Property in object)
// instanceof (Instance of object)

// 11. Nullish Coalescing Operator
// Provides a default value if the left-hand operand is null or undefined.
// ?? (Nullish coalescing)

// 12. Optional Chaining Operator
// Allows safe access to nested object properties.
// ?. (Optional chaining)