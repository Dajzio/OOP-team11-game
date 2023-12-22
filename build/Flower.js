import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';
export default class Flower extends ScoreItem {
    timeToNextChange;
    constructor(maxX, maxY) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/flower_0.png');
        this.timeToNextChange = Math.floor(Math.random() * 5 + 10);
        this.scoreModifier = 1;
        this.posX = Math.random() * maxX;
        this.posY = Math.random() * maxY;
        console.log(this.image.src);
        const timeInterval = setInterval(() => {
            this.timeToNextChange -= 1;
            if (this.image === CanvasUtil.loadNewImage('./assets/flower_3.png'))
                clearInterval(timeInterval);
        }, 1000);
    }
    update(elapsed) {
        if (this.timeToNextChange < 0) {
            if (this.image.src.includes('assets/flower_0.png')) {
                this.image = CanvasUtil.loadNewImage('./assets/flower_1.png');
                this.scoreModifier = 3;
            }
            else if (this.image.src.includes('assets/flower_1.png')) {
                this.image = CanvasUtil.loadNewImage('./assets/flower_2.png');
                this.scoreModifier = 5;
            }
            else if (this.image.src.includes('assets/flower_2.png')) {
                this.image = CanvasUtil.loadNewImage('./assets/flower_3.png');
                this.scoreModifier = 7;
            }
            this.timeToNextChange = Math.floor(Math.random() * 5 + 10);
        }
    }
}
//# sourceMappingURL=Flower.js.map