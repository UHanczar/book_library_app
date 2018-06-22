import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Filter from './Filter';

import { filterByDate, filterByRate } from '../../actions/filterActions';

// const mapStateToProps = ({ newItemValue }) => ({ value: newItemValue });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    filterByDate,
    filterByRate
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Filter);
