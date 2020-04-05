import axios from 'axios';
import qs from 'qs';
import Auth from '../Auth';
import jumpTo from '../Navigation';
import paypalConfig from '../../configs/paypalConfig';

// const URL = 'https://zack-ecommerce-nodejs.herokuapp.com';
const URL = 'https://localhost:44326';

const serverCall = config => {
  // header authorization
  if (Auth.user_token) {
    console.log('TOKEN EXSISTS', Auth.user_token);
    const token = Auth.getToken();
    config.headers = {
      authorization: `Bearer ${token}`,
    };
  }
  console.log('Config', config);
  // interceptors handle network error
  axios.interceptors.response.use(
    response => {
      console.log('response', response);
      return response;
    },
    function(error) {
      if (!error.response) {
        error.response = {
          data: 'net work error',
          status: 500,
        };
      }
      if (error.response.status === 401) {
        Auth.logout();
        jumpTo('/login');
        throw error;
      }
      console.log('error reject', error);
      return Promise.reject(error);
    }
  );
  config.baseURL = URL;
  return axios(config);
};
export default serverCall;

export const login = (email, password) => {
  const body = {
    email,
    password,
  };
  return serverCall({
    method: 'POST',
    url: '/Account/Login',
    data: body,
  }).then(res => {
    Auth.setUserToken(res.data.user_token);
    return res;
  });
};

// export const logout = () => {
//   return serverCall({
//     method: 'GET',
//     url: '/Account/LogOut',
//   }).then(res => {
//     console.log('remove localstorage', res);
//     Auth.logout();
//   });
// };

export const getPaypalToken = () => {
  return axios({
    method: 'POST',
    url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    auth: {
      username: paypalConfig.username,
      password: paypalConfig.password,
    },
    data: qs.stringify({ grant_type: 'client_credentials' }),
  });
};
