import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';

import { filterByDate, filterByRate } from '../../actions/filterActions';

// const mapStateToProps = ({ bookList }) => ({ bookList });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    filterByDate,
    filterByRate
  }, dispatch);
};

export default withRouter(connect(null, mapDispatchToProps)(Main));
