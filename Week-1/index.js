console.log("this is hello world)");

//new 
// app.js or index.js
const prompt = require('prompt-sync')(); // This line is essential
console.log("starting")
const name = prompt('Enter your name: ');
console.log(`Hello, ${name}`);
// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));
// check if number is greater than 0
if (number > 0) {
console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
console.log("The number is zero");
}
// if number is less than 0
else {
console.log("The number is negative");
}

const num1 =  parseInt(prompt('Enter first number: '));
const num2 =  parseInt(prompt('Enter second number: '));

const sum = num1+ num2;
const mul= num1* num2;
const div= num1/ num2;
const sub= num1- num2;

console.log(`Sum is: ${sum}`);

console.log(`mul is: ${mul}`);
console.log(`div is: ${div}`);