// EXAMPLE 1 - Replace a String case-insensitive in JavaScript - String.replace()

const str = 'HELLO HELLO world';
const replaced = str.replace(/hello/gi, 'bye');
console.log(replaced); // 👉️ bye bye world

// ------------------------------------------------------------------

// // EXAMPLE 2 - Replacing only the first occurrence in a case-insensitive manner

// const str = 'HELLO HELLO world';

// const replacedOnce = str.replace(/hello/i, 'bye');
// console.log(replacedOnce); // 👉️ bye HELLO world
