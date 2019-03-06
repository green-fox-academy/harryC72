
  //   Remove the king from the list.

  //   Fill the list based on the following list of objects.
  //   Only add the asteroids to the list.
  //   Each list item should have its category as a class and its content as text content. -->

    const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    },
  ];


let removed = document.getElementsByTagName('li');
removed[0].remove();

let parent = document.querySelector('ul.asteroids');

const addChild = function(className, textContent){
var h = document.createElement("li")              
var t = document.createTextNode(textContent);     
h.appendChild(t);
h.classList.add(className);
return h;
}

for(let i = 0; i < planetData.length; i++){
  parent.appendChild(addChild(planetData[i].category, planetData[i].content));
}

