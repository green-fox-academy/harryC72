'use strict'
import { Dish } from './dish'
import { Order } from './order'
import { OnlineOrder } from './onlineOrder'
import { OfflineOrder } from './offlineOrder'

// Create a Restaurant class. This class will process the orders.
//  It has 1 private field which must be set through the constructor.

export class Restaurant {
  private inventory: object[];

  constructor(restaurantInventory: object[]){
    this.inventory = restaurantInventory;
  }

  public receiveOrder(order: Order): Order {
    let needIngredient1: number = 0;
    let needIngredient2: number = 0;

    order.getDishes().forEach(dish => {
      needIngredient1 += dish.getIngredients()['ingredient1'];
      needIngredient2 += dish.getIngredients()['ingredient2'];
    });

    if(needIngredient1 < this.inventory['ingredient1'] && 
    needIngredient2 < this.inventory['ingredient2']){
      this.inventory['ingredient1'] -= needIngredient1;
      this.inventory['ingredient2'] -= needIngredient2;
      order.deliver();
    }else if(order instanceof OnlineOrder){
      order.delay();
    }else if(order instanceof OfflineOrder){
      order.reject();
    }
    return order;
  }
}





