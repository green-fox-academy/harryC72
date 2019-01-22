'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

console.log(quote);

let subString1: string = quote.substr(20, 60);
let subString2: string = quote.substr(0, 20);

console.log(subString1);
console.log(subString2);

