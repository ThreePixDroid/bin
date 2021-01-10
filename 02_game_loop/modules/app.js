import { Layer } from './layer.js'
import { Tool } from './tool.js'
import { Loop } from './loop.js'

class App {
  constructor(container) {
    this.layer = new Layer(container);
    this.tool = new Tool();

    this.rectSpeedX = .2;
    this.rectSpeedY = .2;
    this.rectX = 0;
    this.rectY = 0;

    this.loop = new Loop({
      update: this.update.bind(this), 
      display: this.display.bind(this),
    });
  }

  update(correction,c) {
    if (this.rectX < 0 || this.rectX + 200 > this.layer.w) {
      this.rectSpeedX = -this.rectSpeedX;
    }
    if (this.rectY < 0 || this.rectY + 200 > this.layer.h) {
      this.rectSpeedY = -this.rectSpeedY;
    }
    this.rectX = this.rectX += this.rectSpeedX * correction;
    this.rectY = this.rectY += this.rectSpeedY * correction;
  }
  
  display() {
    this.tool.clear(this.layer.context, {w: this.layer.w, h: this.layer.h}); 
    this.tool.rect(this.layer.context, {x: this.rectX, y: this.rectY}); 
  }
}

onload = () => {
  new App(document.querySelector(`body`));
}