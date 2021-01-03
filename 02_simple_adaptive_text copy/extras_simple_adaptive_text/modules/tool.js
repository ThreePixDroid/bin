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
      fontFamily: `Consolas`,
      textAlign: `center`,
      textBaseline: `middle`,
      adaptiveText: true,
    }
  }
  getSizeRatio(targetSize, currentSize) {
    return (targetSize / currentSize);
  }
  //prepare text (_c is canvas 2d Context) (_p is draw configuration)
  prepareText(c, _p) {
    const p = this.getConfig(_p);
    this.setFont(c, p);
    
    c.textAlign = p.textAlign;
    c.textBaseline = p.textBaseline;
    
    if (p.adaptiveText) {
      const textW = c.measureText(p.text).width;
      p.fontSize = p.fontSize * this.getSizeRatio(p.w, textW) | 0;
      
      if (p.fontSize > p.h && p.h != 0) { 
        p.fontSize = p.h;
      }
      
      this.setFont(c, p);
    }
    
    return p;
  }
  setFont(c, p) {
    c.font = `${p.fontStyle} ${p.fontSize}px ${p.fontFamily}`;
  }
  //draw text (_c is canvas 2d Context) (_p is draw configuration)
  text(c, _p) {
    const p = this.prepareText(c, _p);
    
    if (p.fill) {
      c.fillStyle = p.fillColor;
      c.fillText(p.text, p.x, p.y);
    }
    if (p.stroke) {
      c.strokeStyle = p.strokeColor;
      c.strokeText(p.text, p.x, p.y);
    }

  }
  clear(c, _p) {
    const p = this.getConfig(_p);

    c.clearRect(p.x, p.y, p.w, p.h);
  }
  //get draw configuration 
  getConfig(p) {
    return Object.assign({}, this.config, p)
  }
}