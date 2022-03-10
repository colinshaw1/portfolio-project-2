//Declare variables
var playerSelection;
var computerSelection;

/***
 * Main function that will compare the player and computer selections within the game
 * An if statment will be used to go through all possible outcomes. 
 */

 function checkWinner(computerChoice) {
    if (playerSelection === computerChoice) {
        return "Computer has chosen " + computerSelection + "this round is a tie!";
    } else if (playerSelection === "rock") {
        if (computerChoice === "lizard") {
            return "Rock crushes Lizard! Player Wins";
        } else if (computerChoice === "scissors") {
            return "Rock crushes Scissors!! Player Wins";
        } else if (computerChoice === "spock") {
            return "Spock vaporizes Rock!! Computer Wins";
        } else {
            return "Paper covers Rock! Computer Wins";
        }
    } else if (playerSelection == "paper") {
        if (computerChoice === "scissors") {
            return "Scissors cuts Paper! Computer Wins";
        } else if (computerChoice === "lizard") {
            return "Lizard eats Paper! Computer Wins";
        } else if (computerChoice === "spock") {
            return "Paper disproves Spock! Player Wins";
        } else {
            return "Paper covers Rock! Player Wins"
        }
    } else if (playerSelection === "scissors") {
        if (computerChoice === "rock") {
            return "Rock crushes Scissors! Computer Wins";
        } else if (computerChoice === "paper") {
            return "Scissors cuts Paper! Player Wins";
        } else if (computerChoice === "lizard") {
            return "Scissors decapitates Lizard! Player Wins";
        } else {
            return "Spock smashes Scissors";
        }
    } else if (playerSelection === "lizard") {
        if (computerChoice === "rock") {
            return "Rock crushes Lizard! Computer Wins";
        } else if (computerChoice === "paper") {
            return "Lizard eats Paper! Player Wins";
        } else if (computerChoice === "scissors") {
            return "Scissors decapitates Lizard! Computer Wins";
        } else {
            return "Lizard poisons Spock";
        }
    } else if (playerSelection === "spock") {
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
}