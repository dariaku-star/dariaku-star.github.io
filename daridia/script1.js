// Fungsi untuk memulai pemutaran musik setelah interaksi pengguna
function startMusic() {
  var audio = document.getElementById("bgMusic");
  if (audio) {
    // Pastikan audio tidak dalam keadaan muted
    audio.muted = false;
    audio.play()
      .then(function () {
        console.log("Musik telah dimulai.");
      })
      .catch(function (err) {
        console.error("Gagal memulai musik:", err);
        alert("Gagal memulai musik. Silakan periksa file musik atau konsol error untuk info lebih lanjut.");
      });
  }
}

// Fungsi untuk menangani klik tombol Yes
function handleYesClick() {
  var audio = document.getElementById("bgMusic");
  // Simpan posisi musik saat ini ke localStorage
  localStorage.setItem("musicTime", audio.currentTime);
  // Alihkan ke halaman yes.html
  window.location.href = "yes.html";
}

// Fungsi untuk menangani klik tombol No
function handleNoClick() {
  alert("Mungkin lain kali!");
}
