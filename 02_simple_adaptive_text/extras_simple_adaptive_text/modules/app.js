import { Tool } from './tool.js'
import { Layer } from './layer.js'

class App {
  constructor(container) {
    this.layer = new Layer(container);
    this.tool = new Tool();

    this.prepare();
    this.animate();
    
    addEventListener(`resize`, () => this.prepare());
  }
  
  prepare() {
    this.textConfig = {
      x: this.layer.w / 2,
      y: this.layer.h / 2,
      w: this.layer.w,
      h: this.layer.h,
      textBaseline: `top`,
      text: `ThreePixDroid`,
    }
    
    this.fontSize = this.tool.prepareText(this.layer.context, this.textConfig).fontSize;
    this.linesNum = (this.layer.h / this.fontSize | 0) - 1;
    this.offset = (this.linesNum * this.fontSize - this.layer.h) / 2;
  }

  display() {
    for (let i = 0 ; i < this.linesNum; i++) {
      const glitch =  i * this.offset * Math.random();
      this.textConfig.fillColor = `hsl(${glitch + this.offset}, 100%, 50%)`;
      this.textConfig.y = i * this.fontSize - this.offset;
      this.tool.text(this.layer.context, this.textConfig);
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.tool.clear(this.layer.context, this.layer);
    this.display();
  }
}

onload = () => {
  new App(document.querySelector(`body`));
}