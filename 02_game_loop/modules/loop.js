// loop for game or animation
export class Loop {
  constructor(p) {
    this.lastUpdate = 0;
    this.deltaTime = 0;         

    this.update  = p.update;
    this.display = p.display;
    
    this.animate = this.animate.bind(this);
    this.animate();
  }

  animate(currentTime = 0) {
    requestAnimationFrame(this.animate);

    this.deltaTime = currentTime - this.lastUpdate;
    this.lastUpdate = currentTime; 

    this.update(this.deltaTime);
    this.display();
  }
}