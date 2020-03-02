import { connect } from 'react-redux';
import Signin from './Signin';
import { signin } from '../action/signinAction';

const mapDispatchToProps = {
  signin,
};
const mapStoreToProps = state => ({
  signin_loading: state.signin.signin_loading,
  signin_error: state.signin.error,
});

export default connect(mapStoreToProps, mapDispatchToProps)(Signin);
