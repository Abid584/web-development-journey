# 🔍 How JavaScript Works Behind the Scenes

A hands-on practice module exploring the core mechanics of JavaScript — how the engine executes code, manages scope, handles hoisting, and works with memory references.

---

## 📚 Topics Covered

### 1. Scoping in Practice
- How the **scope chain** works across nested functions
- Difference between `var`, `let`, and `const` in terms of block scope
- Variable shadowing (creating a new variable with the same name as an outer scope variable)
- Reassigning outer scope variables from an inner scope
- Function declarations inside blocks (strict mode behavior)

### 2. Hoisting & the Temporal Dead Zone (TDZ)
- `var` is hoisted and initialized to `undefined`
- `let` and `const` are hoisted but remain in the **TDZ** until declared — accessing them early throws a `ReferenceError`
- **Function declarations** are fully hoisted (callable before their definition)
- **Function expressions** and **arrow functions** assigned to `const`/`let` are NOT hoisted
- Practical pitfall: using `var` for conditional logic can cause unintended behavior (e.g., `deleteShoppingCart` example)
- `var` variables attach to the `window` object; `let` and `const` do not

### 3. The `this` Keyword
- In the **global scope**, `this` refers to the `window` object
- In a **regular function** (strict mode), `this` is `undefined`
- In an **arrow function**, `this` is inherited from the surrounding lexical scope (no own `this`)
- In an **object method**, `this` refers to the object calling the method
- **Method borrowing**: when a method is assigned to another object, `this` changes to that object
- Detaching a method from its object causes `this` to lose its reference

### 4. Regular Functions vs. Arrow Functions
- Arrow functions do **not** have their own `this` — they use the lexical `this` of their parent
- Using an arrow function as an object method can lead to `this` pointing to `window` (or `undefined` in strict mode)
- Two solutions to use `this` inside a nested regular function:
  - **Solution 1:** Store `this` in a `self`/`that` variable
  - **Solution 2:** Use an arrow function for the inner function
- Regular functions have access to the `arguments` object; arrow functions do **not**

### 5. Object References & Copying
- Objects are stored as **references** in memory — assigning an object to a new variable copies the reference, not the value
- **Shallow copy** (`{ ...obj }`): copies top-level properties, but nested objects/arrays are still shared by reference
- **Deep clone** (`structuredClone(obj)`): creates a fully independent copy including nested structures

---

## 🗂️ File Structure

```
Behind-the-Scenes/
├── index.html       # Simple HTML page with a styled heading
├── script.js        # All JavaScript practice code (commented out by section)
├── .prettierrc      # Prettier config: single quotes, no arrow-function parens
└── README.md
```

---

## 🚀 How to Run

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Open the **DevTools Console** (`F12` → Console tab).
4. In `script.js`, uncomment the section you want to explore and refresh the page.

---

## 🛠️ Tools & Config

- **Language:** Vanilla JavaScript (ES6+)
- **Mode:** `'use strict'` enabled
- **Formatter:** [Prettier](https://prettier.io/) with the following settings:

```json
{
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

---

## 💡 Key Takeaways

| Concept | `var` | `let` / `const` |
|---|---|---|
| Hoisted? | ✅ Yes (as `undefined`) | ✅ Yes (but in TDZ) |
| Block-scoped? | ❌ No | ✅ Yes |
| Attached to `window`? | ✅ Yes | ❌ No |

| Function Type | Own `this`? | Own `arguments`? | Hoisted? |
|---|---|---|---|
| Declaration | ✅ Yes | ✅ Yes | ✅ Fully |
| Expression (`const`) | ✅ Yes | ✅ Yes | ❌ No |
| Arrow | ❌ No (lexical) | ❌ No | ❌ No |

---

## 📖 Based On

This project follows the **JavaScript Behind the Scenes** section of [The Complete JavaScript Course](https://www.udemy.com/course/the-complete-javascript-course/) by Jonas Schmedtmann.
