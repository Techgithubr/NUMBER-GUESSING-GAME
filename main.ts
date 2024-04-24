#!/usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number

// 2) user input for guessing number

// 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1 );
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "UserGuessedNumber",
        message: "Please Guess a number between 1 to 6 :",
    },
]);

if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed Right Number");  
} else {
    console.log("Sorry! You Guessed Wrong Number");
}
