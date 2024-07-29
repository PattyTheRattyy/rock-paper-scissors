console.log("Hello World!");


/* randomly return one of the following string values: “rock”, “paper” or “scissors”. 

Hint: The Math.random method returns a random number that’s greater than or equal to 
0 and less than 1. Think about how you can use this to conditionally return one of the 
multiple choices.

*/

function getComputerChoice() {

    /* generate random number */
    let choice = Math.floor(Math.random()*3);

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
