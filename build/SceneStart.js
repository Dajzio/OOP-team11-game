import CanvasUtil from './CanvasUtil.js';
import InstructionsScene from './InstructionScene.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
export default class SceneStart extends Scene {
    starting;
    logo;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.starting = false;
        this.logo = CanvasUtil.loadNewImage('./assets/start.png');
    }
    processInput(mouseListener, keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_S))
            this.starting = true;
    }
    update(elapsed) {
        if (this.starting)
            return new InstructionsScene(this.maxX, this.maxY);
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.logo, (canvas.width - this.logo.width) / 2, (canvas.height - this.logo.height) / 2);
        CanvasUtil.writeTextToCanvas(canvas, 'Press [S] to start', canvas.width / 2, canvas.height / 8, 'center', 'serif', 48, 'white');
    }
}
//# sourceMappingURL=SceneStart.js.map