import {Layer} from './layer.js'

export class Tool {
  layers = [];

  constructor(container) {
    this.container = container;
  }
  set layer() {

  }
  
  fitLayersToContainer() {
    const computedStile = getComputedStyle(container);
    this.w = this.canvas.width = computedStile.width.slice(0, -2);
    this.h = this.canvas.height = computedStile.height.slice(0, -2);
  }

  assign(newParametres) {
    return Object.assign(this.drawParametres, newParametres);
    // return Object.assign({}, this.drawParametres, newParametres);
  }

  fitText(text, fontSize) {
    const ratio = this.w / this.context.measureText(text).width;
    this.drawParametres.fontSize = fontSize * ratio | 0;

    if (this.drawParametres.fontSize > this.h) {
      this.drawParametres.fontSize = this.h;
    }

    this.context.font = `${this.drawParametres.fontSize}px Arial black`;
  }
  
  text(parametres) {
    const p = Object.assign(this.drawParametres, parametres);

    this.context.font = `${p.fontSize}px Arial black`;
    this.context.textBaseline = p.textBaseline;
    
    if (p.fitText) {
      this.fitText(p.text, p.fontSize);
    }

    if (p.fill) {
      this.context.fillStyle = p.fillStyle;
      this.context.fillText(p.text, p.x, p.y);
    }

    if (p.stroke) {
      this.context.strokeStyle = p.strokeStyle;
      this.context.lineWidth = p.lineWidth;
      this.context.stroke(p.x, p.y, p.radius) || this.context.strokeText(p.text, p.x, p.y);
    }
  }

  clear() {
    this.context.clearRect(0, 0, this.w, this.h);
  }
}
