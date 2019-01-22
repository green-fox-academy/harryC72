
let reversed: string =
'.eslaf eb t\'ndluow ecnetnes siht, dehctiws erew eslaf dna eurt fo sgninaem eht fI';



function reverseString (obj: string): string{

  let temp1: string[] = obj.split('');

let temp2: string[] = temp1.reverse();

let result: string = temp2.join('');

return result;

}

console.log(reverseString(reversed));




