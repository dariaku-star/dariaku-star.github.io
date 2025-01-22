const text = "Ini adalah pesan spesial untukmu.";
const typingTextElement = document.getElementById('typing-text');
const heartButton = document.getElementById('heart-button');
const backgroundMusic = document.getElementById('background-music');

let index = 0;

function typeText() {
    if (index < text.length) {
        typingTextElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

heartButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});

window.onload = () => {
    typeText();
};
