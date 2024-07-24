console.log("We ball");

// Set score to 0, for user and computer
let userScore = 0;
let computerScore = 0;
let gameOver = false;
const CHOICES = ["rock", "paper", "scissors"]

// Take input from user

// Generate selection

function getComputerChoice(){
    let choiceNumber = randomInt(0,2);
    return CHOICES[choiceNumber]
}

// Get random number
// Note to self - + 1 ensures that max acts as the boundary not the limit

function randomInt(min = 0, max){
    return Math.floor((Math.random() * ((max + 1) - min)) + min)
}
// Compare input with selection
// Determine winner
// Add score to winner
// If score is 3 for either, game over

console.log(randomInt(0, 2))
console.log(getComputerChoice());