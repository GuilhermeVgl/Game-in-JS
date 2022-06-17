"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMsg(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMsg("Número Invalido!");
  } else if (guess === secretNumber) {
    displayMsg("Número certo!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //Guess wrong answer
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMsg("Game Over!");
      document.querySelector(".score").textContent = 0;
    }

    if (guess > secretNumber) {
      displayMsg("Muito Alto!");
    } else if (guess < secretNumber) {
      displayMsg("Muito Baixo!");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Começar...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
