import AbstractView from '../framework/view/abstract-view';
import { FiltersPoint } from '../const';
import { capitalizeFirstLetter } from '../utils';

const generateFilterButton = (filters) => filters.map((filter) => (`
  <div class="trip-filters__filter">
    <input
      id="filter-${filter.type}"
      class="trip-filters__filter-input visually-hidden"
      type="radio"
      name="trip-filter"
      value="${filter.type}"
      ${filter.type === FiltersPoint.EVERYTHING ? 'checked' : ''}
      ${filter.count === 0 ? 'disabled' : ''}
    >
    <label class="trip-filters__filter-label" for="filter-everything">${capitalizeFirstLetter(filter.type)}</label>
    </div>
`)).join('');

function createFilterTemplate(filters){
  return (`
    <div class="trip-main_trip-controls" trip-controls>
      <div class="trip-controls_filters"
        <h2 class="visually-hidden">Filter events</h2>
        <form class="trip-filters" action="#" method="get">

          ${generateFilterButton(filters)}
          <button class="visually-hidden" type="submit">Accept filter</button>
        </form>
      </div>
    </div>`
  );
}

export default class ListFilterView extends AbstractView {

  #filters = null;

  constructor({filters}){
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterTemplate(this.#filters);
  }
}
