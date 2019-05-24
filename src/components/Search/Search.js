import React from 'react';
import PropTypes from 'prop-types';
import { StyledSearch } from './search.style';

const Search = ({ handler, value, loading }) => (
  <StyledSearch loading={loading}>
    <input type="text" value={value} onChange={handler} />
  </StyledSearch>
);

Search.propTypes = {
  handler: PropTypes.func
};

export default Search;
