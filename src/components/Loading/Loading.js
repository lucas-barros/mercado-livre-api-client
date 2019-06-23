import React from 'react';
import { connect } from 'react-redux';
import { StyledLoader } from './loader.style';
import { Loader as LoaderImg } from 'img';

const Loader = () => (
  <StyledLoader>
    <img src={LoaderImg} alt="Loading icon" />
  </StyledLoader>
);

let Loading = ({ children, loading }) => children({ loading });

const mapStateToProps = ({ productsState }) => ({
  loading: productsState.loading
});

Loading = connect(mapStateToProps)(Loading);

export { Loading, Loader };
