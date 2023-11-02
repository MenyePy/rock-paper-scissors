const resultDiv = document.querySelector('.result');
const userScore = document.querySelector('.user');
const computerScore = document.querySelector('.computer');
const stat = document.querySelector('.status');
let user = 0;
let computer = 0;
let winScore = 5;
let play = true;

function getComputerChoice(){
    let list = ["rock", "paper", "scissors"];
    return list[Math.floor(Math.random()*3)]; 
}

function restart(){
    play = true;
    user = 0;
    computer = 0;
}

function playRound (playerselection, computerselection){
    playersel = playerselection.toLowerCase();
    win = 0;
    if (playersel == "rock") {
        if (computerselection == "paper"){
            resultDiv.innerHTML = "<div style='color:red'>Lose.</div> Paper covers Rock.";
            win = -1;
        } else if (computerselection == "rock") {
            resultDiv.innerHTML = "<div style='color:grey'>Tie</div> It's a tie";
        } else {
            resultDiv.innerHTML = "<div style='color:green'>WIN!</div> Rock smashes scissors!";
            win = 1;
        }
    }
    if (playersel == "paper") {
        if (computerselection == "scissors"){
            resultDiv.innerHTML = "<div style='color:red'>Lose.</div> Scissors shreds Paper.";
            win = -1;
        } else if (computerselection == "paper") {
            resultDiv.innerHTML = "<div style='color:grey'>Tie</div> It's a tie";
        } else {
            resultDiv.innerHTML = "<div style='color:green'>WIN!</div> Paper covers rock!";
            win = 1;
        }
    }
    if (playersel == "scissors") {
        if (computerselection == "rock"){
            resultDiv.innerHTML = "<div style='color:red'>Lose.</div> Rock smashes scissors.";
            win = -1;
        } else if (computerselection == "scissors") {
            resultDiv.innerHTML = "<div style='color:grey'>Tie</div> It's a tie";
        } else {
            resultDiv.innerHTML = "<div style='color:green'>WIN!</div> Scissors shred paper!";
            win = 1;
        }
    }
    stat.textContent = "Game in progress";
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
        stat.textContent = "You Win! Game over.";
        play = false;
    } else if (computer == winScore) {
        stat.textContent = "You Lose. Game over.";
        play = false;
    }
}

const rockBtn = document.querySelector('.rock');
const scissorBtn = document.querySelector('.scissors');
const paperBtn = document.querySelector('.paper');
const restartBtn = document.querySelector('.restartBtn');

rockBtn.addEventListener('click', () => {
    if (play){
        playRound("rock", getComputerChoice());
    } else {
        alert ("Click the restart button to play again");
    }
});

scissorBtn.addEventListener('click', () => {
    if (play){
        playRound("scissors", getComputerChoice());
    } else {
        alert ("Click the restart button to play again");
    }
});

paperBtn.addEventListener('click', () => {
    if (play){
        playRound("paper", getComputerChoice());
    } else {
        alert ("Click the restart button to play again");
    }
});

restartBtn.addEventListener('click', () => {
    restart();
    userScore.firstElementChild.textContent = user;
    computerScore.firstElementChild.textContent = computer;
    resultDiv.textContent = "Click to play!";
    stat.textContent = "Not playing"
});