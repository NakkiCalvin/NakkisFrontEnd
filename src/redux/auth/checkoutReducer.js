import {
  GET_CHECKOUT_BEGIN,
  GET_CHECKOUT_SUCCESS,
  GET_CHECKOUT_FAIL,
  GET_PAYMENT_BEGIN,
  GET_PAYMENT_SUCCESS,
  GET_PAYMENT_FAIL,
} from '../../features/OtherPage/action/checkoutAction';

const initialState = {
  loading: false,
  approval_url: null,
  orderId: null,
  payment: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHECKOUT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CHECKOUT_SUCCESS:
      return {
        loading: false,
        approval_url: action.payload.data.approval_url,
        orderId: action.payload.data.orderId,
      };
    case GET_CHECKOUT_FAIL:
      return {
        loading: false,
        error: action.payload.error.response.data,
      };
    case GET_PAYMENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PAYMENT_SUCCESS:
      return {
        loading: false,
        payment: action.payload.data.payment,
      };
    case GET_PAYMENT_FAIL:
      return {
        loading: false,
        error: action.payload.error.response.data,
      };
    default:
      return state;
  }
};
