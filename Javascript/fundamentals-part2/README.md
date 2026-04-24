# JavaScript Fundamentals — Part 2 🚀

Building on the basics — this part dives into **functions**, **arrays**, **objects**, and **loops**: the core tools you'll use in virtually every JavaScript program.

---

## 📚 Table of Contents

1. [Strict Mode](#1-strict-mode) 
2. [Functions](#2-functions)
3. [Function Declarations vs. Expressions](#3-function-declarations-vs-expressions)
4. [Arrow Functions](#4-arrow-functions)
5. [Functions Calling Other Functions](#5-functions-calling-other-functions)
6. [Arrays](#6-arrays)
7. [Array Methods](#7-array-methods)
8. [Introduction to Objects](#8-introduction-to-objects)
9. [Dot vs. Bracket Notation](#9-dot-vs-bracket-notation)
10. [Object Methods & `this`](#10-object-methods--this)
11. [The `for` Loop](#11-the-for-loop)
12. [Looping Arrays, `break` & `continue`](#12-looping-arrays-break--continue)
13. [Looping Backwards & Nested Loops](#13-looping-backwards--nested-loops)
14. [The `while` Loop](#14-the-while-loop)
15. [Coding Challenges](#15-coding-challenges)

---

## 1. Strict Mode

Add `"use strict";` at the very top of your script. It activates a safer mode that:
- Catches silent errors and throws them visibly
- Prevents the use of reserved keywords as variable names

```js
"use strict";

// const interface = 'Audio'; // ❌ Error — 'interface' is a reserved word
// const private = 534;       // ❌ Error — 'private' is a reserved word
```

> ✅ Always use `"use strict"` — it helps you find bugs before they become problems.

---

## 2. Functions

A **function** is a reusable block of code. Define it once, call it many times.

```js
// Defining a function
function logger() {
    console.log('My name is Abid');
}

// Calling / invoking the function
logger(); // My name is Abid
logger(); // My name is Abid
```

### Parameters & Return Values

```js
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; // sends value back to the caller
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // "Juice with 5 apples and 0 oranges."
```

> 💡 If no arguments are passed, parameters will be `undefined`. `Number()` and `console.log()` are also built-in functions.

---

## 3. Function Declarations vs. Expressions

### Function Declaration
```js
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
```

### Function Expression
```js
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
const age2 = calcAge2(1991);
```

### Key Difference — Hoisting

| | Declaration | Expression |
|---|---|---|
| Call before defining? | ✅ Yes (hoisted) | ❌ No (Error) |
| Stored in variable? | ❌ No | ✅ Yes |

```js
// ✅ Works — declaration is hoisted
const age1 = calcAge1(1991);
function calcAge1(birthYear) { return 2037 - birthYear; }

// ❌ Error — expression is NOT hoisted
const age2 = calcAge2(1991);
const calcAge2 = function (birthYear) { return 2037 - birthYear; };
```

---

## 4. Arrow Functions

A shorter syntax for writing functions, introduced in ES6.

### One-liner (implicit return)
```js
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1991)); // 46
```

### Multi-line (explicit return required)
```js
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2005, 'Abid'));
console.log(yearsUntilRetirement(1980, 'Ehtesham'));
```

### Comparison

| Feature | Declaration | Expression | Arrow |
|---|---|---|---|
| Syntax | Verbose | Medium | Concise |
| Hoisted | ✅ | ❌ | ❌ |
| Has `this` | ✅ | ✅ | ❌ |

> ⚠️ Arrow functions do **not** get their own `this` keyword — important for object methods (see Section 10).

---

## 5. Functions Calling Other Functions

Functions can call other functions — a core pattern in clean, modular code.

```js
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);   // calls another function
    const orangePieces = cutFruitPieces(oranges);

    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

console.log(fruitProcessor(2, 3)); // "Juice with 8 pieces of apple and 12 pieces of orange."
```

---

## 6. Arrays

An **array** stores multiple values in an ordered list.

```js
// Array literal (preferred)
const friends = ['Abid', 'Taha', 'Arham'];

// Array constructor
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);              // 'Abid'  (index starts at 0)
console.log(friends[friends.length - 1]); // 'Arham' (last element)
console.log(friends.length);         // 3
```

**Mutating an array element** (even `const` arrays can have elements changed):
```js
friends[2] = 'Ehtesham'; // ✅ Allowed
// friends = ['Bob', 'Alice']; // ❌ Error — can't replace the whole array
```

**Arrays can hold mixed types:**
```js
const abid = ['Abid', 'Ali', 2026 - 2005, 'teacher', friends];
```

---

## 7. Array Methods

| Method | Action | Returns |
|---|---|---|
| `.push(val)` | Add to **end** | New length |
| `.unshift(val)` | Add to **start** | New length |
| `.pop()` | Remove from **end** | Removed element |
| `.shift()` | Remove from **start** | Removed element |
| `.indexOf(val)` | Find index of value | Index or `-1` |
| `.includes(val)` | Check if value exists | `true` / `false` |

```js
const friends = ['Abid', 'Taha', 'Arham'];

friends.push('Ehtesham');   // ['Abid', 'Taha', 'Arham', 'Ehtesham']
friends.unshift('Takbeer'); // ['Takbeer', 'Abid', 'Taha', 'Arham', 'Ehtesham']
friends.pop();              // removes 'Ehtesham'
friends.shift();            // removes 'Takbeer'

console.log(friends.indexOf('Taha'));     // 1
console.log(friends.indexOf('Bob'));      // -1 (not found)
console.log(friends.includes('Arham'));   // true
console.log(friends.includes('Steven')); // false
```

> 💡 `.includes()` uses strict equality (`===`), so `includes(23)` won't match `"23"`.

---

## 8. Introduction to Objects

An **object** groups related data using key-value pairs (properties). Unlike arrays, order doesn't matter.

```js
// Array — ordered, no labels
const abidArray = ['Abid', 'Ali', 21, 'teacher', ['Taha', 'Takbeer', 'Arham']];

// Object — labeled, order doesn't matter
const abid = {
    firstName: 'Abid',
    lastName: 'Ali',
    age: 2026 - 2005,
    job: 'teacher',
    friends: ['Taha', 'Takbeer', 'Arham']
};
```

> 💡 This syntax is called **Object Literal** — the most common way to create objects.

---

## 9. Dot vs. Bracket Notation

Two ways to access object properties:

```js
// Dot notation — clean and simple
console.log(abid.lastName);     // 'Ali'

// Bracket notation — accepts expressions
console.log(abid['lastName']);  // 'Ali'

const nameKey = 'Name';
console.log(abid['first' + nameKey]); // 'Abid' — expression in brackets ✅
// console.log(abid.'first' + nameKey); // ❌ SyntaxError
```

**Dynamic property access:**
```js
const interestedIn = prompt('What do you want to know about Abid?');

if (abid[interestedIn]) {
    console.log(abid[interestedIn]);
} else {
    console.log('Wrong request!');
}
```

**Adding new properties:**
```js
abid.location = 'Pakistan';
abid['mail'] = 'sheikhabidali@gmail.com';
```

---

## 10. Object Methods & `this`

Functions stored as object properties are called **methods**.

```js
const abid = {
    firstName: 'Abid',
    birthYear: 1991,
    hasDriversLicense: true,

    // Method using 'this' to reference the object itself
    calcAge: function () {
        this.age = 2037 - this.birthYear; // stores result as new property
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(abid.calcAge());      // 46
console.log(abid.getSummary());   // "Abid is a 46-year old teacher, and he has a driver's license."
console.log(abid.age);            // 46 (stored by calcAge)
```

### `this` keyword
- Inside a method, `this` refers to **the object that called the method**
- Storing a computed value on `this` (like `this.age`) avoids recalculating it every time

> ⚠️ Arrow functions don't have their own `this` — always use regular `function` syntax for object methods.

---

## 11. The `for` Loop

Runs a block of code a specific number of times.

**Syntax:** `for (initializer; condition; increment)`

```js
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
```

> 💡 The loop keeps running **while the condition is `true`**.

---

## 12. Looping Arrays, `break` & `continue`

### Looping through an array
```js
const abid = ['Abid', 'Ali', 21, 'teacher', ['Taha', 'Takbeer', 'Arham']];
const types = [];

for (let i = 0; i < abid.length; i++) {
    types.push(typeof abid[i]);
}
console.log(types); // ['string', 'string', 'number', 'string', 'object']
```

### `continue` — skip current iteration
```js
for (let i = 0; i < abid.length; i++) {
    if (typeof abid[i] !== 'string') continue; // skip non-strings
    console.log(abid[i]);
}
```

### `break` — exit the loop entirely
```js
for (let i = 0; i < abid.length; i++) {
    if (typeof abid[i] === 'number') break; // stop when a number is found
    console.log(abid[i]);
}
```

---

## 13. Looping Backwards & Nested Loops

### Looping backwards
```js
const abid = ['Abid', 'Ali', 21, 'teacher', ['Taha', 'Takbeer', 'Arham']];

for (let i = abid.length - 1; i >= 0; i--) {
    console.log(i, abid[i]);
}
```

### Nested loops (loop inside a loop)
```js
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight rep ${rep} 🏋️‍♀️`);
    }
}
```

> 💡 The inner loop completes **all its iterations** for each single iteration of the outer loop.

---

## 14. The `while` Loop

Use `while` when you don't know in advance how many times the loop should run.

```js
// Known iterations — for loop is better here
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}
```

**Best use case — unknown iterations:**
```js
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
```

### `for` vs `while`

| | `for` | `while` |
|---|---|---|
| Know iteration count? | ✅ Best choice | ✅ Works too |
| Unknown iterations? | ⚠️ Awkward | ✅ Best choice |
| Counter built-in? | ✅ Yes | ❌ Manual |

---

## 15. Coding Challenges

### Challenge 1 — Team Score Average (Functions)
Use an arrow function to calculate team averages. Declare a winner only if their score is **at least double** the other team's.

### Challenge 2 — Tip Calculator with Arrays
Store bills in an array, use a loop + function to calculate tips and totals.
```js
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
```

### Challenge 3 — BMI with Objects & Methods
Create `mark` and `john` objects, each with a `calcBMI()` method that stores and returns the BMI using `this`.
```
BMI = mass / height²
```

### Challenge 4 — Tip Calculator with `for` Loop
Loop through a bills array, push results into `tips[]` and `totals[]`, then calculate the average of all totals.
```js
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum / arr.length;
}
```

---

## 🔑 Key Takeaways

- Use **function declarations** when you need hoisting; use **expressions** or **arrows** for cleaner, modern code
- Arrow functions are great for short callbacks but **never use them as object methods** (no `this`)
- Arrays use **zero-based indexing** — first element is `[0]`
- Use `const` for arrays and objects — you can still mutate their contents
- Use `this` inside object methods to reference and store values on the object itself
- Use `for` when you know the iteration count; use `while` for unknown iterations
- `break` exits a loop; `continue` skips to the next iteration

---

*Part of the JavaScript learning journey by **Abid Ali** 🌱*
