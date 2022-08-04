// 웹사이트에서 click event를 감지하는 법 (event를 listen하는 법)
// HTMl element를 가져와서, addEventListener function을 실행시켜주면 되는데, 이곳에 어떤

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}

// console.dir(title); // console 창에 뜨는 항목들이 전부 JavaScript object임
                    // JavaScript object 내부에 있는 property들의 값들을 변경할 수 있음
// console.log(title);
// title.innerText = "Hello";
// title.style.color   = "blue";
title.addEventListener("click", handleTitleClick);
// function을 바로 실행 시키고 싶으면 handleTitleClick() 이 형태지만
// 바로 실핼시키는게 아니라 유저가 title을 click할 경우에 javascript가 나 대신
// 실행버튼을 눌러주게 하는거니까 위와 같은 형태로 "click" 뒤에 쓰는거다
