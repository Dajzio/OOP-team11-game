import Drawable from './Drawable.js';
export default class Button extends Drawable {
    buttonCodeValue;
    constructor(code, image, posX, posY) {
        super();
        this.buttonCodeValue = code;
        this.image = image;
        this.posX = posX;
        this.posY = posY;
    }
    getButtonCode() {
        return this.buttonCodeValue;
    }
}
//# sourceMappingURL=button.js.map