import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Footer from '../Components/Footer';

const routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default routes;
