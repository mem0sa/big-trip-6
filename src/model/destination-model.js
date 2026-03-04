import { mockDestination } from '../mock/destination';

export default class DestinationModel {
  destination = mockDestination;

  getDestination() {
    return this.destination;
  }

  getDestinationById(id) {
    const allDestinations = this.getDestination();
    return allDestinations.find((item) => item.id === id);
  }
}
