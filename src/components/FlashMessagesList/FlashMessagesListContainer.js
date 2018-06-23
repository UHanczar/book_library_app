import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeMessage } from 'redux-flash';

import FlashMessagesList from './FlashMessagesList';

const mapStateToProps = state => ({
  flash: state.flash.messages
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeMessage
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessagesList);
