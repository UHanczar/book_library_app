import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';

import { filterByDate, filterByRate } from '../../actions/filterActions';
import { fetchBookList } from '../../actions/bookListActions';

const mapStateToProps = ({
  bookCategories,
  bookList
}) => ({
  bookCategories,
  bookList
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    filterByDate,
    filterByRate,
    fetchBookList
  }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
