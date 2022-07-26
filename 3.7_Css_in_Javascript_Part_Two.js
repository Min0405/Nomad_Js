const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked nice-font"; // string을 변수에 저장하여 실수 줄이기
    if(h1.className === clickedClass) { // (=)부호가 3개라면 className이 active와 같은지 확인
        h1.className = ""; // (=)부호가 한개라면 해당 값을 ("")이 안의 값으로 변경 
    }
    else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
