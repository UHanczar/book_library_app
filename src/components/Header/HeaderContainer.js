import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/userActions';
import Header from './Header';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUser
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
