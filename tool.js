export class Tool {
  constructor() {
    this.TWO_PI = Math.PI * 2;

    this.config = {
      //general
      x: 0,
      y: 0,
      fillColor: `red`,
      strokeColor: `Yellow`,
      fill: true,
      strok: false,
      //text
      fontFamaly: `Consolas`,
      mainText: `venom`,
      textMaxWidth: 500,
      textMaxHeight: 200,
      textMinWidth: 120,
      textMinHeight: 20,
      //rect
      clear: true,
      w: 200,
      h: 200,
    }
  }
  // (text, fontSize) {
  //   const ratio = this.w / this.context.measureText(text).width;
  //   this.drawParametres.fontSize = fontSize * ratio | 0;

  //   if (this.drawParametres.fontSize > this.h) {
  //     this.drawParametres.fontSize = this.h;
  //   }

  //   this.context.font = `${this.drawParametres.fontSize}px Arial black`;
  // }
  
  text(c, p = this.config) {
    c.fillText(p.mainText, p.x, p.y)
    
  }
  rect(c, p = this.config) {
    this.context.clearRect(0, 0, this.w, this.h);
  }
}
