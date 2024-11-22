let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.3) {
        return "rock";
    } else if (computerChoice >= 0.3 && computerChoice < 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice:").toLocaleLowerCase();
    // i'm too lazy to write exeptions catching. input correct values pls
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}.`);
    if (humanChoice == computerChoice) {
        console.log("You tied! No scores for both of you.");
        return undefined;
    }
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                computerScore++;
                console.log("You lose! Paper beats rock.");
                break;
            }
            if (computerChoice == "scissors") {
                humanScore++;
                console.log("You win! Scissors beat paper.");
                break;
            }
        case "paper":
            if (computerChoice == "rock") {
                humanScore++;
                console.log("You win! Paper beats rock.");
                break;
            }
            if (computerChoice == "scissors") {
                computerScore++;
                console.log("You lose! Scissors beat paper.");
                break;
            }
        case "scissors":
            if (computerChoice == "rock") {
                computerScore++;
                console.log("You lose! Rock beats scissors.");
                break;
            }
            if (computerChoice == "paper") {
                humanScore++;
                console.log("You win! Scissors beat paper.");
                break;
            }
        default:
            console.log("Incorrect value.")
    }
}

function playGame() {
    let i = prompt("How many games?", 3);
    for (i; i--; i > 0) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`HUMAN ${humanScore} : COMPUTER ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("YOU WIN!");
    } else if (humanScore < computerScore) {
        console.log("YOU LOSE!");
    } else {
        console.log("YOU TIED!");
    }
}

playGame();