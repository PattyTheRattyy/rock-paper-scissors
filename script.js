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

console.log(getComputerChoice());


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

console.log(getHumanChoice());
