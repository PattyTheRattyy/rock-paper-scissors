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
    const resultDiv = document.querySelector("#results");

    // determine winner with conditionals based off the arguments
    // output result to console
    // increment score

    // human chooses rock
    if (humanChoice === "rock" && computerChoice === "rock") {
       resultDiv.textContent = "Tie! You both chose Rock.";
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        resultDiv.textContent = "You lose! Paper beats Rock.";
        computerScore += 1;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultDiv.textContent = "You win! Rock beats Scissors.";
        humanScore += 1;
    }

    // human chooses paper    
    else if (humanChoice === "paper" && computerChoice === "rock") {
        resultDiv.textContent = "You win! Paper beats Rock.";
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        resultDiv.textContent = "Tie! You both chose Paper.";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        resultDiv.textContent = "You lose! Scissors beat Paper.";
        computerScore += 1;
    }

    // human chooses scissors
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        resultDiv.textContent = "You lose! Rock beats scissors.";
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultDiv.textContent = "You win! Scissors beat Paper.";
        humanScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        resultDiv.textContent = "Tie! You both chose Scissors.";
    }

    else {
        console.log("Error, wrong or no choice given.");
    }
}


// function that plays 5 rounds of rock paper scissors
// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();

//         playRound(humanChoice, computerChoice);
//     }
// }



const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    playRound(rockBtn.id, getComputerChoice());
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    playRound(paperBtn.id, getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
    playRound(scissorsBtn.id, getComputerChoice());
});

// playGame();
