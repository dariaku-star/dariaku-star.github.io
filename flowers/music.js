// music.js
document.addEventListener("DOMContentLoaded", function () {
  // Buat tombol "Mulai Musik"
  const startMusicBtn = document.createElement("button");
  startMusicBtn.textContent = "Mulai Musik";
  startMusicBtn.style.position = "fixed";
  startMusicBtn.style.bottom = "20px";
  startMusicBtn.style.right = "20px";
  startMusicBtn.style.padding = "10px 20px";
  startMusicBtn.style.fontSize = "16px";
  startMusicBtn.style.border = "none";
  startMusicBtn.style.borderRadius = "5px";
  startMusicBtn.style.backgroundColor = "#ff6b81";
  startMusicBtn.style.color = "white";
  startMusicBtn.style.cursor = "pointer";
  
  // Sisipkan tombol ke dalam body
  document.body.appendChild(startMusicBtn);
  
  // Buat elemen audio untuk memainkan musik
  const audio = document.createElement("audio");
  audio.src = "musik.mp3"; // Pastikan file musik.mp3 ada di folder yang sama
  audio.loop = true;        // Musik akan berputar terus menerus
  audio.style.display = "none"; // Sembunyikan kontrol audio
  document.body.appendChild(audio);
  
  // Tambahkan event listener pada tombol untuk memulai musik
  startMusicBtn.addEventListener("click", function () {
    audio.play().then(() => {
      // Setelah musik mulai diputar, tombol bisa dinonaktifkan agar tidak mengganggu
      startMusicBtn.disabled = true;
      startMusicBtn.style.opacity = "0.5";
    }).catch((error) => {
      console.error("Gagal memulai musik:", error);
    });
  });
});
