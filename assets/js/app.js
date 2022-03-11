// declare variables 
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");
//using a query selector to get all possible choices from buttons
const choices = document.querySelectorAll("button");

let userSelection
let compChoice
/***
 * adding function for event listener when any button is clicked a selection is passed through and event
 * Mehtod for declaring function learnt on W3 schools 
 */
choices.forEach(choice => choice.addEventListener("click", (event) => {
    userSelection = event.target.id;
    playerChoice.innerHTML = userSelection;
    generateComputerChoice()
}))


/***
 * Declareing function for generating the computer choice and the difficulty
 */
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * choices.length);
    
    if(randomNumber === 1){
        compChoice = 'rock'
    }
    if(randomNumber === 2){
        compChoice = 'paper'
    }
    if(randomNumber === 3){
        compChoice = 'scissors'
    }
    if(randomNumber === 4){
        compChoice = 'lizard'
    }
    if(randomNumber === 5){
        compChoice = 'spock'
    }
    computerChoice.innerHTML = compChoice
}
