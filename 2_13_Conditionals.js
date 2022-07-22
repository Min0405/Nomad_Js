const age = prompt("How old are you?"); 
// prompt는 JS코드의 실행을 멈추게 함 + 어떤 스타일(CSS)도 적용할 수 없다

const age = parseInt(prompt("How old are you?")); 
console.log(age);

console.log(age, parseInt(age));

console.log(typeof "15",  typeof parseInt("15"));
// -> parseInt = String을 number로 변환해줌
// String이면 수의 크기를 비교할 수 없기 때문에 number 형태로 바꿔주어야 함
// 숫자가 아닌 문자를 입력하면 NaN(not a number)이 나오면서 숫자가 아님을 알려줌
