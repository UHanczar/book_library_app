import { connect } from 'react-redux';

import Sidebar from './Sidebar';

const mapStateToProps = ({ bookCategories }) => ({ bookCategories });

export default connect(mapStateToProps)(Sidebar);
