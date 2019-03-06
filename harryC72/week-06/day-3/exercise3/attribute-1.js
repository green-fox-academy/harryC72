
  // Write the image's url to the console.
  // Replace the image with a picture of your favorite animal.
  // Make the link point to the Green Fox Academy website.
  // Disable the second button.
  // Replace its text with 'Don't click me!'.

  let urlImage = document.getElementsByTagName('img');
  urlImage = urlImage[0];
  console.log('image',urlImage);
  urlImage.src ='puma.jpg';
  urlImage.width = '300';

let homePage = document.getElementsByTagName('a');
console.log('homepage', homePage);
homePage[0].href = 'https://www.greenfoxacademy.com/en/home';
let secondButton = document.getElementsByClassName('this-one');
secondButton[0].disabled = true;
secondButton[0].innerHTML = `Don't click me!`;