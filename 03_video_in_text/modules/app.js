import { Tool } from './tool.js'
import { Layer } from './layer.js'

class App {
  constructor(container) {
    this.tool = new Tool();

    this.layer1 = new Layer(container);
    this.layer2 = new Layer(container);

    this.pathToVideo = `example.mp4`;
    this.mainText = `Tesla`;
    this.textBg = `rgb(255, 0, 0)`;
    this.fps = 60;

    this.prepare();
  }
  prepare() {    
    this.fpsInterval = 1000 / this.fps | 0;
    this.then = new Date();
    this.now = this.then;
    this.elapsed = this.then;

    this.createVideoBackground();
    this.createTextMask(this.layer2);

    addEventListener(`resize`, () => {
      this.createTextMask(this.layer2);
      this.createVideoConfig(this.layer1);  
    });
  }

  createVideoBackground() {
    this.video = document.createElement(`video`);
    this.video.src = this.pathToVideo;
    this.video.loop = true;
    this.video.volume = 0;

    this.video.addEventListener(`canplay`, () => {
      this.video.play();
      this.createVideoConfig(this.layer1)
      this.animate();
    })
  }

  createVideoConfig(l) {
    const offsetYPercent = 0.1; 

    const _w = l.w;
    const _h = l.h * this.tool.getSizeRatio(l.w, this.video.videoWidth);
    const _y = (l.h - _h) / 2 - (_h * offsetYPercent);
    this.vidCfg = {
      w: _w,
      h: _h,
      y: _y
    }
  }

  createTextMask(l) {
    this.tool.gco(l.context, `source-out`);
    
    this.tool.text(l.context, {
      y: l.h / 2,
      x: l.w / 2,
      w: l.w,
      h: l.h,
      text: this.mainText,
      fontFamily: `Arial`
    });
    
    this.tool.rect(l.context, {
      fillColor: this.textBg,
      w: l.w,
      h: l.h,
    })

    this.tool.gco(l.context, `source-over`);
    this.tool.text(l.context, {
      y: l.h / 2,
      x: l.w / 2,
      w: l.w,
      h: l.h,
      text: this.mainText,
      fontFamily: `Arial`,
      fillColor: `rgba(0, 0, 255, 0.2)`
    });
  }

  display(l) {
    l.context.drawImage(this.video, 0, this.vidCfg.y, this.vidCfg.w, this.vidCfg.h);
  }
  
  animate() {
    requestAnimationFrame(() => this.animate());

    this.now = Date.now();
    this.elapsed = this.now - this.then;
    
    if (this.elapsed > this.fpsInterval) {
      this.then = this.now;

      this.display(this.layer1);
    }
  }
}

onload = () => {
  new App(document.querySelector(`body`));
}