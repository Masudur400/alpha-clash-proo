function play() {
    // hide the play screen 
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // show the playground 
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');

    continueGame();

}


function continueGame() {
    const alphabet = getRendomAlphabet();
    // console.log(alphabet);
    const curentAlphabet = document.getElementById('curent-alphabet');
    curentAlphabet.innerText = alphabet;

    // set background color 
    setBackgroundColorById(alphabet);

}

function getRendomAlphabet() {
    // get and creat an alphabet array 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index between [0-15] 
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function hendleKeyBoardByttonPress(event) {

    const playerPressed = event.key;
    // console.log(playerPressed);

    // get the expected press 
    const curentAlphabet = document.getElementById('curent-alphabet');
    const targetAlphabet = curentAlphabet.innerText;
    const expectAlphabet = targetAlphabet.toLowerCase();
    // console.log(playerPressed, expectAlphabet);
    // console.log(curentAlphabet.innerText);

    // check match or not 
    if (playerPressed === expectAlphabet) {
        // console.log('you get a point' );

        const scoreSpan = getTextElementValueById('score-span');
        const newScore = scoreSpan + 1;
        setTextElementValueById('score-span', newScore);
        //============================
        // update score 
        // const scoreSpan = document.getElementById('score-span');
        // const scoreText = scoreSpan.innerText;
        // const currentScore = parseInt(scoreText);

        // const newScore = scoreSpan + 1;
        // scoreSpan.innerText = newScore;
        // console.log(currentScore );  

        // start a new round 
        removeBackgroundColorById(expectAlphabet);
        continueGame();
    }
    else {
        console.log('you missed. you loss a life');
        const lifeScore = getTextElementValueById('life-score');
        const newLife = lifeScore - 1;
        setTextElementValueById('life-score', newLife);
        if (newLife === 0) {
            // hide the play screen 
            const playGround = document.getElementById('play-ground');
            playGround.classList.add('hidden');
        }
        else {
            // show the playground 
            const scoreBoard = document.getElementById('score-board');
            scoreBoard.classList.remove('hidden');
        }
        //==================================
        // const lifeScoreElement = document.getElementById('life-score');
        // const lifeText = lifeScoreElement.innerText;
        // const lifeScore = parseInt(lifeText);
        // const newLife = lifeScore - 1 ;
        // lifeScoreElement.innerText = newLife;
    }
}
// capture keyBoard key press 
document.addEventListener('keyup', hendleKeyBoardByttonPress);

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function playAgain() {
    // hidden score board 
    const score = document.getElementById('score-board');
    score.classList.add('hidden');

    // again show play ground 
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');

    setTextElementValueById('life-score', 5);

    getTextElementValueById('score-span', 0);


}

// function gameOver() {
//     const gameScore = getTextElementValueById('score-span');
//     console.log(gameScore);
// }