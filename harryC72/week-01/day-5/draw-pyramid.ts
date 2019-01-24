
'use strict'

let lineCount: number = 4;
let space: string = "";
let decorator: string = "";


for (let i: number = 1; i <= lineCount; i++) {
    
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

