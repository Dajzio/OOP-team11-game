import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
export default class NPC1 extends Drawable {
    constructor(maxX, maxY) {
        super();
        this.posX = 300;
        this.posY = 300;
        this.image = CanvasUtil.loadNewImage('3.png');
    }
}
//# sourceMappingURL=NPC1.js.map