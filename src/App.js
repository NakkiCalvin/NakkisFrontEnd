import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { registerNav } from './modules/Navigation';
import { insertToken } from './features/OtherPage/action/tokenAction';
import LoginContainer from './features/OtherPage/loginsignin/LoginContainer';
import SigninContainer from './features/OtherPage/loginsignin/SigninContainer';
import DashboardContainer from './features/OtherPage/dashboard/DashboardContainer';
import ProductOverview from './features/OtherPage/productOverview/ProductOverviewContainer';
import ShoppingBagContainer from './features/OtherPage/shoppingBag/ShoppingBagContainer';
import CheckoutContainer from './features/OtherPage/checkout/checkoutContainer';
import CheckoutSuccessContainer from './features/OtherPage/checkoutSuccess/CheckoutSuccessContainer';
import CheckoutCancel from './features/OtherPage/checkoutCancel/CheckoutCancel';

class App extends Component {
  componentDidMount() {
    this.props.insertToken();
  }

  render() {
    return (
      <div>
        <Router ref={registerNav}>
          <Switch>
            <Route path="/signin" component={SigninContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route
              key="productOverview"
              path="/product-overview"
              component={ProductOverview}
            />
            ,
            {this.props.token && [
              <Route
                key="ShoppingBagContainer"
                path="/bag"
                component={ShoppingBagContainer}
              />,
              <Route
                key="Checkout"
                path="/checkout"
                component={CheckoutContainer}
              />,
              <Route
                key="success"
                path="/success_page"
                component={CheckoutSuccessContainer}
              />,
              <Route
                key="cancel"
                path="/cancel_page"
                component={CheckoutCancel}
              />,
            ]}
            <Route
              key="dashboard"
              path="/dashboard"
              component={DashboardContainer}
            />
            ,
            <Route exact path="/" component={DashboardContainer} />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStoreToProps = state => ({
  token: state.token.user_token,
});
const mapDispatchToProps = {
  insertToken,
};
export default connect(mapStoreToProps, mapDispatchToProps)(App);
