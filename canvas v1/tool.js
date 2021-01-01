//
export class Tool {
  constructor() {
    this.config = {
      //general
      x: 0,
      y: 0,
      fillColor: `red`,
      strokeColor: `Yellow`,
      fill: true,
      strok: false,
      //rect
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
