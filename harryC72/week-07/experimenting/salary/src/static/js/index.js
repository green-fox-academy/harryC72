let name = document.getElementById('name');
let title = document.getElementById('title');
let salary = document.getElementById('salary');
let department = document.getElementById('department');
let search = document.getElementById('search');
let parent = document.querySelector('#resultBox');
let data = '';


window.addEventListener('load', function () {
  initSubmitButton();
  inititSearchButton();
});

function initSubmitButton() {
  const button = document.getElementById('submitEmployee');
  if (typeof button !== 'undefined') {
    button.onclick = function (event) {
      event.stopPropagation();
      event.preventDefault();
      postFormData();
      clearFields();
    };
  }
}

function inititSearchButton() {
  const search = document.getElementById('searchButton');
  search.onclick = function (event) {
    event.stopPropagation();
    event.preventDefault();
    getData();
    clearField();
  }
}

function clearField() {
  search.value = '';
}

function clearFields() {
  name.value = '';
  title.value = '';
  salary.value = '';
  department.value = '';
}

function createContent(data) {
  let htmlContent = '';
  data.forEach(element => {
  htmlContent += `<div>Result: $${element.salary}</div>`
  });

  parent.insertAdjacentHTML('beforeend', htmlContent);
}

function getData() {
  let http = new XMLHttpRequest();
  let rawString = getSearch();
  let name = rawString.split(' ').join('%20');
  http.open('get', '/' + name, true);
  http.send();
  http.onload = () => {
    data = JSON.parse(http.response);
    console.log('data on readystate', data);
    createContent(data);
  }
}

function getSearch() {
  let returnString = search.value;
  return returnString;
}

function postFormData() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', processResponse);
  req.open('POST', 'http://localhost:8080/post');
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify(getFormData()));
}

function getFormData() {
  return {
    name: document.getElementById('name').value,
    title: document.getElementById('title').value,
    salary: document.getElementById('salary').value,
    department: document.getElementById('department').value,
  }
}

function processResponse(data) {
  console.log(data);
}