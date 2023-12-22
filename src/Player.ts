import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';

export default abstract class Player extends Drawable {
  protected speed: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.speed = 5;
    this.posX = maxX / 2;
    this.posY = maxY / 2;
    this.image = CanvasUtil.loadNewImage('./assets/playerMap.png');
  }

  /**
   *
   * @param direction movement
   */
  public move(direction: number): void {
    if (direction === 1) this.posY -= this.speed;
    else if (direction === 2) this.posX += this.speed;
    else if (direction === 3) this.posY += this.speed;
    else if (direction === 4) this.posX -= this.speed;
  }

  public getImage(): HTMLImageElement {
    return this.image;
  }

  public setPositionX(posX: number): void {
    this.posX = posX;
  }

  public setPositionY(posY: number): void {
    this.posY = posY;
  }
}
