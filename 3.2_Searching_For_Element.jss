// getElementByClassName는 array를 가져다줌
// getElementByTagName은 array를 가져다줌
// querySelector는 Css Selector를[ ex)h1:first-child, .hello h1, #hello ] 
// 사용하여 검색할 수 있음
// querySelector는 첫번째로 검색된 하나의 element만 반환해줌

const title = document.querySelectorAll(".hello h1");
// === const title = document.getElementById("hello");
//querySelector는 첫번째 element만 가져온다
//element를 모두 가져오고 싶으면 querySelectorAll을 사용해야한다

console.log(title);

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos)
