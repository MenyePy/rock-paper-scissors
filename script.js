function getComputerChoice(){
    let list = ["rock", "paper", "scissors"];
    return list[Math.floor(Math.random()*3)]; 
}

function playRound (playerselection, computerselection){
    playersel = playerselection.toLowerCase();
    win = false;
    if (playersel == "rock") {
        if (computerselection == "paper"){
            console.log("You Lose. Paper Beats Rock.");
        } else if (computerselection == "rock") {
            console.log("It's a tie");
        } else {
            console.log("You WIN! Rock smashes scissors!");
            win = true;
        }
    }
    if (playersel == "paper") {
        if (computerselection == "scissors"){
            console.log("You Lose. Scissors Beats Paper.");
        } else if (computerselection == "paper") {
            console.log("It's a tie");
        } else {
            console.log("You WIN! Paper covers rock!");
            win = true;
        }
    }
    if (playersel == "scissors") {
        if (computerselection == "rock"){
            console.log("You Lose. Rock smashes scissors.");
        } else if (computerselection == "scissors") {
            console.log("It's a tie");
        } else {
            console.log("You WIN! Scissors shred paper!");
            win = true;
        }
    }

    if (win) {
        return 1;
    } else {
        return 0;
    }
}

function game(){
    let score = 0;
    for (let i = 1; i < 6; i++){
        console.log("Round " + i + "!");
        choice = prompt("Rock, Paper, or Scissors?");
        win = playRound(choice, getComputerChoice());
        score += win;
    }

    console.log("You won " + score + " out of 5.")
}

game();