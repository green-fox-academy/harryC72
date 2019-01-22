
let result = 1;

function sum(num: number): number{
for(let i=2; i<num; i++)
{
 result += i;
}

return result;

}

console.log(sum(5));