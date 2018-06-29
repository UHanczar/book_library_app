import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';

import { filterByDate, filterByRate } from '../../actions/filterActions';
import { fetchBookList } from '../../actions/bookListActions';

const mapStateToProps = ({
  bookCategories,
  bookList,
  bookListFilter
}) => ({
  bookCategories,
  bookList,
  bookListFilter
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    filterByDate,
    filterByRate,
    fetchBookList
  }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
