import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { searchProducts, addToCart } from 'store/products/actions';
import { LIMIT } from 'services';
import { Search, Container, Product, List } from 'components';
import { Flex, Box } from '@rebass/grid';

const Home = ({ searchProducts, addToCart, products, loading, paging, searchString }) => {
  const { total, offset } = paging;
  const hasNext = total => Math.ceil(total / LIMIT) > Math.ceil(offset / LIMIT + 1);
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      searchProducts(searchString, offset);
    }
  }, [offset]);

  return (
    <Container>
      <Box mb={3}>
        <Search loading={loading} value={searchString} handler={e => searchProducts(e.target.value)} />
      </Box>
      <List
        hasNext={hasNext(total)}
        hasPrev={!(offset === 0)}
        next={() => searchProducts(searchString, offset + LIMIT)}
        prev={() => searchProducts(searchString, offset - LIMIT)}
        count={products.length}
      >
        <Flex flexWrap="wrap">
          {products.map(product => (
            <Box key={product.id} width={[1, 1 / 2, 1 / 3]} pr={[0, 3]} pb={[3]}>
              <Product {...product} handler={() => addToCart(product)} />
            </Box>
          ))}
        </Flex>
      </List>
    </Container>
  );
};

const mapDispatchToProps = {
  searchProducts,
  addToCart
};

const mapStateToProps = ({ productsState }) => ({
  products: productsState.products,
  loading: productsState.loading,
  paging: productsState.paging,
  searchString: productsState.searchString
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);