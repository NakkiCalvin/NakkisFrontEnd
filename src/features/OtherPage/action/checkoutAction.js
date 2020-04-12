import serverCall, { getPaypalToken } from '../../../modules/serverCall';
import Auth from '../../../modules/Auth';

export const getCheckoutUrl = cartId => dispatch => {
  dispatch({
    type: GET_CHECKOUT_BEGIN,
  });
  return serverCall({
    method: 'GET',
    url: `api/products/checkout/${cartId}`,
  })
    .then(res => {
      dispatch({
        type: GET_CHECKOUT_SUCCESS,
        payload: res,
      });
      Auth.setOrderId(res.data.orderId);
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_CHECKOUT_FAIL,
        payload: { error },
      });
      return error;
    });
};

export const getPayment = orderId => dispatch => {
  dispatch({
    type: GET_PAYMENT_BEGIN,
  });
  return getPaypalToken()
    .then(response => {
      return serverCall({
        method: 'GET',
        url: `api/products/payment/success?orderId=${orderId}`,
        headers: { Authorization: `Bearer ${response.data.access_token}` },
      })
        .then(res => {
          dispatch({
            type: GET_PAYMENT_SUCCESS,
            payload: res,
          });
          return res;
        })
        .catch(error => {
          dispatch({
            type: GET_PAYMENT_FAIL,
            payload: { error },
          });
          return error;
        });
    })
    .catch(error => {
      dispatch({
        type: GET_PAYMENT_FAIL,
        payload: { error },
      });
      return error;
    });
};

export const GET_PAYMENT_BEGIN = 'GET_PAYMENT_BEGIN';
export const GET_PAYMENT_SUCCESS = 'GET_PAYMENT_SUCCESS';
export const GET_PAYMENT_FAIL = 'GET_PAYMENT_FAIL';

export const GET_CHECKOUT_BEGIN = 'GET_CHECKOUT_BEGIN';
export const GET_CHECKOUT_SUCCESS = 'GET_CHECKOUT_SUCCESS';
export const GET_CHECKOUT_FAIL = 'GET_CHECKOUT_FAIL';
