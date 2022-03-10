// declare variables 
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");
//using a query selector to get all possible choices from buttons
const choices = document.querySelectorAll("button");

let userSelection

choices.forEach(choice => choice.addEventListener("click", (event) => {
    userSelection = event.target.id;
    playerChoice.innerHTML = userSelection;
}))