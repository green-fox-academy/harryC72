class Car{
  private static SERIES_NUMBER = 0;
  private _serieNumber;
  private _ownerName;

  private constructor(brandName: string){
    Car.SERIES_NUMBER++;
    this._serieNumber = Car.SERIES_NUMBER;
  }  

  buyCar(brandName: string, ownerName: string):Car{
    let car = new Car('Porche');
    car._ownerName = ownerName;
    return car;
  }

  public set _ownerName(){
    

  }
}

