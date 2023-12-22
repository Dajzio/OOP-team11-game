import Drawable from './Drawable.js';

export default abstract class ScoreItem extends Drawable {
  protected score: number;

  protected speed: number;

  public getScore(): number {
    return this.score;
  }

  /**
   *
   * @param elapsed update time
   */
  public update(elapsed: number): void {
    this.posY += elapsed * this.speed;
  }
}
