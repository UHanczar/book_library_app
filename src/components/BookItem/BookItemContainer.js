import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BookItem from './BookItem';
import {
  getBookItem,
  removeBookItem,
  rateItem
} from '../../actions/bookItemActions';

const mapStateToProps = ({ bookItem, user }) => ({ bookItem, user });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBookItem,
    removeBookItem,
    rateItem
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
