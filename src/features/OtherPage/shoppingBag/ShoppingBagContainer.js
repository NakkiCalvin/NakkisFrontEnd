import { connect } from 'react-redux';
import ShoppingBag from './ShoppingBag';
import { getCartByUserId, postCart } from '../action/cartAction';

const mapStoreToProps = state => ({
  cart: state.cart.cart,
});
const mapDispatchToProps = dispatch => ({
  getCartByUserId: dispatch(getCartByUserId()),
  postCart: (pid, size, variantId, increase, decrease) =>
    dispatch(postCart(pid, size, variantId, increase, decrease)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(ShoppingBag);
