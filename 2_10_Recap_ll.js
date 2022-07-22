const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    }, 
    divide: function(a, b) {
        console.log(a / b)
    },
    powerof: function(a, b) {
        console.log(a ** b)
    }
};
calculator.add(5, 1);
calculator.minus(5, 1);
calculator.divide(5,2);
calculator.powerof(2,10)

//finction 복습 (object, function 다루는 법, function에 data를 어떻게 보내는지)
function plus(a, b) {
    console.log(a + b);
}
plus(5, 10);

function minusFive(a) {
    console.log(a - 5);
}
minusFive(4);


//object 복습
const player = {
    name: "Nico",
    age: 98,
}
console.log(player);
player.name = "nicolas";
console.log(player);
player.sexy = "soon"; 
console.log(player, console);
