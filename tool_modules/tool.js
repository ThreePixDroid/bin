//tool contains a drawing methods based on 2d context from canvas element
export class Tool {
  constructor() {
    this.config = {
      //general settings
      x: 0,
      y: 0,
      fillColor: `red`,
      strokeColor: `Yellow`,
      fill: true,
      strok: false,
      //rect settings
      clear: true,
      w: 200,
      h: 200,
    }
  }
  assign(_p) {
    return Object.assign({}, this.config, _p)
  }
  rect(_c, _p) {
    const p = this.assign(_p);

    
    if (p.fill) {
      _c.fillStyle = p.color;
      _c.fillRect(p.x, p.y, p.w, p.h);
    }

    if (p.stroke) {
      _c.strokeStyle = p.color;
      _c.strokeRect(p.x, p.y, p.w, p.h);
    }
  }
}