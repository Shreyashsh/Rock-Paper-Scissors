function computerPlay(){
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

console.log(computerPlay());