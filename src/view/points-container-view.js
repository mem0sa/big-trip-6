import {createElement} from '../render.js';

function createPointContainerTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class PointsContainerView {
  getTemplate() {
    return createPointContainerTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
