let list = document.getElementById("bookList");

let listOffFavouriteBooks = [
  {
    "title": "Herzog",
    "author": "Saul Bellow"
  },
  {
    "title": "Hundred Years of Solitude",
    "author": "Gabriel Garcia Marquez"
  },
  {
    "title": "The Big Sleep",
    "author": "Raymond Chandler"
  },
  {
    "title": "The Lord Off The Ring",
    "author": "JRR Tolkien"
  }
]
let createBook = (title, author) => {
  let book = document.createElement('li');
  let bookTitle = document.createElement('span');
  bookTitle.classList.add('bookTitle');
  bookTitle.innerText = title;
  let bookAuthor = document.createElement('span');
  bookAuthor.classList.add('bookAuthor');
  bookAuthor.innerText = author;
  let deleteButton = document.createElement('span');
  deleteButton.classList.add('deleteButton');
  deleteButton.innerHTML= 'Delete';
  book.appendChild(bookTitle);
  book.appendChild(bookAuthor);
  book.appendChild(deleteButton);
  return book;
}

let parent = document.getElementById("bookList");

let createBooks = (listOfBooks) => {

  listOfBooks.forEach((book, i) => {
    parent.appendChild(createBook(book.title, book.author));
  });

}

let removeBook = () => {
  const list = document.querySelector('#containerBooks ul');
  list.addEventListener('click', (e) =>{
    if(e.target.className == 'deleteButton') {
      const li = e.target.parentElement;
      list.removeChild(li);
    }
  });
}


let addBook = () => {
  const forms = document.forms;
  console.log(forms);
  const addForm = forms['addBook'];
  addForm.addEventListener('submit', (e => {
    e.preventDefault();
    const title = addForm.querySelector('input[name="title"]').value;
    const author = addForm.querySelector('input[name="author_name"]').value;
    parent.appendChild(createBook(title, author));
  }));
}

let hideAuthors = () => {
  const hideBox = document.querySelector('#hide');
  const authors = document.getElementsByClassName('bookAuthor');
  hideBox.addEventListener('change', (e) => {
    if(hideBox.checked){
      Array.from(authors).forEach(element => {
        element.style.display = 'none'
      });
    }else{
      Array.from(authors).forEach(element => {
        element.style.display = 'inline';
      });
    }
  })
}



createBooks(listOffFavouriteBooks);
removeBook();
addBook();
hideAuthors();