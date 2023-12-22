import ScoreItem from './ScoreItem.js';
import CanvasUtil from './CanvasUtil.js';

export default class Fruit extends ScoreItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = Math.floor(Math.random() * maxX) / 2;
    this.posY = Math.floor(Math.random() * maxY) / 2;
    const fruitImage = [
      {
        score: 1,
        image: '/assets/orange.png',
      },
      {
        score: 2,
        image: '/assets/plum.png',
      },
      {
        score: 3,
        image: '/assets/apple.png',
      },
    ];

    const chance = Math.floor(Math.random() * 100);
    if (chance < 36) {
      this.score = 1;
      this.image = CanvasUtil.loadNewImage(fruitImage[0].image);
      this.score = fruitImage[0].score;
    } else if (chance < 30) {
      this.score = 2;
      this.image = CanvasUtil.loadNewImage(fruitImage[1].image);
      this.score = fruitImage[1].score;
    } else {
      this.score = 3;
      this.image = CanvasUtil.loadNewImage(fruitImage[2].image);
      this.score = fruitImage[2].score;
    }
  }
}
