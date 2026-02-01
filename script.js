// MATRIX BACKGROUND
const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.querySelector(".hero").offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "01LUSADEV".split("");
const fontSize = 14;
let columns = canvas.width / fontSize;
let drops = Array.from({ length: columns }, () => 1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#c77dff";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}

setInterval(drawMatrix, 35);

// TYPEWRITER
const words = [
  "Lusanele M Damoyi",
  "Software Developer",
  "Business Solutionist",
  "Data Analyst"
];

let i = 0, j = 0, deleting = false;
const el = document.getElementById("typewriter");

function type() {
  el.textContent = words[i].slice(0, j);

  if (!deleting && j++ === words[i].length) {
    deleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (deleting && j-- === 0) {
    deleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, deleting ? 60 : 100);
}

type();
