import serverCall from '../../../modules/serverCall';
import jumpTo, { go } from '../../../modules/Navigation';
import Auth from '../../../modules/Auth';

export const logoutUser = () => dispatch => {
  dispatch({
    type: GET_LOGOUT_BEGIN,
  });

  return serverCall({
    method: 'GET',
    url: 'api/account/logout',
  })
    .then(res => {
      Auth.logout();
      dispatch({
        type: GET_LOGOUT_SUCCESS,
      });
      go('/dashboard');
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_LOGOUT_FAIL,
        payload: { error },
      });
      return error;
    });
};

export const GET_LOGOUT_BEGIN = 'GET_LOGOUT_BEGIN';
export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS';
export const GET_LOGOUT_FAIL = 'GET_LOGOUT_FAIL';
