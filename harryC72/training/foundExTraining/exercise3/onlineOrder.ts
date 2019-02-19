'use strict'
import { Order } from './order'
import { Dish } from './dish'

export class OnlineOrder extends Order {
  address: string;

  constructor(onlineOrderDishes: Dish[], onlineOrderAddress: string) {
    super(onlineOrderDishes);
    this.address = onlineOrderAddress
  }

}