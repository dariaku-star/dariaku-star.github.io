// Buat objek audio untuk musik
const bgMusic = new Audio('musik.mp3');
bgMusic.loop = true;      // Musik akan diputar berulang
bgMusic.volume = 0.5;     // Atur volume (opsional)
let musicStarted = false;

// Fungsi untuk memulai musik (hanya dijalankan sekali)
function startMusic() {
    if (!musicStarted) {
        bgMusic.play().then(() => {
            musicStarted = true;
        }).catch((error) => {
            console.error("Gagal memulai musik:", error);
        });
    }
}

// Mulai musik ketika pengguna pertama kali melakukan klik (agar sesuai aturan autoplay browser)
document.addEventListener('click', startMusic, { once: true });

// Update posisi musik di localStorage setiap 1 detik
setInterval(() => {
    if (musicStarted && !bgMusic.paused) {
        localStorage.setItem('musicTime', bgMusic.currentTime);
    }
}, 1000);

// Fungsi yang dipanggil saat tombol Yes diklik
function handleYesClick() {
    // Simpan posisi musik saat ini sebelum berpindah halaman
    localStorage.setItem('musicTime', bgMusic.currentTime);
    // Arahkan ke halaman kedua (misalnya, yes.html)
    window.location.href = 'yes.html';
}

// Fungsi yang dipanggil saat tombol No diklik (opsional: Anda bisa menambahkan aksi lain)
function handleNoClick() {
    bgMusic.pause();
}
