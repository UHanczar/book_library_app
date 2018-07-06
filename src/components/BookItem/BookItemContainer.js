import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BookItem from './BookItem';
import {
  getBookItem,
  removeBookItem,
  rateItem,
  assignItem,
  unassignItem
} from '../../actions/bookItemActions';
import {
  updateBookListRateData
} from '../../actions/bookListActions';

const mapStateToProps = ({ bookItem, user }) => ({ bookItem, user });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBookItem,
    removeBookItem,
    rateItem,
    assignItem,
    unassignItem,
    updateBookListRateData
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
