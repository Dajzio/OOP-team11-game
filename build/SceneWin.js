import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import CanvasUtil from './CanvasUtil.js';
import SceneStart from './SceneStart.js';
export default class SceneWin extends Scene {
    continue;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.continue = false;
    }
    processInput(mouseListener, keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE))
            this.continue = true;
    }
    update(elapsed) {
        if (this.continue)
            return new SceneStart(this.maxX, this.maxY);
        return null;
    }
    render(canvas) {
        CanvasUtil.writeTextToCanvas(canvas, 'You won!', canvas.width / 2, canvas.height / 2, 'center', 'serif', 48, 'green');
        CanvasUtil.writeTextToCanvas(canvas, 'Press [space] to continue!', canvas.width / 2, (canvas.height / 2) + 50, 'center', 'serif', 36, 'green');
    }
}
//# sourceMappingURL=SceneWin.js.map