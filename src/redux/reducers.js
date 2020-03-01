import { combineReducers } from 'redux';
// import freezeReducer from './freeze';
import cartReducer from './cart/cartReducer';
import token from './auth/tokenReducer';
import signin from './auth/signinReducer';
import department from './auth/departmentReducer';
import product from './auth/productReducer';
import variant from './auth/variantsReducer';
import cart from './auth/cartReducer';
import checkout from './auth/checkoutReducer';
import filter from './auth/filterReducer';

export default combineReducers({
  cartReducer,
  token,
  signin,
  department,
  product,
  variant,
  cart,
  checkout,
  filter,
});
