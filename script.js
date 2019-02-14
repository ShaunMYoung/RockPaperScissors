/*variables*/
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const pscore = document.querySelector('#pscore');
const cscore = document.querySelector('#cscore');
const score = [0, 0];
const msg = document.querySelector('#msg');
const rps = ['rock', 'paper', 'scissors'];
const compChoice = () => {
    let choice = rps[Math.floor(Math.random() * rps.length)];
    return choice;
}
/*events*/
rock.addEventListener('click', () => {play('rock', compChoice());});
paper.addEventListener('click', () => {play('paper', compChoice());});
scissors.addEventListener('click', () => {play('scissors', compChoice());});
/*functions*/
function play(playerChoice, compChoice) {
    switch (playerChoice) {
        case 'rock':
         if (compChoice === 'paper') {
             msg.textContent = 'Computer chose Paper, You Lose!';
             score[0]++;
             pscore.textContent = `${score[1]}`;
             cscore.textContent = `${score[0]}`;
         } else if (compChoice === 'scissors') {
            msg.textContent = 'Computer chose Scissors. You Win!';
            score[1]++;
            pscore.textContent = `${score[1]}`;
            cscore.textContent = `${score[0]}`;
         } else {
             msg.textContent = 'Computer chose Rock. Tie!';
             pscore.textContent = `${score[1]}`;
             cscore.textContent = `${score[0]}`;
         }
         break;
         case 'paper':
         if (compChoice === 'scissors') {
             msg.textContent = 'Computer chose Scissors, You Lose!';
             score[0]++;
             pscore.textContent = `${score[1]}`;
             cscore.textContent = `${score[0]}`;
         } else if (compChoice === 'rock') {
            msg.textContent = 'Computer chose Rock. You Win!';
            score[1]++;
            pscore.textContent = `${score[1]}`;
            cscore.textContent = `${score[0]}`;
         } else {
             msg.textContent = 'Computer chose Paper. Tie!';
             pscore.textContent = `${score[1]}`;
             cscore.textContent = `${score[0]}`;
         }
         break;
         case 'scissors':
         if (compChoice === 'rock') {
             msg.textContent = 'Computer chose Rock, You Lose!';
             score[0]++;
             pscore.textContent = `${score[1]}`;
             cscore.textContent = `${score[0]}`;
         } else if (compChoice === 'paper') {
            msg.textContent = 'Computer chose Paper. You Win!';
            score[1]++;
            pscore.textContent = `${score[1]}`;
            cscore.textContent = `${score[0]}`;
         } else {
             msg.textContent = 'Computer chose Scissors. Tie!';
             pscore.textContent = `${score[1]}`;
             cscore.textContent = `${score[0]}`;
         }
     }
}