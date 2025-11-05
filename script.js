const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
let stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 1.5,
  d: Math.random() * 1
}));

function drawStars() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#fff';
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  moveStars();
}

function moveStars() {
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    s.y += s.d;
    if (s.y > h) {
      s.y = 0;
      s.x = Math.random() * w;
    }
  }
}

setInterval(drawStars, 33);

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

function showLogin() {
  const loginBox = document.getElementById('loginBox');
  if (loginBox) {
    loginBox.style.display = 'block';
  }
}

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === 'Vedant Kalas' && password === '1234') {
    window.location.href = 'map.html'; // ← You can change this to any HTML file you want to open next
  } else {
    alert('Invalid username or password.');
  }
}

