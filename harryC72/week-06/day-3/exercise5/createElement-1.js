
//  Add an item that says 'The Green Fox' to the asteroid list.

  //  Add an item that says 'The Lamplighter' to the asteroid list.

  //  Add a heading saying 'I can add elements to the DOM!' to the .container.

  //  Add an image, any image, to the container.
  
  const parent = document.querySelector('ul.asteroids');
  const newChild = document.createElement('li');
  newChild.id = 'green-fox';
  newChild.textContent = 'The Green Fox';
  parent.appendChild(newChild);

var node = document.createElement("LI");                
var textnode = document.createTextNode("The Lamplighter");       
node.appendChild(textnode);                              
document.getElementsByClassName("asteroids")[0].appendChild(node); 

var heading = document.createElement('h1');
var textHeading = document.createTextNode('I can add elements to the DOM');
heading.appendChild(textHeading);

var headPosition = document.getElementsByTagName('body')[0];
headPosition.insertBefore(heading, parent);
  
var image = document.createElement('img');
image.src = 'batman.jpg';
image.setAttribute('width', '300');
document.body.appendChild(image);

 