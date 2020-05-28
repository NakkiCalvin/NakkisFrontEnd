import {
  GET_ALL_ORDERS_BEGIN,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAIL,
  GET_AVALE_BEGIN,
  GET_AVALE_SUCCESS,
  GET_AVALE_FAIL,
  SEND_AVALE_BEGIN,
  SEND_AVALE_SUCCESS,
  SEND_AVALE_FAIL,
  GET_ORDERS_BEGIN,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL
} from '../../features/OtherPage/action/orderAction';

const initialState = {
  orders: null,
  userOrders: null,
  avale: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload.data,
      };
    case GET_ALL_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data,
      };

      case GET_ORDERS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_ORDERS_SUCCESS:
        return {
          ...state,
          loading: false,
          userOrders: action.payload.data,
        };
      case GET_ORDERS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload.error.response.data,
        };
    
    case GET_AVALE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_AVALE_SUCCESS:
      return {
        ...state,
        loading: false,
        avale: action.payload.data,
      };
    case GET_AVALE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data,
      };
    case SEND_AVALE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEND_AVALE_SUCCESS:
      return {
        ...state,
        loading: false,
        avale: action.payload.data,
      };
    case SEND_AVALE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data,
      };
    default:
      return state;
  }
};
