export class Layer {
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
    this.w = cnv.width = cnv.offsetWidth;
    this.h = cnv.height = cnv.offsetHeight;
  }
}