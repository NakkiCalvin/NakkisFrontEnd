class Auth {
  constructor() {
    this.user_token = JSON.parse(localStorage.getItem('auth')) || {};
    this.orderId = JSON.parse(localStorage.getItem('orderId')) || {};
  }

  getToken() {
    return this.user_token.token;
  }

  getUserId() {
    return this.user_token.user_id;
  }

  setUserToken(new_token) {
    this.user_token = new_token;
    localStorage.setItem('auth', JSON.stringify(new_token));
  }

  setOrderId(orderId) {
    this.orderId = orderId;
    localStorage.setItem('orderId', JSON.stringify(orderId));
  }

  getOrderId() {
    return this.orderId;
  }

  logout() {
    localStorage.removeItem('auth');
  }
}
export default new Auth();
