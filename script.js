const msgEl = document.getElementById('msg');

// Generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const randomNum = generateRandomNumber();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

// start recognition and game
recognition.start();

//capture user speech
function onSpeak(event){
    const msg = event.results[0][0].transcript;
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