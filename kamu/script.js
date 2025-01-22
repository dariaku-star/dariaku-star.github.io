// script.js
let texts = [
  "Maaf Yah Udah Ngecewain ❤️",
  "Baikan Yuk Sayangku 🥺",
  "I Love You ❤️"
];

let currentText = 0;

function startAnimation() {
  const mainText = document.getElementById("main-text");
  const flowerAnimation = document.getElementById("flower-animation");
  const music = document.getElementById("background-music");

  // Mulai musik
  music.play();

  // Animasi teks
  mainText.innerHTML = texts[currentText];
  currentText++;

  if (currentText < texts.length) {
    setTimeout(startAnimation, 3000); // Ganti teks setiap 3 detik
  } else {
    flowerAnimation.style.opacity = 1; // Tampilkan bunga setelah teks selesai
  }
}

function createParticles() {
  const glowingParticles = document.createElement('div');
  glowingParticles.classList.add('glowing-particles');

  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    glowingParticles.appendChild(particle);
  }

  document.body.appendChild(glowingParticles);
}

createParticles();  // Mengaktifkan partikel cahaya
