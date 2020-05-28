import { connect } from 'react-redux';
import OrdersHistory from './OrdersHistory';
import { getOrdersByUserId } from '../action/orderAction';
import Auth from '../../../modules/Auth/index';

const mapStoreToProps = state => ({
  userOrders: state.order.userOrders,
});
const mapDispatchToProps = dispatch => ({
  getOrdersByUserId: dispatch(getOrdersByUserId(Auth.getUserId())),
});

export default connect(mapStoreToProps, mapDispatchToProps)(OrdersHistory);
