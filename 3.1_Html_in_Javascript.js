// //HTML코드와 HTML element를 Javascript로 접근하는 방법
//getElementById란 함수를 통해 id로 element를 가져올 수 있음
//JavaScript에서 Html을 가져올 수 있는 다른 방법
const title = document.getElementById("title");

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);
// console.log(title)
