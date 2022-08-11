import { all } from 'redux-saga/effects';
import fullSearchSaga from './fullSearchSaga';

function* rootSaga() {
  yield all([fullSearchSaga()]);
}

export default rootSaga;
