# JavaScript Fundamentals — Part 1 🚀

A hands-on study guide covering the core building blocks of JavaScript. Each topic includes key concepts and practical examples from the code exercises.

---

## 📚 Table of Contents

1. [Data Types](#1-data-types)
2. [Variables & Naming Rules](#2-variables--naming-rules)
3. [Strings & Template Literals](#3-strings--template-literals)
4. [Type Conversion & Coercion](#4-type-conversion--coercion)
5. [Truthy & Falsy Values](#5-truthy--falsy-values)
6. [Equality Operators](#6-equality-operators)
7. [Logical Operators](#7-logical-operators)
8. [If / Else Statements](#8-if--else-statements)
9. [The Switch Statement](#9-the-switch-statement)
10. [The Ternary Operator](#10-the-ternary-operator)
11. [Statements vs Expressions](#11-statements-vs-expressions)
12. [Coding Challenges](#12-coding-challenges)

---

## 1. Data Types

JavaScript has **7 primitive data types**:

| Type | Example |
|---|---|
| `Number` | `56`, `3.14` |
| `String` | `"Abid"` |
| `Boolean` | `true`, `false` |
| `Undefined` | `let year;` |
| `Null` | `null` (has a known bug: `typeof null === "object"`) |
| `BigInt` | large integers |
| `Symbol` | unique identifiers |

```js
let bol = true;
console.log(typeof bol);       // "boolean"
console.log(typeof 56);        // "number"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" ← known JS bug
```

> 💡 JavaScript is **dynamically typed** — variables don't have fixed types and can be reassigned to a different type.

---

## 2. Variables & Naming Rules

Three ways to declare variables — but only two are recommended:

| Keyword | Use | Re-assignable? |
|---|---|---|
| `let` | variables that change | ✅ Yes |
| `const` | variables that stay fixed | ❌ No |
| `var` | old way — **avoid** | ✅ Yes |

```js
let age = 22;          // can change later
const PI = 3.1415;     // constant, never changes
// var name = "Abid";  // ❌ avoid — has scope issues
```

**Naming conventions:**
- Use `camelCase` for variables → `let firstName`
- Don't start with a capital letter (that's for classes) → ~~`let Person`~~
- UPPERCASE is for constants → `const PI = 3.14`

---

## 3. Strings & Template Literals

**Old way** — string concatenation with `+`:
```js
const abid = "I'm " + firstName + ", A " + (year - birthYear) + " years old " + job + ".";
```

**Modern way** — template literals with backticks `` ` ``:
```js
const abid = `I'm ${firstName}, A ${year - birthYear} years old ${job}.`;
```

Template literals also support **multi-line strings** cleanly:
```js
console.log(`String with
multiple lines
using backticks`);
```

---

## 4. Type Conversion & Coercion

### Manual Conversion
```js
const inputYear = "2005";
console.log(Number(inputYear) + 21); // 2026
console.log(Number("Abid"));         // NaN (Not a Number)
console.log(typeof NaN);             // "number" ← quirky but true
console.log(String(2005));           // "2005"
```

### Automatic Coercion
JavaScript quietly converts types in certain situations:

```js
console.log("I'm " + 21 + " years old"); // number → string: "I'm 21 years old"
console.log("20" - "10" - 3);            // strings → numbers: 7
console.log("20" + "10" + 3);            // numbers → string: "20103"
console.log("20" * "2");                 // strings → numbers: 40
```

> ⚠️ The `+` operator concatenates strings. `-`, `*`, `/` always convert to numbers.

---

## 5. Truthy & Falsy Values

**The 5 falsy values** in JavaScript (become `false` when converted to boolean):

```
0    ""    undefined    null    NaN
```

Everything else is **truthy** (including `{}`, `[]`, any non-empty string).

```js
console.log(Boolean(0));         // false
console.log(Boolean(undefined)); // false
console.log(Boolean(""));        // false
console.log(Boolean("Abid"));    // true
console.log(Boolean({}));        // true
```

**Practical use — checking if a variable is defined:**
```js
let height;
if (height) {
    console.log("Height is defined");
} else {
    console.log("Height is not defined"); // ← runs, because undefined is falsy
}
```
> ⚠️ Be careful: if `height = 0`, this will incorrectly say "not defined" since `0` is also falsy.

---

## 6. Equality Operators

| Operator | Name | Type Coercion? |
|---|---|---|
| `===` | Strict equality | ❌ No |
| `==` | Loose equality | ✅ Yes |
| `!==` | Strict not-equal | ❌ No |
| `!=` | Loose not-equal | ✅ Yes |

```js
const age = 18;
age === 18;   // true  (strict — no coercion)
age == "18";  // true  (loose — "18" is coerced to 18)
age !== "18"; // true  (strict — different types)
```

> ✅ **Best practice:** Always use `===` and `!==` to avoid unexpected bugs from type coercion.

---

## 7. Logical Operators

| Operator | Symbol | Example |
|---|---|---|
| AND | `&&` | Both must be true |
| OR | `\|\|` | At least one must be true |
| NOT | `!` | Flips the value |

```js
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || isTired);       // true
console.log(!hasDriversLicense);                 // false

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
}
```

---

## 8. If / Else Statements

```js
const age = 19;
if (age >= 18) {
    console.log("You are eligible for a driving license. 🚗");
} else {
    console.log("You are not eligible for a driving license. 🚗");
}
```

**Chaining conditions with `else if`:**
```js
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI is higher than John's`);
} else if (BMIJohn > BMIMark) {
    console.log(`John's BMI is higher than Mark's`);
} else {
    console.log("They have equal BMI");
}
```

---

## 9. The Switch Statement

A cleaner alternative to multiple `else if` blocks when comparing one value:

```js
const day = "monday";

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':                          // ← multiple cases, same output
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}
```

> ⚠️ Don't forget `break` — without it, execution "falls through" to the next case.

---

## 10. The Ternary Operator

A compact one-liner alternative to `if/else`. Great for assigning values conditionally.

**Syntax:** `condition ? valueIfTrue : valueIfFalse`

```js
const age = 23;

// Instead of if/else:
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink); // "wine 🍷"

// Inside a template literal:
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
```

> 💡 The ternary is an **expression** (produces a value), so it can be used inside template literals — unlike `if/else`.

---

## 11. Statements vs Expressions

| | Description | Example |
|---|---|---|
| **Expression** | Produces a value | `3 + 4`, `true && false`, `age >= 18 ? ... : ...` |
| **Statement** | Performs an action | `if(...) {}`, `const x = 5;` |

```js
// Expression — produces a value, can go inside ${}
console.log(`I'm ${2026 - 2005} years old`); // ✅

// Statement — performs action, can NOT go inside ${}
// console.log(`${if(23 > 10) {...}}`); // ❌ SyntaxError
```

---

## 12. Coding Challenges

### Challenge 1 & 2 — BMI Calculator
Calculate BMI for two people and compare them.
```
BMI = mass / (height * height)
```

### Challenge 3 — Dolphin vs Koala Average Score
Compare the average scores of two teams and declare a winner (or a draw).

### Challenge 4 — Restaurant Tip Calculator
Calculate tip based on bill amount:
- Bill between €50–€300 → tip = 15%
- Otherwise → tip = 20%

```js
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`Bill: ${bill}, Tip: ${tip}, Total: ${bill + tip}`);
```

---

## 🔑 Key Takeaways

- Always use `const` by default; use `let` only when you need to reassign
- Never use `var`
- Prefer `===` over `==` to avoid sneaky type coercion bugs
- Template literals `` `${}` `` are cleaner than `+` concatenation
- Know your 5 falsy values: `0, "", undefined, null, NaN`
- The ternary operator is great for simple conditional assignments

---

*Part of the JavaScript learning journey by **Abid Ali** 🌱*
