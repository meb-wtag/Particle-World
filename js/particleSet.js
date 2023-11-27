class ParticleSet {
  static instances = [];

  constructor(originX, originY, numberOfParticles, speed) {
    this.numberOfParticles = numberOfParticles;
    this.originX = originX;
    this.originY = originY;
    this.speed = speed;
    this.particles = [];
  }

  initialize() {
    for (let i = 0; i <= this.numberOfParticles; i++) {
      const x = this.originX;
      const y = this.originY;
      const speed = this.speed;
  
      this.particles.push({
        x,
        y,
        speed,
      });
    }
    ParticleSet.instances.push(this);
  }

  draw() {
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
    for (let n = 0; n < ParticleSet.instances.length; n++) {
      const set = ParticleSet.instances[n];
      console.log(set);
      for (let i = 0; i < set.particles.length; i++) {
        const p = set.particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        p.x += p.speed;
        p.y += p.speed;
      }
    }
    animationID = requestAnimationFrame(this.draw.bind(this));
  }
}

class Line extends ParticleSet {
  constructor(originX, originY, numberOfParticles, speed) {
    super(originX, originY, numberOfParticles, speed);
  }

  initialize() {
    for (let i = 0; i <= this.numberOfParticles; i++) {
      const x = this.originX + i;
      const y = this.originY;
  
      this.particles.push({
        x,
        y,
      });
    }
  }

  draw() {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
      p.x += this.speed;
      p.y += this.speed;
    }
    animationID = requestAnimationFrame(this.draw.bind(this));
  }
}

class Circle extends ParticleSet {
  constructor(originX, originY, numberOfParticles, radius, speed) {
    super(originX, originY, numberOfParticles);
    this.speed = speed;
    this.radius = radius;
  }

  initialize() {
    for (let i = 0; i <= this.numberOfParticles; i++) {
      const x = this.originX + i;
      const y = this.originY;
  
      this.particles.push({
        x,
        y,
      });
    }
  }

  draw() {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
      p.x += this.speed;
      p.y += this.speed;
    }
    animationID = requestAnimationFrame(this.draw.bind(this));
  }
}
