
import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

let object1 = new Thing("Get milk");
let object2 = new Thing("Remove the obstacles");
let object3 = new Thing("Stand up");
let object4 = new Thing("Eat lunch");

fleet.add(object1);
fleet.add(object2);
fleet.add(object3);
fleet.add(object4);
object3.complete();
object4.complete();

fleet.print();
/* Crete a fleet of things to have this output:

1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch

// Hint: You have to create a `print()` method as well */
