'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candyCounter(arr: any[]): number{

  let candyCount: number = 0;

 for(let i: number = 0; i < arr.length; i++)
 {
    candyCount +=arr[i].candies;
 }

 return candyCount;

}

function ageSumming(arr: any[]): number{

  let ageCounter: number = 0;


  for(let i: number = 0; i < arr.length; i++)
  {

    if(arr[i].candies < 5)
    {
      ageCounter += arr[i].age;
    }
  }

  return ageCounter;
}




console.log(candyCounter(students));
console.log(ageSumming(students));


