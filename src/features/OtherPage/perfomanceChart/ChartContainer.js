import { connect } from 'react-redux';
import Chart from './Chart';
import { getAllOrders, getAvales, sendAvale } from '../action/orderAction';

const mapStoreToProps = state => ({
  orders: state.order.orders,
  avale: state.order.avale,
});
const mapDispatchToProps = dispatch => ({
  getAllOrders: dispatch(getAllOrders()),
  getAvales: dispatch(getAvales()),
  sendAvale: data => dispatch(sendAvale(data)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Chart);
