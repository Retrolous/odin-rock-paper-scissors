// Take input from user

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const humanScoreDiv = document.querySelector("#humanScore");
const computerScoreDiv = document.querySelector("#computerScore")
const winnerDiv = document.querySelector("#winner");
const body = document.querySelector("body");

let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

// Generate selection

function getComputerChoice(){
    const CHOICES = ["rock", "paper", "scissors"]
    let choiceNumber = randomInt(0,2);
    return CHOICES[choiceNumber];
}

// Get random number
// Note to self - + 1 ensures that max acts as the boundary not the limit

function randomInt(min = 0, max){
    return Math.floor((Math.random() * ((max + 1) - min)) + min);
}

// Play 5 rounds and then determine winner
function playGame(humanClick){
    
    function playRound(humanChoice, computerChoice){
    
        if((humanChoice === computerChoice)){
            resultsDiv.textContent = "Draw! No-one's score increases!";
        }
        else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
            resultsDiv.textContent = `You won! Your ${humanChoice} beat ${computerChoice}`;
            humanScore++;
        }
        else {
            resultsDiv.textContent = `You lost! The computer's ${computerChoice} beat your ${humanChoice}`;
            computerScore++;
        }
    }

    if(roundNumber < 5){
        let humanSelection = humanClick;
        let computerSelection = getComputerChoice();

        console.log(`Human selected ${humanSelection}`);
        console.log(`Computer selected ${computerSelection}`);
        
        playRound(humanSelection, computerSelection);
   } 
   else {
        console.log(`The final score was ${humanScore} against ${computerScore}`);

        if(humanScore > computerScore){
            winnerDiv.textContent = "You won!";
        } else if(computerScore > humanScore){
            winnerDiv.textContent = "You lost. Try again";
        } else {
            winnerDiv.textContent = "A draw?!";
        }
        unreadyGame();
    }


    roundNumber++;
    humanScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;
}

function readyGame() {
    rockButton.addEventListener("click", () => {playGame("rock")});
    paperButton.addEventListener("click", () => {playGame("paper")});
    scissorsButton.addEventListener("click", () => {playGame("scissors")});
}

function unreadyGame(){

    rockButton.setAttribute("style", "display:none");
    paperButton.setAttribute("style", "display:none");
    scissorsButton.setAttribute("style", "display:none");

    let retryButton = document.createElement("button");
    retryButton.textContent = "Retry";
    body.appendChild(retryButton);
    
    retryButton.addEventListener("click", (e) => {
        e.target.remove();
        roundNumber = 1;
        humanScore = 0;
        computerScore = 0;
        rockButton.setAttribute("style", "display:inline");
        paperButton.setAttribute("style", "display:inline");
        scissorsButton.setAttribute("style", "display:inline");
        resultsDiv.textContent = "";
        winnerDiv.textContent = "";
        humanScoreDiv.textContent = "";
        computerScoreDiv.textContent = "";

    })
}

readyGame();
