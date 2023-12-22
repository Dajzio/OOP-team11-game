import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
export default class Mouse extends Drawable {
    constructor() {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/coursor.png');
    }
    move(currentX, currentY) {
        this.posX = currentX;
        this.posY = currentY;
    }
    collidesWithButton(button) {
        if (this.posX > button.getPosX() && this.posX < button.getPosX() + button.getWidth()
            && this.posY > button.getPosY() && this.posY < button.getPosY() + button.getHeight())
            return true;
        return false;
    }
}
//# sourceMappingURL=Mouse.js.map