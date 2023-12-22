/* eslint-disable jsdoc/require-param-description */
import CanvasUtil from './CanvasUtil.js';
import Carpet from './Carpet.js';
import Drawable from './Drawable.js';
import Player from './Player.js';

export default class PlayerMap extends Player {
  public score: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.posX = maxX / 2;
    this.posY = maxY / 2;
    this.image = CanvasUtil.loadNewImage('./assets/PlayerMap.png');
  }

  /**
   *
   * @param nPC
   * @returns yes
   */
  public isCollidingNPC(nPC: Drawable): boolean {
    if (nPC.getPosX() + nPC.getWidth() > this.posX
      && nPC.getPosX() < this.posX + this.image.width
      && nPC.getPosY() + nPC.getHeight() > this.posY
      && nPC.getPosY() < this.posY + this.image.height) return true;
    return false;
  }

  /**
   *
   * @param carpet yes
   * @returns yes
   */
  public isCollidingCarpet(carpet: Carpet): boolean {
    if (carpet.getPosX() + carpet.getWidth() > this.posX
      && carpet.getPosX() < this.posX + this.image.width
      && carpet.getPosY() + carpet.getHeight() > this.posY
      && carpet.getPosY() < this.posY + this.image.height) return true;
    return false;
  }
}
