import React from 'react';
import { StyledProduct } from './product.style';
import { Flex, Box } from '@rebass/grid';
import { Button } from 'components';

const Product = ({ title, thumbnail, price, handler, direction = 'column', buttonText = 'add' }) => (
  <StyledProduct>
    <Flex alignItems="center" flexDirection={direction}>
      <Box p="3">
        <img src={thumbnail} alt={title} />
      </Box>
      <Box p="3">
        <Flex justifyContent="space-between" flexDirection="column">
          <Box mb={3}>
            {title}
          </Box>
          <Box width={[1]} mb={3}>
            <strong>${price.toFixed(2)}</strong>
          </Box>
          <Box width={[1]}>
            <Button onClickHandler={handler} text={buttonText} />
          </Box>
        </Flex>
      </Box>
    </Flex>
  </StyledProduct>
);

export default Product;
