class LayeredParticleSet {
  static instances = [];

  constructor(originX, originY, numberOfSets, numberOfParticles, speed, offset) {
    this.originX = originX;
    this.originY = originY;
    this.numberOfSets = numberOfSets;
    this.numberOfParticles = numberOfParticles;
    this.speed = speed;
    this.particleSets = [];
    this.offset = offset;
    this.initialize(this.originX, this.originY);
  }

  initialize(mouseX, mouseY) {
    for (let n = 0; n < this.numberOfSets; n++) {
      const particleSet = [];
      for (let i = 1; i <= this.numberOfParticles; i++) {
        let x, y;
        let radius = (2 * Math.PI * i)/this.numberOfParticles;
        x = mouseX + ((n+1)*this.offset) * Math.sin(radius);
        y = mouseY + ((n+1)*this.offset) * Math.cos(radius);
        particleSet.push({
          x,
          y
        });
      }
      this.particleSets.push(particleSet);
    }
    LayeredParticleSet.instances.push(this);
  }

  draw() {
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let n = 0; n < LayeredParticleSet.instances.length; n++) {
      const particleSets = LayeredParticleSet.instances[n].particleSets;
      for (let s = 0; s < particleSets.length; s++) {
        const particleSet = particleSets[s];
        for (let i = 0; i < particleSet.length; i++) {
          const p = particleSet[i];
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,${s*10},${s*10},1)`;
          ctx.fill();
          ctx.closePath();
        }
      }
      for (let s = 0; s < particleSets.length; s++) {
        const particleSet = particleSets[s];
        for (let i = 0; i < particleSet.length; i++) {
          const p = particleSet[i];
          const angle = (Math.PI * 2) * (i / particleSet.length);
          p.x += this.speed * Math.sin(angle);
          p.y += this.speed * Math.cos(angle);
        }
      }
    }
    animationID = requestAnimationFrame(this.draw.bind(this));
  }
}

