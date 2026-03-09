import { mockPoints } from '../mock/point';

const POINTS_AMOUNT = 6;
export default class PointsModel {
  #points = mockPoints;

  get points() {
    return this.#points.slice(0, POINTS_AMOUNT);
  }
}
