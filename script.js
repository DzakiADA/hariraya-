document.addEventListener("DOMContentLoaded", function () {

let moonClick = 0;
let music = document.getElementById("music");

/* TEXT AWAL */
let text = "Selamat Hari Raya Idul Fitri 1447 H 🌙";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

/* START */
window.startStory = function () {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");

  if (music) music.play();

  typeMessage();
};

/* PESAN KAMU */
let msg = `Di hari yang fitri ini, aku mau bilang Mohon Maaf Lahir dan Batin.
Maafin aku ya kalau selama ini ada kata-kata atau perbuatan yang menyakiti hatimu.
Aku tahu aku bukan orang yang sempurna, tapi terimakasih sudah selalu ada buat aku.

Gak kerasa sudah selesai bulan puasa di tahun ini.
Terimakasih sudah selalu nemenin untuk berbuka puasa, nemenin proses yang sangat berat di bulan puasa.
Kehadiranmu membuatku selalu bahagia dan tertawa.

Maaf ya kalau selama ini aku selalu bikin kamu marah, bikin kamu gak mood, bikin kamu ngambek hehe.
Maaf juga kalau aku selalu bikin salah dan gak sesuai yang kamu harapin.

Jadi… tetep bertahan bersamaku ya, harus sih titik 🤍`;

let j = 0;

function typeMessage() {
  if (j < msg.length) {
    document.getElementById("message").innerHTML += msg.charAt(j);
    j++;
    setTimeout(typeMessage, 30);
  }
}

/* GALERI */
window.showGallery = function () {
  document.getElementById("letter").classList.add("hidden");
  document.getElementById("gallery").classList.remove("hidden");
};

/* MUSIC */
window.toggleMusic = function () {
  if (!music) return;
  music.paused ? music.play() : music.pause();
};

/* MOON SECRET */
window.clickMoon = function () {
  moonClick++;
  if (moonClick === 3) {
    document.getElementById("popup").style.display = "block";
    moonClick = 0;
  }
};

window.closePopup = function () {
  document.getElementById("popup").style.display = "none";
};

});
document.getElementById("startBtn").addEventListener("click", function () {
  startStory();
});
