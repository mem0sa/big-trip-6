import AbstractView from '../framework/view/abstract-view';

function createPointContainerTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class PointsContainerView extends AbstractView {
  get template() {
    return createPointContainerTemplate();
  }
}
