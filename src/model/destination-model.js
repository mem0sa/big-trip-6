import { mockDestination } from '../mock/destination';

export default class DestinationModel {
  #destination = mockDestination;

  get destination() {
    return this.#destination;
  }

  getDestinationById(id) {
    const allDestinations = this.destination;
    return allDestinations.find((item) => item.id === id);
  }
}
