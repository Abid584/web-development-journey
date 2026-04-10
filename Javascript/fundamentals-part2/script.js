"use strict"; // Helps find bugs

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

///////////////////////////////////////
// Functions
// function logger() {
//     console.log('My name is Abid');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0); // If no arguments passed then it will show undefined
// console.log(appleJuice);

// const inputappleOrangeJuice = fruitProcessor(prompt("Enter apples: "), prompt("Enter oranges: "));
// console.log(inputappleOrangeJuice);

// const num = Number('23'); // Console and Number are also default functions

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration

// const age1 = calcAge1(1991); // In function declaration we can call a function before it is defined but we cannot do this in function expression

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// Function expression

// const age2 = calcAge2(1991); // Error

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

///////////////////////////////////////
// Arrow functions

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2005, 'Abid'));
// console.log(yearsUntilRetirement(1980, 'Ehtesham'));
// Note: Arrow functions do not get 'this' keyword

///////////////////////////////////////
// Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Coding Exercise 5 ,  Challenge # 1
// const calcAverage = (score1, score2, score3) =>
//     (score1 + score2 + score3) / 3;

// // TEST DATA 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }
//     else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     }
//     else {
//         console.log("No team wins...");
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// // TEST DATA 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////
// Arrays

// const friends = ['Abid', 'Taha', 'Arham'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020); // Another way of making an array

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Ehtesham';
// console.log(friends);
// // friends = ['Bob', 'Alice'] // Error because we Cannot replace entire array

// // All data in 1 array
// const firstName = 'Abid';
// const abid = [firstName, 'Ali', 2026 - 2005, 'teacher', friends];
// console.log(abid);
// console.log(abid.length);

// Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
// const friends = ['Abid', 'Taha', 'Arham'];

// // Add elements
// const newLength = friends.push('Ehtesham'); // We are creating variable newLength here to know that push function returns the length of the new array
// console.log(friends);
// console.log(newLength);

// console.log(friends.unshift('Takbeer'));
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Taha'));
// console.log(friends.indexOf('Ehtesham'));

// friends.push(23);
// console.log(friends.includes('Steven')); // includes is a ES
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Arham')) {
//     console.log('You have a friend called Arham');
// }

///////////////////////////////////////
// Coding Exercise 6 , Challenge # 2

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     }
//     else {
//         return bill * 0.2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips);
// console.log(totals);

///////////////////////////////////////
// Introduction to Objects

// Below is an array
// const abidArray = [
//     'abid',
//     'ali',
//     2026 - 2005,
//     'teacher',
//     ['Taha', 'Takbeer', 'Arham']
// ];

// Below is a object
// const abid = { // Object literal Syntax
//     firstName: 'Abid',
//     lastName: 'Ali',
//     age: 2026 - 2005,
//     job: 'teacher',
//     friends: ['Taha', 'Takbeer', 'Arham']
// };

///////////////////////////////////////
// Dot vs. Bracket Notation

// const abid = {
//     firstName: 'Abid',
//     lastName: 'Ali',
//     age: 2026 - 2005,
//     job: 'teacher',
//     friends: ['Taha', 'Takbeer', 'Arham']
// };
// console.log(abid);

// console.log(abid.lastName);
// console.log(abid['lastName']); // In bracket notation we can also write some expression

// const nameKey = 'Name';
// console.log(abid['first' + nameKey]);
// console.log(abid['last' + nameKey]);

// console.log(abid.'last' + nameKey) // Error

// const interestedIn = prompt('What do you want to know about Abid? Choose between firstName, lastName, age, job, and friends');

// if (abid[interestedIn]) {
//     console.log(abid[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// abid.location = 'Pakistan';
// abid['mail'] = 'sheikhabidali@gmail.com';
// console.log(abid);

// Challenge
// "Abid has 3 friends, and his best friend is called Taha"
// console.log(abid.firstName, "has", abid.friends.length, "friends, and his best friend is called", abid.friends[0]);

///////////////////////////////////////
// Object Methods

// const abid = {
//     firstName: 'Abid',
//     lastName: 'Ali',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Taha', 'Takbeer', 'Arham'],
//     hasDriversLicense: true,

// Function expression which holds function value
// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// }

// calcAge: function () {
//   // console.log(this);
//   return 2037 - this.birthYear;
// }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// console.log(abid.calcAge(2005));
// console.log(abid.getSummary());
// console.log(abid['calcAge'](2005));

///////////////////////////////////////
// Coding Challenge #3, Exercide # 7

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

///////////////////////////////////////
// Iteration: The for Loop

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing

// const abid = [
//     'abid',
//     'ali',
//     2026 - 2005,
//     'teacher',
//     ['Taha', 'Takbeer', 'Arham']
// ];

// const types = [];

// for (let i = 0; i < abid.length; i++) {
//   // Reading from abid array
//   console.log(abid[i], typeof abid[i]);

//   // Filling types array
//   // types[i] = typeof abid[i];
//   types.push(typeof abid[i]);
// }

// console.log(types);

// const years = [2005, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2026 - years[i]);
// }

// console.log(ages);

// continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < abid.length; i++) {
//   if (typeof abid[i] !== 'string') continue;

//   console.log(abid[i], typeof abid[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < abid.length; i++) {
//   if (typeof abid[i] === 'number') break;

//   console.log(abid[i], typeof abid[i]);
// }

///////////////////////////////////////
// Looping Backwards and Loops in Loops

// const abid = [
//     'abid',
//     'ali',
//     2026 - 2005,
//     'teacher',
//     ['Taha', 'Takbeer', 'Arham']
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = abid.length - 1; i >= 0; i--) {
//   console.log(i, abid[i]);
// }

// // Loops in Loops
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

///////////////////////////////////////
// The while Loop

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

///////////////////////////////////////
// Coding Exercise 8: Challenge # 4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i] + bills[i]);
// }

// console.log(tips);
// console.log(totals);

// function calcAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = arr[i] + sum;
//     }
//     let average = sum / arr.length;
//     return average;
// }

// console.log(calcAverage(totals));

///////////////////////////////////////
// Random Practice
// console.table();
// throw new Error ("Its an error");

