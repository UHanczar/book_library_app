import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';

import { fetchBookCategories } from '../../actions/bookCategoriesActions';
import { fetchBookList } from '../../actions/bookListActions';
import { filterByDate, filterByRate } from '../../actions/filterActions';

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
    fetchBookCategories,
    fetchBookList
  }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
