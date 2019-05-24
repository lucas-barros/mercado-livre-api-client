import React from 'react';
import { StyledList } from './list.style';

const List = ({ children, prev, next, hasNext, hasPrev, count }) => {
  return (
    <StyledList count={count}>
      {children}
      <div className="pagination">
        <button disabled={!hasPrev} onClick={prev}>
          Prev
        </button>
        <button disabled={!hasNext} onClick={next}>
          Next
        </button>
      </div>
    </StyledList>
  );
};

export default List;
