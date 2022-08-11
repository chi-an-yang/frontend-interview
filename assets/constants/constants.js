export const FULL_SEARCH_ENDPOINT =
  'https://demo4856630.mockable.io/fullSearch';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';
export const COURSE_TYPE = [
  { key: 'online', text: '線上課程', isChecked: false },
  { key: 'offline', text: '真人直播', isChecked: false },
  { key: 'program', text: '增能學程', isChecked: false },
  { key: 'goodjob', text: '就業養成', isChecked: false },
];

export const COURSE_HOUR = [
  { min: 0, max: 14400, text: '0 小時 - 4 小時', isChecked: false },
  { min: 14401, max: 604800, text: '4 小時 - 1 日', isChecked: false },
  { min: 604801, max: 1814400, text: '1 日 - 3 日', isChecked: false },
  { min: 1814401, max: 3628800, text: '3 日 - 1 週', isChecked: false },
];

export const SELECTOR_OPT = [
  { value: 'highToLow', displayText: '價格高至低' },
  { value: 'lowToHigh', displayText: '價格低至高' },
];
