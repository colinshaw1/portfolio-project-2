// declare variables 
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("results");
//using a query selector to get all possible choices from buttons
const choices = document.querySelectorAll("button");

let userSelection
let compChoice
let results
/***
 * adding function for event listener when any button is clicked a selection is passed through and event
 * Mehtod for declaring function learnt on W3 schools 
 */
choices.forEach(choice => choice.addEventListener("click", (event) => {
    userSelection = event.target.id;
    playerChoice.innerHTML = userSelection.toUpperCase();
    generateComputerChoice()
    getResults()
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
    computerChoice.innerHTML = compChoice.toUpperCase();
}

/***
 * declare function for checking result from game choices
 */
function getResults() {
    
    if (playerChoice === computerChoice) {
       return results = "This round is a tie!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "lizard") {
            return results = "Rock crushes Lizard! Player Wins";
        } else if (computerChoice === "scissors") {
            return results = "Rock crushes Scissors!! Player Wins";
        } else if (computerChoice === "spock") {
            return results = "Spock vaporizes Rock!! Computer Wins";
        } else {
            return results = "Paper covers Rock! Computer Wins";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice === "scissors") {
            return results = "Scissors cuts Paper! Computer Wins";
        } else if (computerChoice === "lizard") {
            return results = "Lizard eats Paper! Computer Wins";
        } else if (computerChoice === "spock") {
            return results = "Paper disproves Spock! Player Wins";
        } else {
            results = "Paper covers Rock! Player Wins"
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return results = "Rock crushes Scissors! Computer Wins";
        } else if (computerChoice === "paper") {
            results = "Scissors cuts Paper! Player Wins";
        } else if (computerChoice === "lizard") {
            return results = "Scissors decapitates Lizard! Player Wins";
        } else {
            return results = "Spock smashes Scissors";
        }
    } else if (playerChoice === "lizard") {
        if (computerChoice === "rock") {
            return results = "Rock crushes Lizard! Computer Wins";
        } else if (computerChoice === "paper") {
            return results = "Lizard eats Paper! Player Wins";
        } else if (computerChoice === "scissors") {
            return results = "Scissors decapitates Lizard! Computer Wins";
        } else {
            return results = "Lizard poisons Spock";
        }
    } else if (playerChoice === "spock") {
        if (computerChoice === "rock") {
            return results = "Spock vaporizes Rock! Player Wins";
        } else if (computerChoice === "paper") {
            return results = "Paper disproves Spock! Computer Wins";
        } else if (computerChoice === "scissors") {
            return results = "Spock smashes Scissors! Player Wins";
        } else {
            return results = "Lizard poisons Spock! Computer Wins";
        }
    }
    result.innerHTML = results
}