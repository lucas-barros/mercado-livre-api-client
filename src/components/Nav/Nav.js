import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { StyledNav } from './nav.style';
import { HandShake } from 'img';
import { FiShoppingCart } from 'react-icons/fi';

const numberOfItems = cart => cart.reduce((acc, product) => acc + product.quantity, 0);

const Nav = ({ cart }) => (
  <StyledNav productsNum={numberOfItems(cart)}>
    <div className="nav-brand">
      <Link to="/" className="nav-link">
        <img className="nav-logo" src={HandShake} alt="Nav logo" />
      </Link>
      Mercado livre API
    </div>

    <Link to="/cart" className="nav-cart">
      <FiShoppingCart size="30" />
    </Link>
  </StyledNav>
);

const mapStateToProps = ({ productsState }) => ({
  cart: productsState.cart
});

export default connect(mapStateToProps)(Nav);
