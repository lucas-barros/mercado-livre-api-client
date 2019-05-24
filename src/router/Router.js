import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Layout } from 'components';
import { Home, Cart } from 'containers';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Layout><Home/></Layout>}/>
      <Route exact path="/cart" render={() => <Layout><Cart/></Layout>}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
