import dayjs from 'dayjs';
// eslint-disable-next-line no-undef
dayjs.extend(require('dayjs/plugin/duration'));

const DATE_FORMAT = 'MMM D';
const DATE_FORMAT_TIME = 'HH:mm';
const DATE_FORMAT_DIFF = 'DD [D] HH [H] mm [M]';
const DATE_FORMAT_DATE_TIME = 'DD/MM/YY HH:MM'

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizeTaskDueTime(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT_TIME) : '';
}

function dateDiff(dateFrom, dateTo) {
  const dateFromJs = dayjs(dateFrom, 'YYYY-MM-DDTHH:mm:ss.639Z');
  const dateToJs = dayjs(dateTo, 'YYYY-MM-DDTHH:mm:ss.639Z');
  const diffMs = dateToJs.diff(dateFromJs);
  const timeDuration = dayjs.duration(diffMs);
  return timeDuration.format(DATE_FORMAT_DIFF);
}

function humanizeTaskDueDateTime(date) {
  const dateJs = dayjs(date, 'YYYY-MM-DDTHH:mm:ss.639Z');
  return dateJs.format(DATE_FORMAT_DATE_TIME);
}

export {getRandomArrayElement, humanizeTaskDueDate, humanizeTaskDueTime, humanizeTaskDueDateTime, dateDiff};
