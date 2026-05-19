const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

///////////////////////////////////////
// Destructuring Arrays

// // Destructure the books array into two variables called firstBook and secondBook.
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// // Destructure the books array into a variable called thirdBook. You must skip the first two books.
// const [ , , thirdBook] = books;
// console.log(thirdBook);

// // Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[ , rating] , [ ,ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// // Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings , threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings , threeStarRatings);

///////////////////////////////////////
// Destructuring Objects

// // Destructure the first book object from the books array into variables called title, author and ISBN.
// const {title, author, ISBN} = books[0];
// console.log(title, author, ISBN);

// // Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
// const {keywords: tags} = books[0];
// console.log(tags);

// // The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.
// const {language , programmingLanguage = "unknown"} = books[6];
// console.log(language, programmingLanguage);

// // Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// ({title: bookTitle, author: bookAuthor} = books[0]);
// console.log(bookTitle, bookAuthor);

// // Each book object has a deeply nested rating property as illustrated below:
// // {
// //   title: 'Algorithms',
// //   ...
// //   thirdParty: {
// //     goodreads: {
// //       rating: 4.41,              // <-- HERE
// //       ratingsCount: 1733,
// //       reviewsCount: 63,
// //       fiveStarRatingCount: 976,
// //       oneStarRatingCount: 13
// //     }
// //   }
// // },
// // Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.
// // Please do most of the work on the left side of the assignment operator: const ... = books[0];

// const {thirdParty: {goodreads: {rating: bookRating}}} = books[0];
// console.log(bookRating);

// // Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".
// // If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.
// // printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
// // Expected output: "Algorithms by Robert Sedgewick, 2011"

// function printBookInfo ({title, year, author}) {
//     console.log(`${title} by ${author}, ${year}`);
// }

// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

///////////////////////////////////////
// The Spread Operator
// // Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.
// // Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// // Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.
// function spellWord (str){
//     console.log(...str);
// }

// spellWord("Abid")

///////////////////////////////////////
// Rest Pattern and Parameters

// // Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// // Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// // Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".
// // Example Code:
// // printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
// // Expected output: "The book "Algorithms" has 2 authors"

// const printBookAuthorsCount = function (title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// }

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

///////////////////////////////////////
// Short Circuiting (&& and ||)

// // Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example
// // {
// //   title: 'Algorithms',
// //   author: ['Robert Sedgewick', 'Kevin Wayne'],
// //   ...
// //   programmingLanguage: 'Java',     // <-- HERE
// // }
// // Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

// // Use short-circuiting.

// function hasExamplesInJava(book) {
//   return book.programmingLanguage === 'Java' || 'no data available';
// }

// console.log(hasExamplesInJava(books[0]));

// // Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.
// // {
// //   title: 'Operating System Concepts',
// //   // ... removed for clarity
// //   onlineContent: false,          // <-- HERE
// // },

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent && console.log(`"${books[i].title}" provides online content`);
// }

///////////////////////////////////////
// The Nullish Coalescing Operator (??)

// // There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ?? console.log(`"${books[i].title}" provides no data about its online content.`);
// }

///////////////////////////////////////
// // Logical Assignments Operators

// // Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// // Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.
// // Use the &&= operator (tip: you may also need the ! operator)

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2)
// }

///////////////////////////////////////
// Coding Challenge # 1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// // Then, call the function again with players from game.scored

// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho' , 'Perisic' ]
// console.log(players1Final);

// const {odds: {team1: team1, x: draw, team2: team2}} = game;
// console.log(team1, draw, team2);

// function printGoals(...players) {
//   console.log(`${players.length} goals were scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

///////////////////////////////////////
// Looping Arrays: The for-of Loop

// // Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.
// let pageSum = 0;
// for(const item of books){
//   pageSum += item.pages;
// }
// console.log(pageSum);

// // Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.
// // Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).
// const allAuthors = [];
// for(const item of books){
//   typeof item.author === 'string' ? allAuthors.push(item.author) : allAuthors.push(...item.author);
// }
// console.log(allAuthors);

// // Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.
// // Expected output
// // 1. Robert Sedgewick
// // 2. Kevin Wayne
// // 3. Harold Abelson
// //    ...                    // part removed for clarity
// // 15. Cal Newport

// for(const [i, author] of allAuthors.entries()) {
//   console.log(`${i+1}. ${author}`);
// }

///////////////////////////////////////
// Enhanced Object Literals

// // Below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.
// // Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already.
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1]

// };
// console.log(newBook);

// // Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.
// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages
// }
// console.log(newBook2);

///////////////////////////////////////
// Optional Chaining (?.)

// // Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.
// // Code: getFirstKeyword(book[0]);
// // Expected output: "computer science"

// const getFirstKeyword = function (book) {
//   return book?.keywords[0]
// }

// console.log(getFirstKeyword(books[0]));

///////////////////////////////////////
// Looping Objects: Object Keys, Values and Entries

// // Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.
// // In the end, the entries array should be filled with arrays containing keys:
// // [['rating'], ['ratingsCount'], ['reviewsCount'], ['fiveStartRatingCount'], ['oneStartRatingCount']]
// const entries = [];
// for(const entry of Object.keys(books[0].thirdParty.goodreads)){
//   entries.push([entry]);
// }
// console.log(entries);

// // The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.
// // Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.
// // Push each value to the appropriate inner array in the entries array (use index from entries()).
// for (const [index, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
//   entries[index].push(value);
// }
// console.log(entries);

// // Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.
// const entries2 = Object.entries(books[0].thirdParty.goodreads)
// console.log(entries2);

// // Log the entries and entries2 variables to the console, and compare them. They should look the same.
// entries === entries2 && console.log(entries, entries2);

///////////////////////////////////////
// // Coding Challenge #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [i, player] of Object.entries(game.scored)){
//   console.log(`Goal ${Number(i) + 1}: ${player}`);
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// let average = 0;
// const odds = Object.values(game.odds);
// for(const odd of odds){
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names
// for(const [team, odd] of Object.entries(game.odds)){
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// };

// // 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// // {
// //   Gnarby: 1,
// //   Hummels: 1,
// //   Lewandowski: 2
// // }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

///////////////////////////////////////
// // Sets

// // Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).
// // Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].
// const allKeywords = [];
// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }
// console.log(allKeywords);

// // The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.

// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

// // Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.
// uniqueKeywords.add('coding');
// uniqueKeywords.add('science');
// console.log(uniqueKeywords);

// // Delete 'business' from the uniqueKeywords set.
// uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

// // Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.
// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);

// // Delete all items from the uniqueKeywords set.
// uniqueKeywords.clear();
// console.log(uniqueKeywords);

///////////////////////////////////////
// // Maps: Fundamentals

// // Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:
// // [['title', 'Clean Code'], ['author', 'Robert C. Martin']]
// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);
// console.log(bookMap);

// // Set a new key in bookMap called pages, and assign it with a number 464.
// bookMap.set('pages', 464);
// console.log(bookMap);

// // Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// // Get the size of bookMap, and log it to the console.
// console.log(bookMap.size);

// // Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.
// if (bookMap.has('author')) console.log('The author of the book is known');

///////////////////////////////////////
// // Maps: Iteration

// // Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// // Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.
// for (const [key, value] of firstBookMap){
//   if(typeof value === 'number') console.log(key);
// }

///////////////////////////////////////
// // Coding Challenge #3
// // Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// // Your tasks:
// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// // 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// // 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽GOAL
// const gameEvents = new Map([
// [17, '⚽ GOAL'],
// [36, '🔁 Substitution'],
// [47, '⚽ GOAL'],
// [61, '🔁 Substitution'],
// [64, '🔶 Yellow card'],
// [69, '🔴 Red card'],
// [70, '🔁 Substitution'],
// [72, '🔁 Substitution'],
// [76, '⚽ GOAL'],
// [80, '⚽ GOAL'],
// [92, '🔶 Yellow card'],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);

// // 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

///////////////////////////////////////
// // Working with Strings - Part 1

// // Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.
// console.log(
//   books[0].ISBN['6'],
//   books[0].ISBN['4'],
//   books[0].ISBN['9'],
//   books[0].ISBN[8],
// );

// // Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));

// // Extract the word "boxing" from the same quote string, and log it to the console.
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// // Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.
// // Code: isContributor('Julie Sussman (Contributor)');
// // Expected output: true

// function isContributor(author) {
//   return author.lastIndexOf('(Contributor)') !== -1;
// }

// console.log(isContributor('Julie Sussman (Contributor)'));
// console.log(isContributor('Robert Sedgewick'));

///////////////////////////////////////
// // Working with Strings - Part 2

// // Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).
// // You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.
// // Code: normalizeAuthorName('  JuliE sussMan (Contributor)')
// // Expected output: "Julie Sussman"
// function normalizeAuthorName(author) {
//   author = author.trim();
//   const firstName = author.slice(0, author.indexOf(' '));

//   let lastName = '';
//   if (author.indexOf(' ') === author.lastIndexOf(' ')) {
//     lastName = author.slice(author.indexOf(' ') + 1, author.length);
//   } else {
//     lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
//   }

//   const capitalizedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//   const capitalizedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

//   return capitalizedFirstName + ' ' + capitalizedLastName;
// }

// console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

// // Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.
// const newBookTitle = books[1].title.replace("Programs" , "Software");
// console.log(newBookTitle);

// // Write a function called logBookTheme that takes book's title (string), and logs to the console: "This book is about computers" if the title starts with the word "computer", "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words, and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".
// // The title may contain both small and capital letters.
// function logBookTheme(title) {
//   title = title.toLowerCase();

//   if (title.startsWith('computer')) {
//     console.log('This book is about computers');
//   } else if (title.includes('algorithms') && title.includes('structures')) {
//     console.log('This book is about algorithms and data structures');
//   } else if ((title.endsWith('system') || title.endsWith('systems')) && !title.includes('operating')) {
//     console.log('This book is about some systems, but definitely not about operating systems');
//   }
// }

// logBookTheme("Computer and Operating Systems");

///////////////////////////////////////
// // Working with Strings - Part 3

// // Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.
// // Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).
// // Code: const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// // logBookCategories(bookCategories);
// // Expected output:
// // science
// // computing
// // computer science
// // algorithms
// // business
// // operating systems
// // networking
// // electronics
// function logBookCategories(str) {
//   const categories = str.split(';');

//   for (let category of categories) {
//     console.log(category);
//   }
// }
// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// logBookCategories(bookCategories);

// // Now, the opposite. Each book from the books array has the keywords property.
// // Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.
// // Code: getKeywordsAsString(books);
// // Expected output: computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development
// function getKeywordsAsString(books) {
//   const keywords = [];

//   for (const book of books) {
//     keywords.push(...book.keywords);
//   }

//   const uniqueKeywords = [...new Set(keywords)];

//   return uniqueKeywords.join(';');
// }
// getKeywordsAsString(books);

// // Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.
// // Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).
// // Use the padEnd method.
// // Code:
// // const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
// // logBookChapters(bookChapters);
// // Expected output:
// // The Basics__________ 14
// // Sorting_____________ 254
// // Searching___________ 372
// // Graphs______________ 526
// // Strings_____________ 706
// function logBookChapters(chapters) {
//   for (const [chapter, pages] of chapters) {
//     console.log(chapter.padEnd(20, '_') + ' ' + pages);
//   }
// }
// const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
// logBookChapters(bookChapters);

///////////////////////////////////////
// // Coding Challenge #4
// // Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// // The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

// // Test data (pasted to textarea, including spaces):
// // underscore_case
// // first_name
// // Some_Variable
// // calculate_AGE
// // delayed_departure

// // Should produce this output (5 separate console.log outputs):
// // underscoreCase      ✅
// // firstName           ✅✅
// // someVariable        ✅✅✅
// // calculateAge        ✅✅✅✅
// // delayedDeparture    ✅✅✅✅✅

// // Hints:
// // Remember which character defines a new line in the textarea
// // The solution only needs to work for a variable made out of 2 words, like a_b
// // Start without worrying about the ✅. Tackle that only after you have the variable name conversion working
// // This challenge is difficult on purpose, so start watching the solution in case
// // you're stuck. Then pause and continue!

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   console.log(text);
  
//   const rows  = text.split('\n')
//   for(const [i, row] of rows.entries()){
//     const [first, second] = row.toLowerCase().trim().split("_");
//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
//     console.log(`${output.padEnd(20)} ${'✅'.repeat(i+1)}`);
//   }
// });

///////////////////////////////////////
