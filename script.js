const msgEl = document.getElementById('msg');

// Generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const randomNum = generateRandomNumber();
console.log('Number:', randomNum);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// start recognition and game
recognition.start();

//capture user speech
function onSpeak(event){
    const msg = event.results[0][0].transcript;
    writeMessage(msg);
    checkNumber(msg);
    console.log(msg);
}

// listen to and handle the speech event
recognition.addEventListener('result', onSpeak);

// see in the DOM what the user has spoken
function writeMessage(msg){
    const div = document.createElement('div');
    div.textContent = 'You said: ';
    const span = document.createElement('span');
    span.classList.add('box');
    span.textContent = msg;
    msgEl.append(div, span);
}

// Check msg against the secret number
function checkNumber() {
    const num = Number(msg);

    // Edge cases
    // Update the value of num if it's a single-digit number
    if (msg === 'one' || msg === 'won') {
        num = 1;
    } else if (msg === 'two') {
        num = 2;
    } else if (msg === 'three') {
        num = 3;
    } else if (msg === 'four') {
        num = 4;
    } else if (msg === 'five') {
        num = 5;
    } else if (msg === 'six') {
        num = 6;
    } else if (msg === 'seven') {
        num = 7;
    } else if (msg === 'eight') {
        num = 8;
    } else if (msg === 'nine') {
        num = 9;
    }

    // check if spoken content is a valid number
    if(Number.isNaN(num)){
        const div = document.createElement('div');
        div.textContent = 'That is not a valid number';
        msgEl.append(div);
        return;
    }

    //Check if it's in range
    if (num < 1 || num > 100){
        const div = document.createElement('div');
        div.textContent = 'Number must be between 1 and 100';
        msgEl.append(div);
        return;
    }

    //check the number and provide feedback
    if(num === randomNum){
        const h2 = document.createElement('h2');
        div.textContent = `Congrats! You have guessed the number! It was ${num}`;
        const button = document.createElement('button');
        button.classList.add('play-again');
        button.id='play-again';
        button.textContent = 'Play Again';
        // Add listener and handler to button
        button.addEventListener('click', () => window.location.reload());

        // Clear out innerHTML of msgEl
        msgEl.append(h2,button);
    } else if (num > randomNum){
        const div= document.createElement('div');
        div.textContent = 'GO LOWER';
        msgEl.append(div);
    } else { //if (num < randomNum)
        const div= document.createElement('div');
        div.textContent = 'GO HIGHER';
        msgEl.append(div);
    }
}

// At end of the SpeechRecognition service, start it again.
recognition.addEventListener('end', () => recognition.start());