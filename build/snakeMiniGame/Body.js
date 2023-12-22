import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
export default class Body extends Drawable {
    position = 'vertical';
    constructor(x, y) {
        super();
        this.posX = x;
        this.posY = y;
        this.image = CanvasUtil.loadNewImage('./assets/vertical.png');
    }
}
//# sourceMappingURL=Body.js.map