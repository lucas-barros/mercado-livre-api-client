import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from 'store/products/actions';
import { Product } from 'components';
import { Flex, Box } from '@rebass/grid';
import { StyledCart } from './cart.style';
import { EmptyCart } from 'img';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((total, { price, quantity }) => (total += price * quantity), 0);
  const isCartEmpty = cart.length === 0;
  return (
    <StyledCart>
      <Flex flexDirection="column" justifyContent="center">
        <Box>
          {isCartEmpty > 0 ? (
            <Box width={[1, 1 / 2]} m="auto">
              <img className="img-fluid" src={EmptyCart} alt="" />
            </Box>
          ) : (
            <div className="cart-total">Total: {total.toFixed(2)}</div>
          )}
        </Box>
        <Box width={[1]} mt={1}>
          <Flex flexWrap="wrap">
            {cart.map(product => (
              <Box key={product.id} width={[1]} pb={[2]}>
                <Product {...product} direction="row" handler={() => removeFromCart(product.id)} buttonText="remove" />
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </StyledCart>
  );
};

const mapDispatchToProps = {
  removeFromCart
};

const mapStateToProps = ({ productsState }) => ({
  cart: productsState.cart
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
