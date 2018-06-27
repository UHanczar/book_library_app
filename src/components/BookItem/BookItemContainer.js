import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BookItem from './BookItem';
import { getBookItem, removeBookItem } from '../../actions/bookItemActions';

const mapStateToProps = ({ bookItem }) => ({ bookItem });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBookItem,
    removeBookItem
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
