
let http = new XMLHttpRequest();
http.open("GET",
'http://localhost:8080/index',
true );
http.send();
http.onload = () => {
data = JSON.parse(http.response).data;
console.log('data on readystate', data);
createContent(data);
}