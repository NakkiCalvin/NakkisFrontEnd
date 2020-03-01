import { put, takeLatest, all } from 'redux-saga/effects';
import * as type from '../../features/MainPage/actions/action-types/cart-actions';
import * as actions from '../../features/MainPage/actions/cartActions';

function* onFeatch(action) {
  try {
    console.log('saga starts', action);
    yield put(actions.removeItem(action.id));
    console.log('saga ends');
  } catch (error) {
    // yield put(type.REMOVE_ITEM);
  }
}

export default function* cartSaga() {
  yield all([takeLatest(type.ADD_TO_CART, onFeatch)]);
}
