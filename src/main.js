import ListFilterView from './view/list-filter-view';
import {render} from './render';
import PointsPresenter from './presenter/points-presenter.js';
import PointsModel from './model/points-model.js';

const filterContainer = document.querySelector('.trip-controls__filters');
const tripContainer = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const pointsPresenter = new PointsPresenter({
  pointsContainer: tripContainer,
  pointsModel
});

render(new ListFilterView(), filterContainer);
pointsPresenter.init();
