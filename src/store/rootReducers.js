import { combineReducers } from 'redux';

import productsReducer from 'store/products/reducer';

const rootReducers = combineReducers({
  productsState: productsReducer
});

export default rootReducers;
