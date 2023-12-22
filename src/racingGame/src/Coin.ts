import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

export default class Coin extends ScoreItem {
  public constructor(startX: number) {
    super();
    const mathRandomed = Math.random();
    if (mathRandomed < 0.05) {
      this.image = CanvasUtil.loadNewImage('./assets/coin_100.png');
      this.score = 100;
    } else if (mathRandomed >= 0.05 && mathRandomed < 0.2) {
      this.image = CanvasUtil.loadNewImage('./assets/coin_50.png');
      this.score = 50;
    } else if (mathRandomed >= 0.02 && mathRandomed < 0.4) {
      this.image = CanvasUtil.loadNewImage('./assets/coin_25.png');
      this.score = 25;
    } else if (mathRandomed >= 0.4 && mathRandomed < 0.65) {
      this.image = CanvasUtil.loadNewImage('./assets/coin_10.png');
      this.score = 10;
    } else {
      this.image = CanvasUtil.loadNewImage('./assets/coin_5.png');
      this.score = 5;
    }
    this.posX = startX;
    this.posY = 0;
    this.speed = 0.2;
  }
}
