const resultDiv = document.querySelector('.result');
const userScore = document.querySelector('.user');
const computerScore = document.querySelector('.computer');
const stat = document.querySelector('.status');
let user = 0;
let computer = 0;
let winScore = 5;

function getComputerChoice(){
    let list = ["rock", "paper", "scissors"];
    return list[Math.floor(Math.random()*3)]; 
}

function playRound (playerselection, computerselection){
    playersel = playerselection.toLowerCase();
    win = 0;
    if (playersel == "rock") {
        if (computerselection == "paper"){
            resultDiv.textContent = "You Lose. Paper covers Rock.";
            win = -1;
        } else if (computerselection == "rock") {
            resultDiv.textContent = "It's a tie";
        } else {
            resultDiv.textContent = "You WIN! Rock smashes scissors!";
            win = 1;
        }
    }
    if (playersel == "paper") {
        if (computerselection == "scissors"){
            resultDiv.textContent = "You Lose. Scissors shreds Paper.";
            win = -1;
        } else if (computerselection == "paper") {
            resultDiv.textContent = "It's a tie";
        } else {
            resultDiv.textContent = "You WIN! Paper covers rock!";
            win = 1;
        }
    }
    if (playersel == "scissors") {
        if (computerselection == "rock"){
            resultDiv.textContent = "You Lose. Rock smashes scissors.";
            win = -1;
        } else if (computerselection == "scissors") {
            resultDiv.textContent = "It's a tie";
        } else {
            resultDiv.textContent = "You WIN! Scissors shred paper!";
            win = 1;
        }
    }
    updateScores(win);
    game();
}

function updateScores(w){
    if (w == 1){
        user++;
    } else if (w == -1) {
        computer++;
    }
    userScore.firstElementChild.textContent = user;
    computerScore.firstElementChild.textContent = computer;
}

function game(){
    if (user == winScore){
        stat.textContent = "The user WINS!";
        user = 0;
        computer = 0;
    } else if (computer == winScore) {
        stat.textContent = "The computer WINS!";
        user = 0;
        computer = 0;
    } else {
        if (user > 0 || computer > 0) {
            stat.textContent = "Game in progress";
        } else {
            stat.textContent = "Not playing.";
        }
    }
}

const rockBtn = document.querySelector('.rock');
const scissorBtn = document.querySelector('.scissors');
const paperBtn = document.querySelector('.paper');

rockBtn.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});

scissorBtn.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});