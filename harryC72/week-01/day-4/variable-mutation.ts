'use strict'

let a: number = 3;
a += 10;
console.log(a);

let b: number = 100;
b -= 7;
console.log(b);

let c: number = 44;
c *= 2;
console.log(c);

let d: number = 125;
d /= 5;
console.log(d);

let e: number = 8;
e **=8;
console.log(e);

let f1: number = 123;
let f2: number = 345;
let f1Biggest = f1 > f2;

if(f1Biggest)
{
    console.log("f1 is biggest");
}
else{
    console.log("f1 is smaller than f2");
}

let g1: number = 350;
let g2: number = 200;
g2 *= 2;
let g2Biggest: boolean = g2 > g1;

if(g2Biggest)
{
    console.log("g2 is biggest");
}
else{
    console.log("g2 is smaller than g1");
}

let h: number = 1357988018575474;
if(h%11==0)
{
    console.log("11 is a divisor of h");
}

let i1: number = 10;
let i2: number = 3; 
let i2Squared = Math.pow(i2, 2);
let i2Cubed = Math.pow(i2, i2);

if(i1 > i2Squared && i1 < i2Cubed)
{
    console.log("i1 is higher than i2 squared and smaller than i2 cubed")
}   

let j: number = 1251;
if((j%3==0) || (j/5==0))
{
    console.log("j is divisible with either 3 or 5");
}

let k: string = 'Apple';
k = k + k + k + k;
