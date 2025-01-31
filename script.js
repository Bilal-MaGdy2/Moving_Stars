const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const WIDTH_SCREEN = canvas.width = window.innerWidth
const HEIGHT_SCREEN = canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 500; i++) {
  stars.push({
    x: Math.floor(Math.random() * WIDTH_SCREEN),
    y: Math.floor(Math.random() * HEIGHT_SCREEN),
    size: 1.9 + Math.random() * 2.2,
    speedX: 0.01 + Math.random() * 1,
    speedY: 0.01 + Math.random() * 1,
    color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  });
}


(function animateStars() {
  ctx.clearRect(0, 0, WIDTH_SCREEN ,HEIGHT_SCREEN);

  stars.forEach(star => {
    star.x += star.speedX;
    star.y += star.speedY;

    if (star.x > WIDTH_SCREEN) star.x = 0;
    if (star.y > HEIGHT_SCREEN) star.y = 0;

    ctx.fillStyle = star.color;
    ctx.fillRect(star.x, star.y, star.size, star.size);
  });

  requestAnimationFrame(animateStars);
})();

//console.log(ctx)