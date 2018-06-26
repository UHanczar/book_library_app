import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BookCategoryList from './BookCategoryList';

// const mapStateToProps = ({ bookList }) => ({ bookList });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

export default connect(null, mapDispatchToProps)(BookCategoryList);
