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
      // minW: 0,
      // minH: 0,
      // maxW: 0,
      // maxH: 0,
      fillColor: `red`,
      strokeColor: `Yellow`,
      fill: true,
      strok: false, 
      //text settings
      text: `Text`,
      fontStyle: `bold`,
      fontSize: 60,
      fontFamaly: `Consolas`,
      textAlign: `center`,
      textBaseLine: `middle`,
      adaptiveText: true,
    }
  }
  //draw text (_c is canvas 2d Context) (_p is draw configuration)
  getSizeRatio(targetSize, currentSize, valueToCorrect) {
    return (targetSize / currentSize) * valueToCorrect;
  }
  text(_c, _p) {
    const p = this.getConfig(_p);

    _c.font = `${p.fontStyle} ${p.fontSize}px ${p.fontFamaly}`;
    _c.textAlign = p.textAlign;
    _c.textBaseline = p.textBaseLine;
    
    if (p.adaptiveText) {
      const textW = _c.measureText(p.text).width;
      p.fontSize = this.getSizeRatio(p.w, textW, p.fontSize) | 0;
      
      if (p.fontSize > p.h && p.h != 0) { p.fontSize = p.h; }
      
      _c.font = `${p.fontStyle} ${p.fontSize}px ${p.fontFamaly}`;
    }
    
    if (p.fill) {
      _c.fillStyle = p.fillColor;
      _c.fillText(p.text, p.x, p.y);
    }
    if (p.stroke) {
      _c.strokeStyle = p.strokeColor;
      _c.strokeText(p.text, p.x, p.y);
    }
  }
  //draw rect (_c is canvas 2d Context) (_p is draw configuration)
  // rect(_c, _p) {
  //   const p = this.getConfig(_p);
  //   if (p.fill) {
  //     _c.fillStyle = p.fillColor;
  //     _c.fillRect(p.x, p.y, p.w, p.h);
  //   }
  //   if (p.stroke) {
  //     _c.strokeStyle = p.strokeColor;
  //     _c.strokeRect(p.x, p.y, p.w, p.h);
  //   }
  // }
  clear(_c, _p) {
    const p = this.getConfig(_p);

    _c.clearRect(p.x, p.y, p.w, p.h);
  }
  //get draw configuration 
  getConfig(_p) {
    return Object.assign({}, this.config, _p)
  }
}