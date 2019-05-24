import styled from 'styled-components';
import { pxToRem, variables } from 'styles';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(variables.footerHeight)};
  background-color: ${variables.blue};
  font-size: ${pxToRem(18)};
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export { StyledFooter };
