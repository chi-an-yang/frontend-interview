import { call, put, takeLatest, take, fork } from 'redux-saga/effects';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
} from '../assets/constants';
import { FullSearchApi } from '../assets/api';

function* fetchData() {
  try {
    const data = yield call(() =>
      FullSearchApi.get('https://demo4856630.mockable.io/fullSearch').then(
        (response) => response
      )
    );
    if (data.status === 200) {
      yield put({
        type: FETCH_DATA_SUCCESS,
        payload: { data: data.data.data },
      });
    } else {
      throw new Error(`${data.statusText}`);
    }
  } catch (error) {
    yield put({
      type: FETCH_DATA_FAILED,
      payload: { errorMessage: error },
    });
  }
}

function* fullSearchSaga() {
  // yield takeLatest(FETCH_DATA, fetchData);
  yield take(FETCH_DATA);
  yield fork(fetchData);
}

export default fullSearchSaga;
