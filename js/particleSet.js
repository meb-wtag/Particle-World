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
  static instances = [];

  constructor(originX, originY, numberOfParticles, speed) {
    super(originX, originY, numberOfParticles, speed);
  }

  initialize() {
    for (let i = 0; i <= this.numberOfParticles; i++) {
      const x = this.originX + i;
      const y = this.originY;
      const speed = this.speed;
  
      this.particles.push({
        x,
        y,
        speed,
      });
    }
    Line.instances.push(this);
    ParticleSet.instances.push(this);
  }
}

class Circle extends ParticleSet {
  static instances = [];

  constructor(originX, originY, numberOfParticles, radius, speed) {
    super(originX, originY, numberOfParticles, speed);
    this.radius = radius;
  }

  initialize() {
    for (let i = 0; i <= this.numberOfParticles; i++) {
      const angle = (Math.PI * 2 * i) / this.numberOfParticles;
      const x = this.originX + this.radius * Math.sin(angle);
      const y = this.originY + this.radius * Math.cos(angle);
      const speed = this.speed;
  
      this.particles.push({
        x,
        y,
        speed,
        angle,
      });
    }
    ParticleSet.instances.push(this);
    Circle.instances.push(this);
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
        p.x += p.speed * Math.sin(p.angle);
        p.y += p.speed * Math.cos(p.angle);
      }
    }
    animationID = requestAnimationFrame(this.draw.bind(this));
  }
}
