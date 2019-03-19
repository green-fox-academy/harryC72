let config = {
  "backendURL": "http://localhost:8080"
}

let button = document.getElementById("submitButton");
let url = document.getElementById('url');
let title = document.getElementById('title');
let postParent = document.querySelector('.redditPost');
let grandpa = document.querySelector('#postContainer');
let upArrow = document.querySelector('.upArrow');
let downArrow = document.querySelector('.downArrow');





button.addEventListener('click', (e) => {
  e.stopPropagation();

  e.preventDefault();

  const req = new XMLHttpRequest();

  req.open('POST', config.backendURL + "/reddit/posts");

  req.setRequestHeader('Content-Type', 'application/json');

  req.send(JSON.stringify(getFormData()));

  emptySet();

});


  let upvote = (id) => {
  
    console.log('id of uparrow', id);
    const http = new XMLHttpRequest();
    http.open("PUT", config.backendURL + `/reddit/posts/${id}/upvote`);
    http.send();

  };

  let downvote = (id) => {
  
    console.log('id of uparrow', id);
    const req = new XMLHttpRequest();
    req.open("PUT", config.backendURL + `/reddit/posts/${id}/downvote`);
    req.send();

  };

function getFormData() {
  let form = document.getElementById("postForm");


  let urlValue = url.value;
  let titleValue = title.value;


  return {

    url: urlValue,

    title: titleValue
  }
}

let emptySet = () => {
  url.value = '';
  title.value = '';
}

function populateReddit() {
  let data = '';
  let http = new XMLHttpRequest();
  http.open("GET", config.backendURL + '/reddit/posts', true);
  http.send();
  http.onload = () => {

    console.log(http.response);
    data = JSON.parse(http.response);
    console.log('data on readystate', data);

    for (let i = 0; i < data.length; i++) {
      grandpa.appendChild(createPost(data[i].score, data[i].post_id, data[i].title, data[i].url));
    }

  }
}


let createPost = (score, post_id, title, url) => {
  let redditPost = document.createElement('div');
  redditPost.classList.add('redditPost');
  redditPost.appendChild(createArrow(score, post_id));
  redditPost.appendChild(createContent(title, url));
  return redditPost;
}

let createArrow = (score, post_id) => {
  let arrowContainer = document.createElement('div');
  arrowContainer.classList.add('arrow');
  let upArrow = document.createElement('div');
  upArrow.classList.add('upArrow');
  upArrow.dataset.id = post_id;
  console.log('upArrow', upArrow.dataset.id);
  let scoreContent = document.createElement('div');
  scoreContent.classList.add("scoreContent");
  scoreContent.innerText = score;
  let downArrow = document.createElement('div');
  downArrow.classList.add('downArrow');
  downArrow.dataset.id = post_id;
  arrowContainer.appendChild(upArrow);
  arrowContainer.appendChild(scoreContent);
  arrowContainer.appendChild(downArrow);

  return arrowContainer;
}

let createContent = (title, url) => {
  let redditContent = document.createElement('div');
  redditContent.classList.add('redditContent');
  let titleContent = document.createElement('div');
  titleContent.classList.add('titleContent');
  titleContent.innerHTML = title;
  let urlContent = document.createElement('div');
  urlContent.classList.add('urlContent');
  urlContent.innerHTML = url;
  redditContent.appendChild(titleContent);
  redditContent.append(urlContent);

  return redditContent;
}

grandpa.addEventListener('click', (e) => {
  if(e.target.className == 'upArrow'){
    upvote(e.target.dataset.id);
    console.log('e', e.target.dataset.id);
  }else if(e.target.className == 'downArrow'){
    downvote(e.target.dataset.id);
  }
});

populateReddit();
upvote();