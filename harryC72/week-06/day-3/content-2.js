

  //  1) replace the list items' content with items from this list:
  //  ['apple', 'banana', 'cat', 'dog']
  //  2) change the <ul> element's background color to 'limegreen'
  //    - use css class to change the color instead of the style property

  let content = document.getElementsByTagName('UL');
  console.log(content);
  
  let newContent = ['apple', 'banana', 'cat', 'dog'];

  for(let i = 0; i < content.length; i++){
      content[i].innerHTML = newContent[i];
  }