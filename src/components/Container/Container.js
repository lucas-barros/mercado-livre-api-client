import styled from 'styled-components';
import { Box } from '@rebass/grid';
import { pxToRem } from 'styles';

const Container = styled(Box)`
  max-width: 1024px;
  width: 100%;
  padding: 0 ${pxToRem(15)};
`;
Container.defaultProps = {
  mx: 'auto'
};

export default Container;
