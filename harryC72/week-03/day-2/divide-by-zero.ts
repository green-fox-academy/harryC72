'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideWithTen(num: number){
  if(num == 0)
  {
    console.log('fail');
    return;
  }

  let result = num / 10;
  console.log(result);
}

divideWithTen(0);
divideWithTen(10);
