
let numList: number[] = [1, 2, 3, 8, 5, 6];
 
numList.map(function(){
  numList.splice(3,1, 4);
})

console.log(numList[3]);
