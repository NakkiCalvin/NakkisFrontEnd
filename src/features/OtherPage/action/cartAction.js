import serverCall from '../../../modules/serverCall';
import Auth from '../../../modules/Auth';

export const POST_CART_BEGIN = 'POST_CART_BEGIN';
export const POST_CART_SUCCESS = 'POST_CART_SUCCESS';
export const POST_CART_FAIL = 'POST_CART_FAIL';

export const GET_CART_BY_USERID_BEGIN = 'GET_CART_BY_USERID_BEGIN';
export const GET_CART_BY_USERID_SUCCESS = 'GET_CART_BY_USERID_SUCCESS';
export const GET_CART_BY_USERID_FAIL = 'GET_CART_BY_USERID_FAIL';

export const getCartByUserId = () => dispatch => {
  const userId = Auth.getUserId();
  dispatch({
    type: GET_CART_BY_USERID_BEGIN,
  });
  return serverCall({
    method: 'GET',
    url: `api/account/${userId}/cart`,
  })
    .then(res => {
      console.log('users/userId/cart', res);
      dispatch({
        type: GET_CART_BY_USERID_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_CART_BY_USERID_FAIL,
        payload: { error },
      });
      return error;
    });
};

export const postCart = (productId, size, increase, decrease) => dispatch => {
  const userId = Auth.getUserId();
  dispatch({
    type: POST_CART_BEGIN,
  });
  return serverCall({
    method: 'POST',
    url: `api/account/${userId}/cart`,
    data: {
      userId,
      size,
      productId,
      increase,
      decrease,
    },
  })
    .then(res => {
      dispatch({
        type: POST_CART_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: POST_CART_FAIL,
        payload: { error },
      });
      return error;
    });
};
