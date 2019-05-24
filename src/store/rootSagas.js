import { all } from 'redux-saga/effects';
import { productsSagas } from 'store/products/sagas';

export default function* rootSagas() {
  yield all([productsSagas()]);
}
