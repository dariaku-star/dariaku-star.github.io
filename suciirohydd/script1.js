// Fungsi untuk memulai pemutaran musik (dipicu oleh klik tombol "Mulai Musik")
function startMusic() {
  const bgMusic = document.getElementById('bgMusic');
  if (bgMusic) {
    // Pastikan audio termuat ulang (ini membantu jika ada masalah buffering)
    bgMusic.load();
    bgMusic.play().then(() => {
      console.log("Musik telah dimulai.");
    }).catch(error => {
      console.error("Gagal memulai musik:", error);
      alert("Gagal memulai musik. Silakan periksa file musik atau coba lagi.");
    });
  }
}

// Fungsi ketika tombol Yes diklik
function handleYesClick() {
  const bgMusic = document.getElementById('bgMusic');
  // Simpan posisi musik saat ini ke localStorage
  localStorage.setItem('musicTime', bgMusic.currentTime);
  // Alihkan ke halaman kedua (yes.html)
  window.location.href = "yes.html";
}

// Fungsi ketika tombol No diklik (misalnya menampilkan pesan)
function handleNoClick() {
  alert("Mungkin lain kali!");
}
