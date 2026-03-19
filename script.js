// TEXT AWAL
let text = "Selamat Hari Raya Idul Fitri 1447 H 🌙";
let i = 0;

// PESAN KAMU (FULL)
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

// typing judul
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

// mulai
function startStory() {
  document.getElementById("home").style.display = "none";
  document.getElementById("letter").classList.remove("hidden");
  typeMessage();
}

// typing pesan
function typeMessage() {
  if (j < msg.length) {
    document.getElementById("message").innerHTML += msg.charAt(j);
    j++;
    setTimeout(typeMessage, 25);
  }
}

// galeri
function showGallery() {
  document.getElementById("letter").classList.add("hidden");
  document.getElementById("gallery").classList.remove("hidden");
}

// efek hati klik
function createHeart(e) {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
}

// start
window.onload = function () {
  typeWriter();
};