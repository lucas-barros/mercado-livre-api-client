import React from 'react';
import { GlobalStyle } from 'styles';
import { Footer, Nav, Container } from 'components';
import { StyledContent } from './layout.style';

const Layout = props => (
  <React.Fragment>
    <GlobalStyle />
    <Nav />
    <StyledContent>
      <Container> {props.children}</Container>
    </StyledContent>
    <Footer />
  </React.Fragment>
);

export default Layout;
