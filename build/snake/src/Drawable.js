import CanvasUtil from './CanvasUtil.js';
export default class Drawable {
    image;
    posX;
    posY;
    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }
    getwidth() {
        return this.image.width;
    }
    getheight() {
        return this.image.height;
    }
    setPosX(posX) {
        this.posX = posX;
    }
    setPosY(posY) {
        this.posY = posY;
    }
    setImage(image) {
        this.image = image;
    }
    changePositiion(input) {
        if (input === 'vertical') {
            this.image = CanvasUtil.loadNewImage('./assets/vertical-up.png');
        }
        else if (input === 'horizontal') {
            this.image = CanvasUtil.loadNewImage('./assets/vertical.png');
        }
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=Drawable.js.map