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