function handleTitleClick() {
    // const clickedClass = "clicked";
    h1.classList.toggle("clicked");
    // toggle이란 토큰이 존재한다면 토큰을 제거하고 존재하지 않는다면 토큰을 추가함
    // toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서
    // 만약 있다면 toggle이 clicked를 제거해줌
    // 만약 h1의 classList에 clicked가 존재하지 않는다면,
    // toggle은 clicked를 classList에 추가해줌
}

h1.addEventListener("click", handleTitleClick);

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) { 
        const clickedClass = "clicked";
        h1.classList.toggle(clickedClass);

        // // classList는 class들을 목록으로 작업할 수 있게 허용해줌
        // // element의 class 내용물을 조작하는 것을 허용
        // // classList가 clicked를 포함하고 있는지만을 확인
        h1.classList.remove(clickedClass);
        // // 만약 clickedClass가 h1의 classList에 포함되어 있다면,
        // // clickesClass를 제거해라
    }
    else {
        h1.classList.add(clickedClass)
        // // 만약 clickedClass가 h1의 classList에 포함되어 있지 않다면,
        // // clickesClass를 추가해라
    }
  } 
    
    h1.addEventListener("click", handleTitleClick);
