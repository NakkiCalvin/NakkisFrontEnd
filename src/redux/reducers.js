import { combineReducers } from 'redux';
// import freezeReducer from './freeze';
import cartReducer from './cart/cartReducer';

export default combineReducers({ cartReducer });
