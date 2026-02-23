import CreationFormView from '../view/creation-form-view';
import ListSortView from '../view/list-sort-view';
import PointView from '../view/point-view';
import RedactionFormView from '../view/redaction-form-view';
import PointsListView from '../view/points-list-view';
import {render} from '../render';

export default class PointsPresenter {
  pointsComponent = new PointsListView();

  constructor({pointsContainer, pointsModel}) {
    this.pointsContainer = pointsContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.pointsModels = [...this.pointsModel.getPoints()];

    render(new ListSortView(), this.pointsContainer);
    render(this.pointsComponent, this.pointsContainer);
    render(new RedactionFormView(), this.pointsComponent.getElement());

    for (let i = 0; i < this.pointsModels.length; i++) {
      render(new PointView({task: this.pointsModels[i]}), this.pointsComponent.getElement());
    }

    render(new CreationFormView(), this.pointsComponent.getElement());
  }
}
