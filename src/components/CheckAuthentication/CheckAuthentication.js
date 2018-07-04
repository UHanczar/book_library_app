import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const CheckAuthentication = (ComposedComponent) => {
  class Authentication extends Component {
    componentDidMount() {
      if (this.props.authenticated) {
        this.props.history.replace('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.replace('/');
      }
    }

    render() {
      return (<ComposedComponent {...this.props} />);
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.user.authenticated };
  }

  return withRouter(connect(mapStateToProps)(Authentication));
};

export default CheckAuthentication;
