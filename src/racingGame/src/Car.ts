import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

export default class Car extends ScoreItem {
  public constructor(startX: number) {
    super();
    const mathRandomed = Math.random();
    if (mathRandomed < 0.05) {
      this.image = CanvasUtil.loadNewImage('./assets/car_100.png');
      this.score = -100;
    } else if (mathRandomed >= 0.05 && mathRandomed < 0.2) {
      this.image = CanvasUtil.loadNewImage('./assets/car_50.png');
      this.score = -50;
    } else if (mathRandomed >= 0.02 && mathRandomed < 0.4) {
      this.image = CanvasUtil.loadNewImage('./assets/car_25.png');
      this.score = -25;
    } else {
      this.image = CanvasUtil.loadNewImage('./assets/car_10.png');
      this.score = -10;
    }
    this.posX = startX;
    this.posY = 0;
    this.speed = 0.3;
  }
}

