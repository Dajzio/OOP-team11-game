import Scene from './Scene.js';
import CanvasUtil from './CanvasUtil.js';
export default class SceneWin extends Scene {
    processInput(keyListener) {
    }
    update(elapsed) {
        return null;
    }
    render(canvas) {
        CanvasUtil.writeTextToCanvas(canvas, 'You won!', canvas.width / 2, canvas.height / 2, 'center', 'serif', 48, 'black');
    }
}
//# sourceMappingURL=SceneWin%20copy.js.map