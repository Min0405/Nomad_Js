//ㅡ#2.13ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const age = parseInt(prompt("How old are you?")); 
//prompt는 JS코드의 실행을 멈추게 함 + 어떤 스타일(CSS)도 적용할 수 없다
console.log(age);

// console.log(age, parseInt(age));

// console.log(typeof "15",  typeof parseInt("15"));
//-> parseInt = String을 number로 변환해줌
//String이면 수의 크기를 비교할 수 없기 때문에 number 형태로 바꿔주어야 함
//숫자가 아닌 문자를 입력하면 NaN(not a number)이 나오면서 숫자가 아님을 알려줌
15
//ㅡ#2.12ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const calculator = {12
//     plus: function(a, b) {
//         console.log("hello");
//         return a + b; //return하는 순간 function은 종료된다.
//         console.log("bye bye"); //그래서 그 아래에 있는 코드들은 실행되지 않음
//     },
//     minus: function(a, b) {
//         return a - b;
//     }, 
//     times: function(a,b) {
//         return a * b;sds
//     },
//     divide: function(a, b) {
//         return a / b; 
//     },
//     power: function(a, b) {
//         return a ** b; 
//     },
// };

// const plusResult = calculator.plus(2, 3);

//ㅡ#2.11ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const calculator = {
//     plus: function(a, b) {
//         return a + b;
//     },
//     minus: function(a, b) {
//         return a - b;
//     }, 
//     times: function(a,b) {
//         return a * b;
//     },
//     divide: function(a, b) {
//         return a / b; 
//     },
//     power: function(a, b) {
//         return a ** b; 
//     },
// };

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timeResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timeResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

// console.log(plusResult, minusResult, timeResult, divideResult, powerResult);

//  //어떤 값을 처리하고 그 결과를 return하기 위해 function을 사용
// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     ageOfForeigner + 2;
//     return "hello";
// }
// const krAge = calculateKrAge(age);

// console.log(krAge);

//ㅡ#2.10ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const calculator = {
//     plus: function(a, b) {
//         alert(a + b);
//     },
//     minus: function(a, b) {
//         alert(a - b);
//     }, 
//     times: function(a,b) {
//         alert(a * b);
//     },
//     divide: function(a, b) {
//         alert(a / b)
//     },
//     powerof: function(a, b) {
//         alert(a ** b)
//     },
// };
// calculator.add(5, 1);
// calculator.minus(5, 1);
// calculator.divide(5,2);
// calculator.powerof(2,10)


// //function 복습 (object, function 다루는 법, function에 data를 어떻게 보내는지)
// function plus(a, b) {
//     console.log(a + b);
// }
// plus(5, 10);
///
// function minusFive(a) {
//     console.log(a - 5);
// }
// minusFive(4);


// //object 복습
// const player = {
//     name: "Nico",
//     age: 98,
// }
// console.log(player);
// player.name = "nicolas";
// console.log(player);
// player.sexy = "soon"; 
// console.log(player, console);

//ㅡ#2.9ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const toBuy = ["potato", "tomato", "pizza"];

// console.log(toBuy[2]);
// console.log(toBuy);

// toBuy[2] = "water"; //toBuy의 2번 인덱스에 값을 설정
// console.log(toBuy);
// toBuy.push("meat");
// console.log(toBuy);

// const me = "sexy";
// const days = [1, 2, false, true, null, undefined, "text", me];

// const a = 5; //주로 const 사용하기 
// //true flase, 1 0, on off와 같이 두가지 옵셥만 있는것들을 boolean이라고 함
// //null variable 안에 아무것도 없다는 것을 확실히 하고 싶으면 null
// //undefine은 변수에 값을 부여하지 않은 상태
// let isNicoFat = true; //let은 variable 업데이트 가능 //var은 절대 사용 X

// isNicoFat = false; //variable을 만드는게 아니라 업데이트 하는 것이기 때문에 let을 붙일 필요 X
// console.log(a);

//ㅡ#2.8ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// function plus(a,b) { //function이 그 데이터를 받는 방법
//     console.log(a + b);
// }
// plus(5, 5); //데이터를 function 안으로 보내는 방법

// const player = {
//     name: "sunmin",
//     sayHello: function(otherPersonsName) {
//         console.log("hello " + otherPersonsName + " nice to meet you");
//     },
// };

// player.sayHello("lynn");
// player.sayHello("sunmin");

// function plus(firstNumber, seondNumber) {
//     console.log(firstNumber + seondNumber);
// }
// function divide(a, b) {
//     console.log(a / b);
// }

// plus(60, 8);
// divide(98, 20);


// //function 사용 시
// function sayHello(nameOfPerson, age) {
//    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// alert();
// console.log("hello");

// sayHello("sunmin", 19);
// sayHello("dal", 23);
// sayHello("nico", 21);

// sayHello();
// sayHello();
// sayHello();
// sayHello();


// //funtion 없이 기본 인삿말 + 닉네임을 할 경우 -> 좋은 코드가 아님
// console.log("Hello my name is sunmin");
// console.log("Hello my name is nico");
// console.log("Hello my name is dal");
// console.log("Hello my name is flynn");
// console.log("Hello my name is nana");

//ㅡ#2.7ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const player = {
//     name: "sunmin",
//     points: 10,
//     fat: true,
// };

// console.log(player);
// console.log(player.name);
// console.log(player["name"]);
// console.log(player);
// player.fat = false; //const 안에 있는 것을 업데이트하는것은 가능
// player.lastName = "potato"; //const에 존재하지 않는 것도 추가 가능
// player.points = player.points + 15;
// console.log(player.points);
// console.log(player);
// player.name

// const playerName = "sunmin";
// const playerPoints = 121212;
// const playerHandsome = flase;
// const playerFat = "little bit";

// const player = ["sunmin", 1212, flase, "little bit"]; //각각이 뭔지 안써져 있어서 좋은 코드는 아님

// player.name
// player.points
// player.hansome


//ㅡ#2.6ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const toBuy = ["potato", "tomato", "pizza"];
// console.log(toBuy[2]);

//ㅡ#2.5ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"]; 

// Get Item from Array
// console.log(daysOfWeek);

// Add one more day to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek);

//ㅡ#2.4ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const amIFat = null;
// let something;
// console.log(something, amIFat);

//ㅡ#2.3ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const a = 5;
// const b = 2;

// let myName = "sunmin"; //variable 업데이트 가능

// console.log(a+b);
// console.log(a*b);
// console.log(a/b); 
// console.log("hello " + myName)
 
// myName = "SunMin"; //업데이트 함
// console.log("your new name is " + myName);