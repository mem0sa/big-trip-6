import CreationFormView from '../view/creation-form-view';
import ListFilterView from '../view/list-filter-view';
import ListSortView from '../view/list-sort-view';
import PointView from '../view/point-view';
import RedactionFormView from '../view/redaction-form-view';
import PointsContainerView from '../view/points-container-view';
import ListMessageView from '../view/list-message';
import { generateFilters } from '../mock/filter';
import { render, replace } from '../framework/render';
import { EMPTY_LIST_MESSAGE } from '../const';

export default class PointsPresenter {
  pointsComponent = new PointsContainerView();

  constructor({pointsContainer, filterContainer, pointsModel, destinationModel, offersModel}) {
    this.pointsContainer = pointsContainer;
    this.filterContainer = filterContainer;
    this.pointsModel = pointsModel;
    this.destinationModel = destinationModel;
    this.offersModel = offersModel;
  }

  renderListFilter(pointsModel){
    const filters = generateFilters(pointsModel);
    render(new ListFilterView({filters}), this.filterContainer);
  }

  renderListSort(){
    render(new ListSortView(), this.pointsContainer);
  }

  renderPointsContainer(){
    render(this.pointsComponent, this.pointsContainer);
  }

  renderListMessage(){
    render(new ListMessageView({message: EMPTY_LIST_MESSAGE}), this.pointsContainer);
  }

  renderPoint(point, offers, offersByType, destination){
    const escKeyDownHandler = (evt) => {
      if(evt.key === 'Escape') {
        evt.preventDefault();
        replaceRedactionPointToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const onOpenRedactionButtonClick = () => {
      replacePointToRedactionPoint();
      document.addEventListener('keydown', escKeyDownHandler);
    };

    const onCloseRedactionButtonClick = () => {
      replaceRedactionPointToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    const onSubmitButtonClick = () => {
      replaceRedactionPointToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    const pointComponent = new PointView({
      point,
      offers,
      destination,
      onOpenRedactionButtonClick
    });

    const redactionPointComponent = new RedactionFormView({
      point,
      offersByType,
      destination,
      onCloseRedactionButtonClick,
      onSubmitButtonClick
    });

    function replacePointToRedactionPoint() {
      replace(redactionPointComponent, pointComponent);
    }

    function replaceRedactionPointToPoint() {
      replace(pointComponent, redactionPointComponent);
    }

    render(pointComponent, this.pointsComponent.element);
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

    this.renderListFilter(this.pointsModels);
    this.renderListSort();
    this.renderPointsContainer();

    if (this.pointsModels.length === 0){
      this.renderListMessage();
    }

    for (let i = 1; i < this.pointsModels.length - 1; i++) {
      this.renderPoint(
        this.pointsModels[i],
        [...this.offersModel.getOffersById(this.pointsModels[i].type, this.pointsModels[i].offers)],
        this.offersModel.getOffersByType(this.pointsModels[i].type),
        this.destinationModel.getDestinationById(this.pointsModels[i].destination));
    }

    this.renderCreationForm();
  }
}
