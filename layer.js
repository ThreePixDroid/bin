export class Layer {
  //create Canvas element
  canvas = document.createElement(`canvas`);
  //get 2d tools to Draw 
  context = this.canvas.getContext(`2d`);
  
  constructor(container) {
    this.addToContainer(container);
    this.fitToContainer();
  }
  //add Canvas to Container
  addToContainer(container) {
    container.appendChild(this.canvas);
  }
  //fit Canvas to container
  fitToContainer(cnv) {
    cnv.style.width = '100%';
    cnv.style.height = '100%';
    cnv.width  = cnv.offsetWidth;
    cnv.height = cnv.offsetHeight;
  }
  //get Canvas as an image
  get image() {
    return this.canvas.toDataURL();
  }
}