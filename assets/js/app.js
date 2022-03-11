// declare variables 
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("results-choice");

let userSelection
let compChoice
let results
/***
 * adding function for event listener when any button is clicked a selection is passed through and event
 * Mehtod for declaring function learnt on W3 schools 
 */


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

//hold all choices in a variable so the get result functions can generate a selection easier
 const CHOICES = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
    spock: 'spock',
    lizard: 'lizard'
}
/***
 * declare function for checking result from game choices
 */
const getResults = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
       return result.innerHTML = "This round is a tie!";
    } else if (playerChoice === CHOICES.rock) {
        if (computerChoice === CHOICES.lizard) {
            results = "Rock crushes Lizard! Player Wins";
        } else if (computerChoice === CHOICES.scissors) {
             results = "Rock crushes Scissors!! Player Wins";
        } else if (computerChoice === CHOICES.spock) {
             results = "Spock vaporizes Rock!! Computer Wins";
        } else {
            results = "Paper covers Rock! Computer Wins";
        }
    } else if (playerChoice === CHOICES.paper) {
        if (computerChoice === CHOICES.scissors) {
             results = "Scissors cuts Paper! Computer Wins";
        } else if (computerChoice === CHOICES.lizard) {
             results = "Lizard eats Paper! Computer Wins";
        } else if (computerChoice === CHOICES.spock) {
             results = "Paper disproves Spock! Player Wins";
        } else {
            results = "Paper covers Rock! Player Wins"
        }
    } else if (playerChoice === CHOICES.scissors) {
        if (computerChoice === CHOICES.rock) {
            results = "Rock crushes Scissors! Computer Wins";
        } else if (computerChoice === CHOICES.paper) {
            results = "Scissors cuts Paper! Player Wins";
        } else if (computerChoice === CHOICES.lizard) {
            results = "Scissors decapitates Lizard! Player Wins";
        } else {
            results = "Spock smashes Scissors";
        }
    } else if (playerChoice === CHOICES.lizard) {
        if (computerChoice === CHOICES.rock) {
            results = "Rock crushes Lizard! Computer Wins";
        } else if (computerChoice === CHOICES.paper) {
            results = "Lizard eats Paper! Player Wins";
        } else if (computerChoice === CHOICES.scissors) {
            results = "Scissors decapitates Lizard! Computer Wins";
        } else {
            results = "Lizard poisons Spock";
        }
    } else if (playerChoice === CHOICES.spock) {
        if (computerChoice === CHOICES.rock) {
            results = "Spock vaporizes Rock! Player Wins";
        } else if (computerChoice === CHOICES.paper) {
            results = "Paper disproves Spock! Computer Wins";
        } else if (computerChoice === CHOICES.scissors) {
            results = "Spock smashes Scissors! Player Wins";
        } else {
            results = "Lizard poisons Spock! Computer Wins";
        }
    }
    result.innerHTML = results;
    return results;
}

const getRandomProperty = () => {
    const keys = Object.keys(CHOICES);
    return CHOICES[keys[keys.length * Math.random() << 0]]
}

const onButtonClick = (id) => {
    const aiChoice = generateComputerChoice();
    playerChoice.innerHTML = id.toUpperCase();
    computerChoice.innerHTML = aiChoice.toUpperCase();
    getResults(id.toLowerCase(), aiChoice.toLowerCase());
}