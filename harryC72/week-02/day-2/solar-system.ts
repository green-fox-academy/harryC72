

let planetList: string[] = 
['Mercury', 'Venus', 'Earth', 
'Mars', 'Jupiter', 'Uranus', 'Neptune'];

let temp: string[] = [];

function putSaturn(test: string[]): string[]{
  
  let saturn: string = 'Saturns';
  test.splice(5, 0, saturn);
  
  return test;
}

console.log(putSaturn(planetList));
