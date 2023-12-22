/* eslint-disable jsdoc/require-returns */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Drawable from './Drawable.js';
import KeyListener from './KeyListener.js';

export default class Button extends Drawable {
  private buttonCodeValue: number;

  public constructor(code: number, image: HTMLImageElement, posX: number, posY: number) {
    super();
    this.buttonCodeValue = code;
    this.image = image;
    this.posX = posX;
    this.posY = posY;
  }

  /**
   *
   */
  public getButtonCode() {
    return this.buttonCodeValue;
  }
}
