// Modal foto
function openImage(img) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modalImg.src = img.src;
  modal.style.display = 'flex';
}
function closeImage() {
  document.getElementById('modal').style.display = 'none';
}

// Fungsi confetti
function startConfetti(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#FFC0CB", "#FFD700", "#FF69B4", "#FFB6C1", "#FFDAB9"];
  const confettis = [];

  for (let i = 0; i < 200; i++) {
    confettis.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 0.5 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 10
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.forEach((c) => {
      ctx.fillStyle = c.color;
      ctx.fillRect(c.x, c.y, c.r, c.r);
    });
    update();
  }

  function update() {
    confettis.forEach((c) => {
      c.y += c.d * 4;
      c.x += Math.sin(c.tilt / 10);
      c.tilt += Math.random() * 0.1;
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 20);
}

// Event tombol
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openBtn");
  const bgMusic = document.getElementById("bgMusic");

  // Mulai confetti di intro
  startConfetti("confetti-intro");

  openBtn.addEventListener("click", function () {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    startConfetti("confetti-main"); // confetti di halaman ucapan
    bgMusic.play();
  });
});
