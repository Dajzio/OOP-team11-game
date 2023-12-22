/* eslint-disable @typescript-eslint/no-unused-vars */
import CanvasUtil from './CanvasUtil.js';
import InstructionsScene from './InstructionScene.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import MouseListener from './MouseListener.js';
import QuestionScene from './QuestionScene.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';

export default class VictoryScene extends Scene {
  private starting: boolean;

  private logo: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.starting = false;
    this.logo = CanvasUtil.loadNewImage('./assets/winner.jpg');
  }

  /**
   *
   * @param mouseListener yes
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
    if (this.starting) return new SceneStart(this.maxX, this.maxY);
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
    CanvasUtil.writeTextToCanvas(canvas, 'Press [S] to play again', canvas.width / 2, canvas.height / 2 + 300, 'center', 'serif', 48, 'red');
  }
}
