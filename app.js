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
let drawPoints = 0;
let rounds = 0
//Play Round Function
function playRound(playerSelection, computerSelection) {
    let win;
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        win = `You win`
        playerPoints++;
        document.querySelector(".show-board__result").style.color = "#16b122";
    } else if (playerSelection === computerSelection) {
        win = `Draw`
        drawPoints++;
        document.querySelector(".show-board__result").style.color = "rgb(210, 194, 2)";
    } else {
        win = `Computer win`;
        computerPoints++;
        document.querySelector(".show-board__result").style.color = "#be3144";
    }
    document.querySelector(".computer-board__hand-p").textContent = computerSelection
    rounds++;
    return win;
}
//Add DOM Manipulation
let btnChoices = document.querySelectorAll('.show-board__btn')

btnChoices.forEach(function (btn) {
    btn.addEventListener("click", function () {
        document.querySelector(".show-board__result").textContent = playRound(btn.value, computerPlay())
        document.querySelector(".player-board__score").textContent = playerPoints;
        document.querySelector(".computer-board__score").textContent = computerPoints;
        document.querySelector(".draw-board__score").textContent = drawPoints;
        document.querySelector(".heading-round span").textContent = rounds;
    })
})

//Reset Button 
document.querySelector('.show-board__btn--reset').addEventListener('click', function () {
    document.querySelector(".show-board__result").textContent = '';
    document.querySelector(".player-board__score").textContent = 0;
    document.querySelector(".computer-board__score").textContent = 0;
    document.querySelector(".draw-board__score").textContent = 0;
    document.querySelector(".heading-round span").textContent = 0;
    document.querySelector(".computer-board__hand-p").textContent = '';
    playerPoints = 0;
    computerPoints = 0;
    drawPoints = 0;
    rounds = 0
})