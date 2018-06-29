import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Login from './Login';

import { loginUser, logoutUser } from '../../actions/authActions';

const mapStateToProps = ({ bookList }) => ({ bookList });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser,
    logoutUser
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
