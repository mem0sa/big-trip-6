import CreationFormView from '../view/creation-form-view';
import ListFilterView from '../view/list-filter-view';
import ListSortView from '../view/list-sort-view';
import PointView from '../view/point-view';
import RedactionFormView from '../view/redaction-form-view';
import PointsContainerView from '../view/points-container-view';
import {render} from '../framework/render';

export default class PointsPresenter {
  pointsComponent = new PointsContainerView();

  constructor({pointsContainer, filterContainer, pointsModel, destinationModel, offersModel}) {
    this.pointsContainer = pointsContainer;
    this.filterContainer = filterContainer;
    this.pointsModel = pointsModel;
    this.destinationModel = destinationModel;
    this.offersModel = offersModel;
  }

  renderListFilter(){
    render(new ListFilterView(), this.filterContainer);
  }

  renderListSort(){
    render(new ListSortView(), this.pointsContainer);
  }

  renderPointsContainer(){
    render(this.pointsComponent, this.pointsContainer);
  }

  renderRedactionForm(){
    const redactionForm = new RedactionFormView({
      point: this.pointsModels[0],
      offersById: [...this.offersModel.getOffersById(this.pointsModels[0].type, this.pointsModels[0].offers)],
      offersByType: this.offersModel.getOffersByType(this.pointsModels[0].type),
      destination: this.destinationModel.getDestinationById(this.pointsModels[0].destination)
    });
    render(redactionForm, this.pointsComponent.element);
  }

  renderPoints(){
    for (let i = 1; i < this.pointsModels.length - 1; i++) {
      const point = new PointView({
        point: this.pointsModels[i],
        offers: [...this.offersModel.getOffersById(this.pointsModels[i].type, this.pointsModels[i].offers)],
        destination: this.destinationModel.getDestinationById(this.pointsModels[i].destination)
      });
      render(point, this.pointsComponent.element);
    }
  }

  renderCreationForm(){
    const creationForm = new CreationFormView({
      point: this.pointsModels.at(-1),
      offersByType: this.offersModel.getOffersByType(this.pointsModels.at(-1).type),
      destination: this.destinationModel.getDestinationById(this.pointsModels.at(-1).destination)
    });
    render(creationForm, this.pointsComponent.element);
  }

  init() {
    this.pointsModels = [...this.pointsModel.points];

    this.renderListFilter();
    this.renderListSort();
    this.renderPointsContainer();
    this.renderRedactionForm();

    this.renderPoints();

    this.renderCreationForm();
  }
}
