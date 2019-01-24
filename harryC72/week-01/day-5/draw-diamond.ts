
'use strict'

let lineCount: number = 7;
let space: string = "";
let decorator: string = "";


for (let i: number = 1; i <= 4; i++) {
    
    for (let j: number = 0; j < 4 - i; j++) {
        space += " ";
    }
    if (i == 1) {
        decorator += "*";
    }
    else {
        decorator += "**";
    }
    console.log(space + decorator);
    space = "";
    
}

decorator = '';
space = '';

for (let k: number = 1; k <= 3; k++) {
    
    for (let l: number = 6; l >(k*2)-1; l--) {
        decorator += '*';
    }
        space += ' ';
    console.log(space + decorator);
    decorator = '';
    // space = '';
    
}

