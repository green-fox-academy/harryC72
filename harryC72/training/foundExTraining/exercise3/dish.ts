'use strict'

export class Dish {
  private name: string;
  private ingredients: object[];

  constructor(dishName: string, dishIngredients: object[]){
    this.name = dishName;
    this.ingredients = dishIngredients;
  }

  public getIngredients(): object[] {
    return this.ingredients;
  }
}

