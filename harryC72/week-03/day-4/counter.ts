// Create a Counter class

//     which has an integer property
//     when creating it should have a default value 0 or we can specify it when creating
//     we can add(number) to increase the counter's value by a whole number
//     or we can add() without parameters just increasing the counter's value by one
//     and we can get() the current value as string
//     also we can reset() the value to the initial value


class Counter{
  counter: number;
  initial: number;

  constructor(usedCounter){
    this.counter = usedCounter;
    this.initial = usedCounter;
  }

  add(num: number){
    this.counter += num;
  }

  addOne(){
    this.counter++;
  }

  
  getCounter(){
    let result: string = '';
    result = this.counter.toString();

    return result;
  }

  reset(){
    return this.counter = this.initial;
  }
}

let count = new Counter(4);
count.add(4);
console.log(count.getCounter());

count.addOne();
console.log(count.getCounter());

count.reset();
console.log(count.getCounter());


