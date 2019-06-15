import React from 'react';
import { StyledList } from './list.style';
import { variables } from 'styles';
import { Link } from 'react-scroll';

const List = ({ children, prev, next, hasNext, hasPrev, count }) => {
  return (
    <StyledList count={count}>
      {children}
      <div className="pagination">
        <Link
          activeClass="active"
          to="search"
          spy={true}
          smooth={true}
          offset={-(variables.navHeight + 20)}
          duration={1000}
        >
          <button disabled={!hasPrev} onClick={prev}>
            Prev
          </button>
          <button disabled={!hasNext} onClick={next}>
            Next
          </button>
        </Link>
      </div>
    </StyledList>
  );
};

export default List;
