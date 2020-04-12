import { connect } from 'react-redux';
import CheckoutSuccess from './CheckoutSuccess';
import { getPayment } from '../action/checkoutAction';

const mapStoreToProps = state => ({
  payment: state.checkout.payment,
});
const mapDispatchToProps = dispatch => ({
  getPayment: orderId => dispatch(getPayment(orderId)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(CheckoutSuccess);
