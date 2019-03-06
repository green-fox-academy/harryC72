'use strict'

let ages: number[] = [12, 22, 33, 44, 2, 4, 54, 23, 25, 66, 99];

let persons: any[] = [
{ name: 'John Smith', age: 23 },
{ name: 'Rad Johnson', age: 33 },
{ name: 'Will Tent', age: 44},
{ name: 'Sophie Bell', age: 54},
{ name: 'Lili Stein', age: 6},
{ name: 'Brad Cooper', age: 44}
]

// ARRAY SORT METHOD

let sortedAges: number[] = ages.sort((a, b) => a - b);
let sortedPersons: any[] = persons.sort((a, b) => a.age - b.age);

console.log('sorted ages: ', sortedAges);
console.log('sorted persons: ', sortedPersons);


// ARRAY MAP METHOD

let mappedAges: string[] = ages.map(age => `My age is: ${age}`);

let mappedPersons: string[] = persons.map(person => `My name is ${person.name} and I am ${person.age} years old`);
console.log('Mapped Ages', mappedAges);
console.log('Here is each entrance', mappedPersons);

// ARRAY FILTER METHOD

let filteredAges: number[] = ages.filter(age => age < 40);

let filteredPersons: any[] = persons.filter(person => person.age < 40);

console.log('filteredAges', filteredAges);
console.log('filteredPersons', filteredPersons);


const fs = require('fs');
let content: string = fs.readFileSync('test.txt', 'utf-8');
let transformedContent: any[][] = content.trim()
.split('\n')
.map(line => line.split('  '));

let returnValue: any = transformedContent.reduce((consumers, line) => {
consumers[line[0]] = consumers[line[0]] || [];
consumers[line[0]].push({
  name: line[1], price: line[2], quantity: line[3]
});
return consumers;
}, {});

console.log('Returns consumers', JSON.stringify(returnValue, null, 2));