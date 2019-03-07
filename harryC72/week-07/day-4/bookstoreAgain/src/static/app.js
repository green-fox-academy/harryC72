

let parent = document.getElementById('booklistContainer');
parent = parent[0];

let http = new XMLHttpRequest();
http.open("GET", 'http://localhost:8080/booklistAPI',
true );
http.send();
http.onload = (e) => {
let data = JSON.parse(http.responseText);
console.log('data on readystate', data);
createIt(data);
}

let createBookTd = (data) => {
  let bookTd = document.createElement('td');
  bookTd.classList.add('bookInfo');
  bookTd.innerHTML = data;
  return bookTd;

}
let table = document.getElementsByTagName('table');
table = table[0];

let createIt = (data) =>{
  for(let i = 0; i < data.length; i++){
    let parent = document.createElement('tr');
    table.appendChild(parent);
    parent.appendChild(createBookTd(data[i].book_name));
    parent.appendChild(createBookTd(data[i].aut_name));
    parent.appendChild(createBookTd(data[i].cate_descrip));
    parent.appendChild(createBookTd(data[i].pub_name));
    parent.appendChild(createBookTd(data[i].book_price));
  }
} 

