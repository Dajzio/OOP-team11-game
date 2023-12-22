import Drawable from './Drawable.js';

export default abstract class ScoreItem extends Drawable {
  protected score: number;

  protected speed: number;

  /**
   * Updates position of ScoreItem
   *
   * @param elapsed
   */
  public update(elapsed: number): void {
    this.posY += this.speed * elapsed;
  }

  public getScore(): number {
    return this.score;
  }
}
