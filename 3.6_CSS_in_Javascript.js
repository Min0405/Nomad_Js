const h1  = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
        const currentColor = h1.style.color; // color의 현재값(상태)를 저장
        let newColor;
    if(h1.style.color === "blue") { // h1.style.color의 값을 검사해서 만약 blue라면 tomato
        newColor = "tomato";
    }
    else { // 그게 아니라면 blue
        newColor = "blue"; 
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
