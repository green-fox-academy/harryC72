// Create a Counter class

//     which has an integer property
//     when creating it should have a default value 0 or we can specify it when creating
//     we can add(number) to increase the counter's value by a whole number
//     or we can add() without parameters just increasing the counter's value by one
//     and we can get() the current value as string
//     also we can reset() the value to the initial value

export class Counter{
  counter: number;
  initial: number;

  constructor(newCounter = 0){
    this.counter = newCounter;
    this.initial = newCounter;
  }

  add(num: number){
    this.counter += num;
  }

  addOne(){
    this.counter++;
  }

  get(){
    return this.counter.toString();
  }

  reset(){
    return this.counter = this.initial;
  }

}