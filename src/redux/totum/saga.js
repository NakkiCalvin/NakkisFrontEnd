import { put, takeLatest, all } from 'redux-saga/effects';
import { actions } from './index';

function* onGetThemes() {
  try {
    yield put(actions.showPopupSuccess());
  } catch (error) {
    yield put(actions.showPopupFailure(error));
  }
}

export default function* popUpSaga() {
  yield all([
    takeLatest(actions.showPopup, onGetThemes, actions.onCloseErrorPopUp),
  ]);
}
