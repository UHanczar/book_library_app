import { connect } from 'react-redux';

import FlashMessagesList from './FlashMessagesList';

const mapStateToProps = state => ({
  flash: state.flash.messages
});

export default connect(mapStateToProps)(FlashMessagesList);
