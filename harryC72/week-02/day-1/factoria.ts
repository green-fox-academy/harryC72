
let result: number = 1;

function factoria(num: number): number{
  
  for(let i: number = 2; i<= num; i++)
  {
     result *= i;

  }

  return result;

}

console.log(factoria(6));