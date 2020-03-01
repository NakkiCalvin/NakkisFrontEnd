import { all, fork } from 'redux-saga/effects';
import freezeSaga from './freeze/saga';

export default function* root() {
  yield all([fork(freezeSaga)]);
}
