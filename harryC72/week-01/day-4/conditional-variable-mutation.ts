'use strict'

let a: number = 24;
let out: number = 0;

if((a%2)==0)
{
    out++
}

console.log(out);


let b: number = 44;
let out2: string = '';

if(b<=20 && b>= 10)
{
    out2 = "Sweet!";
}
else if(b<10)
    {
        out2 = "Less!";
    }
    else
{
    out2 = "More!";
}
console.log(out2); 

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if(credits >= 50 && isBonus==false)
{
    c-=2;
}
else if(credits<50 && isBonus==false)
{
   c--;
}
console.log(c);

let d: number = 8;
let time: number = 120;
let out3:



