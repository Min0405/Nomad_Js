const player = {
    name: "sunmin",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);
console.log(player);
player.fat = false; //const 안에 있는 것을 업데이트하는것은 가능
player.lastName = "potato"; //const에 존재하지 않는 것도 추가 가능
player.points = player.points + 15;
console.log(player.points);
console.log(player);
player.name

const playerName = "sunmin";
const playerPoints = 121212;
const playerHandsome = flase;
const playerFat = "little bit";

const player = ["sunmin", 1212, flase, "little bit"]; //각각이 뭔지 안써져 있어서 좋은 코드는 아님

player.name
player.points
player.hansome
