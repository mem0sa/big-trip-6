import CreationFormView from './view/creation-form-view';
import ListFilterView from './view/list-filter-view';
import ListSortView from './view/list-sort-view';
import PointView from './view/point-view';
import RedactionFormView from './view/redaction-form-view';
import {render} from './render';

const filterContainer = document.querySelector('.trip-controls__filters');
const tripContainer = document.querySelector('.trip-events');

render(new ListFilterView(), filterContainer);
render(new ListSortView(), tripContainer);
render(new RedactionFormView(), tripContainer);
render(new PointView(), tripContainer);
render(new PointView(), tripContainer);
render(new PointView(), tripContainer);
render(new CreationFormView(), tripContainer);
