import styled from 'styled-components';
import { pxToRem } from 'styles';

const StyledCart = styled.div`
  .cart-items {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .cart-total {
    margin-top: ${pxToRem(30)};
    font-size: ${pxToRem(24)};
    font-weight: bold;
  }
`;

export { StyledCart };
