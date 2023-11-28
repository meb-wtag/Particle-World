const canvas = document.getElementById("canvas");
document.body.style.height = "100vh";
canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;

const ctx = canvas.getContext("2d");
let animationID;
let particleSets = [];

//main code
ctx.fillStyle = "rgba(0,0,0,1)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
canvas.addEventListener("click", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  circle = new LayeredParticleSet(mouseX, mouseY, 30, 360, 1, 3);
  if (!animationID) {
    circle.draw();
  }
});
