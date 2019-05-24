import types from 'store/products/types';
import { createReducer } from 'store/utils';

const request = (state, action) => {
  const { searchString } = action.payload;
  return {
    ...state,
    loading: true,
    searchString
  };
};

const success = (state, action) => {
  const {
    response: { results, paging }
  } = action.payload;
  return {
    ...state,
    loading: false,
    products: results,
    paging
  };
};

const addToCart = (state, action) => {
  const cart = [...state.cart];
  const product = action.payload.product;
  const exProduct = cart.find(cartProduct => cartProduct.id === product.id);

  if (exProduct) {
    exProduct.quantity = exProduct.quantity + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  return {
    ...state,
    cart
  };
};

const removeFromCart = (state, action) => ({
  ...state,
  cart: state.cart.filter(product => product.id !== action.payload.id)
});

const ACTION_HANDLERS = {
  [types.REQUEST]: request,
  [types.SUCCESS]: success,
  [types.ADD_TO_CART]: addToCart,
  [types.REMOVE_FROM_CART]: removeFromCart
};

const initialState = {
  products: [],
  cart: [],
  loading: false,
  searchString: '',
  paging: {
    offset: 0,
    limit: 0,
    total: 0
  }
};

export default createReducer(initialState, ACTION_HANDLERS);
