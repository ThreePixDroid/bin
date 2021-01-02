//tool contains a drawing methods based on 2d context from canvas element
export class Tool {
  constructor() {
    this.config = {
      //general settings
      x: 0,
      y: 0,
      w: 200, //width
      h: 200, //height
      fillColor: `red`,
      strokeColor: `Yellow`,
      fill: true,
      strok: false, 
    }
  }
  //draw rect (_c is canvas 2d Context) (_p is draw configuration)
  rect(_c, _p) {
    const p = this.getConfig(_p);
    if (p.fill) {
      _c.fillStyle = p.fillColor;
      _c.fillRect(p.x, p.y, p.w, p.h);
    }
    if (p.stroke) {
      _c.strokeStyle = p.strokeColor;
      _c.strokeRect(p.x, p.y, p.w, p.h);
    }
  }
  //get draw configuration 
  getConfig(_p) {
    return Object.assign({}, this.config, _p)
  }
}