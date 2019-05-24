import styled from 'styled-components';
import { pxToRem, variables } from 'styles';

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${pxToRem(variables.navHeight)};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.22);
  background-color: ${variables.yellow};
  padding: 0 ${pxToRem(20)};

  .nav-brand {
    display: flex;
    align-items: center;
    height: 100%;
    width: ${pxToRem(200)};
  }

  .nav-link {
    height: 100%;
  }

  .nav-logo {
    width: auto;
    height: 100%;
    padding: ${pxToRem(5)};
  }

  .nav-cart {
    color: inherit;
    text-decoration: none;
    position: relative;

    &:after {
      content: ${({ productsNum = 0 }) => (productsNum ? `'${productsNum}'` : 'none')};
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      right: -10px;
      border-radius: 10px;
      background-color: red;
      color: #fff;
      height: 15px;
      width: 15px;
      font-size: 10px;
      font-weight: bold;
    }
  }
`;

export { StyledNav };
