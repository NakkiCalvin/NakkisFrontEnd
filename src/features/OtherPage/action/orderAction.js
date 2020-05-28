import serverCall from '../../../modules/serverCall';

export const getAllOrders = () => dispatch => {
  dispatch({
    type: GET_ALL_ORDERS_BEGIN,
  });
  return serverCall({
    method: 'GET',
    url: 'api/orders',
  })
    .then(res => {
      dispatch({
        type: GET_ALL_ORDERS_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_ALL_ORDERS_FAIL,
        payload: { error },
      });
      return error;
    });
};

export const getOrdersByUserId = (userId) => dispatch => {
  dispatch({
    type: GET_ORDERS_BEGIN,
  });
  return serverCall({
    method: 'GET',
    url: `api/account/${userId}/orders`,
  })
    .then(res => {
      dispatch({
        type: GET_ORDERS_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_ORDERS_FAIL,
        payload: { error },
      });
      return error;
    });
};

export const getAvales = () => dispatch => {
  dispatch({
    type: GET_AVALE_BEGIN,
  });
  return serverCall({
    method: 'GET',
    url: 'api/orders/avale',
  })
    .then(res => {
      dispatch({
        type: GET_AVALE_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_AVALE_FAIL,
        payload: { error },
      });
      return error;
    });
};

export const sendAvale = body => dispatch => {
  dispatch({
    type: SEND_AVALE_BEGIN,
  });
  return serverCall({
    method: 'POST',
    url: 'api/orders/sendAvale',
    data: body,
  })
    .then(res => {
      dispatch({
        type: SEND_AVALE_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: SEND_AVALE_FAIL,
        payload: { error },
      });
      return error;
    });
};

export const GET_ORDERS_BEGIN = 'GET_ORDERS_BEGIN';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAIL = 'GET_ORDERS_FAIL';

export const GET_ALL_ORDERS_BEGIN = 'GET_ALL_ORDERS_BEGIN';
export const GET_ALL_ORDERS_SUCCESS = 'GET_ALL_ORDERS_SUCCESS';
export const GET_ALL_ORDERS_FAIL = 'GET_ALL_ORDERS_FAIL';

export const GET_AVALE_BEGIN = 'GET_AVALE_BEGIN';
export const GET_AVALE_SUCCESS = 'GET_AVALE_SUCCESS';
export const GET_AVALE_FAIL = 'GET_AVALE_FAIL';

export const SEND_AVALE_BEGIN = 'SEND_AVALE_BEGIN';
export const SEND_AVALE_SUCCESS = 'SEND_AVALE_SUCCESS';
export const SEND_AVALE_FAIL = 'SEND_AVALE_FAIL';
