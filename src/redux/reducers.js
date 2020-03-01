import { combineReducers } from 'redux';
import freezeReducer from './freeze';
import cartReducer from '../components/reducers/cartReducer';

export default combineReducers({ freezeReducer, cartReducer });
