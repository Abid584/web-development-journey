# A Closer Look at Functions

A deep-dive into JavaScript functions — part of a larger JavaScript course curriculum. This section covers advanced function concepts with detailed examples and hands-on coding challenges. By the end of this section you should have a solid understanding of how functions truly work under the hood in JavaScript.

## 📁 File Structure

```
Functions/
├── index.html       # Main HTML page with UI buttons for interactive demos
├── script.js        # All JavaScript examples and coding challenges
├── .prettierrc      # Prettier config (single quotes, no arrow-parens)
└── README.md
```

## 🧠 Topics Covered

### Core Concepts

- **Default Parameters** — Setting fallback values in function signatures, including expressions that reference other parameters
- **Value vs. Reference** — How primitives and objects behave differently when passed as arguments
- **Callback Functions** — Higher-order functions that accept other functions as arguments (`transformer`, `forEach`, `addEventListener`)
- **Functions Returning Functions** — Closures via returned inner functions; arrow function shorthand
- **`call` / `apply` / `bind`** — Manually setting the `this` keyword; partial application with `bind`
- **IIFEs** — Immediately Invoked Function Expressions for encapsulation and one-time execution
- **Closures** — How inner functions retain access to their outer scope even after the outer function returns

### Coding Challenges

| Challenge | Description |
|-----------|-------------|
| **#1 — Poll App** | `registerNewAnswer` with `prompt`, answer validation, and `displayResults` using `call`/`bind` |
| **#2 — IIFE + Closure** | Attaching an event listener inside an IIFE; understanding why the `h1` reference persists |

---

## 📖 Concept Deep Dives

### 1. Default Parameters

Default parameters let you pre-fill function arguments when none are provided. What makes them powerful in JavaScript is that defaults can be **expressions** — they're evaluated at call time and can even reference earlier parameters.

```js
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers  // references a previous parameter!
) {
  console.log({ flightNum, numPassengers, price });
};

createBooking('LH123');           // price = 199 * 1 = 199
createBooking('LH123', 5);        // price = 199 * 5 = 995
createBooking('LH123', undefined, 1000); // skip a param by passing undefined
```

> 💡 To skip a parameter while still triggering its default, pass `undefined` explicitly. Passing `null` does **not** trigger the default.

---

### 2. Value vs. Reference

This is one of the most important distinctions in JavaScript:

- **Primitives** (`string`, `number`, `boolean`, etc.) are passed **by value** — a copy is made. Changing the copy inside the function has no effect on the original.
- **Objects** (and arrays) are passed **by reference** — the function receives a pointer to the same object in memory. Mutations inside the function **will** affect the original.

```js
const flight = 'LH234';       // primitive
const jonas = { name: 'Jonas', passport: 24739479284 }; // object

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';                    // only changes the local copy
  passenger.name = 'Mr. ' + passenger.name; // mutates the original object!
};

checkIn(flight, jonas);
console.log(flight);      // 'LH234' — unchanged
console.log(jonas.name);  // 'Mr. Jonas' — mutated!
```

> ⚠️ This can cause subtle bugs when multiple parts of your code hold a reference to the same object. Always be intentional about whether you want to mutate or clone an object.

---

### 3. First-Class & Higher-Order Functions

JavaScript treats functions as **first-class citizens** — they are just values, and can be:
- Stored in variables
- Passed as arguments to other functions
- Returned from functions

This enables **higher-order functions**: functions that either receive another function as an argument, return a function, or both.

```js
const upperFirstWord = str => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// transformer is a higher-order function; upperFirstWord is the callback
const transformer = function (str, fn) {
  console.log(`Original:    ${str}`);
  console.log(`Transformed: ${fn(str)}`);
  console.log(`By:          ${fn.name}`); // functions have a .name property!
};

transformer('JavaScript is the best!', upperFirstWord);
```

Callbacks are everywhere in JavaScript — `addEventListener`, `setTimeout`, `forEach`, `map`, `filter`, etc. all rely on this pattern.

---

### 4. `call`, `apply`, and `bind`

In JavaScript, the `this` keyword inside a regular function depends entirely on **how the function is called**, not where it's defined. These three methods let you control what `this` points to.

#### `call` — invoke immediately with a custom `this`
```js
const book = lufthansa.book; // detach the method

// 'this' would be undefined if called as book(23, 'Sarah') in strict mode
book.call(eurowings, 23, 'Sarah Williams'); // set 'this' to eurowings
```

#### `apply` — same as `call` but takes arguments as an array
```js
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

// Modern equivalent using spread (preferred):
book.call(swiss, ...flightData);
```

#### `bind` — returns a new function with `this` permanently set
```js
const bookEW = book.bind(eurowings); // doesn't call the function, returns a new one
bookEW(23, 'Steven Williams');        // 'this' is always eurowings

// Partial application — pre-set some arguments too
const bookEW23 = book.bind(eurowings, 23); // 'this' = eurowings, flightNum = 23
bookEW23('Jonas Schmedtmann');             // only name needed now
```

`bind` is especially important with **event listeners**, because inside a listener callback `this` points to the DOM element — not your object:

```js
// Without bind: 'this' inside buyPlane would be the button element
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
```

---

### 5. Closures

A **closure** is the combination of a function and the variable environment of the scope in which it was created. In plain English: an inner function always has access to the variables of its outer function, **even after the outer function has finished executing**.

```js
const secureBooking = function () {
  let passengerCount = 0; // this variable is "closed over"

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // secureBooking has returned and is "gone"

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers
// passengerCount is still alive, kept in memory by the closure
```

The returned function "closes over" `passengerCount` — it keeps a live reference to it. Each call to `booker()` reads and updates the same variable.

> 💡 You can inspect a function's closed-over variables in DevTools using `console.dir(booker)` — look for the `[[Scopes]]` property.

Closures are the foundation of many important patterns: **data privacy**, **factory functions**, **memoization**, **module patterns**, and more.

---

### 6. IIFEs (Immediately Invoked Function Expressions)

An IIFE is a function that is defined and called **immediately**. The main use case is creating a **private scope** — variables inside the IIFE cannot be accessed from outside.

```js
(function () {
  const isPrivate = 23; // not accessible outside
  console.log('Runs once, right now!');
})();

// Arrow function version
(() => console.log('Also runs immediately'))();
```

Even though modern JavaScript can achieve scope isolation with `let`/`const` inside a block `{}`, IIFEs are still commonly found in codebases and are worth understanding.

---

### 7. Functions Returning Functions

Because functions are first-class values, a function can **return another function**. This is how you build **factory functions** and enable partial application without `bind`.

```js
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); // returns a new function, stored
greeterHey('Jonas');             // Hey Jonas
greeterHey('Steven');            // Hey Steven

greet('Hello')('Jonas');         // called immediately — Hello Jonas
```

Arrow function equivalent (even more concise):

```js
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
```

This pattern is the basis of **currying** — transforming a function that takes multiple arguments into a series of functions each taking one argument.

---

## 🚀 Getting Started

Just open `index.html` in a browser — no build step or dependencies required.

```bash
# Clone the repo and open directly
open index.html
```

The page renders two buttons:
- **Buy new plane 🛩** — demonstrates `bind` with event listeners on an object method
- **Answer poll ⁉️** — runs the interactive poll (Coding Challenge #1)

Open the browser console (`F12`) to see all `console.log` output from `script.js`.

---

## 🔑 Key Takeaways

- `bind` returns a **new function** with a pre-set `this`; useful for event listeners and partial application.
- Closures let inner functions "remember" variables from their creation scope — even after the outer function has returned.
- IIFEs create a private scope and are useful for one-time initialization code.
- Passing an object to a function passes a **reference** — mutations inside the function affect the original object.
- Functions are **first-class values** in JavaScript — they can be passed around, returned, and stored just like any other value.

---

## 🛠 Code Style

Formatted with [Prettier](https://prettier.io/) using the project's `.prettierrc`:

```json
{
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

---

## 📚 Course Context

This folder is part of a broader JavaScript learning repository:

```
Javascript/
├── Behind-the-Scenes/
├── Data-Structures-Operators/
├── Functions/              ← You are here
├── Guess-My-Number-Project/
├── Modal/
├── Pig-Game/
├── fundamentals-part1/
├── fundamentals-part2/
└── html-css/
```
