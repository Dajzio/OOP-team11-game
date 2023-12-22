import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import ScoreItem from './ScoreItem.js';

export default class Player extends Drawable {
  public body: Drawable[];

  private speed: number;

  private movingUp: boolean;

  private movingDown: boolean;

  private movingLeft: boolean;

  private movingRight: boolean;

  private speedx: number;

  private speedy: number;

  private speedup: boolean;

  public constructor(maxX: number, maxY: number) {
    super();
    this.speed = 3;
    this.posX = maxX / 2;
    this.posY = maxY / 2;
    this.image = CanvasUtil.loadNewImage('./assets/head.png');
    this.body = [];
    this.movingUp = false;
    this.movingDown = false;
    this.movingLeft = false;
    this.movingRight = false;
  }

  /**
   *
   * @param direction
   */
  public move(direction: number): void {
    const snakeArray: string[] = ['./assets/head.png', './assets/head-back.png', './assets/head-up.png', './assets/head-down.png', './assets/vertical.png'];
    if (direction === 1 && this.posY > 0) {
      this.posY -= this.speed;
      this.image = CanvasUtil.loadNewImage(snakeArray[2]);
      this.body.forEach((part) => {
        part.changePositiion('vertical');
      });
      this.movingUp = true;
      this.movingDown = false;
      this.movingLeft = false;
      this.movingRight = false;
    } else if (direction === 2 && this.posX < 2300) {
      this.posX += this.speed;
      this.image = CanvasUtil.loadNewImage(snakeArray[0]);

      this.body.forEach((part) => {
        part.changePositiion('horizontal');
        this.movingUp = false;
        this.movingDown = false;
        this.movingLeft = false;
        this.movingRight = true;
      });
    } else if (direction === 3 && this.posY < 1400) {
      this.posY += this.speed;

      this.image = CanvasUtil.loadNewImage(snakeArray[3]);
      this.body.forEach((part) => {
        part.changePositiion('vertical');
      });
      this.movingUp = false;
      this.movingDown = true;
      this.movingLeft = false;
      this.movingRight = false;
    } else if (direction === 4 && this.posX > 0) {
      this.posX -= this.speed;
      this.image = CanvasUtil.loadNewImage(snakeArray[1]);

      this.body.forEach((part) => {
        part.changePositiion('horizontal');
      });
      this.movingUp = false;
      this.movingDown = false;
      this.movingLeft = true;
      this.movingRight = false;
    }
    this.moveBody(direction);
  }

  /**
   *
   * @param direction
   */

  /**
   *
   * @param direction
   */
  public moveBody(direction:number): void {
    this.body.forEach((part, index) => {
      // move body in the same direction as the head

      if (direction === 1) {
        part.setPosY(part.getPosY() - this.speed);
      } else if (direction === 2) {
        part.setPosX(part.getPosX() + this.speed);
      } else if (direction === 3) {
        part.setPosY(part.getPosY() + this.speed);
      } else if (direction === 4) {
        part.setPosX(part.getPosX() - this.speed);
      }
    });
  }

  /**
   *
   * @param item
   */
  public collidesWithItem(item: ScoreItem): boolean {
    if (this.posX > item.getPosX() && this.posX < item.getPosX() + item.getwidth()
    && this.posY > item.getPosY() && this.posY < item.getPosY() + item.getheight()) return true;
    return false;
  }

  /**
   *
   * @param direction
   */
  public isMoving(direction: number): boolean {
    if (direction === 1) return this.movingUp;
    if (direction === 2) return this.movingRight;
    if (direction === 3) return this.movingDown;
    if (direction === 4) return this.movingLeft;
    return false;
  }

  /**
   *
   * @param elapsed
   */
  public update(elapsed: number): void {
    this.posX += this.speedx;
    this.posY -= this.speedy;
  }

  /**
   *
   */
  public speeedup(): void {
    this.speed += 1;
  }
}
