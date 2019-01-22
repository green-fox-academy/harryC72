

let numList: number[] = [3, 4, 5, 6, 7];

numList.reverse();
console.log(numList);

let numList2: number[] = [3, 4, 5, 6, 7];
let temp: number[] = [];

for(let i:number = 0; i<numList2.length; i++)
{
  for(let j: number = numList2.length; j<= 0; j--)
  {
    temp[i]= numList2[j];

  }
}
console.log(temp);