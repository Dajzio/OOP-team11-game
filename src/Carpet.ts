import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';

export default class Carpet extends Drawable {
  public constructor(maxX: number, maxY: number, objectNumber: number) {
    super();
    if (objectNumber === 1) {
      this.posX = 1428;
      this.posY = 23;
      this.image = CanvasUtil.loadNewImage('./assets/greenCarpetCollide.png');
    } else if (objectNumber === 2) {
      this.posX = 355;
      this.posY = 23;
      this.image = CanvasUtil.loadNewImage('./assets/blueCarpetCollide.png');
    } else if (objectNumber === 3) {
      this.posX = 893;
      this.posY = 23;
      this.image = CanvasUtil.loadNewImage('./assets/redCarpetCollider.png');
    }
  }
}
