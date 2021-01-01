import { Tool } from '../tool.js'
import { Layer } from './layer.js'
//456456ewrwe
class App {
  constructor(container) {
    this.layer = new Layer(container);
    this.tool = new Tool();
  }

  refresh() {
    
  }

  display() {

  }

  animate() {

  }
}

onload = () => {
  new App(document.querySelector(`body`));
}