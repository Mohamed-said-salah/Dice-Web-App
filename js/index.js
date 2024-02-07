const min = 1;
const max = 6;

function getRandomFromInterval(min, max) {
    return min + Math.round(Math.random() * (max - min));
}

let player1 = getRandomFromInterval(min, max);
let player2 = getRandomFromInterval(min, max);

document
    .querySelector("#player-1-img")
    .setAttribute("src", "images/" + "dice" + player1 + ".png");

document
    .querySelector("#player-1-img")
    .setAttribute("alt", "images/" + "dice" + player1 + ".png");

document
    .querySelector("#player-2-img")
    .setAttribute("src", "images/" + "dice" + player2 + ".png");

document
    .querySelector("#player-2-img")
    .setAttribute("alt", "images/" + "dice" + player2 + ".png");

if (player1 > player2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (player1 < player2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
