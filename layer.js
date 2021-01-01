export class Layer {
  constructor(container) {  
    
    this.addToContainer(container);
    this.fitToContainer(this.canvas);
    addEventListener(`resize`, () => this.fitToContainer(this.canvas));
  }
  addNewCanvasElement() {
    //create Canvas element
    this.canvas = document.createElement(`canvas`);
    //get access to 2d tools to Draw 
    context = this.canvas.getContext(`2d`);
    //add Canvas to Container
    container.appendChild(this.canvas);
  }
  //fit Canvas to container
  fitToContainer(cnv) {
    cnv.width  = cnv.offsetWidth;
    cnv.height = cnv.offsetHeight;
  }
  //get Canvas as an image
  // get image() {
  //   return this.canvas.toDataURL();
  // }
}