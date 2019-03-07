let images = document.getElementsByClassName('image');

let imageArray = [
  { name: 'shark1.jpg' },
  { name: 'shark2.jpg' },
  { name: 'shark3.jpg' },
  { name: 'shark4.jpg' },
  { name: 'shark5.jpg' },
  { name: 'shark6.jpg' },
  { name: 'shark7.jpg' }
];

let parent = document.getElementsByClassName('thumbContainer');
parent = parent[0];


var index = 0;
var index2 = undefined;


let showBigImage = (num) => {
  index = num;
  displayImage(index);
}

let displayImage = (num) => {

  let image = document.getElementsByClassName('image');
  image = image[0];
  image.src = 'static/images/' + imageArray[num].name;
  console.log(image);
}


let createThumbnail = (num, array) => {
 
  let src = 'static/images/' + array[num].name;
  const thumbNail = document.createElement('img');
  thumbNail.classList.add('thumbNail');
  thumbNail.setAttribute('src', src);
  thumbNail.setAttribute('onclick', `showBigImage(${num})`);
  return thumbNail;
}

let createThumbnails = (numOfUnits, whichNum, array) => {
  index2 = whichNum;
  numOfUnits = numOfUnits - 1;
  for (i = numOfUnits; i >= 0; i--) {
    parent.appendChild(createThumbnail(whichNum, array));
    whichNum++;
  }
}

let changeThumbnails = (whichNum, array) =>{
  let images = document.getElementsByClassName('thumbNail');
  let counter = index2;
  whichNum = numChecker(whichNum, array);
  index2 = whichNum;
  for(let i = 0; i < array.length; i++){
    whichNum = numChecker(whichNum, array);
    counter = numChecker(counter, images);
    images[counter].src = 'static/images/' + array[whichNum].name;
    images[counter].setAttribute('onclick', `showBigImage(${whichNum})`);
    console.log(counter, whichNum);
    console.log('image', images[counter]);
    whichNum++;
    counter++;
  }

}

let numChecker = (num, array) => {
  if (num > array.length - 1) {
    return num = 0;
  } else if (num < 0) {
   return num = array.length - 1;
  }else{
     return num;
  }
}

let moveThumbNailsForward = () =>{
  n = index2+1;
  changeThumbnails(n, imageArray);
}

let moveThumbNailsBackwards = () => {
  n = index2-1;
  changeThumbnails(n, imageArray);
}


let goBack = (n) => {
  console.log('index', index);
  n = index - n;
  n = numChecker(n, imageArray);
  console.log('n', n);
  displayImage(n);
  index = n;
}

let goForward = (n) => {
  n = index + 1;
  n = numChecker(n, imageArray);
  displayImage(n);
  index = n;
}


displayImage(0, imageArray);
createThumbnails(7, 0, imageArray);

let sharkContainer = document.getElementById('sharkContainer');
let createShark = (content) => {
let sharkDiv = document.createElement('div');
sharkDiv.classList.add('sharkInfo');
sharkDiv.innerText = `name: ${content}`;
}










