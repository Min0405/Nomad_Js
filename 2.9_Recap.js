function plus(a,b) { //function이 그 데이터를 받는 방법
    console.log(a + b);
}
plus(5, 5); //데이터를 function 안으로 보내는 방법

const player = {
    name: "sunmin",
    sayHello: function(otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

player.sayHello("lynn");
player.sayHello("sunmin");

function plus(firstNumber, seondNumber) {
    console.log(firstNumber + seondNumber);
}
function divide(a, b) {
    console.log(a / b);
}

plus(60, 8);
divide(98, 20);


//function 사용 시
function sayHello(nameOfPerson, age) {
   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

alert();
console.log("hello");

sayHello("sunmin", 19);
sayHello("dal", 23);
sayHello("nico", 21);

sayHello();
sayHello();
sayHello();
sayHello();


//funtion 없이 기본 인삿말 + 닉네임을 할 경우 -> 좋은 코드가 아님
console.log("Hello my name is sunmin");
console.log("Hello my name is nico");
console.log("Hello my name is dal");
console.log("Hello my name is flynn");
console.log("Hello my name is nana");
