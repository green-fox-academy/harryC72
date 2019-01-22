
let abc: string[] = ['Arthur', 'Boe', ' Chloe'];


let b: string[] = abc.splice(0, 1, abc[2]);
abc.splice(2, 1, b[0]);

console.log(abc);







