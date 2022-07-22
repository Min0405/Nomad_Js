const age = parseInt(prompt("How old are you"));

if(isNaN(age) || age < 0) { 
    // isNaN은 boolean을 반환 / age의 value를 확인 / Or,And
    console.log("Please write a real positive number");
}
else if(age < 18) {
    console.log("You are too young");
}
else if(age >= 18 && age <= 50) {
    console.log("You can drink");
}
else if(age > 50 && age <= 80) {
    console.log("You should exercise");
}
else if(age === 100) {  // !== 같다 / === 아니다
    // 아래줄에 위치할 경우 80세 이상이면 위에 명령이 실행되기 때문에 
    // 이 else if문은 실행되지 않는다
    console.log("wow you are wise");
}
else if(age > 80) {
    console.log("You can do whatever you want");
}

// if((a && b) || (c && d) || (x || w)) {
     
// }
