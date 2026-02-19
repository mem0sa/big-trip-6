import CreationFormView from '../view/creation-form-view';
import ListSortView from '../view/list-sort-view';
import PointView from '../view/point-view';
import RedactionFormView from '../view/redaction-form-view';
import PointsListView from '../view/points-list-view';
import {render} from '../render';

export default class PointsPresenter {
  pointsComponent = new PointsListView();

  constructor({pointsContainer}) {
    this.pointsContainer = pointsContainer;
  }

  init() {
    render(new ListSortView(), this.pointsContainer);
    render(this.pointsComponent, this.pointsContainer);
    render(new RedactionFormView(), this.pointsComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointsComponent.getElement());
    }

    render(new CreationFormView(), this.pointsComponent.getElement());
  }
}
