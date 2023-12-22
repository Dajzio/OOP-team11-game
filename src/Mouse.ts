/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param-description */
/* eslint-disable max-len */
import Button from './button.js';
import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';

export default class Mouse extends Drawable {
  public constructor() {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/coursor.png');
  }

  /**
   *
   * @param currentX
   * @param currentY
   */
  public move(currentX: number, currentY: number): void {
    this.posX = currentX;
    this.posY = currentY;
  }

  /**
   *
   * @param item
   * @param button
   */
  public collidesWithButton(button: Button): boolean {
    if (this.posX > button.getPosX() && this.posX < button.getPosX() + button.getWidth()
      && this.posY > button.getPosY() && this.posY < button.getPosY() + button.getHeight()) return true;
    return false;
  }
}
