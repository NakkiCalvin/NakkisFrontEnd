import { all, fork } from 'redux-saga/effects';
// import freezeSaga from './freeze/saga';
import cartSaga from './cart/saga';

export default function* root() {
  yield all([fork(cartSaga)]);
}
