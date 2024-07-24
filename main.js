console.log("We ball");

// Set score to 0, for user and computer
let humanScore = 0;
let computerScore = 0;
let gameOver = false;
const CHOICES = ["rock", "paper", "scissors"]

// Take input from user

function getHumanChoice(userChoice){

    let choiceMade = false;

    while(!choiceMade){
    let userChoice = prompt("What will be your move? \n(Rock, Paper or Scissors) \n").toLowerCase();
    switch (userChoice){
        case "scissors":
            return "scissors";
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        default:
            break;
    }
    alert("You made an invalid choice!")
    }
}

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

function playRound(humanChoice, computerChoice){
    
    if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            console.log(`You lost! Your ${humanChoice} were beaten by ${computerChoice}`);
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log(`You won! Your ${humanChoice} beat ${computerChoice}`);
            humanScore++
        } else {
            console.log("Draw! No-one's score increases!")
        }
    }
    else if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            console.log(`You lost! Your ${humanChoice} was beaten by ${computerChoice}`);
            computerScore++;
        } else if(computerChoice === "scissors") {
            console.log(`You won! Your ${humanChoice} beat ${computerChoice}`);
            humanScore++
        } else {
            console.log("Draw! No-one's score increases!")
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
            console.log(`You lost! Your ${humanChoice} was beaten by ${computerChoice}`);
            computerScore++;
        } else if(computerChoice === "rock"){
            console.log(`You won! Your ${humanChoice} beat ${computerChoice}`);
            humanScore++
        } else {
            console.log("Draw! No-one's score increases!")
        }
    }
}

// Determine winner
// Add score to winner
// If score is 3 for either, game over

console.log(randomInt(0, 2))


let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

console.log(`Human selected ${humanSelection}`);
console.log(`Computer selected ${computerSelection}`);
playRound(humanSelection, computerSelection);