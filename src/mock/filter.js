import { filter } from '../const';

const generateFilters = (points) => Object.entries(filter).map(([filterType, filterPatternByType]) => ({
  type: filterType,
  count: filterPatternByType(points).length
}));

export { generateFilters };
