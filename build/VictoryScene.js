import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
export default class VictoryScene extends Scene {
    starting;
    logo;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.starting = false;
        this.logo = CanvasUtil.loadNewImage('./assets/winner.jpg');
    }
    processInput(mouseListener, keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_S))
            this.starting = true;
    }
    update(elapsed) {
        if (this.starting)
            return new SceneStart(this.maxX, this.maxY);
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.logo, (canvas.width - this.logo.width) / 2, (canvas.height - this.logo.height) / 2);
        CanvasUtil.writeTextToCanvas(canvas, 'Press [S] to play again', canvas.width / 2, canvas.height / 2 + 300, 'center', 'serif', 48, 'red');
    }
}
//# sourceMappingURL=VictoryScene.js.map