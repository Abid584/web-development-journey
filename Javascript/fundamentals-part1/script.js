// JavaScript Fundamentals Part 1
// let js = "amazing";
// if (js === "amazing") alert("Ehtesham Bhatti");

// let Person = "bhatti"; // Don't write first initial letter capital (P)
// let PI = 3.1415; // Constant

///////////////////////////////////////
// Data Types

// let bol = true;
// console.log(typeof (bol))
// console.log(typeof 56)

// bol = false;
// console.log(bol)

// let year;
// console.log(typeof year)
// console.log(typeof null) // Error/Bug

// const birth;  // Error
// var nameIs = "Ehtesham"; // Don't use Var

// let ageAbid = 22;
// let ageNukhes = 44;
// console.log(ageAbid, ageNukhes);

// const firstName = "Abid";
// const lastName = "Ali";
// console.log(firstName + " " + lastName);

///////////////////////////////////////
// Coding Challenge 1 Code
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("BMIMark: ", BMIMark);
console.log("BMIJohn: ", BMIJohn);

let markHigherBMI = (BMIMark > BMIJohn);
console.log("Mark has a higher BMI than John: ", markHigherBMI);
*/

///////////////////////////////////////
// Strings and Template Literals

// const firstName = "Abid";
// const job = "Data Scientist";
// const birthYear = 2005;
// const year = 2026;
// const abid = "I'm " + firstName + ", A " + (year - birthYear) + " years old " + job + ".";

// console.log(abid);

// const abidNew = `I'm ${firstName}, A ${year - birthYear} years old ${job}.`;
// console.log(abidNew)

// console.log(`Just a regular String using backticks....`);

// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`String with
// multiple lines
// using backticks`);

// // If-else
// // Windows + . for emojis
// const age = 19;
// if (age >= 18) {
//     console.log("You are eligible for driving license.🚗");
// }
// else {
//     console.log("You are not eligible for driving license.🚗");
// }

///////////////////////////////////////
// Coding Challenge 2 Code:
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
}
else{
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}

*/

///////////////////////////////////////
// Type Conversion

// const inputYear = "2005";
// // console.log(inputYear + 21);
// console.log(Number(inputYear) + 21);

// console.log(Number("Abid")); // Error - Output = NaN
// console.log(typeof NaN) // Output - number

// console.log(String(2005), 2005)

///////////////////////////////////////
// Type Coercion

// console.log("I'm " + 21 + " years old"); // 21 will be converted to string automatically
// console.log("20" - "10" - 3);  // Convert to Number
// console.log("20" + "10" + 3);  // Concatenate - Convert to String
// console.log("20" * "2");  // Convert to Number
// console.log("20" / "2");   // Convert to Number


///////////////////////////////////////
// Truthy and Falsy values
// Falsy values: Values that are not exactly false but becomes false when we try to convert them into boolean
// There are 5 falsy values in javascript: 0, '', undefined, null, NaN
// All other values are truthy values

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(""))
// console.log(Boolean("Abid"))
// console.log(Boolean({}))

// When Javascript do type coercion? In 2 scenarios: 1) When using logical operators 2) In logical context ex. in consition of if-else statement

// Type coercion in if-else statement

// let money = 0;

// if (money) { // Here javascript will try to convert money to boolean which will be 0 which is a falsy value
//     console.log("Don't spend it all!")
// } else {
//     console.log("You should get a job!")
// }

// money = 100;
// if (money) { // here money is not a falsy value now so if will execute
//     console.log("Don't spend it all!")
// } else {
//     console.log("You should get a job!")
// }

// Falsy values are also used to check whether a variable is defined or undefined
// Example:

// let height; // Problem is if height is 0 then it will still say undefined as 0 is a salsy value
// if (height) {
//     console.log("Height is defined");
// } else {
//     console.log("Height is not defined");
// }

///////////////////////////////////////
// Equality Operators

// const age = 18;
// // === strict operator as it does not perform type coercion
// if (age === 18) console.log("You just became an adult!");
// // == loose quality operator performs type coercion
// if (age == "18") console.log("You just became an adult!");

// Get input from user:
// const need = prompt("What do you want?");
// console.log("User Wants:", need);
// console.log(typeof (need));

// const want = Number(prompt("What do you want?"));
// console.log("User Wants:", want);
// if (want === 20) {
//     console.log("Number!");
// }
// else if (want === 10) {
//     console.log("Also a Number!");
// }
// else{
//     console.log("Fuck You!!!");
// }

// Not equal to operator
// if(want != 10) it is loose operator
// if(want !== 10) it is strict operator

///////////////////////////////////////
// Logical Operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // And
// console.log(hasDriversLicense || hasGoodVision); // OR
// console.log(!hasDriversLicense); // Not

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

///////////////////////////////////////
// Coding Challenge 3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy");
// } else {
//     console.log("Both win the trophy");
// }

///////////////////////////////////////
// The switch Statement
// const day = prompt("Enter the day: ");
// const day = "monday";

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }

///////////////////////////////////////
// Statements and Expressions
// Expression: produces some value
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

// The Conditional (Ternary) Operator
// const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

// Coding Challenge 4

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

