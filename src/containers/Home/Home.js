import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { searchProducts, addToCart } from 'store/products/actions';
import { LIMIT } from 'services';
import { Search, Container, Product, List, Loading, Loader } from 'components';
import { Flex, Box } from '@rebass/grid';
import { Element } from 'react-scroll';

const Home = ({ searchProducts, addToCart, products, paging, searchString }) => {
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
        <Element name="search">
          <Search
            placeHolder="Search products"
            value={searchString}
            handler={e => searchProducts(e.target.value)}
          />
        </Element>
      </Box>
      <Loading>
        {({ loading }) => {
          if (loading) {
            return <Loader />;
          }
          return (
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
          );
        }}
      </Loading>
    </Container>
  );
};

const mapDispatchToProps = {
  searchProducts,
  addToCart
};

const mapStateToProps = ({ productsState }) => ({
  products: productsState.products,
  paging: productsState.paging,
  searchString: productsState.searchString
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
