class App {
  constructor(container) {
    //create new Canvas element
    this.layer = new Layer(container);
    this.layer2 = new Layer(container);

  }
}

class Layer {
  constructor(container) {
    //create new Canvas element
    this.canvas = document.createElement(`canvas`);
    //get access to 2d drawing tools
    this.context = this.canvas.getContext(`2d`);
    //put Canvas to Container
    container.appendChild(this.canvas);

    this.fitToContainer(this.canvas);
    addEventListener(`resize`, () => this.fitToContainer(this.canvas));
  }
  //fit Canvas size to container
  fitToContainer(cnv) {
    cnv.width = cnv.offsetWidth;
    cnv.height = cnv.offsetHeight;
  }
}

onload = () => {
  // new App(document.querySelector(`body`));
  new App(document.querySelector(`#box1`));
  // new App(document.querySelector(`#box2`));
}