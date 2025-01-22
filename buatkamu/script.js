const text = "Hai, ini adalah pesan spesial untukmu...";
const typingTextElement = document.getElementById("typing-text");
const heartButton = document.getElementById("heart-button");
const heartContainer = document.getElementById("heart-container");
const backgroundMusic = document.getElementById("background-music");

let index = 0;

/* Fungsi animasi mengetik */
function typeText() {
    if (index < text.length) {
        typingTextElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

/* Fungsi membuat efek hati */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}px`; // Posisi random
    heart.style.animationDuration = `${Math.random() * 2 + 2}s`; // Durasi random
    heart.innerHTML = "❤️";
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

/* Memulai mengetik saat halaman dimuat */
window.onload = () => {
    typeText();
    backgroundMusic.play();
};

/* Menambahkan efek hati saat tombol diklik */
heartButton.addEventListener("click", () => {
    createHeart();
});
