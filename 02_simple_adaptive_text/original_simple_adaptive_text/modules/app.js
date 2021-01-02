import { Tool } from './tool.js'
import { Layer } from './layer.js'

class App {
  constructor(container) {
    this.layer = new Layer(container);
    this.tool = new Tool();

    this.animate();
  }

  drawText() {
    this.tool.text(this.layer.context, {
      fontSize: 12,
      y: this.layer.h / 2,
      x: this.layer.w / 2,
      w: this.layer.w,
      h: this.layer.h,
      adaptiveText: true
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.tool.clear(this.layer.context, this.layer);
    this.drawText();
  }
}

onload = () => {
  new App(document.querySelector(`body`));
}