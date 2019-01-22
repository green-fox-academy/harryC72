

let numList: number[] = [3, 4, 5, 6, 7];

numList.reverse();
console.log(numList);

let numList2: number[] = [3, 4, 5, 6, 7];
let temp: number[] = [];
let arrayLength: number = numList2.length;

  while(arrayLength--)
    {
        temp.push(numList2.pop());
    }

console.log(temp);