import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
export default class Body extends Drawable {
    player;
    constructor(maxX, maxY) {
        super();
        this.posX = maxX;
        this.posY = maxY;
        this.image = CanvasUtil.loadNewImage('./assets/vertical.png');
    }
}
//# sourceMappingURL=body.js.map