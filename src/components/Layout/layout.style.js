import styled from 'styled-components';
import { pxToRem, variables } from 'styles';

const navFooterHeight = variables.footerHeight + variables.navHeight;

const StyledContent = styled.div`
  margin-top: ${pxToRem(variables.navHeight)};
  padding-top: ${pxToRem(30)}; 
  padding-bottom: ${pxToRem(100)}; 
  min-height: calc(100vh - ${pxToRem(navFooterHeight)});
  display: flex;
  align-items: center;
`;

export { StyledContent };
