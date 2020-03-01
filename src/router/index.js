import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from 'components/Navbar';
import Home from '../features/MainPage/Home/Home';
import Cart from '../features/MainPage/Cart/Cart';

export const history = createBrowserHistory();

const Routing = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Routing;
