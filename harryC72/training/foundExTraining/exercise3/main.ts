'use strict'
import { Dish } from './dish'
import { Order } from './order'
import { OnlineOrder } from './onlineOrder'
import { OfflineOrder } from './offlineOrder'
import { Restaurant } from './restaurant'


let restaurant = new Restaurant([{ ingredient1: 100 }, {ingredient2: 100 }]);
// make our dishes
let dish1 = new Dish('pasta', [{ ingredient1: 1},{ ingredient2: 2} ]);
let dish2 = new Dish('soup', [{ingredient1: 2 }, {ingredient2: 2 }]);
let dish3 = new Dish('dessert', [{ingredient1: 2}, {ingredient2: 1 }]);
let dish4 = new Dish('fish', [{ingredient1: 999}, {ingredient2: 4 }]); // cant possibly make this dish
// make orders
let newOrder1 = new OnlineOrder([dish1, dish2], 'andrassy ut 66');
let newOrder2 = new OnlineOrder([dish4], 'Bajza utca 5');
let newOrder3 = new OfflineOrder([dish2, dish3], 5);
let newOrder4 = new OfflineOrder([dish4, dish3], 10);
// call the restaurants receiving the orders
console.log(restaurant.receiveOrder(newOrder1));
console.log(restaurant.receiveOrder(newOrder2));
console.log(restaurant.receiveOrder(newOrder3));
console.log(restaurant.receiveOrder(newOrder4));