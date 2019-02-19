'use strict'
import { Order } from './order'
import { Dish } from './dish'

// Finally create an OfflineOrder which is a special Order, it has one more private field

//     table - a number, it is set from the constructor just like the dishes


export class OfflineOrder extends Order {
  table: number;

  constructor(offlineOrderDishes: Dish[], offlineOrderTable: number){
    super(offlineOrderDishes);
    this.table = offlineOrderTable;
  }
}
