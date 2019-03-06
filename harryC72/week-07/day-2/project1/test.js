
// function factorialize(num) {
//   var result = num;
   
//   if (num === 0 || num === 1) 
//     return 1; 
 
//   while (num > 1) { 
//     num--; 
//     result = result * num;  
    
//   }
     
//   return result; 
// }

// var sum = (n) => (n * (n+1)) / 2;

// console.log(factorialize(5));
// console.log(sum(5));

// result = (numArray) => numArray.map(num => num*2);

// let test = result([3, 6, 7 ]);
// console.log(test);

let multiply = (numArray) => numArray.reduce( (a,b) => a * b );

console.log(multiply([2, 3, 2]));