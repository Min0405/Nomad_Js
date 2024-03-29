const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
    title.style.color = "blue";
}
function handleMouseEnter() {
    title.innerText = "Mouse is here!";
    console.log("Mouse is here");
}
function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
    console.log("Mouse is gone")
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
