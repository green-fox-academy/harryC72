/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTX = parseInt(inputs[2]); // Thor's starting X position
const initialTY = parseInt(inputs[3]); // Thor's starting Y position

while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
  var moveX = initialTX;
  var moveY = initialTY;

  if (!(lightX == moveX && lightY == moveY)) {
    if (lightX > moveX && lightY == moveY) {
      print('E');
      printErr(moveX + moveY);
    }
    else if (lightX > moveX && lightY > moveY) {
      print('SE');
      printErr(moveX + moveY);
    }
    else if (lightX > moveX && lightY < moveY) {
      print('NE');
      printErr(moveX + moveY);
    }
    else if (lightX == moveX && lighY < moveY) {
      print('N');
      printErr(moveX + moveY);
    }
    else if (lightX < moveX && lightY < moveY) {
      print('NW');
      printErr(moveX + moveY);
    }
    else if (lightX < moveX && lightY == moveY) {
      print('W');
      printErr(moveX + moveY);
    }
    else if (lightX < moveX && lightY > moveY) {
      print('SW');
      printErr(moveX + moveY);
    }
    else if (lightX == moveX && lightY > moveY) {
      print('S');
      printErr(moveX + moveY);
    }
  }
}
    // Write an action using print()
    // To debug: printErr('Debug messages...');


    // A single line providing the move to be made: N NE E SE S SW W or NW
