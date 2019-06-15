import React from 'react';
import PropTypes from 'prop-types';
import { StyledSearch } from './search.style';

const Search = ({ handler, value, loading, placeHolder }) => (
  <StyledSearch loading={loading}>
    <input type="text" placeHolder={placeHolder} value={value} onChange={handler} />
  </StyledSearch>
);

Search.propTypes = {
  handler: PropTypes.func
};

export default Search;
