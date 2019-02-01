

class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string ){
      this.completed = false;
      this.name = name;
  }

  complete() {
      this.completed = true;
  }

  getCompletedStatus(){
      return this.completed;
  }

  get Thing():string {
    return this.name;
  }
  set Thing(newName:string) {
      this.name = newName;
  }



}


export { Thing };

