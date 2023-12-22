import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';

export default class NPC extends Drawable {
  public constructor(maxX: number, maxY: number, npcNumber: number) {
    super();

    if (npcNumber === 1) {
      this.posX = 1500;
      this.posY = 750;
      this.image = CanvasUtil.loadNewImage('./assets/3.png');
    } else if (npcNumber === 2) {
      this.posX = 1500;
      this.posY = 450;
      this.image = CanvasUtil.loadNewImage('./assets/7.png');
    } else if (npcNumber === 3) {
      this.posX = 300;
      this.posY = 450;
      this.image = CanvasUtil.loadNewImage('./assets/8.png');
    } else if (npcNumber === 4) {
      this.posX = 300;
      this.posY = 750;
      this.image = CanvasUtil.loadNewImage('./assets/9.png');
    }
  }
}
