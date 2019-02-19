'use strict'

import { Dish } from './dish'
import * as lib from './lib'

export class Order {
  private id: number;
  private status: string;
  private dishes: Dish[];

  constructor(orderDishes: Dish[]){
    this.dishes = orderDishes;
    this.id = lib.getRandomNumber(1001, 9999);
  }

  delay(): void {
    this.status = 'waiting';
  }

  deliver(): void {
    this.status = 'delivered';
  }

  reject(): void {
    this.status = 'rejected';
  }

  getDishes(): Dish[] {
    return this.dishes;
  }


}