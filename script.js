console.log("Hello World!");

/* Global Variables */

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    /* generate random number */
    let choice = Math.floor(Math.random()*3);

    // remove later
    console.log(choice);

    /* map random number to a choice */
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else if (choice === 2) {
        return "scissors";
    }

    /* this else statement is here incase of an error in the number generation */
    else {
        return null;
    }
}


function getHumanChoice() {
    /* get user input */
   let input = prompt("What is your choice?", "either rock, paper, or scissors");

   if (input.toLowerCase() === "rock") {
    return "rock"
   }
   else if (input.toLowerCase() === "paper") {
    return "paper"
   }
   else if (input.toLowerCase() === "scissors") {
    return "scissors"
   }

   /* if it doesnt match one of the options, prompt the user again */
   else {
    return getHumanChoice();
   }

}


function playRound(humanChoice, computerChoice) {

    // determine winner with conditionals based off the arguments
    // output result to console
    // increment score

    // human chooses rock
    if (humanChoice === "rock" && computerChoice === "rock") {
       console.log("Tie! You both chose Rock.");
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore += 1;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore += 1;
    }

    // human chooses paper    
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Tie! You both chose Paper.");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper.");
        computerScore += 1;
    }

    // human chooses scissors
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper.");
        humanScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Tie! You both chose Scissors.");
    }

    else {
        console.log("Error, wrong or no choice given.");
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);
