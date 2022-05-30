function computerPlay(){
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function playRound(computerSelection, playerSelection){
    if(computerSelection == playerSelection){
        return 1;
    } else if ((computerSelection == "ROCK" && playerSelection == "PAPER") || 
        (computerSelection == "PAPER" && playerSelection == "SCISSORS") || 
        (computerSelection == "SCISSORS" && playerSelection == "ROCK")){
            return 0;
    } else  return 2;
}

function game(){
    for(let i = 0; i < 5; i++){
        let userSelection = prompt("ROCK, PAPER, SCISSORS?").toUpperCase();
        let computerSelection = computerPlay().toUpperCase();
        let result = playRound(computerSelection, userSelection);
        console.log(['You win!', "It's a tie!", 'You lose!'][result]);
    }
}

game();