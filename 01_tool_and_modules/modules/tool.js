//tool contains a drawing methods based on 2d context from canvas element
export class Tool {
  constructor() {
    this.config = {
      //general settings
      x: 0,
      y: 0,
      w: 200, //width
      h: 200, //height
      fill: true,
      strok: false, 
      fillColor: `red`,
      strokeColor: `Yellow`,
    }
  }
  //draw rect (_c is canvas 2d Context) (_p is draw configuration)
  rect(c, _p) {
    const p = this.getConfig(_p);
    
    if (p.fill) {
      c.fillStyle = p.fillColor;
      c.fillRect(p.x, p.y, p.w, p.h);
    }
    if (p.stroke) {
      c.strokeStyle = p.strokeColor;
      c.strokeRect(p.x, p.y, p.w, p.h);
    }
  }
  //get draw configuration 
  getConfig(p) {
    return Object.assign({}, this.config, p)
  }
}