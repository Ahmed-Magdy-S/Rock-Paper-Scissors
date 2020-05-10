//Generate Random Integers between 0-2
function randomInteger() {
    return Math.floor(Math.random() * 3);
}
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"]
    return rockPaperScissors[randomInteger()].toLowerCase()
}
// Player & Computer Selection

let playerSelection;
let computerSelection;
let playerPoints = 0;
let computerPoints = 0;
//Play Round Function
function playRound(playerSelection, computerSelection) {
    let win;
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        win = `You win You Choose ${playerSelection} that beats ${computerSelection}`
        playerPoints++;
    }
    else if (playerSelection === computerSelection) {
        win = `Draw, Play Again You and Computer choose these: ${playerSelection} & ${computerSelection}`

    }
    else {
        win = `You Lose, Computer choose ${computerSelection} that beats ${playerSelection}`
        computerPoints++

    }

    return win;
}
//Function Validation
function validChoice(){
    let choice;
    let game;
    do {
        choice = prompt('Enter Your Chocie, Make sure you spell correctely', 'Rock, Paper, Scissors').toLowerCase()
        if (choice === 'rock' || choice === "paper" || choice === "scissors" ) {
            game = choice;
        }
    }
    while (choice !== game);
    return choice;
} 
//Game

function game(num) {

    for (let i = 0; i < num; i++) {
        playerSelection = validChoice()
        computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection))
    }
    if (playerPoints > computerPoints) {
        return alert(`You win, you get ${playerPoints} of ${num}`)
    }
    else if (playerPoints === computerPoints) {
        return alert(`Both You and Computer get ${playerPoints}: ${computerPoints}`)
    }
    else {
        return alert(`You lose, you get ${playerPoints} of ${num}`)

    }
}
//////////////////////////////////////////////////
