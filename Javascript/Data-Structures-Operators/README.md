# 📦 Data Structures and Modern Operators

A hands-on JavaScript practice project covering core ES6+ data structures and modern language features. Built as part of a structured web development / JavaScript curriculum, this project works through concepts progressively across two files: `script.js` (topic walkthroughs with a restaurant and football app) and `exercises.js` (guided exercises driven by a real books dataset).

---

## 📁 Project Structure

```
├── index.html        # Minimal HTML shell that loads the script
├── script.js         # Lecture examples and topic walkthroughs (commented-out sections)
├── exercises.js      # Guided exercises using a books dataset, with solutions
└── .prettierrc       # Prettier formatter config (single quotes, no arrow-function parens)
```

---

## 🧠 Topics Covered

### 1. Destructuring Arrays
- Unpacking array values into variables
- Skipping elements, swapping variables
- Nested destructuring
- Default values

### 2. Destructuring Objects
- Renaming variables on destructure
- Default values for missing properties
- Mutating existing variables
- Nested object destructuring
- Destructuring directly in function parameters (with defaults)

### 3. The Spread Operator (`...`)
- Expanding arrays into function arguments
- Creating new arrays from existing ones
- Shallow-copying arrays and objects
- Merging arrays
- Spreading strings and objects

### 4. Rest Pattern and Parameters
- Rest in array and object destructuring (collecting "the rest")
- Rest parameters in functions (variable argument lists)
- Difference between spread (right of `=`) and rest (left of `=`)

### 5. Short-Circuit Evaluation (`&&` / `||`)
- Truthy/falsy short-circuiting
- Using `||` to set default values
- Using `&&` to conditionally call methods
- Practical patterns that replace simple `if` statements

### 6. Nullish Coalescing Operator (`??`)
- Difference from `||` — only nullish (`null` / `undefined`) triggers the fallback, not `0` or `''`

### 7. Logical Assignment Operators
- `||=` — OR assignment
- `&&=` — AND assignment
- `??=` — Nullish assignment

### 8. The `for…of` Loop
- Iterating over arrays
- Using `.entries()` for index + value pairs

### 9. Enhanced Object Literals (ES6)
- Shorthand property names
- Computed property names using expressions
- Shorthand method definitions

### 10. Optional Chaining (`?.`)
- Safe property access on potentially nullish objects
- Optional method calls
- Optional array element access
- Combined with `??` for clean default fallbacks

### 11. Looping Objects
- `Object.keys()` — iterating property names
- `Object.values()` — iterating property values
- `Object.entries()` — iterating key/value pairs with destructuring

### 12. Sets
- Creating sets, checking size, `has()`, `add()`, `delete()`
- Iterating sets with `for…of`
- Converting arrays to sets (deduplication) and back
- New set operations: `.intersection()`, `.union()`, `.difference()`, `.symmetricDifference()`, `.isDisjointFrom()`

### 13. Maps
- Creating maps with `new Map()` and chained `.set()`
- Retrieving values with `.get()`
- Using any data type as a key (including arrays and DOM elements)
- Converting objects to maps via `Object.entries()`
- Iterating maps with `for…of` and destructuring
- Converting maps back to arrays

### 14. Working with Strings
- Indexing and `.length`
- `.indexOf()`, `.lastIndexOf()`, `.slice()`
- `.toLowerCase()`, `.toUpperCase()`, `.trim()`
- `.replace()`, `.replaceAll()`, regex replace with `/g` flag
- `.includes()`, `.startsWith()`, `.endsWith()`
- `.split()` and `.join()`
- `.padStart()`, `.padEnd()`, `.repeat()`

---

## 🏋️ Coding Challenges

Four progressively harder challenges appear across both files:

| Challenge | File | Theme | Key Skills |
|-----------|------|-------|-----------|
| **#1** | `script.js` / `exercises.js` | Football betting app — team data | Array/object destructuring, spread, rest, short-circuit |
| **#2** | `script.js` / `exercises.js` | Football betting app — odds & scorers | `for…of`, `Object.entries()`, dynamic object building |
| **#3** | `script.js` / `exercises.js` | Football betting app — game events log | Maps, Sets, iteration |
| **#4** | `script.js` / `exercises.js` | underscore_case → camelCase converter | String methods, DOM interaction, `textarea` + `button` |

Each challenge includes a problem statement, test data, expected output, and a commented-out solution — great for attempting first, then checking the answer.

---

## 📖 exercises.js — Books Dataset Exercises

`exercises.js` provides a second layer of practice built around a `books` array of 8 real computer science and business book objects. Each exercise is a short task tied directly to a topic, with the solution commented out immediately below.

**The `books` dataset includes properties like:**
- `title`, `author` (string or array), `publisher`, `publicationDate`, `edition`
- `keywords` (array), `pages`, `format`, `ISBN`, `language`, `programmingLanguage`
- `onlineContent` (boolean), `highlighted` (boolean)
- `thirdParty.goodreads` — nested object with `rating`, `ratingsCount`, `reviewsCount`, etc.

**Exercises by topic:**

| Topic | Sample Tasks |
|-------|-------------|
| **Destructuring Arrays** | Destructure first/second/third book; nested ratings array; default values for missing star counts |
| **Destructuring Objects** | Extract `title`, `author`, `ISBN`; rename `keywords` → `tags`; default for missing `programmingLanguage`; reassign existing variables; deep-nested `goodreads.rating`; `printBookInfo()` with parameter destructuring |
| **Spread Operator** | Merge authors from two books into a flat array; `spellWord()` that spreads a string |
| **Rest Pattern** | Grab first keyword + rest; extract `publisher` and rest of book; `printBookAuthorsCount()` with rest params |
| **Short-Circuit (`&&` / `\|\|`)** | `hasExamplesInJava()` returning true or fallback string; loop printing books with `onlineContent` |
| **Nullish Coalescing (`??`)** | Loop flagging books missing the `onlineContent` property entirely |
| **Logical Assignment** | Add missing `edition` property with `\|\|=`; un-highlight low-rated books with `&&=` |
| **`for…of` Loop** | Sum all pages; collect all authors into a flat array; print numbered author list |
| **Enhanced Object Literals** | Build a new book object from a `bookData` array using computed property names; shorthand `pages` property |
| **Optional Chaining (`?.`)** | `getFirstKeyword()` — safely access `keywords[0]` without throwing |
| **Looping Objects** | Build an `entries` array from `Object.keys()` then fill values with `Object.values().entries()`; compare with `Object.entries()` |
| **Sets** | Collect all keywords, deduplicate with a Set, add/delete items, convert back to array, clear |
| **Maps** | Create a book Map from scratch; `.set()`, `.get()`, `.size`, `.has()`; convert book object to Map; loop for numeric-value keys |
| **Strings Part 1** | Index into ISBN; find/extract words with `indexOf` / `slice`; `isContributor()` checking for `"(Contributor)"` suffix |
| **Strings Part 2** | `normalizeAuthorName()` — trim, capitalize, strip contributor tag; `.replace()`; `logBookTheme()` using `startsWith`/`includes`/`endsWith` |
| **Strings Part 3** | `logBookCategories()` — split semicolon string; `getKeywordsAsString()` — deduplicate and join; `logBookChapters()` — `padEnd` formatting |

---

## 🚀 Getting Started

No build tools or dependencies required.

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. Open the browser **DevTools Console** (`F12` → Console tab) to see all output.
4. To run exercises, swap the `<script>` tag in `index.html` to point at `exercises.js`, or add a second `<script>` tag.

> All exercise and example code is wrapped in `// ...` line comments or `/* ... */` block comments so only selected sections run at a time. Uncomment a block to experiment with it.

---

## 🛠️ Code Style

Formatted with [Prettier](https://prettier.io/) using the following config (`.prettierrc`):

```json
{
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

- Single quotes for strings
- No parentheses around single arrow-function parameters (e.g. `x => x * 2`)

---

## 📌 Key Data Objects Used Throughout

**`books`** — An 8-item array of real book objects used throughout `exercises.js`. Each book has up to 14 properties including deeply nested Goodreads ratings. Sample entry:
```js
{
  title: 'Algorithms',
  author: ['Robert Sedgewick', 'Kevin Wayne'],
  publisher: 'Addison-Wesley Professional',
  edition: 4,
  keywords: ['computer science', 'programming', 'algorithms', ...],
  pages: 976,
  programmingLanguage: 'Java',
  onlineContent: true,
  highlighted: true,
  thirdParty: {
    goodreads: { rating: 4.41, ratingsCount: 1733, ... }
  }
}
```

**`restaurant`** — A mock Italian restaurant object used across `script.js` examples:
```js
{
  name: 'Classico Italiano',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: { thu: {...}, fri: {...}, sat: {...} },
  order(starterIndex, mainIndex) {...},
  orderDelivery({ starterIndex, mainIndex, time, address }) {...},
  orderPasta(ing1, ing2, ing3) {...},
  orderPizza(mainIngredient, ...otherIngredients) {...}
}
```

**`game`** — A Bayern Munich vs Borrussia Dortmund match object used in Challenges #1–#3:
```js
{
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [[...], [...]],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  odds: { team1: 1.33, x: 3.25, team2: 6.5 }
}
```

---

## 📚 Prerequisites

- Basic JavaScript (variables, functions, loops, conditionals)
- Familiarity with the browser console

---

## 💡 Tips for Learning

- Work through `script.js` **top to bottom** — later sections build on earlier concepts.
- After each topic in `script.js`, try the matching exercises in `exercises.js` before looking at the solutions.
- Before uncommenting a solution, try writing your own first.
- Use the browser console freely — add extra `console.log()` calls to inspect values at any step.
- The string methods section is a great standalone reference to bookmark.
