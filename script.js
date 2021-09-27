/* variables */
const rulesBtn = document.getElementById('rules-btn');
const pick = document.getElementById('pick');
const close = document.getElementById('close');
const rulesImage = document.getElementById('rules_image');
const choiceButton = document.querySelectorAll('.game_choice');
const inGame = document.getElementById('in_game');
const yourChoise = document.getElementById('your-choice');
const computerChoise = document.getElementById('computer-choice');
const winLose = document.querySelector('.win-lose');
const btnResult = document.querySelector('.btn-result');
const scores = document.querySelector('.scores');
const scoreNumber = document.querySelector('.score_number')


close.addEventListener('click', togglePickAndRules)
rulesBtn.addEventListener('click', togglePickAndRules)

function togglePickAndRules() {
    pick.classList.toggle('hide-page')
    rulesImage.classList.toggle('hide-page')
}

choiceButton.forEach(button => button.addEventListener('click', playerChoices))
choiceButton.forEach(button => button.addEventListener('click', playerChoices))
function playerChoices() {

    const text = "<h2 class='choice_text'>You Picked</h2>";
    const content = this.outerHTML;
    pick.classList.toggle('hide-page')
    inGame.classList.toggle('hide-page')
    yourChoise.innerHTML = `${content}
    ${text}`
    yourChoise.setAttribute('data-choise', this.classList[0])

    game()
}




/* -----------------------------------Game--------------------------------------*/
const choice = ['rock', 'paper', 'scissors'];


const score = {
    You: 0,
    Computer: 0,
}
function computerSelection() {
    const text = '<h2 class="choice_text">The House Picked</h2>'
    const computerPick = choice[Math.floor(Math.random() * 3)]
    computerChoise.innerHTML = document.querySelector(`.${computerPick}`).outerHTML + text;
    return computerPick
}


function playRound() {
    const playerChoice = document.querySelector('div[data-choise]').getAttribute('data-choise').toLowerCase()


    if (playerChoice === 'rock') {
        rock();
    } else if (playerChoice === 'paper') {
        paper();
    } else if (playerChoice === 'scissors') {
        scissors();
    } else {
        playRound()
    }
}
function rock() {
    if (computerSelection() == 'rock') {
        winLose.textContent = 'Drow'
    } else if (computerSelection() == 'paper') {
        score.Computer++
        winLose.textContent = 'You Lose'
    } else {
        score.You++
        winLose.textContent = 'You Win'
    }
}

function paper() {
    if (computerSelection() == 'paper') {
        winLose.textContent = 'Drow'
    } else if (computerSelection() == 'scissors') {
        score.Computer++
        winLose.textContent = 'You Lose'
    } else {
        score.You++
        winLose.textContent = 'You Win'
    }
}

function scissors() {
    if (computerSelection() == 'scissors') {
        winLose.textContent = 'Drow'
    } else if (computerSelection() == 'Rock') {
        score.Computer++
        winLose.textContent = 'You Lose'
    } else {
        score.You++
        winLose.textContent = 'You Win'
    }
}

function game() {
    playRound();
    scoreNumber.textContent++
    scores.textContent = `${score.You}   -  ${score.Computer}`
}
btnResult.addEventListener('click', playAgain)

function playAgain() {
    pick.classList.toggle('hide-page')
    inGame.classList.toggle('hide-page')
}



