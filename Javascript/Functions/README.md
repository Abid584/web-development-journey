# A Closer Look at Functions

A deep-dive into JavaScript functions — part of a larger JavaScript course curriculum. This section covers advanced function concepts with hands-on coding challenges.

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

## 🚀 Getting Started

Just open `index.html` in a browser — no build step or dependencies required.

```bash
# Clone the repo and open directly
open index.html
```

The page renders two buttons:
- **Buy new plane 🛩** — demonstrates `bind` with event listeners on an object method
- **Answer poll ⁉️** — runs the interactive poll (`Coding Challenge #1`)

## 🔑 Key Takeaways

- `bind` returns a **new function** with a pre-set `this`; useful for event listeners and partial application.
- Closures let inner functions "remember" variables from their creation scope — even after the outer function has returned.
- IIFEs create a private scope and are useful for one-time initialization code.
- Passing an object to a function passes a **reference** — mutations inside the function affect the original object.

## 🛠 Code Style

Formatted with [Prettier](https://prettier.io/) using the project's `.prettierrc`:

```json
{
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

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
