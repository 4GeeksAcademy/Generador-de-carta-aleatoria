/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suitTop = document.querySelector(".suit");
  let numberElement = document.querySelector(".number");
  let suitBottom = document.querySelector(".suit-bottom");
  let regenerateButton = document.getElementById("regenerate-button");
  let automaticButton = document.getElementById("automatic");
  let stopButton = document.getElementById("stop");
  let interval;

  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  function getRandomNumber(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function updateCard() {
    let number = getRandomNumber(numbers);
    let suit = getRandomNumber(suits);

    suitTop.textContent = suit;
    numberElement.textContent = number;
    suitBottom.textContent = suit;

    if (suit === "♦" || suit === "♥") {
      suitTop.style.color = "red";
      suitBottom.style.color = "red";
    } else {
      suitTop.style.color = "";
      suitBottom.style.color = "";
    }
  }
  updateCard();

  regenerateButton.addEventListener("click", function() {
    updateCard();
  });

  automaticButton.addEventListener("click", function() {
    interval = setInterval(updateCard, 1000);
  });

  stopButton.addEventListener("click", function() {
    clearInterval(interval);
  });
};
