const textContainer = document.getElementById("animated-text");

const messages = [
    "Untukmu sayang ❤️",
    "Hehe maaf agak alay 😂",
    "Maaf yah udah ngecewain ❤️",
    "Baikan yuk sayang ku 🙏",
    "I love you ❤️"
];

let currentIndex = 0;

/* Fungsi mengganti teks */
function changeText() {
    textContainer.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
}

/* Jalankan animasi teks */
setInterval(changeText, 4000);

/* Musik otomatis dimainkan */
const backgroundMusic = document.getElementById("background-music");
backgroundMusic.volume = 0.3;
