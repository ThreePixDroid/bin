import { Tool } from './tool.js'
import { Layer } from './layer.js'

class App {
  constructor(container) {
    this.layer = new Layer(container);
    this.tool = new Tool();

    this.tool.rect(this.layer.context, {fillColor: `green`, w: 400, x: 300, y: 90});
    // this.tool.rect(this.layer.context, {color: `green`, w: 400, x: 300, y: 390});
    // this.tool.rect(this.layer.context, {color: `red`, w: 40, x: 30, y: 390});
    // this.tool.rect(this.layer.context, {color: `blue`, w: 40, h: 20, x: 300, y: 490});
  }
}

onload = () => {
  new App(document.querySelector(`body`));
}