import { put, takeLatest, all, call } from 'redux-saga/effects';
// import { history } from 'router';
import { actions } from './index';
import { host } from '../../config';

function* fetchCostumerInfo(action) {
  try {
    const response = yield call(
      fetch,
      `${host}/CancelAndFreeze/GetVerificationCode`,
      {
        body: JSON.stringify(action.payload),
        crossDomain: true,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Subscription-Key': 'fcb59604de7e431a93b58b130edbfb63',
        },
      }
    );
    const data = yield response.json();
    yield put(actions.sendCostumerInfo(data));
    // history.push('/verifyaccount');
    window.scroll(0, 0);
    return;
  } catch (e) {
    yield put(actions.sendCostumerError());
    console.log('error ', e);
  }
}

function* fetchVerifyCode(action) {
  try {
    const response = yield call(
      fetch,
      `${host}/CancelAndFreeze/GetAccounts?verificationCode=${
        action.payload
      }&serviceName=membership_portal`,
      {
        crossDomain: true,
        method: 'GET',
        headers: {
          'Subscription-Key': 'fcb59604de7e431a93b58b130edbfb63',
        },
      }
    );
    const data = yield response.json();
    yield put(actions.getAccounts(data));
    if (data.length > 1) {
      window.sessionStorage.setItem('AccountArray', JSON.stringify(data));
      // history.push('/accounts');
      window.scroll(0, 0);
    } else {
      yield put(actions.thirdStep(data[0]));
      window.sessionStorage.setItem('Account', JSON.stringify(data[0]));
      // history.push('/summary');
      window.scroll(0, 0);
    }
    return;
  } catch (e) {
    yield put(actions.sendCostumerError());
  }
}

function* fetchCancel(action) {
  try {
    const response = yield call(
      fetch,
      `${host}/CancelAndFreeze/UpdateMembership`,
      {
        body: JSON.stringify(action.payload),
        crossDomain: true,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Subscription-Key': 'fcb59604de7e431a93b58b130edbfb63',
        },
      }
    );
    const data = yield response.json();
    yield put(actions.sendUpdatedFields(data));
    sessionStorage.setItem('CalculatedResponse', JSON.stringify(data));
    sessionStorage.setItem('paymentMethods', JSON.stringify(data.paymentMethods));
    window.scroll(0, 0);
    // history.push('/cancel');
  } catch (e) {
    console.log('error ', e);
  }
}

function* fetchPayForCancel(action) {
  try {
    const response = yield call(
      fetch,
      `${host}/CancelAndFreeze/UpdateMembership`,
      {
        body: JSON.stringify(action.payload),
        crossDomain: true,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Subscription-Key': 'fcb59604de7e431a93b58b130edbfb63',
        },
      }
    );
    const data = yield response.json();
    yield put(actions.sendUpdatedFields(data));
    sessionStorage.setItem('CalculatedResponse', JSON.stringify(data));
    sessionStorage.setItem('paymentMethods', JSON.stringify(data.paymentMethods));
    window.scroll(0, 0);
    // history.push('/payment');
  } catch (e) {
    console.log('error ', e);
  }
}


function* fetchUnfreeze(action) {
  try {
    const response = yield call(
      fetch,
      `${host}/CancelAndFreeze/UpdateMembership`,
      {
        body: JSON.stringify(action.payload),
        crossDomain: true,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Subscription-Key': 'fcb59604de7e431a93b58b130edbfb63',
        },
      }
    );

    // history.push('/final');
  } catch (e) {
    console.log('error ', e);
  }
}

function* fetchFreeze(action) {
  try {
    const response = yield call(
      fetch,
      `${host}/CancelAndFreeze/UpdateMembership`,
      {
        body: JSON.stringify(action.payload),
        crossDomain: true,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Subscription-Key': 'fcb59604de7e431a93b58b130edbfb63',
        },
      }
    );
    const data = yield response.json();
    yield put(actions.sendUpdatedFields(data));
    sessionStorage.setItem('CalculatedResponse', JSON.stringify(data));
    sessionStorage.setItem('paymentMethods', JSON.stringify(data.paymentMethods));
    // history.push('/payment');
  } catch (e) {
    console.log('error ', e);
  }
}

function* fetchFreezeToCalculate(action) {
  try {
    const response = yield call(
      fetch,
      `${host}/CancelAndFreeze/UpdateMembership`,
      {
        body: JSON.stringify(action.payload),
        crossDomain: true,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Subscription-Key': 'fcb59604de7e431a93b58b130edbfb63',
        },
      }
    );
    const data = yield response.json();
    yield put(actions.sendUpdatedFields(data));
    sessionStorage.setItem('CalculatedResponse', JSON.stringify(data));
    sessionStorage.setItem('paymentMethods', JSON.stringify(data.paymentMethods));
    window.scroll(0, 0);
    // history.push('/options');
  } catch (e) {
    console.log('error ', e);
  }
}


function* fetchCardDetails() {
  try {
    const response = yield call(
      fetch,
      `${host}/CancelAndFreeze/AdyenMethods`,
      {
        crossDomain: true,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = yield response.json();
    yield put(actions.adyenMethodsSuccess(data));
    window.scroll(0, 0);
    // history.push('/updatecard');
  } catch (error) {
    yield put(actions.adyenMethodsFailure(error));
  }
}


function* fetchUpdateCardDetails(action) {
    const response = yield call(
      fetch,
      `${host}/CancelAndFreeze/UpdateCardDetails`,
      {
        crossDomain: true,
        method: 'POST',
        body: JSON.stringify(action.payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('before json', response);
    let data;
    if (response.status === 400 || response.status === 500) {
      data = yield response.text();
      yield put(actions.updateCardDetailsFailure(data));
    }
    else{
      data = yield response.json();
      yield put(actions.updateCardDetailsSuccess(data));
      // history.push('/cardupdatefinish');
    }
}


export default function* freezeSaga() {
  yield all([
    takeLatest(
      actions.helpPage,
      actions.thirdStep,
      actions.fourthStep,
      actions.warningView,
      actions.freezeAccount,
      actions.fifthStep,
      actions.sixStep,
      actions.finished,
      actions.sendCostumerInfo,
      actions.sendUpdatedFields,
      actions.getNextPaymentDate,
      actions.freezeToCalculate,
      actions.payCancelMembership,
      actions.adyenMethodsSuccess,
      actions.adyenMethodsFailure,
      actions.updateCardDetailsSuccess,
      actions.updateCardDetailsFailure,
    ),
    takeLatest(actions.firstStep, fetchCostumerInfo),
    takeLatest(actions.secondStep, fetchVerifyCode),
    takeLatest(actions.cancelMembership, fetchCancel),
    takeLatest(actions.freezeMembership, fetchFreeze),
    takeLatest(actions.unfreezeMembership, fetchUnfreeze),
    takeLatest(actions.freezeToCalculate, fetchFreezeToCalculate),
    takeLatest(actions.payCancelMembership, fetchPayForCancel),
    takeLatest(actions.cardDetails, fetchCardDetails),
    takeLatest(actions.updateCardDetails, fetchUpdateCardDetails),
  ]);
}
