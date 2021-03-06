export class Layer {
  constructor(container) {
    //create new Canvas element
    this.canvas = document.createElement(`canvas`);
    //get access to 2d drawing tools
    this.context = this.canvas.getContext(`2d`);
    //put Canvas to Container
    container.appendChild(this.canvas);

    this.fitToContainer = this.fitToContainer.bind(this);
    addEventListener(`resize`, this.fitToContainer); 
    this.fitToContainer();
  }
  //fit Canvas size to container
  fitToContainer() {
    this.w = this.canvas.width = this.canvas.clientWidth  * devicePixelRatio;
    this.h = this.canvas.height = this.canvas.clientHeight * devicePixelRatio;
  }
}