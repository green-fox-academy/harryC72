import {Sharpie} from './sharpie'

// Sharpie Set

// Reuse your Sharpie class
// Create SharpieSet class
//     it contains a list of Sharpie
//     countUsable() -> sharpie is usable if it has ink in it
//     removeTrash() -> removes all unusable sharpies

class SharpieSet{
 sharpieSet: Sharpie[];

 
 
 add(pen: Sharpie){
  this.sharpieSet.push(pen);
 }


  countUsable(): number{
    let counter: number = 0;
    
    this.sharpieSet.forEach(function(value, index: number){
         value.inkAmount ? counter ++: counter=counter;
        
    })

    return counter; 
  }

  
  

  removeTrash(){
    let tempArray: Sharpie[] = [];

    this.sharpieSet.forEach(function(value, index: number) {
      value.inkAmount !== 0 ? tempArray.push(value): null;
    });    
     
    this.sharpieSet = tempArray;
  }
}

let pen1 = new Sharpie(4);
let pen2 = new Sharpie(2);
let pen3 = new Sharpie(0);
let pen4 = new Sharpie(0);

let penSet = new SharpieSet;

let tempArray: Sharpie[] = [pen1, pen2, pen3, pen4];

penSet.sharpieSet = tempArray;

console.log(penSet.countUsable());
penSet.removeTrash();
console.log(penSet);





