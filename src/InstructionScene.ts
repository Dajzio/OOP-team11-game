/* eslint-disable jsdoc/require-param-description */
/* eslint-disable @typescript-eslint/no-unused-vars */
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import MouseListener from './MouseListener.js';
import Scene from './Scene.js';

export default class InstructionsScene extends Scene {
  private starting: boolean;

  private logo: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.starting = false;
    this.logo = CanvasUtil.loadNewImage('./assets/instructions.png');
  }

  /**
   *
   * @param mouseListener
   * @param keyListener yes
   */
  public processInput(mouseListener: MouseListener, keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_S)) this.starting = true;
  }

  // eslint-disable-next-line jsdoc/require-returns
  /**
   *
   * @param elapsed time
   */
  public update(elapsed: number): Scene {
    if (this.starting) return new Level(this.maxX, this.maxY);
    return null;
  }

  /**
   *
   * @param canvas yes
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black');
    // eslint-disable-next-line max-len
    CanvasUtil.drawImage(canvas, this.logo, (canvas.width - this.logo.width) / 2, (canvas.height - this.logo.height) / 2);
    CanvasUtil.writeTextToCanvas(canvas, 'You need to talk with NPC', 1300, 400, 'center', 'serif', 24, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'and then you can go to one of', 1300, 450, 'center', 'serif', 24, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'the doors to play game!', 1300, 500, 'center', 'serif', 24, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'Have fun!', 1300, 5500, 'center', 'serif', 24, 'white');
    CanvasUtil.writeTextToCanvas(canvas, '*Watch out* This game is addictive', 1300, 600, 'center', 'serif', 24, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'If your score is more than 2', 1300, 650, 'center', 'serif', 24, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'go to red carpet and press F', 1300, 700, 'center', 'serif', 24, 'white');
  }
}
