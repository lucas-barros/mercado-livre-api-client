import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { MLService } from 'services';
import types from 'store/products/types';

function* fetchProducts(action) {
  try {
    yield delay(500);

    const response = yield call(MLService.search, action.payload);

    yield put({ type: types.SUCCESS, payload: { response } });
  } catch (e) {
    yield put({ type: types.FAILURE, message: e.message });
  }
}

function* productsSagas() {
  yield takeLatest(types.REQUEST, fetchProducts);
}

export { productsSagas };
