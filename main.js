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
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    
        if(humanChoice === "scissors"){
            if(computerChoice === "rock"){
                console.log(`You lost! Your ${humanChoice} were beaten by ${computerChoice}`);
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log(`You won! Your ${humanChoice} beat ${computerChoice}`);
                humanScore++;
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
                humanScore++;
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
                humanScore++;
            } else {
                console.log("Draw! No-one's score increases!")
            }
        }
    }

    for(i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log(`Human selected ${humanSelection}`);
        console.log(`Computer selected ${computerSelection}`);
        
        playRound(humanSelection, computerSelection);
    }
    console.log(`The final score was ${humanScore} against ${computerScore}`);
    
    if(humanScore > computerScore){
        console.log("You won!");
    } else if(computerScore > humanScore){
        console.log("You lost. Try again");
    } else {
        console.log("A draw?!");
    }
}

playGame();


