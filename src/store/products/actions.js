import types from './types';

const searchProducts = (searchString, offset) => ({
  type: types.REQUEST,
  payload: {
    searchString,
    offset
  }
});

const addToCart = product => ({
  type: types.ADD_TO_CART,
  payload: {
    product
  }
});

const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: {
    id
  }
});

export { searchProducts, addToCart, removeFromCart };
