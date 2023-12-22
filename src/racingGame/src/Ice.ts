import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

export default class Ice extends ScoreItem {
  public constructor(startX: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/ice.png');
    this.score = 0;
    this.posX = startX;
    this.posY = 0;
    this.speed = 0.1;
  }
}
