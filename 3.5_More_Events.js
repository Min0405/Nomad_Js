const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}
function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize() { // 윈도우(페이지)의 크기를 변경함에 따라 배경색이 바뀜
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() { // 윈도우(페이지)를 ctlr+c 복사를 시도했을 경우 알림창
    alert("copier!");
}
function handleWindowOffline() { // 윈도우(페이지)에서 와이파이가 끊겼을 때 알림
    alert("SOS no WIFI");
}
function handleWindowOnline() { // 윈도우(페이지)에서 와이파이가 연결되었을 때 알림
    alert("ALL GOOOOD")
}

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
h1.addEventListener("click", handleTitleClick);
// h1.onclick = handleTitleClick;

h1.addEventListener("mouseenter", handleMouseEnter);
// h1.onmouseenter = handleMouseEnter;

h1.addEventListener("mouseleave", handleMouseLeave);
// h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
