import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBookCategories } from '../../actions/bookCategoriesActions';

import Sidebar from './Sidebar';

const mapStateToProps = ({ bookCategories }) => ({ bookCategories });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBookCategories
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
