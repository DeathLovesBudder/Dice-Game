var randomNumber1 = (Math.ceil(Math.random() * 6));
var randomNumber2 = (Math.ceil(Math.random() * 6));

document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
}
