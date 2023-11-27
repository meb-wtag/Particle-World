const canvas = document.getElementById("canvas");
document.body.style.height = "100vh";
canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;

const ctx = canvas.getContext("2d");
let animationID;
let particleSets = [];
let numberOfParticles = 10;

//main code
ctx.fillStyle = "rgba(0,0,0,1)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
canvas.addEventListener("click", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  particle = new ParticleSet(mouseX, mouseY, 10, 1);
  particle.initialize();
  if (!animationID) {
    particle.draw();
  }
});
