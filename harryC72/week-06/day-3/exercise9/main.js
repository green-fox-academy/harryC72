


//  1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
//  2, Achive the same design by css
//  3, Try not to use css classes
//  4, Add some functionality to the buttons
//      - If "Up" is clicked the selection should move up by one
//      - If "Down" is clicked the selection should move down by one
//      - If "X" is clicked the selected item should be removed and the first item should be selected
//      - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
//  5, Check all the edge cases, no error should be printed to the console

let cube = document.createElement('div');
cube.style.marginLeft = '150px';
cube.style.width = '150px';
cube.style.height = '150px';
cube.style.border = '1px solid black';
cube.style.float = 'left';

let bread = document.createElement("p")                
let text1 = document.createTextNode("bread");  
bread.appendChild(text1); 
bread.style.backgroundColor = 'grey';   
cube.appendChild(bread);

let milk = document.createElement("p")                
let text2 = document.createTextNode("milk");     
milk.appendChild(text2); 
cube.appendChild(milk);

let orange = document.createElement("p")                
let text3 = document.createTextNode("orange");     
orange.appendChild(text3); 
cube.appendChild(orange);

var tomato = document.createElement("p")                
var text4 = document.createTextNode("tomato");     
tomato.appendChild(text4); 
cube.appendChild(tomato);

let body = document.querySelector('body');
body.appendChild(cube);

let cubeArrows = document.createElement('div');
cubeArrows.style.width = '150px';
cubeArrows.style.height = '150px';
cubeArrows.style.border = '1px solid black';
cubeArrows.style.float = 'left';

let button1 = document.createElement('button');
let buttonContent = document.createTextNode('Up');
button1.appendChild(buttonContent);
button1.style.width = '150px';
button1.style.height = '25%';
cubeArrows.appendChild(button1);

button1.onclick =()=>{
  let array = document.querySelectorAll('p');

  for(let i = 0; i < array.length; i++){
    
  }

}

let button2 = document.createElement('button');
let buttonContent2 = document.createTextNode('>');
button2.appendChild(buttonContent2);
button2.style.width = '150px';
button2.style.height = '25%';
cubeArrows.appendChild(button2);

let button3 = document.createElement('button');
let buttonContent3 = document.createTextNode('X');
button3.appendChild(buttonContent3);
button3.style.width = '150px';
button3.style.height = '25%';
cubeArrows.appendChild(button3);

let button4 = document.createElement('button');
let buttonContent4 = document.createTextNode('Down');
button4.appendChild(buttonContent4);
button4.style.width = '150px';
button4.style.height = '25%';
cubeArrows.appendChild(button4);
body.appendChild(cubeArrows);


let cubeResult = document.createElement('div');
cubeResult.style.width = '150px';
cubeResult.style.height = '150px';
cubeResult.style.border = '1px solid black';
cubeResult.style.float = 'left';

cubeResult.innerText = 'Result';

body.appendChild(cubeResult);
