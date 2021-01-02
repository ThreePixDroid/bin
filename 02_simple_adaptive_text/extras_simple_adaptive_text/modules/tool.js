//tool contains a drawing methods based on 2d context from canvas element
export class Tool {
  constructor() {
    //default drawing configuration
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
      //text settings
      text: `Text`,
      fontSize: 60,
      fontStyle: `bold`,
      fontFamaly: `Consolas`,
      textAlign: `center`,
      textBaseline: `middle`,
      adaptiveText: true,
    }
  }
  getSizeRatio(targetSize, currentSize) {
    return (targetSize / currentSize);
  }
  //prepare text (_c is canvas 2d Context) (_p is draw configuration)
  prepareText(_c, _p) {
    const p = this.getConfig(_p);
    
    _c.font = `${p.fontStyle} ${p.fontSize}px ${p.fontFamaly}`;
    _c.textAlign = p.textAlign;
    _c.textBaseline = p.textBaseline;
    
    if (p.adaptiveText) {
      const textW = _c.measureText(p.text).width;
      p.fontSize = p.fontSize * this.getSizeRatio(p.w, textW) | 0;
      
      if (p.fontSize > p.h && p.h != 0) { 
        p.fontSize = p.h;
      }
      
      _c.font = `${p.fontStyle} ${p.fontSize}px ${p.fontFamaly}`;
    }
    
    return p;
  }
  //draw text (_c is canvas 2d Context) (_p is draw configuration)
  text(_c, _p) {
    const p = this.prepareText(_c, _p);
    
    if (p.fill) {
      _c.fillStyle = p.fillColor;
      _c.fillText(p.text, p.x, p.y);
    }
    if (p.stroke) {
      _c.strokeStyle = p.strokeColor;
      _c.strokeText(p.text, p.x, p.y);
    }

  }
  clear(_c, _p) {
    const p = this.getConfig(_p);

    _c.clearRect(p.x, p.y, p.w, p.h);
  }
  //get draw configuration 
  getConfig(_p) {
    return Object.assign({}, this.config, _p)
  }
}