let buttons = document.querySelectorAll('button');
let score = [0, 0];


buttons.forEach(btn => {
    btn.addEventListener('click', function() {playRound(btn.id.toUpperCase())});
});

function computerPlay(){
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection){
    let result;
    let computerSelection = computerPlay().toUpperCase();
    if(computerSelection == playerSelection){
        result = "It was a tie!";
    } else if ((computerSelection == "ROCK" && playerSelection == "PAPER") || 
        (computerSelection == "PAPER" && playerSelection == "SCISSORS") || 
        (computerSelection == "SCISSORS" && playerSelection == "ROCK")){
        score[0]++;
        result = "You win!";
    } else  {
        score[1]++;
        result = "You lose!";
    }
    let curScore = score[0] + " - " + score[1];
    if(score[0]==5) {
        result = "You win. So, you aren't so dumb after all!";
        score = [0, 0];
    }
    if(score[1]==5){
        result = "Pity. The machine has prevailed over your primitive brain.";
        score = [0, 0];
    }
    
    document.getElementById('result').innerHTML = result;
    document.getElementById('score').innerHTML = curScore;
    return;
}

