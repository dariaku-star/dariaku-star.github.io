// Fungsi untuk memulai pemutaran musik (harus diklik agar musik tidak diblokir oleh browser)
function startMusic() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play().then(() => {
        console.log("Musik telah dimulai.");
    }).catch(error => {
        console.error("Gagal memulai musik:", error);
    });
}

// Fungsi ketika tombol Yes diklik
function handleYesClick() {
    const bgMusic = document.getElementById('bgMusic');
    // Simpan posisi musik saat ini ke localStorage
    localStorage.setItem('musicTime', bgMusic.currentTime);
    // Alihkan ke halaman kedua (yes.html)
    window.location.href = "yes.html";
}

// Fungsi ketika tombol No diklik (aksi disesuaikan, misalnya menampilkan pesan)
function handleNoClick() {
    alert("Mungkin lain kali!");
}
