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
    console.log(alphabet);
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