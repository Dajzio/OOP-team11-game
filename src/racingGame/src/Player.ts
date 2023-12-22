import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import ScoreItem from './ScoreItem.js';

export default class Player extends Drawable {
  public constructor(startX: number, startY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/player.png');
    this.posX = startX;
    this.posY = startY;
  }

  /**
   * Moves the player car to one of the lanes.
   *
   * @param newX determines the posX of lane
   */
  public move(newX: number): void {
    if (newX === 165) this.posX = 165;
    else if (newX === 285) this.posX = 285;
    else if (newX === 410) this.posX = 410;
  }

  public setPosX(posX: number): void {
    this.posX = posX;
  }

  /**
   * Function which chekcs if the player collides with a car or a coin.
   *
   * @param item accepts one of scoreItems: a car or a coin.
   * @returns true or false depending on the collision
   */
  public collideWithItem(item: ScoreItem): boolean {
    if (item.getPosX() + item.getWidth() > this.posX
    && item.getPosX() < this.posX + this.image.width
    && item.getPosY() + item.getHeight() > this.posY
    && item.getPosY() < this.posY + this.image.height) return true;
    return false;
  }
}
