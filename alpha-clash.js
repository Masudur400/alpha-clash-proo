function play(){
    // hide the play screen 
   const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // show the playground 
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');

    continueGame();
}


function continueGame(){
    const alphabet = getRendomAlphabet();
    // console.log(alphabet);
    const curentAlphabet = document.getElementById('curent-alphabet');
    curentAlphabet.innerText = alphabet;

    // set background color 
    setBackgroundColorById(alphabet);

} 

function getRendomAlphabet(){
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

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function hendleKeyBoardByttonPress(event){
    const playerPressed = event.key;
    // console.log(playerPressed);

    // get the expected press 
    const curentAlphabet = document.getElementById('curent-alphabet');
    const targetAlphabet = curentAlphabet.innerText;
    const expectAlphabet = targetAlphabet.toLowerCase();
    console.log(playerPressed, expectAlphabet);
    // console.log(curentAlphabet.innerText);

    // check match or not 
    if(playerPressed === expectAlphabet){
        console.log('you get a point');
    }
    else{
        console.log('you missed. you loss a life');
    }
}
// capture keyBoard key press 
document.addEventListener('keyup', hendleKeyBoardByttonPress);