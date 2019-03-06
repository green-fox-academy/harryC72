
// 1)  Fill every paragraph with the last one's content.
// 2)  Do the same again, but you should keep the cat strong.


let second = document.getElementsByClassName('balloon');
second[0].innerHTML = 'apple';
document.getElementsByClassName('cat')[0].innerHTML = '<strong>banana</strong>';
let last = document.getElementsByClassName('animals');

for(let i = 0; i < last.length; i++){
  last[i].innerHTML = '';
}

last[0].innerHTML = 'car';

console.log(last);