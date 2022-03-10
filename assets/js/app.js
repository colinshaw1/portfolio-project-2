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
    getComputerChoice()
}))


/***
 * Declareing function for generating the computer choice and the difficulty
 */
function getComputerChoice(){
    if (playerChoice === computerChoice) {
        return "Computer has chosen " + computerChoice + "this round is a tie!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "lizard") {
            return "Rock crushes Lizard! Player Wins";
        } else if (computerChoice === "scissors") {
            return "Rock crushes Scissors!! Player Wins";
        } else if (computerChoice === "spock") {
            return "Spock vaporizes Rock!! Computer Wins";
        } else {
            return "Paper covers Rock! Computer Wins";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice === "scissors") {
            return "Scissors cuts Paper! Computer Wins";
        } else if (computerChoice === "lizard") {
            return "Lizard eats Paper! Computer Wins";
        } else if (computerChoice === "spock") {
            return "Paper disproves Spock! Player Wins";
        } else {
            return "Paper covers Rock! Player Wins"
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Rock crushes Scissors! Computer Wins";
        } else if (computerChoice === "paper") {
            return "Scissors cuts Paper! Player Wins";
        } else if (computerChoice === "lizard") {
            return "Scissors decapitates Lizard! Player Wins";
        } else {
            return "Spock smashes Scissors";
        }
    } else if (playerChoice === "lizard") {
        if (computerChoice === "rock") {
            return "Rock crushes Lizard! Computer Wins";
        } else if (computerChoice === "paper") {
            return "Lizard eats Paper! Player Wins";
        } else if (computerChoice === "scissors") {
            return "Scissors decapitates Lizard! Computer Wins";
        } else {
            return "Lizard poisons Spock";
        }
    } else if (playerChoice === "spock") {
        if (computerChoice === "rock") {
            return "Spock vaporizes Rock! Player Wins";
        } else if (computerChoice === "paper") {
            return "Paper disproves Spock! Computer Wins";
        } else if (computerChoice === "scissors") {
            return "Spock smashes Scissors! Player Wins";
        } else {
            return "Lizard poisons Spock! Computer Wins";
        }
    }
    computerChoice.innerHTML = compChoice
}
