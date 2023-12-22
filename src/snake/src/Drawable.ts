import CanvasUtil from './CanvasUtil.js';

export default abstract class Drawable {
  public image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getwidth(): number {
    return this.image.width;
  }

  public getheight(): number {
    return this.image.height;
  }

  public setPosX(posX: number): void {
    this.posX = posX;
  }

  public setPosY(posY: number): void {
    this.posY = posY;
  }

  public setImage(image: HTMLImageElement): void {
    this.image = image;
  }

  /**
   * changePositiion
   *
   * @param input
   */
  public changePositiion(input: string) {
    // change the position of the body part based on the position of the previous body part
    if (input === 'vertical') {
      this.image = CanvasUtil.loadNewImage('./assets/vertical-up.png');
    } else if (input === 'horizontal') {
      this.image = CanvasUtil.loadNewImage('./assets/vertical.png');
    }
  }

  /**
   *
   * @param canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
