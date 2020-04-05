import {
  POST_SIGNIN_BEGIN,
  POST_SIGNIN_SUCCESS,
  POST_SIGNIN_FAIL,
} from '../../features/OtherPage/action/signinAction';
import {
  GET_LOGOUT_BEGIN,
  GET_LOGOUT_SUCCESS,
  GET_LOGOUT_FAIL,
} from '../../features/OtherPage/action/logoutAction';

const initialState = {
  signin_loading: false,
  logout_loading: false,
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNIN_BEGIN:
      return {
        ...state,
        signin_loading: true,
      };
    case POST_SIGNIN_SUCCESS:
      return {
        ...state,
        signin_loading: false,
      };
    case POST_SIGNIN_FAIL:
      return {
        ...state,
        signin_loading: false,
        error: action.payload.error.response.data,
      };

    case GET_LOGOUT_BEGIN:
      return {
        ...state,
        logout_loading: true,
      };
    case GET_LOGOUT_SUCCESS:
      return {
        ...state,
        logout_loading: false,
      };
    case GET_LOGOUT_FAIL:
      return {
        ...state,
        logout_loading: false,
        // error: action.payload.error.response.data,
      };
    default:
      return state;
  }
};
