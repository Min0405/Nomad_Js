const calculator = {
    plus: function(a, b) {
        console.log("hello");
        return a + b; //return하는 순간 function은 종료된다.
        console.log("bye bye"); //그래서 그 아래에 있는 코드들은 실행되지 않음
    },
    minus: function(a, b) {
        return a - b;
    }, 
    times: function(a,b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b; 
    },
    power: function(a, b) {
        return a ** b; 
    },
};

const plusResult = calculator.plus(2, 3);
