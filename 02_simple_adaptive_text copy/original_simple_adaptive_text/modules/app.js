import { Tool } from './tool.js'
import { Layer } from './layer.js'

class App {
  constructor(container) {
    this.tool = new Tool();

    this.layer = new Layer(container);

    this.prepare();
  }
  
  prepare() {
    this.display();

    addEventListener(`resize`, () => {
      this.display();
    });
  }

  display() {
    this.tool.clear(this.layer.context, this.layer);

    this.tool.text(this.layer.context, {
      x: this.layer.w / 2,
      y: this.layer.h / 2,
      w: this.layer.w,
      h: this.layer.h,
    });
  }
}

onload = () => {
  new App(document.querySelector(`body`));
}