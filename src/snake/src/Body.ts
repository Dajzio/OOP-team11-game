import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';

export default class Body extends Drawable {
  private position: string = 'vertical';


  public constructor(x: number, y: number) {
    super();
    this.posX = x;
    this.posY = y;
    this.image = CanvasUtil.loadNewImage('./assets/vertical.png');
  }

  // });
  // if (this.player.getDirection() === 1) {
  //   this.image = CanvasUtil.loadNewImage(snakeArray[0]);
  // } else if (this.player.getDirection() === 3) {
  //   this.image = CanvasUtil.loadNewImage(snakeArray[0]);
  // } else if (this.player.getDirection() === 2) {
  //   this.image = CanvasUtil.loadNewImage(snakeArray[1]);
  // } else if (this.player.getDirection() === 4) {
  //   this.image = CanvasUtil.loadNewImage(snakeArray[1]);
  // }
}
