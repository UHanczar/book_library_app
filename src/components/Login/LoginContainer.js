import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from './Login';

import { loginUser, logoutUser } from '../../actions/userActions';

const mapStateToProps = state => ({
  bookList: state.bookList,
  user: state.user,
  login: state.form.login
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser,
    logoutUser
  }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
