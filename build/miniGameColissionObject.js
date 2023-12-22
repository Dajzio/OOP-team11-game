import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
export default class InvisibleObject extends Drawable {
    constructor(maxX, maxY, objectNumber) {
        super();
        if (objectNumber === 1) {
            this.posX = 800;
            this.posY = 600;
            this.image = CanvasUtil.loadNewImage('./assets/greenCarpetCollide.png');
        }
        else if (objectNumber === 2) {
            this.posX = 600;
            this.posY = 200;
            this.image = CanvasUtil.loadNewImage('./assets/greenCarpetCollide.png');
        }
        else if (objectNumber === 3) {
            this.posX = 500;
            this.posY = 200;
            this.image = CanvasUtil.loadNewImage('./assets/greenCarpetCollide.png');
        }
    }
}
//# sourceMappingURL=miniGameColissionObject.js.map