import Drawable from './Drawable.js';
export default class ScoreItem extends Drawable {
    score;
    speed;
    update(elapsed) {
        this.posY += this.speed * elapsed;
    }
    getScore() {
        return this.score;
    }
}
//# sourceMappingURL=ScoreItem.js.map