import ListFilterView from './view/list-filter-view';
import {render} from './render';
import PointsPresenter from './presenter/points-presenter.js';

const filterContainer = document.querySelector('.trip-controls__filters');
const tripContainer = document.querySelector('.trip-events');
const pointsPresenter = new PointsPresenter({pointsContainer: tripContainer});

render(new ListFilterView(), filterContainer);
pointsPresenter.init();
