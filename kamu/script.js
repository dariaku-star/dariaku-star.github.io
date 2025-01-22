const text = "Hai, ini adalah pesan spesial untukmu...";
const typingTextElement = document.getElementById("typing-text");
const heartButton = document.getElementById("heart-button");
const flowerAnimation = document.getElementById("flower-animation");
const nextTextElement = document.getElementById("next-text");
const backgroundMusic = document.getElementById("background-music");

let index = 0;

/* Fungsi animasi mengetik */
function typeText(message, element, callback = null) {
    let i = 0;
    function type() {
        if (i < message.length) {
            element.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 100);
        } else if (callback) {
            callback();
        }
    }
    type();
}

/* Fungsi bunga berguguran */
function createFallingFlowers() {
    const container = document.querySelector(".falling-flowers");
    for (let i = 0; i < 30; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDelay = Math.random() * 5 + "s";
        flower.style.animationDuration = 3 + Math.random() * 2 + "s";
        container.appendChild(flower);
    }
}

/* Memulai mengetik dan bunga berguguran saat halaman dimuat */
window.onload = () => {
    typeText(text, typingTextElement);
    backgroundMusic.play();
    createFallingFlowers();
};

/* Menambahkan event untuk tombol hati */
heartButton.addEventListener("click", () => {
    heartButton.classList.add("hidden");
    flowerAnimation.classList.remove("hidden");

    setTimeout(() => {
        nextTextElement.classList.remove("hidden");
        typeText(
            "Untukmu sayang hehe maaf agak alay ❤️😂",
            nextTextElement,
            () => {
                setTimeout(() => {
                    typeText(
                        "<br>Maaf yah udah ngecewain ❤️",
                        nextTextElement,
                        () => {
                            setTimeout(() => {
                                typeText(
                                    "<br>Baikan yuk sayang ku 🙏",
                                    nextTextElement,
                                    () => {
                                        setTimeout(() => {
                                            typeText("<br>I love you ❤️", nextTextElement);
                                        }, 1000);
                                    }
                                );
                            }, 1000);
                        }
                    );
                }, 1000);
            }
        );
    }, 3000); // Menunggu bunga selesai tumbuh
});